import { NavLink } from 'react-router-dom';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <header>
      <nav>
        {navItems.map(({ href, text }) => (
          <NavLink to={href}>{text}</NavLink>
        ))}
      </nav>
    </header>
  );
};
