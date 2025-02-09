import { Container } from "./Container.tsx";
import styled from "styled-components";

export const Line = () => {
  return (
    <Container>
      <StyledLine />
    </Container>
  );
};

const StyledLine = styled.hr`
  border: none;
  background-color: #222;
  height: 3px;
`;
