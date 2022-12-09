import React from 'react';
import { useSelector } from 'react-redux';
import Reservation from '../components/Reservation';

const MyReservations = () => {
  const reservationList = useSelector((state) => state.reservations.reservations);
  const status = useSelector((state) => state.reservations.status);

  let content;
  if (status === 'succeeded') {
    content = reservationList.map((reservation) => (
      <Reservation
        key={reservation.id}
        id={reservation.id}
        start_date={reservation.start_date}
        end_date={reservation.end_date}
        user_id={reservation.user_id}
        office_id={reservation.office_id}
        office={reservation.office}
        services={reservation.services}
        peripherals={reservation.peripherals}
      />
    ));
  }

  return (
    <div className="container flex flex-col items-center h-full w-full mx-auto">
      <ul className="flex flex-col p-5">
        {content}
      </ul>
    </div>
  );
};
export default MyReservations;
