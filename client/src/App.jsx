import React from 'react';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import About  from './pages/About';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Plans from './pages/Plans';  

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {< Home />} />
          <Route path='/home' element = {< Home />} />
          <Route path='/Login' element = {< Login />} />
          <Route path='/Dashboard' element = {< Dashboard />} />
          <Route path='/Plans' element = {< Plans />} />
          <Route path='/Contact' element = {< Contact />} />
          <Route path='/About' element = {< About />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;