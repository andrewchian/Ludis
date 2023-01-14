import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout';
import Events from './Events/Events';
import Home from './Home/Home';
import Profile from './Profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Layout />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path='events'
            element={<Events />}
          />
          <Route
            path='profile'
            element={<Profile />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
