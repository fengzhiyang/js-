module.exports = {
    entry: './src',
    output: {
        filename: './js/bundle.js'
    },
    module: {
        //webpack使用loader的方式处理各种各样的资源
        loaders: [{
            test: /\.js$/, //处理以.js结尾的文件
            exclude: /node_modules/, //处理除了nodde_modules里的js文件
            loader: 'babel-loader' //用babel-loader处理
        }]
    }
}