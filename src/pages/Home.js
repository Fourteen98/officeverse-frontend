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
        id={office.id}
        title={office.title}
        description={office.description}
        area={office.area}
        occupancy={office.occupancy}
        images={office.images}
        basicPrice={office.basic_price}
        address={office.address}
        user_id={office.user_id}
      />
    ));
  }

  return (
    <section className="border-2 max-w-7xl h-screen mx-auto pt-6  px-8 sm:px-16 ">
      <div className="grid grid-rows-2 grid-flow-col gap-2 auto-cols-fr space-x-1">
        {content}
      </div>
    </section>
  );
};

export default Home;
