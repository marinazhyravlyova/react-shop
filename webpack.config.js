const os = require('os');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HappyPack = require('happypack');
const devMode = process.env.NODE_ENV !== 'production';
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

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
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                use: 'happypack/loader?id=js',
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
            },
            {
                test: /\.(gif|woff|woff2|ttf|eot|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'svg-url-loader',
                    options: {
                        name: './assets/img/icons/[name].[ext]',
                        limit: 10000,
                    },
                }],
            },
        ]
    },
    plugins: [
        new HappyPack({
            id: 'js',
            threadPool: happyThreadPool,
            loaders: ['babel-loader'],
        }),
        new HtmlWebpackPlugin({
            title: '/build',
            hash: true,
            template: './index.html',
            inject: 'body',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['dll/vendor.dll.js'],
            append: false,
            hash: true,
        }),
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname),
            manifest: require('./dll/vendor-manifest.json'),
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.IgnorePlugin(/^codemirror$/),
    ],
    devtool: "source-map"
};
