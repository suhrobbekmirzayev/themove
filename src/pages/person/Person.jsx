import {  useState, useEffect, useRef } from 'react';
import Footer from '@/components/layout/footer/Footer';
import Navbar from '@/components/layout/navbar/Navbar';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Person = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const movieRefs = useRef([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/person/popular?api_key=fbb2ad881df28e33842f45f5313e2b21&language=en-US&page=${page}`
        );
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, [page]);

  useEffect(() => {
    gsap.fromTo(
      movieRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
      }
    );
  }, [movies]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }



  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 custom-container">
        <h1 className="text-2xl font-bold mb-4 ml-[180px]">Popular People</h1>
        <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map((person, index) => (
            <Link key={index} to={`/Peoples/Users/${person.id}`}>
            <div
              ref={(el) => (movieRefs.current[index] = el)}
              className="max-w-[270px] rounded overflow-hidden shadow-lg bg-white"
            >
              <img
                className="w-[270px] h-[270px] object-center"
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                alt={person.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{person.name}</div>
                <p className="text-gray-700 text-base">
                  Popularity: {Math.trunc(person.popularity)}
                </p>
                <p className="text-gray-700 text-base">
                  Language: {person.known_for && person.known_for.length > 0
                    ? person.known_for[0].original_language
                    : 'No overview available'}
                </p>
              </div>
            </div>
          </Link>
          
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-20 mt-4 mb-4">
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>Page: {page}</span>
          <button
            onClick={handleNextPage}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Person;
