'use strict'

module.exports = {
    combine: test => {
        const combine = require('../lib/function').combine

        test.ok(typeof combine === 'function', 'combine should be a function')

        const a = val => val * 10
        const b = val => val * 10

        const fn = combine(a, b)
        test.ok(fn(3) === 300, 'combine should return of all applied functions')

        test.done();
    }
}