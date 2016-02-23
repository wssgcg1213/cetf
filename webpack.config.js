/**
 * Created by jf on 15/10/27.
 */

var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './src',
        port: 5368
    },
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:5368',
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
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:5368' })
    ]
};
