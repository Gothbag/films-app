import React from 'react';
import { describe, expect, test } from 'vitest'

import Homepage from '../../src/containers/homepage'

import { render, screen } from '../test-utils';

describe('Homepage', () => {
  test('renders category carousels', () => {
    render(<Homepage />);

    const actionCategory = screen.getByText(/Cidade de Deus/i);
    const crimeCategory = screen.getByText(/The Dark Knight/i);
    const romanceCategory = screen.getByText(/La La Land/i);

    expect(actionCategory).toBeInTheDocument();
    expect(crimeCategory).toBeInTheDocument();
    expect(romanceCategory).toBeInTheDocument();
  });
});
