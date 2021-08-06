module.exports = {
  title: 'Zero',
  description: 'Just playing around',
  base: '/blog/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': '../'
      }
    }
  }
}