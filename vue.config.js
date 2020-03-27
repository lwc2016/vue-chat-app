module.exports = {
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