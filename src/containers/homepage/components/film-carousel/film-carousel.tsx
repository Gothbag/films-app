import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';

import { FilmCategory } from '../../../../types/films';
import { filmsByCategoryAtom } from '../../../../atoms/films';

import './film-carousel.scss';

interface FilmSlideshowProps {
  category: FilmCategory;
}

const FilmSlideshow: React.FC<FilmSlideshowProps> = ({ category }) => {
  const films = useAtomValue(filmsByCategoryAtom(category));

  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === films.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? films.length - 1 : prev - 1));
  };

  const handleSlideClick = (filmId: string) => {
    navigate(`/film/${filmId}`);
  };

  return (
    <div className="slideshow-container">
      {films.map((film, index) => (
        <div
          key={film.id}
          className={`slide fade ${index === currentSlide ? 'active' : ''}`}
          style={{
            display: index === currentSlide ? 'flex' : 'none',
            backgroundColor: film.color,
          }}
          onClick={() => handleSlideClick(film.id)}
        >
          <div className="numbertext">
            {index + 1} / {films.length}
          </div>
          <div className="film-title">{film.title}</div>
        </div>
      ))}

      <a className="prev" onClick={prevSlide}>
        &#10094;
      </a>
      <a className="next" onClick={nextSlide}>
        &#10095;
      </a>
    </div>
  );
};

export default FilmSlideshow;
