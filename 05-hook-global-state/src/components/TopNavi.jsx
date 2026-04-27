import { NavLink } from "react-router-dom";

const TopNavi = () => {
  return <nav>
    <NavLink to="/use-reducer">use-reducer</NavLink>&nbsp;;
    <NavLink to="/use-context">use-context</NavLink>&nbsp;
    {/* <NavLink to="/use-global-state">use-global-state</NavLink>&nbsp; */}
  </nav>
}

export default TopNavi;