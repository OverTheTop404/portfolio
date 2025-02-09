import styled from "styled-components";
import { SupTitle } from "./SupTitle.tsx";

type TitlePropTypes = {
  title: string;
  supTitle?: string;
  supTextDop?: string;
};

export const Title = (props: TitlePropTypes) => {
  return (
    <div>
      <SupTitle marked={`${props.supTitle}`} text={`${props.supTextDop}`} />
      <StyledTitle>{props.title}</StyledTitle>
    </div>
  );
};

const StyledTitle = styled.h2`
  font-size: 2.5rem;
  font-family: "Glober SemiBold", sans-serif;
  margin-bottom: 3rem;
`;
