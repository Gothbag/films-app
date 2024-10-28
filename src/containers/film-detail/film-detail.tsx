import { useAtomValue, useSetAtom } from 'jotai';
import React from 'react';
import { useParams } from 'react-router-dom';

import {
  addToWishListAtom,
  filmByIdAtom,
  isFilmInWishListAtom,
  removeFromWishListAtom,
} from '../../atoms/films';

import './film-detail.scss';

const FilmDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const film = useAtomValue(filmByIdAtom(id as string));
  const addToWishList = useSetAtom(addToWishListAtom);
  const removeFromWishList = useSetAtom(removeFromWishListAtom);
  const isInWithList = useAtomValue(isFilmInWishListAtom(id as string));

  if (!film) {
    return <div>Film not found</div>;
  }

  const handleAddToWishList = () => addToWishList(film.id);

  const handleRemoveFromWishList = () => removeFromWishList(film.id);

  return (
    <div className="film-detail-container" style={{ backgroundColor: film.color }}>
      <header className="film-header">
        <h1 className="film-title">{film.title}</h1>
      </header>

      <div className="film-detail-main">
        <div className="film-color-box" style={{ backgroundColor: film.color }}>
          <p className="film-color-title">{film.title}</p>
        </div>

        <div className="film-content">
          <p className="film-description">{film.description}</p>
          {!isInWithList && <button onClick={handleAddToWishList} className="add">
            Add to wish list
          </button>}
          {isInWithList && <button onClick={handleRemoveFromWishList} className="remove">
            Remove from wish list
          </button>}
        </div>
      </div>

      <footer className="additional-info">
        <p><strong>Release year:</strong> {film.releaseYear}</p>
        <p><strong>Genre:</strong>  {film.category}</p>
        <p><strong>Director:</strong>  {film.director}</p>
        <p><strong>Writer:</strong>  {film.writer}</p>
        <p><strong>Synopsis:</strong>  {film.synopsis}</p>
      </footer>
    </div>
  );
};

export default FilmDetail;
