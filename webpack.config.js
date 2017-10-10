var webpack = require("webpack");

module.exports = {
    entry: {
        main: ['./index.js'], // main bundle it collects all shims together
        dev: ['./test.js'],
        test: ['./index.js', './test.js'] // this bundle include some tests and shims wich loads in first place
    },
    output: {
        path: __dirname + '/bundle', // where to store bundles
        filename: '[name].bundle.js',
    }
    /*,

      // and you can use compression (well, almost can)
      plugins: [
        new webpack.optimize.UglifyJsPlugin({
          comments: true, // it is true for demo purposes only
          compress: false, // must be false, because code may become so ugly that Photoshop will throw error :)
          beautify: true // it is true for demo purposes only

        })
      ]*/
};