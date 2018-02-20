const packageJSON = require('./package.json');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    build: path.join(__dirname, 'target', 'classes', 'META-INF', 'resources', 'webjars', packageJSON.name,
        packageJSON.version)
};

const loaders = {
    css: {
        loader: 'css-loader'
    },

};

const config = {
    entry: './src/main/javascript/index.js',

    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }, {
            test: /\.(ttf|png|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader',
        }
        ]
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins:
        [new ExtractTextPlugin('[name].css'),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })],

};

module.exports = config;

