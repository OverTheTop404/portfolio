import styled from "styled-components";
import { SupTitle } from "./SupTitle.tsx";

type TitlePropTypes = {
  title?: string;
  supTitle?: string;
  supTextDop?: string;
  align?: string;
};

export const Title = (props: TitlePropTypes) => {
  return (
    <TitleContainer align={props.align}>
      <SupTitle marked={`${props.supTitle}`} text={`${props.supTextDop}`} />
      <StyledTitle>{props.title}</StyledTitle>
    </TitleContainer>
  );
};

const StyledTitle = styled.h2`
  font-size: 2.5rem;
  font-family: "Glober SemiBold", sans-serif;
  margin-bottom: 3rem;
`;

const TitleContainer = styled.div<TitlePropTypes>`
  text-align: ${(props) => props.align || "left"};
`;
