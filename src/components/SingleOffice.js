/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const SingleOffice = (props) => {
  const {
    title, images, address, basicPrice,
  } = props;
  return (
    <div className="border-2 flex h-56 w-44 flex-col items-center mt-5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
      <div className="relative h-40 w-44">
        <img className="object-fill rounded-lg h-40 w-44" src={images} alt="office" />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-xs">
          {title}
        </span>
        <span className="text-xs text-gray-400">
          {address}
        </span>
        <span className="text-xs text-gray-400">
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
  images: PropTypes.string.isRequired,
  basicPrice: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  // user_id: PropTypes.number.isRequired,
};

export default SingleOffice;
