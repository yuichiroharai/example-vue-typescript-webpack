var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        "app": './src/ts/App.ts'
    },
    output: {
        filename: './htdocs/js/[name].js'
    },
    resolve: {

        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },

        modules: [
            path.join(__dirname, 'node_modules'),
        ],

        extensions: ['*', '.vue', '.ts', '.es6', '.webpack.js', '.web.js', '.js']
    },
    module: {

        rules: [
            // ---------- Vue
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    esModule: true
                }
            },

            // ---------- TypeScript
            {
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            }
        ]

    }
};