import styled from "styled-components";
import { Icon } from "../icons/Icon.tsx";
import { theme } from "../../styles/Theme.ts";

const SocialList = [
  {
    icon: "telegram",
    viewBox: "0 0 40 34",
    link: "https://t.me/over_the_top_404",
  },
  {
    icon: "vk",
    viewBox: "0 0 363.301 363.301",
    link: "https://vk.com/over_the_top_404",
  },
  {
    icon: "gitHub",
    viewBox: "0 0 88 88",
    link: "https://github.com/OverTheTop404",
  },
  {
    icon: "discord",
    viewBox: "0 0 25 20",
    link: "https://discordapp.com/users/863116087033724949/",
  },
];

export const SocialIcons = () => {
  return (
    <>
      <FindMe>Find me on</FindMe>
      <LinkItems>
        {SocialList.map((item, index) => {
          return (
            <Link key={index} href={item.link} target={"_blank"}>
              <Icon
                iconId={item.icon}
                width={"25"}
                height={"25"}
                viewBox={item.viewBox}
              />
            </Link>
          );
        })}
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
  background-color: ${theme.color.secondaryBg};
  margin-right: 10px;
  border-radius: 4px;
  &:hover svg {
    fill: ${theme.color.accent};
  }
`;
