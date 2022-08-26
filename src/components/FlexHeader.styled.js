import styled from "styled-components";

const FlexHeader = styled.div`
  display: flex;
  justify-content: ${({ theme }) => theme.flex.center};
  align-items: center;
  gap: 20px;
`;

export default FlexHeader;
