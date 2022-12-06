import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SingleOffice from '../components/SingleOfficeDetails';

const Office = () => {
  const officeList = useSelector((state) => state.offices.offices);
  const status = useSelector((state) => state.offices.status);

  let content;
  if (status === 'succeeded') {
    content = officeList.map((office) => (

      <Link to={`/offices/${office.id}`} key={office.id}>
        <SingleOffice
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
      </Link>
    ));
  }

  return (
    <section className="border-2 max-w-full h-screen mx-auto pt-12  px-12 sm:px-16 ">
      <div className="grid gap-8 justify-items-center xxl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 ">
        {content}
      </div>
    </section>
  );
};

export default Office;
