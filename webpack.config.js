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
  },


  module: {
    // you can use babel for supporting es2015 
    /*  loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components|bundle)/,
            loader: 'babel-loader', 
            query: {
                      presets: ['es2015']
                  }
          }
      ]*/
  },
  // and you can use compression (well, almost can)
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: true, // it is true for demo purposes only
      compress: false, // must be false, because code may become so ugly that Photoshop will throw error :)
      beautify: true // it is true for demo purposes only

    })
  ]
};