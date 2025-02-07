import styled from "styled-components";
import { Icon } from "../icons/Icon.tsx";

export const SocialIcons = () => {
  return (
    <>
      <FindMe>Find me on</FindMe>
      <LinkItems>
        <Link href={"#"}>
          <Icon
            iconId={"telegram"}
            width={"25"}
            height={"25"}
            viewBox={"0 0 40 34"}
          />
        </Link>
        <Link href={"#"}>
          <Icon
            iconId={"vk"}
            width={"25"}
            height={"25"}
            viewBox={"0 0 363.301 363.301"}
          />
        </Link>
        <Link href={"#"}>
          <Icon
            iconId={"gitIcon"}
            width={"25"}
            height={"25"}
            viewBox={"0 0 88 88"}
          />
        </Link>
        <Link href={"#"}>
          <Icon
            iconId={"discord"}
            width={"25"}
            height={"25"}
            viewBox={"0 0 25 20"}
          />
        </Link>
      </LinkItems>
    </>
  );
};

const FindMe = styled.span`
  display: block;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size: 20px;
`;

const LinkItems = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  background-color: #222222;
  margin-right: 10px;
  border-radius: 4px;
`;
