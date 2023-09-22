import "../styles/globals.css";
// 在这个文件中，可以导入所有全局css文件
// 但如果想要将样式范围限定到一个组件,就要使用 CSS Module support(他只绑定到单一的组件，然后只会影响到那个组件)

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
