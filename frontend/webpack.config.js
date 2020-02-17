const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
    //const PRODUCTION = process.argv.includes('-p') || process.argv.includes('production');

module.exports = {
    context: __dirname,
    //mode: 'production',
    entry: [
        //'core-js',
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
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader'
            //     }
            // },
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        // options: {
                        //     sourceMap: env === 'dev'
                        // }
                    },
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         sourceMap: env === 'dev',
                    //         plugins: function() {
                    //             return [
                    //                 require('cssnano'),
                    //                 require('autoprefixer')
                    //             ];
                    //         }
                    //     }
                    // }
                ]

                //loader: 'style-loader!css-loader'
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
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery',
        //     Popper: 'popper.js/dist/umd/popper.js',
        //     moment: 'moment',
        //     '_': 'underscore',
        // }),
        new VueLoaderPlugin()
    ],
    node: {
        fs: 'empty',
        global: true
    }
}

// if (!PRODUCTION) {
//     module.exports.mode = 'development';
//     module.exports.module.rules.push({
//         enforce: 'pre',
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'eslint-loader',
//         options: {
//             emitWarning: true,
//             configFile: './.eslintrc.json'
//         }
//     })
// };