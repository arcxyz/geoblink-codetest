const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const responseMock = require('./response.mock.json');

module.exports = {
    entry: './src/boot.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.html$/, use: 'raw-loader'},
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ]
            },
            { test: /\.(json)$/, loader: "file-loader" }
        ]
    },
    devtool: 'eval',
    devServer: {
        setup: app => {
            app.get('/api/v2/stats', function(req, res) {
                res.json(responseMock);
            });
        }
    },
    plugins: [
        new UglifyJSPlugin,
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new CopyWebpackPlugin([{ from: 'response.mock.json', to: 'response.mock.json' }], {})
    ]
};