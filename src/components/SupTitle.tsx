import styled from "styled-components";
import { theme } from "../styles/Theme.ts";

type TitlePropTypes = {
  text?: string;
  endText?: string;
  marked: string;
};

export const SupTitle = (props: TitlePropTypes) => {
  return (
    <StyledMarkedWrap>
      {props.text && `${props.text} `}
      {props.marked && <StyledMarked> {props.marked}</StyledMarked>}
      {props.endText && ` ${props.endText}`}
    </StyledMarkedWrap>
  );
};

const StyledMarkedWrap = styled.div`
  font-size: 25px;
`;

const StyledMarked = styled.span`
  color: ${theme.color.accent} !important;
`;
