import { StyledSection } from "../../../components/Section.tsx";
import { Container } from "../../../components/Container.tsx";
import { Title } from "../../../components/Title.tsx";
import { FlexWrapper } from "../../../components/FlexWrapper.tsx";
import { Line } from "../../../components/Line.tsx";
import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme.ts";

const works = {
  modx: [
    { title: "EpoxyTraining", url: "https://epoxytraining.us/", img: "asd" },
    { title: "ArmoGlaze", url: "https://armoglazeservice.com/", img: "asd" },
    { title: "RocketWeb", url: "https://rocketweb.pro/", img: "asd" },
    { title: "FoxSpb", url: "https://foxspb.com/", img: "asd" },
    { title: "Ponton64", url: "asd", img: "asd" },
    { title: "asd", url: "asd", img: "asd" },
  ],
  nexoos: [
    { title: "asd", url: "asd", img: "asd" },
    { title: "asd", url: "asd", img: "asd" },
    { title: "asd", url: "asd", img: "asd" },
    { title: "asd", url: "asd", img: "asd" },
    { title: "asd", url: "asd", img: "asd" },
    { title: "asd", url: "asd", img: "asd" },
  ],
  react: [
    { title: "123", url: "asd", img: "asd" },
    { title: "123", url: "asd", img: "asd" },
    { title: "123", url: "asd", img: "asd" },
    { title: "asd", url: "asd", img: "asd" },
    { title: "asd", url: "asd", img: "asd" },
    { title: "asd", url: "asd", img: "asd" },
  ],
};

export const Cases = () => {
  const [activeTab, setActiveTab] = useState("modx");

  const changeTab = (e) => setActiveTab(e.target.innerText.toLowerCase());

  return (
    <>
      <StyledSection id={"projects"}>
        <Container>
          <Title
            supTextDop={""}
            supTitle={"Portfolio"}
            title={"Recent works"}
            align={"center"}
          />
          <TabsList>
            {Object.keys(works).map((item, index) => {
              return (
                <li key={index}>
                  <PanelBtn
                    onClick={changeTab}
                    className={item === activeTab ? "active" : ""}
                  >
                    {item}
                  </PanelBtn>
                </li>
              );
            })}
          </TabsList>
          <FlexWrapper
            justify={"space-between"}
            wrap={"wrap"}
            gap={"20px"}
            direction={"row"}
          >
            {works[activeTab].map((item, i) => {
              return <StyledWork key={i}>{item.title}</StyledWork>;
            })}
          </FlexWrapper>
        </Container>
      </StyledSection>
      <Line />
    </>
  );
};

const TabsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
    button.active {
      background-color: ${theme.color.accent};
    }
  }
`;

const PanelBtn = styled.button`
  background-color: ${theme.color.secondaryBg};
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 4px;
  font-weight: 600;
  color: #fff;
  text-transform: capitalize;
  &:hover {
    cursor: pointer;
  }
`;

const StyledWork = styled.div`
  background-color: ${theme.color.secondaryBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px;
  border-radius: 4px;
  width: 32%;
  height: 450px;
`;
