module.exports = {
    createLinkTag: (filename, selector) => `<link rel="stylesheet" type="text/css" href="${filename}" media="${selector}" />`
}