const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/couple-diary-client',
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/v1': {
        target: 'http://3.35.212.237:3000',

        changeOrigin:true
      }
    }
  }
})