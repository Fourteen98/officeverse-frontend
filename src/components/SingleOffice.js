/* eslint-disable camelcase */
import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';

const SingleOffice = (props) => {
  const {
    title, images, occupancy,
  } = props;

  images.map((im) => console.log(im));
  // const officeImages = images.map((image) => (
  //   <div key={image.id} className="w-full h-96">
  //     <img src={image.url} alt={image.name} className="w-full h-full object-cover" />
  //   </div>
  // ));
  // <img className="object-fill rounded-lg h-40  min-w-full" src={images} alt="office" />

  return (
    <div className="border-2 flex h-54 w-96 md:w-auto lg:w-auto xl:min-w-auto xl:max-w-64 flex-col items-center rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
      <div className="relative h-40 w-full">
        <img src={images[0]} alt={images[0].name} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col p-2">
        <span className="font-semibold text-xs">
          Title :
          {title}
        </span>
        <span className="text-xs text-gray-400">
          Occupancy :
          {occupancy}
        </span>
        {/* <span className="text-xs text-gray-400">
          Price :
          $
          {basicPrice}
        </span> */}
      </div>
    </div>

  );
};

SingleOffice.propTypes = {
  // id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  // area: PropTypes.string.isRequired,
  occupancy: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  // basicPrice: PropTypes.string.isRequired,
  // address: PropTypes.string.isRequired,
  // user_id: PropTypes.number.isRequired,
};

export default SingleOffice;
