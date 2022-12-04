import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SingleOffice from '../components/SingleOffice';

const Office = () => {
  const officeList = useSelector((state) => state.offices.offices);
  const status = useSelector((state) => state.offices.status);

  let content;
  if (status === 'succeeded') {
    content = officeList.map((office) => (

      <Link to={`/offices/${office.id}`} key={office.id}>
        <SingleOffice
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
      </Link>
    ));
  }

  return (
    <section className="border-2 max-w-7xl h-screen mx-auto pt-6  px-8 sm:px-16 ">
      <div className="grid gap-2 justify-items-center xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-1 ">
        {content}
      </div>
    </section>
  );
};

export default Office;
