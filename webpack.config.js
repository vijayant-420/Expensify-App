// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   module: {
//     rules: [
//         // {
//         //     test: /\.scss$/,
//         //     exclude: /node_modules/,
//         //     loader: ExtractTextPlugin.extract('style-loader', 'css!sass?indentedSyntax=true&sourceMap=true')
//         // },
//       // {
//       //   test: /\.scss$/,
//       //   use: ExtractTextPlugin.extract({
//       //     fallback: "style-loader",
//       //     use: [
//       //       {
//       //         loader: "css-loader", // translates CSS into CommonJS
//       //       },
//       //       {
//       //         loader: "sass-loader",
//       //       },
//       //     ],
//       //   }),
//       // },
//       {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           use:{
//               loader: 'babel-loader',
//           },
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./index.html",
//     }),
//   ],
// };
