import React from 'react';
import { useSelector } from 'react-redux';
import Office from '../components/Office';

const Home = () => {
  const officeList = useSelector((state) => state.offices.offices);
  const status = useSelector((state) => state.offices.status);

  let content;
  if (status === 'succeeded') {
    content = officeList.map((office) => (
      <Office
        key={office.id}
        id={office.id}
        title={office.title}
        description={office.description}
        area={office.area}
        occupancy={office.occupancy}
        images={office.images}
        basic_price={office.basic_price}
        address={office.address}
        user_id={office.user_id}
      />
    ));
  }

  return (
    <>
      <h1>Office List</h1>
      {content}
    </>
  );
};

export default Home;
