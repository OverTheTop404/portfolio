import { StyledSection } from "../../../components/Section.tsx";
import { Container } from "../../../components/Container.tsx";
import { Title } from "../../../components/Title.tsx";
import { Line } from "../../../components/Line.tsx";
import { Tabs } from "../../../components/tabs/Tabs.tsx";
import fox from "../../../assets/images/works/modx/fox.jpg";
import armo from "../../../assets/images/works/modx/armo.jpg";
import mamaBoss from "../../../assets/images/works/modx/mamaboss.jpg";
import stomatolog from "../../../assets/images/works/modx/stomatolog.jpg";
import epoxy from "../../../assets/images/works/modx/epoxy.jpg";
import rocket from "../../../assets/images/works/modx/rocket.jpg";

const works = {
  modx: [
    { title: "mamaboss.io", url: "https://mamaboss.io/", img: mamaBoss },
    { title: "foxspb.com", url: "https://foxspb.com/", img: fox },
    { title: "epoxytraining.us", url: "https://epoxytraining.us/", img: epoxy },
    { title: "rocketweb.pro", url: "https://rocketweb.pro/", img: rocket },
    {
      title: "stomatology64.ru",
      url: "https://stomatology64.ru/",
      img: stomatolog,
    },
    {
      title: "armoglaze.com",
      url: "https://armoglazeservice.com/",
      img: armo,
    },
  ],
  nexoos: [
    { title: "asd", url: "asd", img: rocket },
    { title: "asd", url: "asd", img: rocket },
    { title: "asd", url: "asd", img: rocket },
    { title: "asd", url: "asd", img: rocket },
    { title: "asd", url: "asd", img: rocket },
    { title: "asd", url: "asd", img: rocket },
  ],
  react: [
    { title: "123", url: "asd", img: fox },
    { title: "123", url: "asd", img: fox },
    { title: "123", url: "asd", img: fox },
    { title: "asd", url: "asd", img: fox },
    { title: "asd", url: "asd", img: fox },
    { title: "asd", url: "asd", img: fox },
  ],
};

export const Cases = () => {
  return (
    <>
      <StyledSection id={"projects"}>
        <Container>
          <Title
            supTextDop={""}
            supTitle={"Portfolio"}
            title={"Recent works"}
            align={"center"}
          />
          <Tabs works={works} />
        </Container>
      </StyledSection>
      <Line />
    </>
  );
};
