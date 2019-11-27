const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname + '/src',
    devtool: 'source-map',
    entry: './js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.js?x$/,
                exclude: /node_module/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        }),
        new CopyWebpackPlugin([
            {from : __dirname + '/src/html', to: __dirname + '/dist'}
        ]),
    ]
}