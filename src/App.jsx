
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FavoritesPage from './components/Favorites';
import NavBar from './components/NavBar';
import Home from './components/Home';
import DetailMovie from './components/DetailMovie';
import Populares from './components/Populares';
import UltimosLanzamientos from './components/UltimosLanzamientos';
import Buscador from './components/Buscador';
import Footer from './components/Footer';

function App() {
  return (
   
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<DetailMovie />} />
          <Route path="/popular" element={<Populares />} />
          <Route path="/ultimoslanzamientos" element={<UltimosLanzamientos />} />
          <Route path="/buscador" element={<Buscador />} />
          <Route path="/favorites" element={<FavoritesPage/>} />
        </Routes>
        <Footer />
      </Router>
   
  );
}

export default App;
