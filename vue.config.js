module.exports = {
  productionSourceMap: false,
  outputDir: "dist",
  assetsDir: "static",
  devServer: {
    port:8080,
    proxy: {
      '/radar': {
        target: 'http://za-castle-radar.test.za.biz',
        changeOrigin: true,
        secure: false
      }
    }
  },
};
