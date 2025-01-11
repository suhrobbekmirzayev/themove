import { useState, useEffect } from 'react';
import MovieCard from '@/components/common/MovieCardProps'; 
import Navbar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/footer/Footer';
import FilterPanel from '@/pages/movies/popular/FilterPanel';

const Airing = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=fbb2ad881df28e33842f45f5313e2b21');
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar/>
      <div className="container mx-auto w-[75%] flex ">
        <div className="mt-2 flex gap-3 justify-center h-full">
          <div>
            <h1 className="text-xl ml-4 text-black">TV Shows Airing Today</h1>
            <FilterPanel/>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.name}
                releaseDate={movie.first_air_date}
                rating={Math.trunc(movie.vote_average * 10)} 
                imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            ))}
            <button className='w-[840px] bg-[#02b4e4] mb-5 p-[15px] rounded-[15px] text-white font-bold text-base'>
              Load More
            </button>
          </div>

        </div>
      </div>
  <Footer />
  
    </>
  );
}

export default Airing;
