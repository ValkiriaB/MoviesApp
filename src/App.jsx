import NavBar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./components/Home.jsx"
import DetailMovie from './components/DetailMovie.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Populares from './components/Populares.jsx'
import UltimosLanzamientos from './components/UltimosLanzamientos.jsx'
import Buscador from "./components/Buscador.jsx";

function App() {
  
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home/>} />      
      <Route path="/movie/:id" element={<DetailMovie />} />
       <Route path="/popular" element={<Populares />}  />  
       <Route path="/ultimoslanzamientos" element ={<UltimosLanzamientos/>}  />  
       <Route path="/buscador" element={<Buscador/>}/>  
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
