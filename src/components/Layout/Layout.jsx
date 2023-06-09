import { Outlet, NavLink } from 'react-router-dom';
import css from './Layout.module.css';
import styled from 'styled-components';
import { Suspense } from 'react';

const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: red;
    text-decoration: underline;
  }
`;

export const Layout = () => {
  return (
    <>
      <header className={css.Header}>
        <nav>
          <Link to="/" className={css.NavItem}>
            Home
          </Link>
          <Link to="/movies" className={css.NavItem}>
            Movies
          </Link>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};
