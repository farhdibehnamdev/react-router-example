import styled from "styled-components";

const StyledNav = styled.nav`
  font-size: 1.6rem;
  font-weight: 600;
  a {
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    padding: 20px;
    &.active {
      color: #000;
      background-color: #fff;
      font-style: italic;
      font-weight: 900;
    }
  }
`;

export default StyledNav;
