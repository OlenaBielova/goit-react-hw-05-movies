import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavWrapper, Nav } from './SharedLayout.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <NavWrapper>
          {/* <Nav to="/">Home</Nav>
          <Nav to="/movies">Movies</Nav> */}
          {navItems.map(({ href, text }) => (
            <Nav key={text} to={href}>
              {text}
            </Nav>
          ))}
        </NavWrapper>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
