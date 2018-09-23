module.exports = {
    entry: {
        bundle: './src/main.js',
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
    devtool: "inline-source-map"
};
