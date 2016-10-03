(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.consoleMock = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBuYXRpdmVDb25zb2xlID0gZ2xvYmFsLmNvbnNvbGU7XG52YXIgaXNFbmFibGVkID0gdHJ1ZTtcbnZhciBoaXN0b3J5U3RvcmFnZSA9IFtdO1xudmFyIHRvQXJyYXkgPSBbXS5zbGljZS5jYWxsLmJpbmQoW10uc2xpY2UpO1xuXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgaWYgKHR5cGVvZiBuYXRpdmVDb25zb2xlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBuYXRpdmVDb25zb2xlID0ge307XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGxvZzogICAgICAgICAgICBjYWxsTmF0aXZlKG5hdGl2ZUNvbnNvbGUubG9nLCAnbG9nJyksXG4gICAgICAgIGluZm86ICAgICAgICAgICBjYWxsTmF0aXZlKG5hdGl2ZUNvbnNvbGUuaW5mbywgJ2luZm8nKSxcbiAgICAgICAgd2FybjogICAgICAgICAgIGNhbGxOYXRpdmUobmF0aXZlQ29uc29sZS53YXJuLCAnd2FybicpLFxuICAgICAgICBlcnJvcjogICAgICAgICAgY2FsbE5hdGl2ZShuYXRpdmVDb25zb2xlLmVycm9yLCAnZXJyb3InKSxcbiAgICAgICAgdGltZTogICAgICAgICAgIGNhbGxOYXRpdmUobmF0aXZlQ29uc29sZS50aW1lLCAndGltZScpLFxuICAgICAgICB0aW1lRW5kOiAgICAgICAgY2FsbE5hdGl2ZShuYXRpdmVDb25zb2xlLnRpbWVFbmQsICd0aW1lRW5kJyksXG4gICAgICAgIHRhYmxlOiAgICAgICAgICBjYWxsTmF0aXZlKG5hdGl2ZUNvbnNvbGUudGFibGUsICd0YWJsZScpLFxuICAgICAgICB0cmFjZTogICAgICAgICAgY2FsbE5hdGl2ZShuYXRpdmVDb25zb2xlLnRyYWNlLCAndHJhY2UnKSxcbiAgICAgICAgZ3JvdXA6ICAgICAgICAgIGNhbGxOYXRpdmUobmF0aXZlQ29uc29sZS5ncm91cCwgJ2dyb3VwJyksXG4gICAgICAgIGdyb3VwRW5kOiAgICAgICBjYWxsTmF0aXZlKG5hdGl2ZUNvbnNvbGUuZ3JvdXBFbmQsICdncm91cEVuZCcpLFxuICAgICAgICBncm91cENvbGxhcHNlZDogY2FsbE5hdGl2ZShuYXRpdmVDb25zb2xlLmdyb3VwQ29sbGFwc2VkLCAnZ3JvdXBDb2xsYXBzZWQnKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNhbGxOYXRpdmUoZm4sIG5hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoaXNFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgZm4uYXBwbHkocm9vdC5jb25zb2xlLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGlzdG9yeVN0b3JhZ2UucHVzaCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBuYW1lLFxuICAgICAgICAgICAgICAgIGFyZ3VtZW50czogdG9BcnJheShhcmd1bWVudHMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFNldEVuYWJsZWQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gaXNFbmFibGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlzRW5hYmxlZCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhpc3RvcnkoKSB7XG4gICAgcmV0dXJuIGhpc3RvcnlTdG9yYWdlO1xufVxuXG5mdW5jdGlvbiBoaXN0b3J5Q2xlYXIoKSB7XG4gICAgaGlzdG9yeVN0b3JhZ2UgPSBbXTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgX3NldE5hdGl2ZUNvbnNvbGU6IGZ1bmN0aW9uICh2YWx1ZSkgeyBuYXRpdmVDb25zb2xlID0gdmFsdWUgfSxcblxuICAgIGNyZWF0ZTogY3JlYXRlLFxuICAgIGVuYWJsZWQ6IGdldFNldEVuYWJsZWQsXG4gICAgaGlzdG9yeTogaGlzdG9yeSxcbiAgICBoaXN0b3J5Q2xlYXI6IGhpc3RvcnlDbGVhclxufTtcbiJdfQ==
