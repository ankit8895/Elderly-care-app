import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import MeditationPage from './pages/MeditationPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/meditation' element={<MeditationPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
