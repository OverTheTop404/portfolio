import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { theme } from "../styles/Theme.ts";

export const Menu = () => {
  const menuItemList = [
    { id: "about", anchor: "About" },
    { id: "skills", anchor: "Skills" },
    { id: "projects", anchor: "Projects" },
    { id: "contact", anchor: "Contact" },
  ];

  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const scrollY = window.scrollY;

    menuItemList.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const { offsetTop, clientHeight } = element;
        if (scrollY >= offsetTop && scrollY < offsetTop + clientHeight) {
          setActiveSection(section.id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavMenu>
      <ul>
        {menuItemList.map((item, index) => {
          return (
            <li key={index}>
              <HashLink
                smooth
                to={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
              >
                <span>#</span>
                {item.anchor}
              </HashLink>
            </li>
          );
        })}
      </ul>
    </NavMenu>
  );
};

const NavMenu = styled.nav`
  ul {
    display: flex;
    align-items: center;
  }
  li + li {
    margin-left: 20px;
  }
  li a {
    font-size: 18px;
    letter-spacing: 1px;
    &:hover span {
      color: ${theme.color.accent};
    }
  }
  li a.active span {
    color: ${theme.color.accent};
  }
`;
