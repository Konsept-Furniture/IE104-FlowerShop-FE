const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv').config({
   path: path.join(__dirname, '.env')
});

module.exports = (env, agrv) => {
   const isDev = agrv.mode === 'development'
   return {
      entry: './src/index.js',
      module: {
         rules: [
            {
               test: /\.(js|jsx)$/,
               exclude: /(node_modules|bower_components)/,
               use: {
                  loader: 'babel-loader',
                  options: {
                     presets: ['@babel/preset-env', '@babel/preset-react'],
                     plugins: ['@babel/plugin-transform-runtime']
                  }
               }
            },
            {
               test: /\.(s[ac]ss|css)$/,
               use: [
                  'style-loader',
                  {
                     loader: 'css-loader',
                     options: { sourceMap: isDev ? true : false }
                  },
                  'postcss-loader',
                  {
                     loader: 'sass-loader',
                     options: { sourceMap: isDev ? true : false }
                  }
               ]
            },
            {
               test: /\.(png|svg|jpg|gif)$/,
               use: [
                  {
                     loader: 'file-loader',
                     options: {
                        name: '[path][name].[ext]'
                     }
                  }
               ]
            }
         ]
      },
      resolve: {
         extensions: ['.js', '.jsx'],
         alias: {
            '@': path.resolve('src'),
            '@@': path.resolve()
         }
      },
      output: {
         path: path.resolve('dist'),
         publicPath: '/',
         filename: 'bundle.js',
         environment: {
            arrowFunction: false,
            bigIntLiteral: false,
            const: false,
            destructuring: false,
            dynamicImport: false,
            forOf: false,
            module: false
         }
      },
      devtool: isDev ? 'source-map' : false,
      devServer: {
         hot: true,
         devMiddleware: {
            publicPath: '/dist/'
         },
         historyApiFallback: true,
         static: {
            directory: 'public'
         },
         port: 8000,
      },
      plugins: [
         new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.parsed)
         }),
         new webpack.ProvidePlugin({
            "React": "react",
         }),
      ]
   }
}