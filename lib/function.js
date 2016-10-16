'use strict'

const toArray = require('./array').toArray

const argsToArray = fn => {
    return function () {
        return fn(toArray(arguments))
    }
}

module.exports = {
    argsAsArray: argsToArray,
    combine: argsToArray(fns => fns.reverse().reduce((fnc, fn) => val => fnc(fn(val))))
}