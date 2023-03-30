import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from 'pages/HomePage';
// import Movies from 'pages/MoviesPage';
// import MovieDetails from 'pages/MovieDatailsPage';
import { Layout } from './Layout';
// import { Cast } from './Cast';
// import { Reviews } from './Reviews';
import css from './Components.module.css';

const Home = lazy(() => import('../pages/HomePage'));
const Movies = lazy(() => import('../pages/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/MovieDatailsPage'));

const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <div className={css.Container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
