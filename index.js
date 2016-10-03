var nativeConsole = global.console;
var isEnabled = true;
var historyStorage = [];
var toArray = [].slice.call.bind([].slice);

function create() {
    if (typeof nativeConsole !== 'object') {
        nativeConsole = {};
    }
    return {
        log:            callNative(nativeConsole.log, 'log'),
        info:           callNative(nativeConsole.info, 'info'),
        warn:           callNative(nativeConsole.warn, 'warn'),
        error:          callNative(nativeConsole.error, 'error'),
        time:           callNative(nativeConsole.time, 'time'),
        timeEnd:        callNative(nativeConsole.timeEnd, 'timeEnd'),
        table:          callNative(nativeConsole.table, 'table'),
        trace:          callNative(nativeConsole.trace, 'trace'),
        group:          callNative(nativeConsole.group, 'group'),
        groupEnd:       callNative(nativeConsole.groupEnd, 'groupEnd'),
        groupCollapsed: callNative(nativeConsole.groupCollapsed, 'groupCollapsed')
    };
}

function callNative(fn, name) {
    return function () {
        if (typeof fn === 'function') {
            if (isEnabled) {
                fn.apply(root.console, arguments);
            }
            historyStorage.push({
                method: name,
                arguments: toArray(arguments)
            });
        }
    };
}

function getSetEnabled(value) {
    if (value === undefined) {
        return isEnabled;
    } else {
        isEnabled = value;
        return this;
    }
}

function history() {
    return historyStorage;
}

function historyClear() {
    historyStorage = [];
    return this;
}

module.exports = {
    _setNativeConsole: function (value) { nativeConsole = value },

    create: create,
    enabled: getSetEnabled,
    history: history,
    historyClear: historyClear
};
