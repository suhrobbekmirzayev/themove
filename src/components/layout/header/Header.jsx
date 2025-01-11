import { useEffect, useState } from 'react';
import myBackground from '/image/movie.jpg';

const Header = () => {
  const [movies, setMovies] = useState([]); 
  const [currentBg, setCurrentBg] = useState(myBackground); 
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=fbb2ad881df28e33842f45f5313e2b21&language=en-US&page=${page}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, [page]); 

  useEffect(() => {
    if (movies.length > 0) {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * movies.length);
        const selectedMovie = movies[randomIndex];

        if (selectedMovie && selectedMovie.backdrop_path) {
          const newBg = `https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`;
          setCurrentBg(newBg);
        }
      }, 5000);

      return () => clearInterval(interval); 
    }
  }, [movies]);

  return (
    <div
      className="container w-full bg-cover bg-center h-[450px] mb-8"
      style={{
        backgroundImage: `url(${currentBg})`,
      }}
    >
      <div className=" text-[#7dd3fc]  flex justify-center ">
        <div className="mt-20">
        <h1 className=' text-3xl mb-5 w-[800px]'>
          Welcome. <br />
           Millions of movies, TV shows and people to discover. Explore
          now.
        </h1>
      <div className="flex w-[1000px]">
      <input
            type="text"
            placeholder="Searching..."
            className="w-[900px] px-4 py-2 pr-12 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button className="relative w-20 h-10 inset-y-0 right-0 px-3 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
            Search
          </button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
