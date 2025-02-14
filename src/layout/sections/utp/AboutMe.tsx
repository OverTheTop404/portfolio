import styled from "styled-components";
import { SupTitle } from "../../../components/SupTitle.tsx";

export const AboutMeText = () => {
  return (
    <>
      <SupTitle marked={`I\`m`} text={"Hi there,"} endText={"a"} />
      {/*<h2>Andrey Chaplygin</h2>*/}
      <Title>Frontend Developer</Title>
      <Description>
        My name Andrey Chaplygin, consectetur adipisicing elit. A aliquid at
        atque blanditiis, cupiditate dolor eius excepturi exercitationem fugiat
        omnis quae quidem quod, sed tempore veniam. Aspernatur dolore eum
        facilis impedit, iste laboriosam.
      </Description>
    </>
  );
};

const Title = styled.h1`
  //margin-bottom: 1rem;
  font-family: "Glober SemiBold", sans-serif;
  font-size: 5rem;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.7;
  margin-bottom: 4rem;
`;
