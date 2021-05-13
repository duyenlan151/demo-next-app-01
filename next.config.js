const { i18n } = require('./i18n.config');
const path = require('path')

module.exports = {
    i18n,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}