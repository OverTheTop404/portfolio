import { FlexWrapper } from "../../components/FlexWrapper.tsx";
import { Container } from "../../components/Container.tsx";
import styled from "styled-components";
import PhotoUrl from "../../assets/images/ami3.webp";
import Pattern from "../../assets/images/pattern2.png";
import { SocialIcons } from "../../components/social/SocialIcons.tsx";

export const Utp = () => {
  return (
    <MainScreen>
      <Container>
        <FlexWrapper justify={"space-between"}>
          <About>
            <Small>
              Hi there, <span>I`m</span>
            </Small>
            <h2>Andrey Chaplygin</h2>
            <Title>Web Designer And Frontend Developer</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              aliquid at atque blanditiis, cupiditate dolor eius excepturi
              exercitationem fugiat omnis quae quidem quod, sed tempore veniam.
              Aspernatur dolore eum facilis impedit, iste laboriosam.
            </Description>

            <SocialIcons />
          </About>
          <MainPhoto>
            <img src={PhotoUrl} alt="" />
          </MainPhoto>
        </FlexWrapper>
      </Container>
    </MainScreen>
  );
};

const MainScreen = styled.section`
  min-height: 50vh;
  background-color: #292929;
  position: relative;
  overflow: hidden;
  padding: 100px 0;
  z-index: 0;
  &:before {
    content: "";
    background-size: auto;
    z-index: -1;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: url(${Pattern});
  }
`;

const MainPhoto = styled.div`
  position: absolute;
  top: -20%;
  right: -10%;
`;

const Title = styled.h1`
  margin-bottom: 3rem;
  font-family: "Glober SemiBold";
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.7;
  margin-bottom: 3rem;
`;

const Small = styled.span`
  font-size: 30px;
`;

const About = styled.div`
  max-width: 800px;
  span {
    color: #fff;

    span {
      color: #f60838;
    }
  }
  h1 {
    color: #fff;
    font-size: 2.5rem;
  }
  h2 {
    color: #fff;
    font-size: 5rem;
  }
`;
