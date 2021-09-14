import React from 'react';
import './App.css';
import Home from './component/Home'
import About from './component/About'
import { Framer } from "./component/Framer.tsx";
import Service from "./component/Service";
import Portfolio from "././component/Portfolio"
function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <div className="header__center">
        {/* <Framer /> */}
<Service/>
<Portfolio/>
      </div>
    </div>
  );
}

export default App;
