import React, { useEffect, useState } from 'react';
import './App.css';
import { Calendar } from './components/Calendar';
import LoginButton from './components/LoginButton';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Layout from './routes/Layout';
import Planners from './routes/Planners';
import Planner from './components/Planner';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />}></Route>
        <Route path='home' element={<Layout />}>
          <Route path='planners' element={<Planners />}></Route>
          <Route path="planners/:plannerId" element={<Planner />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
