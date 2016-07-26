'use strict'

module.exports = {
    prop: prop => obj => obj[prop],

    defaults: (obj, values) => {
        Object.keys(values).forEach(key => {
            if (!obj.hasOwnProperty(key)) {
                obj[key] = values[key]
            }
        })
    }
}