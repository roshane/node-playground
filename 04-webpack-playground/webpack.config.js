const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appConfig = require('./app.config.json');
const webpack = require('webpack');

const getEnvironment = () => {
    const envParameter = process.argv.filter(arg => arg.indexOf('env') >= 0);
    if (envParameter && envParameter[0]) {
        return envParameter[0].split('=')[1];
    }
    return 'prod'
}

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: appConfig.title,
            template: './public/index.html'
        }),
        new webpack.DefinePlugin({
            APP_VERSION: JSON.stringify(appConfig.version),
            ENV: JSON.stringify(getEnvironment())
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ['@babel/preset-react',
                                {
                                    "runtime": "automatic"
                                }
                            ]
                        ]
                    }
                }
            }
        ],
    },
    devServer: {
        static: './dist',
        liveReload: false,
        hot: true
    },
    optimization: {
        runtimeChunk: 'single',
    },
}