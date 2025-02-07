import styled from "styled-components";
import { Logo } from "../components/logo/Logo.tsx";
import { Menu } from "./Menu.tsx";
import { FlexWrapper } from "../components/FlexWrapper.tsx";
import { Container } from "../components/Container.tsx";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"}>
          <Logo />
          <Menu />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #222222;
  padding: 10px 0;
`;
