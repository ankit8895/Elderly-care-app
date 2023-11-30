import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import MeditationPage from './pages/MeditationPage';
import MemoryAidPage from './pages/MemoryAidPage';
import MealPlannerPage from './pages/MealPlannerPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/meditation' element={<MeditationPage />} />
          <Route path='/memory-aid' element={<MemoryAidPage />} />
          <Route path='/meal-planner' element={<MealPlannerPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
