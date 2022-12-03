import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOffice, fetchOffice } from '../redux/offices/officesSlice';

export default function NewOffice() {
  const [office, setOffice] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState(1);
  const [arrayImages, setarrayImages] = useState([]);

  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setOffice((values) => ({ ...values, [name]: value }));
  };

  const handleClick = () => {
    setarrayImages(arrayImages.push(office.images));
    dispatch(createOffice({
      title: office.title,
      area: office.area,
      description: office.description,
      occupancy: office.occupancy,
      images: arrayImages,
      basic_price: office.price,
      address: office.address,
      user_id: user,
    })).then(() => {
      dispatch(fetchOffice());
      navigate('/myoffices');
    });
    setUser(1);
    setOffice('');
    setarrayImages([]);
  };

  return (
    <form>
      <label htmlFor={office.title}>
        Office Title:
        <input
          className="bg-gray-200"
          type="text"
          name="title"
          value={office.title || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor={office.area}>
        Office Area:
        <input
          className="bg-gray-200"
          type="number"
          name="area"
          value={office.area || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor={office.description}>
        Office Description:
        <textarea
          className="bg-gray-200"
          name="description"
          value={office.description || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor={office.occupancy}>
        Office Occupancy:
        <input
          className="bg-gray-200"
          type="number"
          name="occupancy"
          value={office.occupancy || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor={office.images}>
        Office Images:
        <input
          className="bg-gray-200"
          type="text"
          name="images"
          value={office.images || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor={office.price}>
        Office Price:
        <input
          className="bg-gray-200"
          type="number"
          name="price"
          value={office.price || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor={office.address}>
        Office Address:
        <input
          className="bg-gray-200"
          type="text"
          name="address"
          value={office.address || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="button" onClick={handleClick}>Create Office</button>
    </form>
  );
}
