import NavBar from './componentes/NavBar'
import './App.css'
import '../src/css/menu.css'
import Home from './componentes/Home';
import About from './componentes/About';
import Contact from './componentes/Contact';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [active, setActive] = useState("");
  const [activeMovile, setActiveMovile] = useState("");
  const [abrir, setAbrir] = useState("");
  const [icon, setIcon] = useState("fa fa-bars");
  const [iconFlecha, setIconFlecha] = useState("fa fa-arrow-left");
  const [iconFlechaCombo, setIconFlechaCombo] = useState("fa fa-arrow-down");


  const cambio = () => {
    if (active === "") {
      setActive("active");
      setIconFlecha("fa fa-arrow-right");
    }
    else {
      setActive("");
      setIconFlecha("fa fa-arrow-left");
    }
  }
  const cambioBtn = () => {
    if (activeMovile === "") {
      setActiveMovile("active-movile");
      setIcon("fa fa-times");
    }
    else {
      setActiveMovile("");
      setIcon("fa fa-bars");
    }
  }
  const combo = () => {
    if (abrir === "") {
      setAbrir("abrir");
      setIconFlechaCombo("fa fa-arrow-up");
    }
    else {
      setAbrir("");
      setIconFlechaCombo("fa fa-arrow-down");
    }
  }

  return (
    <div>
      <NavBar active={active} activeMovile={activeMovile} cambioBtn={cambioBtn}
        cambio={cambio} icon={icon} iconFlecha={iconFlecha} combo={combo} abrir={abrir}
        iconFlechaCombo={iconFlechaCombo}></NavBar>
      <div className={"pagina-completa " + active}>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
