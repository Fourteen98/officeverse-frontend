import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { createReservation, fetchReservations } from '../redux/reservations/reservationsSlice';

export default function Reserve() {
  const officeList = useSelector((state) => state.offices.offices);
  const officeStatus = useSelector((state) => state.offices.status);

  const servicesList = useSelector((state) => state.services.services);
  const servicesStatus = useSelector((state) => state.services.status);

  const peripheralsList = useSelector((state) => state.peripherals.peripherals);
  const peripheralsStatus = useSelector((state) => state.peripherals.status);

  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [office, setOffice] = useState();

  const [checkedStateServices, setCheckedStateServices] = useState([]);

  const [arrayServices, setArrayServices] = useState([]);

  const [checkedStatePeripherals, setCheckedStatePeripherals] = useState([]);
  const [arrayPeripherals, setArrayPeripherals] = useState([]);

  const [servicesPrice, setServicesPrice] = useState(0);
  const [peripheralsPrice, setPeripheralsPrice] = useState(0);
  const [officePrice, setOfficePrice] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (servicesStatus === 'succeeded') {
      const arr = checkedStateServices.map((element, index) => {
        if (element) {
          return index + 1;
        }
        return null;
      });
      setArrayServices(arr.filter(Number));
    }
  }, [checkedStateServices, servicesStatus]);

  useEffect(() => {
    if (peripheralsStatus === 'succeeded') {
      const arr = checkedStatePeripherals.map((element, index) => {
        if (element) {
          return index + 1;
        }
        return null;
      });
      setArrayPeripherals(arr.filter(Number));
    }
  }, [checkedStatePeripherals, peripheralsStatus]);

  const calculateTotalPrice = (updatedCheckedState, list) => {
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + parseFloat(list[index].price);
        }
        return sum;
      },
      0,
    );
    return totalPrice;
  };

  const handleOnChangeServices = (position) => {
    const updatedCheckedStateServices = checkedStateServices.map((item, index) => (
      index === position ? !item : item));
    setCheckedStateServices(updatedCheckedStateServices);
    setServicesPrice(calculateTotalPrice(updatedCheckedStateServices, servicesList));
  };

  const handleOnChangePeripherals = (position) => {
    const updatedCheckedStatePeripherals = checkedStatePeripherals.map((item, index) => (
      index === position ? !item : item));
    setCheckedStatePeripherals(updatedCheckedStatePeripherals);
    setPeripheralsPrice(calculateTotalPrice(updatedCheckedStatePeripherals, peripheralsList));
  };

  const handleClick = () => {
    dispatch(createReservation({
      start_date: startDate,
      end_date: endDate,
      office_id: office,
      service_ids: arrayServices,
      peripheral_ids: arrayPeripherals,
    })).then(() => {
      dispatch(fetchReservations());
    });
    setStartDate();
    setEndDate();
    setOffice(officeList[0].id);
    setOfficePrice(parseFloat(officeList[0].basic_price));
    setCheckedStateServices(new Array(servicesList.length).fill(false));
    setCheckedStatePeripherals(new Array(peripheralsList.length).fill(false));
    setServicesPrice(0);
    setPeripheralsPrice(0);
  };

  const handleOfficeChange = (e) => {
    setOffice(e.target.value);
    setOfficePrice(parseFloat(officeList
      .find((office) => (office.id === parseInt(e.target.value, 10)))
      .basic_price));
  };

  useEffect(() => {
    if (officeStatus === 'succeeded') {
      setOffice(officeList[0].id);
      setOfficePrice(parseFloat(officeList[0].basic_price));
    }
  }, [officeList, officeStatus]);

  useEffect(() => {
    if (servicesStatus === 'succeeded') {
      setCheckedStateServices(new Array(servicesList.length).fill(false));
    }
  }, [servicesList, servicesStatus]);

  useEffect(() => {
    if (peripheralsStatus === 'succeeded') {
      setCheckedStatePeripherals(new Array(peripheralsList.length).fill(false));
    }
  }, [peripheralsList, peripheralsStatus]);

  useEffect(() => {
    setTotal(officePrice + servicesPrice + peripheralsPrice);
  }, [officePrice, servicesPrice, peripheralsPrice]);

  return (
    <div className="w-full flex flex-col p-12 gap-3 items-center">
      <div className="flex items-center gap-2 w-full flex-col">
        <p className="self-start">Choose an office</p>
        <select className="w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name="offices" id="offices" value={office} onChange={handleOfficeChange}>
          {officeList.map((office) => (
            <option key={office.id} value={office.id}>
              {office.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex w-full gap-2">
        <div className="flex-1 w-full">
          <p>Start Date</p>
          <DatePicker className="w-full border border-black h-10 rounded text-center" selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        <div className="flex-1 w-full">
          <p>End Date</p>
          <DatePicker className="w-full border border-black h-10 rounded text-center" selected={endDate} onChange={(date) => setEndDate(date)} />
        </div>
      </div>

      <div className="flex w-full gap-2">
        <div className="flex-1 w-full">
          <p>Choose your services</p>
          <div>
            {servicesList.map((service, index) => (
              <div key={`service ${service.id}`}>
                <input
                  type="checkbox"
                  name={service.name}
                  id={service.name}
                  value={service.id}
                  checked={checkedStateServices[index] || ''}
                  onChange={() => handleOnChangeServices(index)}
                />
                <label htmlFor={service.name}>
                  {' '}
                  {service.name}
                </label>
                <br />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full">
          <p>Choose your peripherals</p>
          <div>
            {peripheralsList.map((peripheral, index) => (
              <div key={`peripheral ${peripheral.id}`}>
                <input
                  type="checkbox"
                  name={peripheral.name}
                  id={peripheral.name}
                  value={peripheral.id}
                  checked={checkedStatePeripherals[index] || ''}
                  onChange={() => handleOnChangePeripherals(index)}
                />
                <label htmlFor={peripheral.name}>
                  {' '}
                  {peripheral.name}
                </label>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-60 m-4 text-right">
        <div className="text-center font-semibold">SUMMARY</div>
        <div className="flex">
          <div className="flex-1">Office:</div>
          <div className="flex-1">{`$${(officePrice).toFixed(2)}`}</div>
        </div>
        <div className="flex">
          <div className="flex-1">Services:</div>
          <div className="flex-1">{`$${(servicesPrice).toFixed(2)}`}</div>
        </div>
        <div className="flex border-b border-black">
          <div className="flex-1">Peripherals:</div>
          <div className="flex-1">{`$${(peripheralsPrice).toFixed(2)}`}</div>
        </div>
        <div className="flex mb-4">
          <div className="flex-1">Total:</div>
          <div className="flex-1">{`$${(total).toFixed(2)}`}</div>
        </div>
        <button className="bg-main-1 py-2 px-4 rounded text-white hover:bg-cyan-600 font-semibold" type="button" onClick={handleClick}>Create Reservation</button>
      </div>
    </div>
  );
}
