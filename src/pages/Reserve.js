import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { createReservation, fetchReservations } from '../redux/reservations/reservationsSlice';

export default function Reserve() {
  const officeList = useSelector((state) => state.offices.offices);
  const servicesList = useSelector((state) => state.services.services);
  const peripheralsList = useSelector((state) => state.peripherals.peripherals);

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

      <p>Choose your services</p>
      {servicesList.map((service) => (
        <>
          <input type="checkbox" name={service.name} value={service.id} />
          <label htmlFor={service.name}>
            {' '}
            {service.name}
          </label>
          <br />
        </>
      ))}

      <p>Choose your peripherals</p>
      {peripheralsList.map((peripheral) => (
        <>
          <input type="checkbox" name={peripheral.name} value={peripheral.id} />
          <label htmlFor={peripheral.name}>
            {' '}
            {peripheral.name}
          </label>
          <br />
        </>
      ))}

      <button type="button" onClick={handleClick}>Create Reservation</button>
    </>
  );
}
