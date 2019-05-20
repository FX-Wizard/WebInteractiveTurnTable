const path = require("path");
const resolve = require('resolve');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: path.join(__dirname, "src/index.js"),
    output: {
        filename: "build.js",
        path: path.join(__dirname, "dist"),
    },
    module: {
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options:{
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react"
                ]
            }
        },
        {
            test: /\.css$/,
            use: [
                {loader: "style-loader"},
                {loader: "css-loader"},
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
        },
        {
            test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: [{
              loader: 'file-loader',
            }]
          }]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i}
        )]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, "src/index.html")
        })
    ]
}
