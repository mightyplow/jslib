module.exports = {
    createLinkTag: (filename, selector) => {
        if (selector) {
            return `<link rel="stylesheet" type="text/css" href="${filename}" media="${selector}" />`
        }

        return `<link rel="stylesheet" type="text/css" href="${filename}" />`
    }
}