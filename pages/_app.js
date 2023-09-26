import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";
// 在这个文件中，可以导入所有全局css文件
// 但如果想要将样式范围限定到一个组件,就要使用 CSS Module support(他只绑定到单一的组件，然后只会影响到那个组件)

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* 多个Head会被Next.js合并,向下取 */}
      <Head>
        <title>Next Events</title>
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      </Head>
      <Component {...pageProps} />;
    </Layout>
  );
}

// 放到这里的组件相当于全局组件
// 可以把_app.js想象成根组件(root component)
