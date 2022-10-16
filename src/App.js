import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Header from './layout/Header';
import Home from './pages/Home';
import VerPizza from "./pages/VerPizza";
import Carrito from "./pages/Carrito";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Context from "./context/context";

function App() {
  const [listadocompra, setCompra] = useState([]);
  const globalState = { listadocompra, setCompra };
  return (
    <>
      <Context.Provider value={ globalState }>
        <BrowserRouter>
          <Navbar />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<VerPizza />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
