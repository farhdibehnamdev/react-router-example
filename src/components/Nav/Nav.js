import { NavLink } from "react-router-dom";
import StyledNav from "./Nav.styled";
import FlexHeader from "../FlexHeader.styled";
const Nav = function () {
  return (
    <StyledNav>
      <FlexHeader>
        <NavLink to="/">Products</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </FlexHeader>
    </StyledNav>
  );
};

export default Nav;
