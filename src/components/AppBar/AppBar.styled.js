import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  height: 50px;
`;

export const NavWrapper = styled.nav`
  display: flex;
  gap: 10px;
`;

export const Nav = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: black;

  &.active {
    color: blue;
  }
`;
