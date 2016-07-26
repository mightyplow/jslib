'use strict'

module.exports = {
    flatten: ar => ar.reduce((acc, item) => {
        if (Array.isArray(item)) {
            acc.push.apply(acc, flatten(item))
        } else {
            acc.push(item)
        }

        return acc
    }, [])
}