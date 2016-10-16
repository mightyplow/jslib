'use strict'

const fs = require('fs')

module.exports = {
    combine: fns => fns.reverse().reduce((fnc, fn) => val => fnc(fn(val)))
}