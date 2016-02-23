/**
 * Created by jf on 15/10/27.
 */

var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'cheap-source-map',
    entry: [
        path.resolve(__dirname, 'src/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: './bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.less$/,
                loader: 'style!css!autoprefixer!less'
            }, {
                test: /\.css/,
                loader: 'style!css'
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=25000'
            }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            mangle: true,
            compress: {
                warnings: false
            }
        }),
        new CopyWebpackPlugin([
            { from: './src/index.html', to: 'index.html' }
        ])
    ]
};
