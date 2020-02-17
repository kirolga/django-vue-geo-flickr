const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    context: __dirname,
    entry: [
        './src/main.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.css', '.styl', '.html', '.json'],
    },
    devtool: '#cheap-module-eval-source-map',
    performance: { hints: false },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                ]
            },
            {
                test: /\.(jpg|jpeg|png|eot|ttf)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|svg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    scss: 'vue-style-loader!css-loader!sass-loader'
                }
            },

        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    node: {
        fs: 'empty',
        global: true
    }
}