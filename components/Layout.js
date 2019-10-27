import Header from "./Header";
import NavBar from "./Navbar";
import Head from "next/head";

import navButtons from "../config/buttons";

import "./Layout.scss";
import "./index.scss";

const Layout = props => {
  const appTittle = "> WHATABYTE";
  return (
    <div className="Layout">
      <Head>
        <title>WHATABYTE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <Header appTittle={appTittle} />
      <div className="Content">{props.children}</div>
      <NavBar navButtons={navButtons} />
    </div>
  );
};

export default Layout;
