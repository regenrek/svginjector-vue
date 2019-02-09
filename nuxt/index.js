const { resolve } = require('path')

// Main module entry point
module.exports = function nuxtSGVInjectorVue(moduleOptions = {}) {
    // Merge moduleOptions with default
    const options = Object.assign({}, moduleOptions)

    // Register plugin, pasing options to plugin template
    this.addPlugin({
        src: resolve(__dirname, 'plugin.template.js'),
        ssr: false,
        options
    })
}

module.exports.meta = require('../package.json')