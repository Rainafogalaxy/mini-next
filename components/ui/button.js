// 拆分出来的button组件(可重复利用)
import classes from "./button.module.css";
import Link from "next/link";
function Button(props) {
  return (
    <Link href={props.link} legacyBehavior>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  );
}

export default Button;
