import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Office from '../components/Office';

const Home = () => {
  const officeList = useSelector((state) => state.offices.offices);
  const status = useSelector((state) => state.offices.status);

  let content;
  if (status === 'succeeded') {
    content = officeList.map((office) => (
      <Link
        to={`/offices/${office.id}`}
        key={office.id}
      >
        <Office
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
      </Link>
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
