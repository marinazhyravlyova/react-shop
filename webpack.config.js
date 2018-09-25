const path = require('path');

module.exports = {
    entry: {
        main: './src/main.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        chunkFilename: '[name].bundle.js',
        publicPath: '/',
    },
    devServer: {
        contentBase: './',
        stats: 'errors-only',
        hot: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    devtool: "source-map"
};
