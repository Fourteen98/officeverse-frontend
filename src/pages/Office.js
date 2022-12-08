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
          key={office.id}
          id={office.id}
          title={office.title}
          description={office.description}
          area={office.area}
          occupancy={office.occupancy.toString()}
          images={office.images}
          basicPrice={office.basic_price}
          address={office.address}
          user_id={office.user_id}
        />
      </Link>
    ));
  }

  return (
    <section className="border-2 max-w h-auto py-6 px-8 sm:px-16">
      <div className="grid gap-4 justify-items-center xxl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {content}
      </div>
    </section>
  );
};

export default Office;
