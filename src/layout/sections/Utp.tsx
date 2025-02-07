import { FlexWrapper } from "../../components/FlexWrapper.tsx";
import { Container } from "../../components/Container.tsx";
import styled from "styled-components";
import PhotoUrl from "../../assets/images/ami3.webp";

export const Utp = () => {
  return (
    <MainScreen>
      <Container>
        <FlexWrapper justify={"space-between"}>
          <About>
            <span>
              Hi there, <span>I`m</span>
            </span>
            <h2>Andrey Chaplygin</h2>
            <Title>Web Designer And Frontend Developer</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              aliquid at atque blanditiis, cupiditate dolor eius excepturi
              exercitationem fugiat omnis quae quidem quod, sed tempore veniam.
              Aspernatur dolore eum facilis impedit, iste laboriosam.
            </Description>
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
  height: 50vh;
  background-color: #292929;
  position: relative;
  padding: 100px 0;
`;

const MainPhoto = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const Title = styled.h1`
  margin-bottom: 3rem;
  font-family: "Glober SemiBold";
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.7;
`;

const About = styled.div`
  max-width: 800px;
  span {
    color: #fff;
    font-size: 30px;
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
