// TVShowDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { key } from '../../asset/pass';

const TVShowDetails = () => {
  const { showId } = useParams();
  const [tvShowDetails, setTVShowDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTVShowDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${showId}?language=en-US&api_key=${key}`
        );
        const data = await response.json();
        setTVShowDetails(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching TV show details:', error);
        setIsLoading(false);
      }
    };

    fetchTVShowDetails();
  }, [showId]);

  if (isLoading) {
    return <div>Loading TV show details...</div>;
  }

  return (
    <div>
      <h1>{tvShowDetails.name}</h1>
      <p>{tvShowDetails.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${tvShowDetails.poster_path}`}
        alt={tvShowDetails.name}
      />
      <p>First Air Date: {tvShowDetails.first_air_date}</p>
      <p>Last Air Date: {tvShowDetails.last_air_date}</p>
      <p>Number of Seasons: {tvShowDetails.number_of_seasons}</p>
      <p>Number of Episodes: {tvShowDetails.number_of_episodes}</p>
      <p>Genres: {tvShowDetails.genres.map(genre => genre.name).join(', ')}</p>
      <p>Original Language: {tvShowDetails.original_language}</p>
      <p>Status: {tvShowDetails.status}</p>
      <p>Tagline: {tvShowDetails.tagline}</p>
      <p>Popularity: {tvShowDetails.popularity}</p>
      <p>
        Homepage:{' '}
        <a
          href={tvShowDetails.homepage}
          target="_blank"
          rel="noopener noreferrer"
        >
          {tvShowDetails.homepage}
        </a>
      </p>
      <p>
        Networks:{' '}
        {tvShowDetails.networks.map(network => network.name).join(', ')}
      </p>     
    </div>
  );
};

export default TVShowDetails;
