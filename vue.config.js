module.exports = {
  transpileDependencies: ['single-spa','qiankun','import-html-entry'],
  devServer: {
    port:8080,
    proxy: {
      '/**': {
        target: 'http://xxxxxx',
        changeOrigin: true,
        secure: false
      }
    }
  },
};
