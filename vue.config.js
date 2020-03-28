module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3030"
      }
    }
  },
  css: {
    loaderOptions: {
      less:{
        globalVars: {
          primary: '#333399',
          secondary: '#CCCCFF',
          third: '#CC99CC',
          white: "#ffffff",
          danger: "#FF6666",
          r: "75rem"
        },
        modules: {
          localIdentName: '[name]-[hash]'
        }
      }
    }
  }
};