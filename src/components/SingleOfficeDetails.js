/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Imageslider from './ImageSlider';

const SingleOffice = (props) => {
  const {
    title, images, occupancy,
  } = props;

  return (
    <div className="border-2 flex h-72 w-96 md:w-auto lg:w-auto xl:w-auto  xxl:w-auto flex-col items-center rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
      <div className="relative h-52 w-96 md:w-60 lg:w-64 xl:w-64 xxl:w-64">
        <Imageslider slides={images} />
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
