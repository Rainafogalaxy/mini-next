import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      {/* <header></header> */}
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
