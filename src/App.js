import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Jakut from './components/jakut/jakut';
import Jaksel from './components/jaksel/jaksel';
import Jakpus from './components/jakpus/jakpus';
import Jaktim from './components/jaktim/jaktim';
import PSeribu from './components/p_seribu/p_seribu';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import Jakbar from './components/jakbar/jakbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/north-jakarta' element={<Jakut/>}/>
        <Route path='/west-jakarta' element={<Jakbar/>}/>
        <Route path='/south-jakarta' element={<Jaksel/>}/>
        <Route path='/central-jakarta' element={<Jakpus/>}/>
        <Route path='/east-jakarta' element={<Jaktim/>}/>
        <Route path='/pulau-seribu' element={<PSeribu/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
