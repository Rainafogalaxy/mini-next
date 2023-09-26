// 和_app.js一样，必须要在pages的文件夹下创建(不能在某个子文件夹中)
// 默认情况下不存在
import Document, { Html, Head, Main, NextScript } from "next/document";
// 允许我们在外部添加HTML结构(如果需要编辑整个HTML文档，就可以添加像这样的_document.js文件)
class MyDocument extends Document {
  render() {
    return (
      // 以下为默认结构
      <Html lang="en">
        <Head />
        {/* <div id="overlays" /> 他会被添加到dom结构中*/}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
