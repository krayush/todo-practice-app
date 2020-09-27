const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.js',  

      },
plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: path.resolve(__dirname, 'src/index.html')     
    }),
],
  output: {
    path: path.resolve(__dirname, 'dist'),
  filename: '[name].js' 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
 


devServer: {
    contentBase: path.join(__dirname, 'dist'),  
    compress: true,
    port: 8003   
  }
};