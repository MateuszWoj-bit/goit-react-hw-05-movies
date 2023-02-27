import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { key } from '../../asset/pass';
import { Loader } from 'components/Loader/Loader'; 

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTV, setTrendingTV] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`
        );
        const data = await response.json();
        setTrendingMovies(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
        setTrendingMovies([]);
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

    useEffect(() => {
      setIsLoading(true);
      const fetchTrendingTv = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`
          );
          const data = await response.json();
          setTrendingTV(data.results);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching trending tv:', error);
          setTrendingTV([]);
          setIsLoading(false);
        }
      };

      fetchTrendingTv();
    }, []);

  return (
    <div>
      <h1>Trending Movies Today</h1>
      {isLoading && <Loader />}
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/goit-react-hw-05-movies/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
      <h1>Trending TV Today</h1>
      {isLoading && <Loader />}
      <ul>
        {trendingTV.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/goit-react-hw-05-movies/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
