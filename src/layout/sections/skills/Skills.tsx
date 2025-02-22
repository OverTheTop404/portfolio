import { Container } from "../../../components/Container.tsx";
import { FlexWrapper } from "../../../components/FlexWrapper.tsx";
import { StyledSection } from "../../../components/Section.tsx";
import { Title } from "../../../components/Title.tsx";
import { Line } from "../../../components/Line.tsx";
import { SkillsItem } from "./SkillsItem.tsx";

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
    <>
      <StyledSection id={"skills"}>
        <Container>
          <Title supTextDop={""} supTitle={"Skills"} title={"My Tech Stack"} />
          <FlexWrapper
            wrap={"wrap"}
            gap={"20px"}
            direction={"row"}
            justify={"start"}
          >
            <SkillsItem iconList={IconList} />
          </FlexWrapper>
        </Container>
      </StyledSection>
      <Line />
    </>
  );
};
