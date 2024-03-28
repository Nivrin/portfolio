import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { About } from './components/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Footer/>
    </div>
  );
}

export default App;
