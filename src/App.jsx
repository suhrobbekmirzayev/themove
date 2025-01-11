import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";
import Popular from "./pages/movies/popular/Popular";
import NewPlaying from "./pages/movies/newPlayer/NewPlaying";
import Upcoming from "./pages/movies/upcom/UpComing";
import TopRated from "./pages/movies/top-rate/TopRated";
import TvShow from "./pages/tv-show/TvShow";
import Airing from "./pages/tv-show/airing/Airing";
import Person from "./pages/person/Person";
import Persons from "./pages/person/Persons";
import Users from "./pages/person/user/Users";
import More from "./components/common/discuss/More";
import Discuss from "./components/common/discuss/Discuss";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />}>
        <Route path="popular" element={<Popular />} />
        <Route path="now-playing" element={<NewPlaying />} />
        <Route path="Up-coming" element={<Upcoming />} />
        <Route path="Top-rated" element={<TopRated />} />
      </Route>
      <Route path="/TVshow" element={<TvShow />}>
        <Route path="popular" element={<Popular />} />
        <Route path="Airing Today" element={<Airing />} />
        <Route path="OnTv" element={<Airing />} />
        <Route path="Top-rated" element={<TopRated />} />
      </Route>
      <Route path="Peoples" element={<Persons />}>
        <Route path="person" element={<Person />} />
        <Route path="Users/:id" element={<Users />} />
      </Route>

      <Route path="More" element={<More />}>
        <Route path="discuss" element={<Discuss />} />
        
      </Route>

    </Routes>
  );
}

export default App;
