
import Leaderboard from "@/components/common/Leaderboard"
import MovieCarouse from "@/components/common/MovieCarouse"
import MovieCarousel from "@/components/common/MovieCarousel"
import Streaming from "@/components/common/Streaming"
import Footer from "@/components/layout/footer/Footer"
import Header from "@/components/layout/header/Header"
import Navbar from "@/components/layout/navbar/Navbar"


const Home = () => {
  return (
  <>
    <Navbar />
    <Header/>
    
     <MovieCarousel bg = {true} text1="Today" TEXT0="Trending" text2="This Week"/>
      <MovieCarouse/>
      <Streaming/>
      <MovieCarousel bg={false} text1="Movies" text2="TV"  text4="Free To Watch"></MovieCarousel>
      <Leaderboard/>
      <Footer/>
  </>
  )
}

export default Home