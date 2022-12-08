import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
// import makeAnimated from 'react-select/animated';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const [servicesPrice, setServicesPrice] = useState(0);
  const [peripheralsPrice, setPeripheralsPrice] = useState(0);
  const [officePrice, setOfficePrice] = useState(0);
  const [total, setTotal] = useState(0);

  const location = useLocation();
  let officeId = 1;
  if (location.state !== null) {
    officeId = location.state.officeId;
  }

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

  const handleOnChangeServices = (services) => {
    setServicesPrice(services.reduce(
      (sum, service) => sum + parseFloat(service.price), 0,
    ));
  };

  const handleOnChangePeripherals = (peripherals) => {
    setPeripheralsPrice(peripherals.reduce(
      (sum, peripheral) => sum + parseFloat(peripheral.price), 0,
    ));
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
      navigate('/my-reservations');
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
      const officeReserve = officeList.find((office) => (office.id === parseInt(officeId, 10)));
      setOffice(officeReserve.id || officeList[0].id);
      setOfficePrice(
        parseFloat(officeReserve.basic_price) || parseFloat(officeList[0].basic_price),
      );
    }
  }, [officeList, officeStatus, officeId]);

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

  const peripheralOptions = [];
  for (let i = 0; i < peripheralsList.length; i += 1) {
    peripheralOptions.push({
      value: peripheralsList[i].id,
      label: peripheralsList[i].name,
      price: peripheralsList[i].price,
    });
  }

  const servicesOptions = [];
  for (let i = 0; i < servicesList.length; i += 1) {
    servicesOptions.push({
      value: servicesList[i].id,
      label: servicesList[i].name,
      price: servicesList[i].price,
    });
  }

  return (
    <div className="w-full flex item-center justify-center flex-col p-2 gap-3 items-center">
      <div className="mx-auto w-full min-w-max min-h-max flex flex-col md:flex-row gap-9 p-4">
        <div className="w-4/5 p-2 flex flex-col gap-5">
          <div className="flex items-center gap-2 w-full flex-col">
            <p className="self-start">Choose your office</p>
            <select className="w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name="offices" id="offices" value={office} onChange={handleOfficeChange}>
              {officeList.map((office) => (
                <option key={office.id} value={office.id}>
                  {office.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-2">
            <div className="flex-1 w-full">
              <p>Start Date</p>
              <DatePicker className="w-full border border-black h-10 rounded text-center" selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div className="flex-1 w-full">
              <p>End Date</p>
              <DatePicker className="w-full border border-black h-10 rounded text-center" selected={endDate} onChange={(date) => setEndDate(date)} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-2">
            <div className="flex-1 w-full">
              <p>Choose your services</p>
              <div className="w-full">
                <Select options={servicesOptions} isMulti onChange={(services) => handleOnChangeServices(services)} /> {/* eslint-disable-line */}
              </div>
            </div>
            <div className="flex-1 w-full">
              <p>Choose your peripherals</p>
              <div className="w-full">
                <Select options={peripheralOptions} isMulti onChange={(peripherals) => handleOnChangePeripherals(peripherals)} /> {/* eslint-disable-line */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 max-w-4/5 text-left pt-10 p-4 bg-gray-50 ">
          <div className="text-left font-semibold text-3xl pb-5">Order Summary</div>
          <div className="flex w-full">
            <div className="flex-1 text-lg text-gray-500">Office</div>
            <div className="flex-1 font-semibold text-gray-600 text-right">{`$${(officePrice).toFixed(2)}`}</div>
          </div>
          <div className="flex w-full">
            <div className="flex-1 text-lg text-gray-500">Services</div>
            <div className="flex-1 font-semibold text-gray-600 text-right">{`$${(servicesPrice).toFixed(2)}`}</div>
          </div>
          <div className="flex pb-8">
            <div className="flex-1 text-lg text-gray-500">Peripherals</div>
            <div className="flex-1 font-semibold text-gray-600 text-right">{`$${(peripheralsPrice).toFixed(2)}`}</div>
          </div>
          <div className="flex mb-4">
            <div className="flex-1 text-xl font-semibold">Estimated Total</div>
            <div className="flex-1 font-semibold text-gray-800 text-right">{`$${(total).toFixed(2)}`}</div>
          </div>
          <button className="bg-main-1 py-2 px-4 rounded text-white hover:bg-cyan-600 font-semibold" type="button" onClick={handleClick}>Create Reservation</button>
        </div>
      </div>
    </div>
  );
}
