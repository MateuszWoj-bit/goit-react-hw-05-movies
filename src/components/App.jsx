import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import TVShowDetails from 'pages/TvshowDetails/TvshowDetails';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Providers = lazy(() => import('./Providers/Providers'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={<MovieDetails />}
          >
            <Route
              path="/goit-react-hw-05-movies/movies/:movieId/cast"
              element={<Cast />}
            />
            <Route
              path="/goit-react-hw-05-movies/movies/:movieId/reviews"
              element={<Reviews />}
            />
            <Route
              path="/goit-react-hw-05-movies/movies/:movieId/watch/providers"
              element={<Providers />}
            />
          </Route>
          <Route
            path="/goit-react-hw-05-movies/tv/:showId"
            element={<TVShowDetails />}
          ></Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
