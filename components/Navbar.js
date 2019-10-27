import "./Navbar.scss";
import NavButton from "./NavButton";

const Navbar = props => (
  <div className="NavBar">
    {props.navButtons.map(button => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
      ></NavButton>
    ))}
  </div>
);

export default Navbar;
