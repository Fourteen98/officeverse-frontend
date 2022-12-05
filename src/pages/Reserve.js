import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { createReservation, fetchReservations } from '../redux/reservations/reservationsSlice';

export default function Reserve() {
  const officeList = useSelector((state) => state.offices.offices);

  const servicesList = useSelector((state) => state.services.services);

  const peripheralsList = useSelector((state) => state.peripherals.peripherals);

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [office, setOffice] = useState(1);

  const [checkedStateServices, setCheckedStateServices] = useState(new Array(9).fill(false));
  const [arrayServices, setArrayServices] = useState([]);

  const [checkedStatePeripherals, setCheckedStatePeripherals] = useState(new Array(9).fill(false));
  const [arrayPeripherals, setArrayPeripherals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const arr = checkedStateServices.map((element, index) => {
      if (element) {
        return index + 1;
      }
      return null;
    });
    setArrayServices(arr.filter(Number));
  }, [checkedStateServices]);

  useEffect(() => {
    const arr = checkedStatePeripherals.map((element, index) => {
      if (element) {
        return index + 1;
      }
      return null;
    });
    setArrayPeripherals(arr.filter(Number));
  }, [checkedStatePeripherals]);

  const handleOnChangeServices = (position) => {
    const updatedCheckedStateServices = checkedStateServices.map((item, index) => (
      index === position ? !item : item));
    setCheckedStateServices(updatedCheckedStateServices);
  };

  const handleOnChangePeripherals = (position) => {
    const updatedCheckedStatePeripherals = checkedStatePeripherals.map((item, index) => (
      index === position ? !item : item));
    setCheckedStatePeripherals(updatedCheckedStatePeripherals);
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(createReservation({
      start_date: startDate,
      end_date: endDate,
      office_id: office,
      service_ids: arrayServices,
      peripheral_ids: arrayPeripherals,
    })).then(() => {
      dispatch(fetchReservations());
      navigate('/my-reservations');
    });
    setStartDate('');
    setEndDate('');
    setOffice(1);
    setCheckedStateServices(new Array(9).fill(false));
    setCheckedStatePeripherals(new Array(9).fill(false));
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
      {servicesList.map((service, index) => (
        <div key={`service ${service.id}`}>
          <input
            type="checkbox"
            name={service.name}
            value={service.id}
            checked={checkedStateServices[index]}
            onChange={() => handleOnChangeServices(index)}
          />
          <label htmlFor={service.name}>
            {' '}
            {service.name}
          </label>
          <br />
        </div>
      ))}

      <p>Choose your peripherals</p>
      {peripheralsList.map((peripheral, index) => (
        <div key={`peripheral ${peripheral.id}`}>
          <input
            type="checkbox"
            name={peripheral.name}
            value={peripheral.id}
            checked={checkedStatePeripherals[index]}
            onChange={() => handleOnChangePeripherals(index)}
          />
          <label htmlFor={peripheral.name}>
            {' '}
            {peripheral.name}
          </label>
          <br />
        </div>
      ))}

      <button type="button" onClick={handleClick}>Create Reservation</button>
    </>
  );
}
