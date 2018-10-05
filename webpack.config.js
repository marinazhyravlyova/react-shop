const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        main: './src/main.js',
    },
    target: 'web',
    context: path.resolve(__dirname, ''),
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
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')]
                        }
                    },
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.IgnorePlugin(/^codemirror$/),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map'
        }),
    ],
    devtool: "source-map"
};
