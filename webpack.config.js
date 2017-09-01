const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  devServer: {
	contentBase: './dist'
  },
  plugins: [
	new HtmlWebpackPlugin({
	  title: 'Development',
	  template: "template/index.pug"
	})
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
	  {

		test: /\.pug$/,
		use: [
		  "pug-loader"
		]
	  }
    ]
  }
};
