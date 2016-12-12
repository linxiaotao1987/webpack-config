
var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');
var TEM_PATH = path.resolve(ROOT_PATH,'templates');

module.exports = {
    entry:{
        app:path.resolve(APP_PATH,'index.js'),
        reacts:['react','react-dom']
    },
    output:{
        path:BUILD_PATH,
        filename:'[name].js'
    },
    devtool:false,
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true,
        port:3000,
        host:'192.168.201.210'
    },
    module:{
        loaders:[
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: APP_PATH
            },
            {
                test:/\.css$/,
                loaders:['style','css'],
                include:APP_PATH
            },
            {
                test:/\.(png|jpg)$/,
                loader:'url?limit=10240&name=./images/[hash:8].[name].[ext]'
            },
            {
                test:/\.jsx?$/,
                loader:'babel',
                inculde:APP_PATH,
                query:{
                    presets:['es2015','react']
                }
            }
        ]
    },
    plugins:[
        new HtmlwebpackPlugin({
            title:'',
            template:path.resolve(TEM_PATH,'index.html'),
            filename:'index.html',
            chunks:['app','reacts'],
            inject:'body'
        }),
        new webpack.optimize.CommonsChunkPlugin('reacts','reacts.js'),
        // new webpack.optimize.UglifyJsPlugin()
    ]
}

