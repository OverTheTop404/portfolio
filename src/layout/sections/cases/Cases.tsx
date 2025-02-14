import { StyledSection } from "../../../components/Section.tsx";
import { Container } from "../../../components/Container.tsx";
import { Title } from "../../../components/Title.tsx";
import { FlexWrapper } from "../../../components/FlexWrapper.tsx";
import { Line } from "../../../components/Line.tsx";
//import { useState } from "react";
//import styled from "styled-components";

// const works = [
//   {
//     modx: [
//       { title: "EpoxyTraining", url: "https://epoxytraining.us/", img: "asd" },
//       { title: "ArmoGlaze", url: "https://armoglazeservice.com/", img: "asd" },
//       { title: "RocketWeb", url: "https://rocketweb.pro/", img: "asd" },
//       { title: "FoxSpb", url: "https://foxspb.com/", img: "asd" },
//       { title: "Ponton64", url: "asd", img: "asd" },
//       { title: "asd", url: "asd", img: "asd" },
//     ],
//   },
//   {
//     shops: [
//       { title: "asd", url: "asd", img: "asd" },
//       { title: "asd", url: "asd", img: "asd" },
//       { title: "asd", url: "asd", img: "asd" },
//       { title: "asd", url: "asd", img: "asd" },
//       { title: "asd", url: "asd", img: "asd" },
//       { title: "asd", url: "asd", img: "asd" },
//     ],
//   },
//   {
//     react: [
//       { title: "asd", url: "asd", img: "asd" },
//       { title: "asd", url: "asd", img: "asd" },
//       { title: "asd", url: "asd", img: "asd" },
//       { title: "asd", url: "asd", img: "asd" },
//       { title: "asd", url: "asd", img: "asd" },
//       { title: "asd", url: "asd", img: "asd" },
//     ],
//   },
//   {
//     any: [
//       { title: "asd", url: "asd", img: "asd" },
//       { title: "asd", url: "asd", img: "asd" },
//       { title: "asd", url: "asd", img: "asd" },
//     ],
//   },
// ];
//
// const [work, setWork] = useState("modx");

export const Cases = () => {
  return (
    <>
      <StyledSection id={"projects"}>
        <Container>
          <Title
            supTextDop={""}
            supTitle={"Portfolio"}
            title={"Recent works"}
          />
          <FlexWrapper justify={"start"} wrap={"wrap"} gap={"20px"}>
            <ul>
              {/*<li>*/}
              {/*  <PanelBtn onClick={() => setWork("Modx")}>Modx</PanelBtn>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <PanelBtn onClick={() => setWork("Shops")}>Shops</PanelBtn>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <PanelBtn onClick={() => setWork("React")}>React</PanelBtn>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <PanelBtn onClick={() => setWork("Any")}>Any</PanelBtn>*/}
              {/*</li>*/}
            </ul>
            <div>asd</div>
          </FlexWrapper>
        </Container>
      </StyledSection>
      <Line />
    </>
  );
};

// const PanelBtn = styled.button`
//   padding: 5px;
// `;
