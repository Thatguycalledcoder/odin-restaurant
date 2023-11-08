const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/script/index.js",
    devtool: "inline-source-map",
    plugins: [
        new HTMLWebpackPlugin({
            title: "Nappy's Fast Food Restaurant",
            inject: "head",
            scriptLoading: "defer",
        })
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
    ]
    }
}