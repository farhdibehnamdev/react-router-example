import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${({ theme }) => theme.flex.spaceBetween};
  align-items: center;
`;

export default Flex;
