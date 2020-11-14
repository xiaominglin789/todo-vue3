const isProductionEnv = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: './',
  productionSourceMap: isProductionEnv ? false : true,
  devServer: {
    proxy: {
      '': {
        target: '',
        changeOrigin: true,
        ws: true,
        pathRewrite: {},
      },
    },
  },
}
