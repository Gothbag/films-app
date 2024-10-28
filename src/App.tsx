import React from 'react'
import {
  Route,
  Routes,
} from "react-router-dom";

import Home from './containers/homepage';
import FilmDetail from './containers/film-detail';
import WishList from './containers/wish-list';
import Navbar from './components/navbar';

const App: React.FC = () => (<>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/film/:id" element={<FilmDetail />} />
    <Route path="/wishlist" element={<WishList />} />
  </Routes>
</>
);

export default App;
