const fs = require('fs')

module.exports = {
    readFile: filename => {
        return new Promise((resolve, reject) => {
            fs.readFile(filename, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    },

    writeFile: (filename, data) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(filename, data, err => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }
}