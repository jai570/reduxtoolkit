import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MovieDetails from "./Pages/Moviedetails/MovieDetails";
import MovieListing from "./Pages/Movielisting/MovieListing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movies" element={<MovieListing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
