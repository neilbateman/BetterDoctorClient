const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new Dotenv(),
        new HtmlWebpackPlugin({
            title: 'Template',
            template: './src/index.html',
            inject: 'body'
        }),
    ],
    module: {
        rules: [{
                //Rules for css files
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                //Rules for linter
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /bootstrap\/dist\/js\/umd\//,
                use: 'imports-loader?jQuery=jquery'
            }
        ]
    }
};
