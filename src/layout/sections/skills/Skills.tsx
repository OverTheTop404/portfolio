import { Container } from "../../../components/Container.tsx";
import { FlexWrapper } from "../../../components/FlexWrapper.tsx";
import { StyledSection } from "../../../components/Section.tsx";
import { Title } from "../../../components/Title.tsx";
import styled from "styled-components";
import { Icon } from "../../../components/icons/Icon.tsx";

const IconList = [
  { icon: "react", viewBox: "0 0 256 257", name: "React" },
  { icon: "redux", viewBox: "0 0 105 100", name: "Redux" },
  { icon: "js", viewBox: "0 0 120 120", name: "JavaScript" },
  { icon: "typescript", viewBox: "0 0 120 120", name: "TypeScript" },
  { icon: "docker", viewBox: "0 0 120 88", name: "Docker" },
  { icon: "viteIcon", viewBox: "0 0 256 257", name: "Vite" },
  { icon: "gitHub", viewBox: "0 0 88 88", name: "GitHub" },
  { icon: "gitSystem", viewBox: "0 0 94 94", name: "Git version control" },
  { icon: "webStorm", viewBox: "0 0 64 64", name: "WebStorm" },
  { icon: "nest", viewBox: "0 0 120 120", name: "NestJs" },
  { icon: "mongodb", viewBox: "0 0 52 120", name: "MongoDB" },
  { icon: "jest", viewBox: "0 0 110 120", name: "Jest" },
  { icon: "postgrest", viewBox: "0 0 118 120", name: "Postgrest" },
  { icon: "styledComponent", viewBox: "0 0 120 120", name: "Styled Component" },
  { icon: "sass", viewBox: "0 0 117 87", name: "Sass" },
  { icon: "bootstrap", viewBox: "0 0 40 40", name: "Bootstrap" },
];

export const Skills = () => {
  return (
    <StyledSection id={"skills"}>
      <Container>
        <Title supTextDop={""} supTitle={"skills"} title={"My Tech Stack"} />
        <FlexWrapper justify={"start"} wrap={"wrap"} gap={"20px"}>
          {IconList.map((item, index) => {
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
        </FlexWrapper>
      </Container>
    </StyledSection>
  );
};

const Skill = styled.div`
  background-color: #222222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 35px 15px 35px;
  border-radius: 4px;
  width: calc(16% - 8px);
`;

const SkillName = styled.span`
  display: block;
  margin-top: 20px;
  font-family: "globerbook", sans-serif;
  //text-transform: uppercase;
`;
