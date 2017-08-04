var path = require('path')
var webpack = require('webpack')

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [ './index.js' ],
    output: {
	path: path.join(__dirname, 'public'),
	filename: 'bundle.js',
    },
    module: {
	loaders: [
	    {
		test: /\.jsx?$/,
		exclude: /node_modules/,
		use: [
		    'babel-loader'
		],
	    },
	],
    },
    cache: true,
    plugins: [
	new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: '#source-map',
    devServer: {
	contentBase: 'public',
	port: 8080,
	hot: true,
    }
}
