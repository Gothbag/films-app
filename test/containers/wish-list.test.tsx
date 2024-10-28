import React from 'react';
import { describe, expect, test } from 'vitest';

import { render, screen, fireEvent, TestProvider } from '../test-utils';

import WishList from '../../src/containers/wish-list'

import { FILMS } from '../../src/constants';
import { wishListAtom } from '../../src/atoms/films';

describe('WishList', () => {
  test('renders "No films in your wish list" message when empty', () => {
    render(<TestProvider initialValues={[[wishListAtom, []]]}>
      <WishList />
    </TestProvider>);

    const message = screen.getByText(/No films in your wish list/i);
    expect(message).toBeInTheDocument();
  });

  test('displays films added to the wish list', () => {
    render(<TestProvider initialValues={[[wishListAtom, [FILMS[1].id, FILMS[2].id]]]}>
      <WishList />
    </TestProvider>);
    const wishListFilms = [FILMS[1], FILMS[2]];

    wishListFilms.forEach(film => {
      expect(screen.getByText(film.title)).toBeInTheDocument();
    });
  });

  test('removes a film from the wish list', () => {
    render(<TestProvider initialValues={[[wishListAtom, [FILMS[1].id]]]}>
      <WishList />
    </TestProvider>);
    const wishListFilms = [FILMS[1]];
    const removeButton = screen.getByText(/Remove from wish list/i);

    fireEvent.click(removeButton);
    expect(screen.queryByText(wishListFilms[0].title)).not.toBeInTheDocument();
  });
});
