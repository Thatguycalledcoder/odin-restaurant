const path = requrie("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: "inline-source-map",
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html",
            inject: "head",
            scriptLoading: "defer",
        })
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    }
}