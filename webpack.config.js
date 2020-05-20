const htmlWebpackPlugin = require('html-webpack-plugin'); 
const path = require('path');


module.exports =  {
    entry : {
        index : './src/js/index.js', 
        nosotros : './src/js/nosotros.js'
    },
    output : {
        filename : '[name].bundle.js',
        path : path.join(__dirname, '/dist')
    },

    devtool: 'inline-source-map',

    devServer : {
        contentBase : path.join(__dirname, '/dist'),
        compress : true,
        port : 9000,

    },
    module: {
        rules: [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader'
                }
            },
            {
                test : /\.css$/,
                use : [
                      {loader : 'style-loader'},
                      {loader : 'css-loader'} 
                ] 
            },
            {
                test : /\.scss$/,
                use : [
                      {loader : 'style-loader'},
                      {loader : 'css-loader'},
                      {loader : 'sass-loader'} 
                ] 
            }
        ]
    },
    optimization : {
        splitChunks :  {
            cacheGroups : {
                commons : {
                    test : /[\\/]node_modules[\\/]/,
                    name : 'common',
                    chunks : 'all'
                }
            }
        }
    },
    plugins : [
        new htmlWebpackPlugin({
            filename : 'index.html',
            template : './src/index.html',
            title : 'Index'
            }),
        new htmlWebpackPlugin({
            filename : 'nosotros.html',
            template : './src/nosotros.html',
            title : 'Nosotros'
            })
     ]
}