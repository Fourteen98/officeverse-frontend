import React from 'react';
// import '@testing-library/jest-dom';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
// import MyReservations from '../pages/MyReservations';
// import renderWithProviders from '../utils/test-utils';
import Office from '../components/Office';

/* const handlers = [
  rest.get('/api/http://127.0.0.1:4000/api/v1/users/1/reservations/1', (req, res, ctx) => res(ctx.json('John Smith'), ctx.delay(150))),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());

test('fetches & receives a user after clicking the fetch user button', async () => {
  renderWithProviders(<MyReservations />);

  expect(await screen.findByText(/John Smith/i)).toBeInTheDocument();
}); */

/* describe('MyReservations page testing using snapshots', () => {
  it('MyReservations page renders', () => {
  const tree = renderer
	  .create(<MyReservations />);
	  expect(tree).toMatchSnapshot();
  });
}); */

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

