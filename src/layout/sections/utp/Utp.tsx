import { FlexWrapper } from "../../../components/FlexWrapper.tsx";
import { Container } from "../../../components/Container.tsx";
import styled from "styled-components";
import PhotoUrl from "../../../assets/images/ami3.webp";
import { SocialIcons } from "../../../components/social/SocialIcons.tsx";
import { AboutMeText } from "./AboutMe.tsx";
import { Statistic } from "./Statistic.tsx";
import { Line } from "../../../components/Line.tsx";

const statisticList = [
  { count: 8, text: "Year of experience" },
  { count: 20, text: "Global working client" },
  { count: 50, text: "Сompleted works" },
];

export const Utp = () => {
  return (
    <>
      <MainScreen id={"about"}>
        <Container>
          <FlexWrapper justify={"space-between"}>
            <About>
              <AboutMeText />
              <SocialIcons />
              <StatisticBox>
                {statisticList.map((item, index) => (
                  <Statistic key={index} {...item} />
                ))}
              </StatisticBox>
            </About>
            <MainPhoto>
              <img src={PhotoUrl} alt="" />
            </MainPhoto>
          </FlexWrapper>
        </Container>
      </MainScreen>
      <Line />
    </>
  );
};

const StatisticBox = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 50px;
`;

const MainScreen = styled.section`
  background-color: #292929;
  position: relative;
  overflow: hidden;
  padding: 100px 0;
  z-index: 0;
`;

const MainPhoto = styled.div`
  position: absolute;
  top: -18%;
  right: -10%;
`;

const About = styled.div`
  max-width: 800px;
  span {
    color: #fff;

    span {
      color: #f60838;
    }
  }
`;
