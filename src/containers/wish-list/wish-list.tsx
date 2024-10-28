import React from 'react';
import { useAtomValue, useSetAtom } from 'jotai';

import { removeFromWishListAtom, wishListFilmsAtom } from '../../atoms/films';

import './wish-list.scss';

const WishList: React.FC = () => {
  const wishList = useAtomValue(wishListFilmsAtom);
  const removeFromWishList = useSetAtom(removeFromWishListAtom);

  if (wishList.length === 0) {
    return <div className="no-wishlist"><div>No films in your wish list</div></div>;
  } 

  const handleRemoveFromWishList = (filmId: string) => () => removeFromWishList(filmId);

  return (
    <div className="wishlist-container">
      <h1>Wish List</h1>
      <ul className="wishlist">
        {wishList.map((film) => (
          <li
            key={film.id}
            className="wishlist-item"
            style={{ backgroundColor: film.color }}
          >
            <p className="wishlist-title">{film.title}</p>
            <button onClick={handleRemoveFromWishList(film.id)}>Remove from wish list</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishList;
