/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const SingleOffice = (props) => {
  const {
    title, address, basicPrice, images,
  } = props;

  return (
    <div className="w-lg p-2 m-auto bg-white shadow-lg rounded-2xl">
      <img src={images[0]} alt="office" className="min-h-30 max-h-30 object-contain" />
      <div className="p-4 m-3 bg-blue-400 rounded-lg">
        <p className="text-xl font-bold text-white ">
          {title}
        </p>
        <p className="text-xs text-gray-50">
          {address}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-white">
            $
            {' '}
            {basicPrice}
          </p>
        </div>
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
  basicPrice: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  // user_id: PropTypes.number.isRequired,
};

export default SingleOffice;
