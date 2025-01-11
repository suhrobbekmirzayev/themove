import { useEffect, useState } from "react";

export default function Tv() {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = "fbb2ad881df28e33842f45f5313e2b21"; 

  useEffect(() => {
    const fetchTrendingTV = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`);
        if (!response.ok) {
          throw new Error("error");
        }
        const data = await response.json();
        setTvShows(data.results); 
        setLoading(false); 
      } catch (error) {
        console.error("error:", error);
        setLoading(false);
      }
    };

    fetchTrendingTV();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex justify-center gap-4">
      {tvShows.map((show) => (
        <div key={show.id} className="relative text-center">
          
          <img
            className="w-full h-[300px] object-cover rounded-md"
            src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
            alt={show.name || show.title}
          />
          <h3 className="text-black mt-2">{show.name || show.title}</h3>
          <span className="text-gray-600">{show.first_air_date || show.release_date}</span>
        </div>
      ))}
    </div>
  );
}
