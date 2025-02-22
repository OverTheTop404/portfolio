import styled from "styled-components";
// import { HashLink } from "react-router-hash-link";
// import { useEffect, useState } from "react";
import { theme } from "../styles/Theme.ts";
import { Link } from "react-scroll";

export const Menu = () => {
  const menuItemList = [
    { id: "about", anchor: "About" },
    { id: "skills", anchor: "Skills" },
    { id: "projects", anchor: "Projects" },
    { id: "contact", anchor: "Contact" },
  ];

  return (
    <NavMenu>
      <ul>
        {menuItemList.map((item, index) => {
          return (
            <li key={index}>
              <Link
                activeClass="active"
                spy={true}
                to={item.id}
                smooth={true}
                offset={-90}
              >
                <span>#</span>
                {item.anchor}
              </Link>
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
    &:hover {
      cursor: pointer;
      span {
        color: ${theme.color.accent};
      }
    }
  }
  li a.active span {
    color: ${theme.color.accent};
  }
`;
