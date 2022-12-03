import React from 'react';
import { render, screen } from '@testing-library/react';
import Office from '../components/Office';

const office = {
  id: 1,
  title: 'test office',

  description: 'Asperiores mollitia ex sunt.',

  area: 'atque',

  occupancy: 3,

  images: ['https://loremflickr.com/50/50/office'],

  basic_price: '95.43',

  address: 'Suite 119 96402 Towne Drives, North Ivory, WY 54894',

  user_id: 1,
};

describe('MyReservation', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  render(<Office {...office} />);
  it('', () => {
    expect(screen.getByText('Title:test office'));
  });
});
