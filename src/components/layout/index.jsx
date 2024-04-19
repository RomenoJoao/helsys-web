import { Outlet, Link } from "react-router-dom";
import MenuLateral from "../menu/MenuLateral";
import "./styles.css";

const Layout = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
