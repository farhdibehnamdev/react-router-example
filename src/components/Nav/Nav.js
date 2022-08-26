import StyledNav from "./Nav.styled";
import FlexHeader from "../FlexHeader.styled";
const Nav = function () {
  return (
    <StyledNav>
      <FlexHeader>
        <p>Products</p>
        <p>Admin</p>
      </FlexHeader>
    </StyledNav>
  );
};

export default Nav;
