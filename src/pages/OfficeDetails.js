import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Office from '../components/SingleOfficeDetails';

const OfficeDetails = () => {
  const officeList = useSelector((state) => state.offices.offices);
  const { id } = useParams();
  const office = officeList.find((office) => office.id === parseInt(id, 10));

  return (
    <>
      <h1>Office Details</h1>
      <Office
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
    </>
  );
};

export default OfficeDetails;
