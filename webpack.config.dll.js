const path = require('path');
const webpack = require('webpack');

const outputPath = path.resolve(__dirname);

module.exports = {
    entry: {
        vendor: ['./config/dependencies.js'],
    },
    context: outputPath,
    mode: 'production',
    output: {
        filename: '[name].dll.js',
        path: path.join(outputPath, 'dll'),
        library: '[name]',
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        }],
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(outputPath, 'dll/[name]-manifest.json'),
            name: '[name]',
        }),
    ],
};
