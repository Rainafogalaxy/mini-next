// 拆分出来的button组件(可重复利用)
function Button(props) {
  return <Link href={props.link}>{props.children}</Link>;
}

export default Button;
