const path = require("path");
const resolve = require('resolve');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "build.js",
        path: path.join(__dirname, "dist"),
    },
    module: {
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.css$/,
            use: [
                {loader: "style-loader"},
                {loader: "css-loader"}
            ]
        },
        {
            test: /\.png$/,
            exclude: /assets/,
            loader: "url-loader"
        },
        {
            test: /\.(gltf)$/,
            loader: 'gltf-loader-2'
        },
        {
            test: /\.(png|bin|glb)$/,
            loader: "file-loader",
            options: {
                name: 'assets/[name].[hash:7].[ext]'
            }
        }]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, "src/index.html")
        })
    ]
}