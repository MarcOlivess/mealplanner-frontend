import React, { useEffect, useState } from 'react';
import './App.css';
import { Calendar } from './components/Calendar';
import LoginButton from './login';
import Main from './components/Main';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Layout from './routes/Layout';
import Planners from './routes/Planners';
import Planner from './components/Planner';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route index element={<LandingPage />}></Route>
        <Route path='home' element={<Layout />}>
          <Route path='planners' element={<Planners />}></Route>
          <Route path="planners/:plannerId" element={<Planner />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
