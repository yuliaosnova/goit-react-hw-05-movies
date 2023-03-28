import { Outlet } from 'react-router-dom';
import { Header, Link } from './App.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
