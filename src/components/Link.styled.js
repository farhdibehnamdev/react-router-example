import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  background-color: aliceblue;
  padding: 16px 55px 16px 55px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
`;

export default StyledLink;
