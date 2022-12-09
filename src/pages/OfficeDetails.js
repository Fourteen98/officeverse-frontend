import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SingleOfficeDetails from '../components/SingleOfficeDetails';

const OfficeDetails = () => {
  const officeList = useSelector((state) => state.offices.offices);
  const { id } = useParams();
  const office = officeList.find((office) => office.id === parseInt(id, 10));

  return (
    <section className="border-2 max-w h-screen pt-6 px-8 sm:px-16 ">
      <SingleOfficeDetails
        key={office.id}
        id={office.id}
        title={office.title}
        description={office.description}
        area={office.area}
        occupancy={office.occupancy.toString()}
        images={office.images}
        basic_price={office.basic_price}
        address={office.address}
        user_id={office.user_id}
      />
      {/* <button className="bg-main-1" onClick={handleClick} type="button">Reserve</button> */}
    </section>
  );
};

export default OfficeDetails;
