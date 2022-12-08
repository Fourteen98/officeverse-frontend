/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const SingleOffice = (props) => {
  const {
    title, address, basicPrice, images,
  } = props;

  return (
    <div className="border-2 flex h-72 w-96 md:w-64 lg:w-64 xl:w-64  xxl:w-64 flex-col items-center rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
      <div className="relative h-52 w-96 md:w-64 lg:w-64 xl:w-64 xxl:w-64">
        <div className="bg-cover bg-center h-full rounded-xl w-96 md:w-64 lg:w-64 xl:w-64 xxl:w-64">
          <div className="bg-cover bg-center h-full rounded-xl w-96 md:w-64 lg:w-64 xl:w-64 xxl:w-64">
            <img src={images[Math.floor(Math.random() * images.length)]} alt="office" className="h-52 rounded-t-xl w-96 md:w-64 lg:w-64 xl:w-64 xxl:w-64" />
          </div>
        </div>
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
  images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  basicPrice: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  // user_id: PropTypes.number.isRequired,
};

export default SingleOffice;
