var webpack = require("webpack");

module.exports = {
    entry: {
          main:  ['./index.js'],
          test:  ['./index.js','./test.js']
          },
    output: {
            path: __dirname + '/bundle',
            filename: '[name].bundle.js',
        },

    
    module: {
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
        plugins: [
                new webpack.optimize.UglifyJsPlugin({
                    comments: true,
                    compress: false,
                    beautify: true

                })
            ]
};  

