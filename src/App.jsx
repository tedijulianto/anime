import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Discover from "./pages/Discover";
import Recent from "./pages/Recent";
import AnimeList from "./pages/AnimeList";
import OnGoing from "./pages/OnGoing";
import Completed from "./pages/Completed";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Control from "./pages/Control";
import Logout from "./pages/Logout";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/animelist" element={<AnimeList />} />
        <Route path="/ongoing" element={<OnGoing />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/setting" element={<Control />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Sidebar>
  );
}

export default App;
