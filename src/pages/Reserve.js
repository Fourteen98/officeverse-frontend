import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { createReservation, fetchReservations } from '../redux/reservations/reservationsSlice';

export default function Reserve() {
  const officeList = useSelector((state) => state.offices.offices);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [office, setOffice] = useState();

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(createReservation({
      start_date: startDate,
      end_date: endDate,
      office_id: office,
    })).then(() => {
      dispatch(fetchReservations());
    });
    setStartDate('');
    setEndDate('');
    setOffice('');
  };

  return (
    <>
      <p>Choose an office</p>
      <select name="offices" id="offices" value={office} onChange={(e) => { setOffice(e.target.value); }}>
        {officeList.map((office) => (
          <option key={office.id} value={office.id}>
            {office.title}
          </option>
        ))}
      </select>
      <p>Start Date</p>
      <div className="p-2 bg-black">
        <DatePicker className="border-black" selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
      <p>End date Date</p>
      <div className="p-2 bg-black">
        <DatePicker className="border-black" selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>
      <button type="button" onClick={handleClick}>Create Reservation</button>
    </>
  );
}
