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
          <GetCv>DOWNLOAD CV</GetCv>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 99999;
  background-color: #222222;
  padding: 10px 0;
`;

const GetCv = styled.button`
  letter-spacing: 1px;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  padding: 12px 25px;
  border-radius: 20px;
  background-color: #f60838;
`;
