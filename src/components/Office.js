/* eslint-disable camelcase */

import React from 'react';
import PropTypes from 'prop-types';

const Office = (props) => {
  const {
    id, title, description, area, occupancy, images, basic_price, address, user_id,
  } = props;
  return (
    <>
      <hr />
      <div>
        Office
        {id}
      </div>
      <p>
        Title:
        {title}
      </p>
      <p>
        description:
        {description}
      </p>
      <p>
        area:
        {area}
      </p>
      <p>
        occupancy:
        {occupancy}
      </p>
      <p>
        images:
        {images}
      </p>
      <p>
        basic_price:
        {basic_price}
      </p>
      <p>
        address:
        {address}
      </p>
      <p>
        user_id:
        {user_id}
      </p>
    </>

  );
};

Office.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  occupancy: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  basic_price: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  user_id: PropTypes.number.isRequired,
};

export default Office;
