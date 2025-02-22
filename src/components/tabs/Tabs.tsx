import { FlexWrapper } from "../FlexWrapper.tsx";
import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme.ts";

type ItemType = {
  img: string;
  title: string;
  url: string;
};

type TabsProps = {
  works: { [key: string]: ItemType[] };
};

export const Tabs = (props: TabsProps) => {
  const [activeTab, setActiveTab] = useState("modx");
  const changeTab = (e: React.MouseEvent<HTMLButtonElement>) =>
    setActiveTab(e.currentTarget.innerText.toLowerCase());

  return (
    <>
      <TabsList>
        {Object.keys(props.works).map((item, index) => {
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
        gap={"30px"}
        direction={"row"}
      >
        {props.works[activeTab].map((item: ItemType, i: number) => {
          return (
            <StyledWork key={i}>
              <img src={item.img} alt={item.title} />
              <HiddenContentWork>
                <span>{item.title}</span>
                <PanelBtn
                  as={"a"}
                  href={item.url}
                  target={"_blank"}
                  rel={"nofollow"}
                >
                  Visit website
                </PanelBtn>
              </HiddenContentWork>
            </StyledWork>
          );
        })}
      </FlexWrapper>
    </>
  );
};

const PanelBtn = styled.button`
  background-color: ${theme.color.secondaryBg};
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: capitalize;
  &:hover {
    cursor: pointer;
    background-color: ${theme.color.accent};
  }
`;

const TabsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  ${PanelBtn}.active {
    background-color: ${theme.color.accent};
  }
  }
`;

const HiddenContentWork = styled.div`
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.9);
  color: ${theme.color.secondaryBg};
  opacity: 0;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.1s ease-in-out;
  ${PanelBtn} {
    padding-bottom: 5px;
    background-color: ${theme.color.accent};
    text-transform: none;
  }
`;

const StyledWork = styled.div`
  position: relative;
  background-color: ${theme.color.secondaryBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 31%;
  min-height: 450px;
  overflow: hidden;
  &:hover ${HiddenContentWork} {
    opacity: 1;
  }
`;
