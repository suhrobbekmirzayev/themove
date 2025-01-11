import React, { useEffect, useState } from "react";

const TodayAiringShows = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API URL
    const apiUrl = `https://api.themoviedb.org/3/tv/airing_today?api_key=YOUR_API_KEY&language=en-US`;

  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setShows(data.results);  
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false);
      });
  }, []); 

  // UI
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Today's Airing TV Shows</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {shows.map((show) => (
          <div key={show.id} className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
              className="w-full h-auto rounded-lg"
            />
            <h3 className="font-bold">{show.name}</h3>
            <p>{show.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayAiringShows;
