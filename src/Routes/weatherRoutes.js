import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Detail from '../components/Detail';
import Home from '../components/Home';
import Header from '../components/Header';

const weatherRoutes = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weather" element={<Detail />} />
    </Routes>
  </>
);

export default weatherRoutes;
