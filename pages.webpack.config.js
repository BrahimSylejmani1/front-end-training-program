const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const BUILD_DIR = path.resolve(__dirname, 'public')
const APP_DIR = path.resolve(__dirname, 'src')
const webpack = require('webpack')

const BUILD_ENV = process.env.NODE_ENV || 'development'

module.exports = {
    mode: BUILD_ENV,
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/prime-front-end-training/'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
              test: /\.(png|jpg|gif)$/,
              use: [
                'file-loader'
              ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules',
            path.resolve(APP_DIR)
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template:`${APP_DIR}/pages.index.html`,
            filename: `${BUILD_DIR}/index.html`
        }),
        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify('/prime-front-end-training/')
        })
    ]
}
