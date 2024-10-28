import React from 'react';

import FilmCarousel from './components/film-carousel';
import { FilmCategory } from '../../types/films';

import './homepage.scss';

const Homepage: React.FC = () => {
  return (
    <div>
      <h1 className="carousel-header">Film Browser</h1>
      <div className="carousels-container">
        {Object.values(FilmCategory).map(
          category => <FilmCarousel category={category} key={category} />
        )}
      </div>
    </div>
  );
};

export default Homepage;
