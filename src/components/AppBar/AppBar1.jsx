import { Header, NavWrapper, Nav } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <Header>
      <NavWrapper>
        {navItems.map(({ href, text }) => (
          <Nav key={text} to={href}>
            {text}
          </Nav>
        ))}
      </NavWrapper>
    </Header>
  );
};
