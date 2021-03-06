// const mock = require('./src/mock/index.js');

const url = 'http://localhost:3000'

const apis = ['api', 'upload'],
    proxy = {}
apis.map(api => {
    proxy[`/${api}`] = {
        target: `${url}/${api}`,
        changeOrigin: true,
        pathRewrite: {}
    }
    proxy[`/${api}`].pathRewrite[`^/${api}`] = ''
})

const CONF = {
    devServer: {
        proxy,
    },
    lintOnSave: false,
    css: {
        sourceMap: true
    }
}

module.exports = CONF
