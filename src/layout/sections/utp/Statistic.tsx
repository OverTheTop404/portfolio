import styled from "styled-components";
import { useEffect, useState } from "react";

type StatisticPropsType = {
  count: number;
  text: string;
};

export const Statistic = (props: StatisticPropsType) => {
  const val = props.count;
  const time = 1000 / val;

  const [currVal, setCurrVal] = useState(1);

  useEffect(() => {
    currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
  }, [currVal]);

  return (
    <StyledStatistic>
      <HowMatch>{currVal}+</HowMatch>
      <p>{props.text}</p>
    </StyledStatistic>
  );
};

const StyledStatistic = styled.div`
  p {
    font-size: 20px;
  }
`;

const HowMatch = styled.div`
  font-family: "globerbold", sans-serif;
  font-size: 3.5rem;
`;
