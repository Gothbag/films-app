import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

import { IFilm, FilmCategory } from '../types/films';
import { FILMS } from '../constants';

export const filmsAtom = atom<IFilm[]>(FILMS);

export const filmsByCategoryAtom = atomFamily((category: FilmCategory) => atom(
  (get) => get(filmsAtom).filter(film => film.category === category),
));

export const wishListAtom = atom<string[]>([]);

export const addToWishListAtom = atom(
  null,
  (get, set, id: IFilm['id']) => {
    set(wishListAtom, [...get(wishListAtom), id]);
  },
);

export const isFilmInWishListAtom = atomFamily((id: IFilm['id']) => atom(
  (get) => get(wishListAtom).includes(id),
));

export const filmByIdAtom = atomFamily((id: IFilm['id']) => atom(
  (get) => get(filmsAtom).find(film => film.id === id),
));

export const removeFromWishListAtom = atom(
  null,
  (get, set, id: IFilm['id']) => {
    set(wishListAtom, get(wishListAtom).filter(filmId => filmId !== id));
  },
);

export const wishListFilmsAtom = atom(
  (get) => {
    const wishListFilmIds = get(wishListAtom);
    return get(filmsAtom).filter(film => wishListFilmIds.includes(film.id));
  }
);