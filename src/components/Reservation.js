/* eslint-disable camelcase */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteReservation, fetchReservations } from '../redux/reservations/reservationsSlice';

const Reservation = (props) => {
  const {
    id, start_date, end_date, user_id, office_id, office,
  } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    fetchReservations();
  }, []);

  const handleClick = (e) => {
    dispatch(deleteReservation(e.target.className));
  };

  return (
    <>
      <hr />
      <div>
        Reservation
        {id}
      </div>
      <p>
        start_date:
        {start_date}
      </p>
      <p>
        end_date:
        {end_date}
      </p>
      <p>
        user_id:
        {user_id}
      </p>
      <p>
        office_id:
        {office_id}
      </p>
      <p>
        office title:
        {office.title}
      </p>
      <p>
        office address:
        {office.address}
      </p>
      <button type="button" className={id} onClick={handleClick}>Delete</button>
    </>

  );
};

Reservation.propTypes = {
  id: PropTypes.number.isRequired,
  start_date: PropTypes.string.isRequired,
  end_date: PropTypes.string.isRequired,
  user_id: PropTypes.number.isRequired,
  office_id: PropTypes.number.isRequired,
  office: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Reservation;