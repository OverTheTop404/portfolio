import { Icon } from "../icons/Icon.tsx";
import styled from "styled-components";

export const Logo = () => {
  return (
    <Link href="#">
      <Icon
        iconId="rocketWebFull"
        width={"auto"}
        height={"100%"}
        viewBox={"0 0 1830 470"}
      />
    </Link>
  );
};

const Link = styled.a`
  height: 70px;
  width: 225px;
`;
