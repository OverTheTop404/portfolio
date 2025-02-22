import { Icon } from "../../../components/icons/Icon.tsx";
import styled from "styled-components";
import { theme } from "../../../styles/Theme.ts";

type SkillItem = {
  icon: string;
  viewBox: string;
  name: string;
};

type SkillsItemPropsType = {
  iconList: SkillItem[];
};

export const SkillsItem = (props: SkillsItemPropsType) => {
  return (
    <>
      {props.iconList.map((item: SkillItem, index: number) => {
        return (
          <Skill key={index}>
            <Icon
              iconId={item.icon}
              height={"70px"}
              width={"70px"}
              viewBox={item.viewBox}
            />
            <SkillName>{item.name}</SkillName>
          </Skill>
        );
      })}
    </>
  );
};

const SkillName = styled.span`
  display: block;
  margin-top: 20px;
  font-family: "globerbook", sans-serif;
`;

const Skill = styled.div`
  background-color: ${theme.color.secondaryBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px;
  border-radius: 4px;
  width: calc(100% / 6 - 17px);
  //width: auto;
`;
