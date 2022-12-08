/* eslint-disable camelcase */

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteReservation, fetchReservations } from '../redux/reservations/reservationsSlice';

const Reservation = (props) => {
  const {
    id, start_date, end_date, office, services, peripherals,
  } = props;

  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(deleteReservation(e.target.id)).then(() => {
      dispatch(fetchReservations());
    });
  };

  return (
    <>
      <li className="flex flex-row m-2 w-auto border-gray-400">
        <div className="shadow border select-none bg-white dark:bg-gray-800 rounded-md flex flex-col flex-1 items-center p-4 justify-center md:flex-row">
          <div className="w-full mb-5 md:mb-0 flex flex-col items-center justify-center mr-4 md:w-20 md:h-20">
            <img alt={office.title} src={office.images[0]} className="w-full md:mx-auto object-cover rounded" />
          </div>
          <div className="flex-1 pl-1 md: mx-6">
            <div className="font-medium dark:text-white">
              <strong>
                {office.title}
              </strong>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-200">
              {office.address}
            </div>
            <div className="flex w-full justify-center gap-5">
              <ul className="m-3 list-disc">
                <p className="text-sm font-semibold">Services</p>
                {services.map((service) => (
                  <li key={service.id}>
                    <p className="text-xs">
                      {' '}
                      {service.name}
                    </p>
                  </li>
                ))}
              </ul>
              <ul className="m-3 list-disc">
                <p className="text-sm font-semibold">Peripherals</p>
                {peripherals.map((peripheral) => (
                  <li key={peripheral.id}>
                    <p className="text-xs">
                      {' '}
                      {peripheral.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-200 my-4">
            <p>
              Start Date:
              {' '}
              {start_date}
            </p>
            <p>
              End Date:
              {' '}
              {end_date}
            </p>
          </div>
          <button type="button" id={id} className="flex justify-center w-24 p-2 mx-8 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={handleClick}>Delete</button>
        </div>
      </li>
    </>

  );
};

Reservation.propTypes = {
  id: PropTypes.number.isRequired,
  start_date: PropTypes.string.isRequired,
  end_date: PropTypes.string.isRequired,
  office: PropTypes.oneOfType([PropTypes.object]).isRequired,
  services: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  peripherals: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default Reservation;
