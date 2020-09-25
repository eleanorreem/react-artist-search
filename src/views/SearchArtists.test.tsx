import React from 'react';
import { render } from '@testing-library/react';
import SearchArtists from './SearchArtists';

test('renders learn react link', () => {
  const { getByText } = render(<SearchArtists />);
  const searchButton = getByText(/Search/i);
  expect(searchButton).toBeInTheDocument();
});
