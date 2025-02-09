// import rocket from "../../assets/images/rocketweb.png";
// import styled from "styled-components";
import { Icon } from "../icons/Icon.tsx";
import styled from "styled-components";

export const Logo = () => {
  return (
    <Link href="#">
      {/*<Icon*/}
      {/*  iconId="rocketWebIcon"*/}
      {/*  width={"70"}*/}
      {/*  height={"70"}*/}
      {/*  viewBox={"0 0 1080 1080"}*/}
      {/*/>*/}
      <Icon
        iconId="rocketWebFull"
        width={"auto"}
        height={"100%"}
        viewBox={"0 0 1830 470"}
      />
      {/*<Image src={rocket} alt="rocketweb" />

      <Icon iconId="gitIcon" viewBox={"0 0 88 88"} />
      <Icon iconId="vscode" viewBox={"0 0 112 112"} />
      <Icon iconId="viteIcon" viewBox={"0 0 256 257"} />
      <Icon iconId="react" viewBox={"0 0 256 257"} />

      <svg
        width="50"
        height="50"
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M44 0C19.69 0 0 19.69 0 44C0 63.47 12.595 79.915 30.085 85.745C32.285 86.13 33.11 84.81 33.11 83.655C33.11 82.61 33.055 79.145 33.055 75.46C22 77.495 19.14 72.765 18.26 70.29C17.765 69.025 15.62 65.12 13.75 64.075C12.21 63.25 10.01 61.215 13.695 61.16C17.16 61.105 19.635 64.35 20.46 65.67C24.42 72.325 30.745 70.455 33.275 69.3C33.66 66.44 34.815 64.515 36.08 63.415C26.29 62.315 16.06 58.52 16.06 41.69C16.06 36.905 17.765 32.945 20.57 29.865C20.13 28.765 18.59 24.255 21.01 18.205C21.01 18.205 24.695 17.05 33.11 22.715C36.63 21.725 40.37 21.23 44.11 21.23C47.85 21.23 51.59 21.725 55.11 22.715C63.525 16.995 67.21 18.205 67.21 18.205C69.63 24.255 68.09 28.765 67.65 29.865C70.455 32.945 72.16 36.85 72.16 41.69C72.16 58.575 61.875 62.315 52.085 63.415C53.68 64.79 55.055 67.43 55.055 71.555C55.055 77.44 55 82.17 55 83.655C55 84.81 55.825 86.185 58.025 85.745C66.7597 82.796 74.3497 77.1822 79.7268 69.6937C85.1039 62.2052 87.9974 53.219 88 44C88 19.69 68.31 0 44 0Z"
          fill="black"
        />
      </svg>*/}
    </Link>
  );
};

const Link = styled.a`
  height: 70px;
  width: 225px;
`;

// const Image = styled.img`
//   max-width: 200px;
// `;
