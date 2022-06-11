const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appConfig = require('./app.config.json');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    // devtool: 'inline-source-map',
    stats: 'normal',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: appConfig.title,
            template: './public/index.html'
        }),
        new webpack.DefinePlugin({
            APP_VERSION: JSON.stringify(appConfig.version)
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.m?(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ],
    },
    devServer: {
        static: './dist',
        hot: true,
        compress: true
    },
    optimization: {
        runtimeChunk: 'single',
    }
}