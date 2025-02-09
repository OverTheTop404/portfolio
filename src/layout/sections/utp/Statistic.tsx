import styled from "styled-components";

type StatisticPropsType = {
  count: string;
  text: string;
};

export const Statistic = (props: StatisticPropsType) => {
  return (
    <StyledStatistic>
      <HowMatch>{props.count}</HowMatch>
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
