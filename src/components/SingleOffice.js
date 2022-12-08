/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const SingleOffice = (props) => {
  const {
    title, address, basicPrice, images,
  } = props;

  return (
    <div className="border-2 flex h-80 w-48 px-3 md:w-48 lg:w-64 xl:w-64  xxl:w-64 flex-col items-center rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
      <div className="bg-cover bg-center h-full rounded-xl w-48 md:w-48 lg:w-64 xl:w-64 xxl:w-64">
        <img src={images[Math.floor(Math.random() * images.length)]} alt="office" className="h-52 rounded-t-xl w-96 md:w-64 lg:w-64 xl:w-64 xxl:w-64" />
      </div>
      <div className="flex flex-col p-2">
        <span className="text-transform: capitalize font-semibold text-xs text-gray-600">
          {title}
        </span>
        <span className="text-xs text-gray-400">
          Address :
          {address}
        </span>
        <span className="text-xs text-gray-400">
          Price :
          {basicPrice}
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
  // occupancy: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  basicPrice: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  // user_id: PropTypes.number.isRequired,
};

export default SingleOffice;
