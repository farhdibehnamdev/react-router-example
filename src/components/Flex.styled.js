import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${({ statusPosition }) => statusPosition || "space-between"};
  align-items: center;
`;

export default Flex;
