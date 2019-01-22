const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./static/component/index/index.js"],
  // 使用 source map
  // 当 webpack 打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。
  // 例如，如果将三个源文件（a.js, b.js 和 c.js）打包到一个 bundle（bundle.js）中，
  // 而其中一个源文件包含一个错误，那么堆栈跟踪就会简单地指向到 bundle.js。这并通常没有太多帮助
  // 因为你可能需要准确地知道错误来自于哪个源文件。
  // 为了更容易地追踪错误和警告，JavaScript 提供了 source map 功能，
  // 将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，source map 就会明确的告诉你。
  // source map 有很多不同的选项可用，请务必仔细阅读它们，以便可以根据需要进行配置。
  //对于本指南，我们使用 inline-source-map 选项，这有助于解释说明我们的目的（仅解释说明，不要用于生产环境）：
  devtool: "inline-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./static/dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
