'use client'

import * as React from "react"
import CircularProgress from "./CircularProgress"
import { gsap } from "gsap"

export default function MovieCarousel({ text1, text2, TEXT0, text4, bg }) {
  const [activeTab, setActiveTab] = React.useState('text1')  
  const [Movies, SetMovies] = React.useState([])     
  const [loading, setLoading] = React.useState(true)    
  const [apiUrl, setApiUrl] = React.useState('https://api.themoviedb.org/3/trending/movie/day?api_key=fbb2ad881df28e33842f45f5313e2b21')

  const fetchMovies = async () => {
    setLoading(true);  
    try {
      const response = await fetch(apiUrl)
      const data = await response.json()  
      SetMovies(data.results) 
      setLoading(false)  
    } catch (error) {
      console.error('Error fetching movies:', error) 
      setLoading(false) 
    }
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    if (tab === 'text1') {
      setApiUrl('https://api.themoviedb.org/3/trending/movie/day?api_key=fbb2ad881df28e33842f45f5313e2b21')
    } else if (tab === 'text2') {
      setApiUrl('https://api.themoviedb.org/3/trending/movie/week?api_key=fbb2ad881df28e33842f45f5313e2b21')
    }
  }

  React.useEffect(() => {
    fetchMovies()  
  }, [apiUrl]) 

  React.useEffect(() => {
    if (Movies.length > 0) {
      gsap.fromTo(
        ".movie-item", 
        { opacity: 0, x: -100 }, 
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2 }
      );
    }
  }, [Movies]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
    
      <div className="flex items-center gap-10 mb-6">
        <h2 className="text-2xl font-bold">{TEXT0} {text4}</h2>
        <div className="inline-flex rounded-full border bg-gray-100 p-1">
          <button
            onClick={() => handleTabClick('text1')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'text1' ? 'bg-[#042542] text-[#a4d9c3]' : 'text-gray-500 hover:text-gray-900'}`}
          >
            {text1}
          </button>
          <button
            onClick={() => handleTabClick('text2')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'text2' ? 'bg-[#042542] text-[#a4d9c3]' : 'text-gray-500 hover:text-gray-900'}`}
          >
            {text2}
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center w-full h-[375px]">
          <span>Loading...</span>
        </div>
      ) : (
        <div className="overflow-x-auto flex gap-5 p-[20px 10px 20px 10px] h-[380px] w-full bg-cover bg-center"
          style={{
            backgroundImage: bg ? `url(${bg})` : ""
          }}
        >
          {Movies.map((Movie, index) => (
            <div key={index} className="relative flex-shrink-0 movie-item">
              <img
                className="w-[200px] h-[250px] overflow-hidden rounded-md"
                src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
                alt={Movie.title}
              />
              <div className="absolute top-[230px] left-2">
                <CircularProgress value={Math.trunc(Movie.vote_average * 10)} />
                <h4 className="mt-1 text-black font-bold cursor-pointer">{Movie.title}</h4>
                <span className="text-gray-500">{Movie.release_date}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
