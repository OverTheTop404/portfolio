import styled from "styled-components";

export const Menu = () => {
  return (
    <NavMenu>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
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
    color: #fff;
    letter-spacing: 1px;
  }
`;
