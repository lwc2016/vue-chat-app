module.exports = {
    css: {
        loaderOptions: {
          less:{
            globalVars: {
              primary: '#333399',
              secondary: '#CCCCFF',
              third: '#CC99CC',
              white: "#ffffff",
              r: "75rem"
            },
            modules: {
              localIdentName: '[name]-[hash]'
            }
          }
        }
      }
};