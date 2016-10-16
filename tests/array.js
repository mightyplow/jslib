'use strict'

module.exports = {
    toArray: test => {
        const toArray = require('../lib/array').toArray

        test.ok(typeof toArray === 'function', 'toArray should be a function')
        test.ok(Array.isArray(toArray()), 'should return an array')
        test.ok(!Array.isArray(arguments), 'arguments should not be an array')
        test.ok(Array.isArray(toArray(arguments)), 'arguments should not be an array')

        test.done()
    }
}