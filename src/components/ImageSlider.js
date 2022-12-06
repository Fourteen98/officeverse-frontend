import React from 'react';
import PropTypes from 'prop-types';

const Imageslider = (props) => {
  const { images } = props;
  return (
    <div className="relative h-40 w-full">
      <img src={images[0]} alt={images[0].name} className="w-full h-full object-cover" />
    </div>
  );
}

// props validation
Imageslider.prototype = {
  images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default Imageslider;
