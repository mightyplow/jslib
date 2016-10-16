'use strict'

module.exports = {
    toArray: arraylike => Array.prototype.slice.call(arraylike || []),

    flatten: function flatten (ar) {
        return ar.reduce((acc, item) => {
            if (Array.isArray(item)) {
                acc.push.apply(acc, flatten(item))
            } else {
                acc.push(item)
            }

            return acc
        }, [])
    }
}