import "./Header.scss";
import Link from "next/link";

const Header = props => (
  <Link href="/">
    <div className="Header">{props.appTittle}</div>
  </Link>
);

export default Header;
