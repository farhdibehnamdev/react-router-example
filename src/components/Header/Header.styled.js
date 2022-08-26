import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 20px;
  max-width: 100%;
`;

export default StyledHeader;
