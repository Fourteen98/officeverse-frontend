import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOffice, fetchOffice } from '../redux/offices/officesSlice';

const NewOffice = () => {
  const [office, setOffice] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.user);

  const [user, setUser] = useState(currentUser.id);
  const [arrayImages, setarrayImages] = useState([]);

  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setOffice((values) => ({ ...values, [name]: value }));
  };

  const handleClick = () => {
    setarrayImages(arrayImages.push(office.images1));
    setarrayImages(arrayImages.push(office.images2));
    setarrayImages(arrayImages.push(office.images3));
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
    <div className="w-full h-auto p-9 flex justify-center bg-blue-200">
      <form className="flex justify-center w-full max-w-xl">
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-blue-50 rounded-lg shadow dark:bg-gray-800">
          <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Add New Office
          </div>
          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2">
              <div className="relative ">
                <input
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Office Name"
                  type="text"
                  name="title"
                  value={office.title || ''}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className=" relative ">
                <input
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Office Area"
                  type="number"
                  name="area"
                  value={office.area || ''}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className=" relative ">
                <input
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Office Occupancy"
                  type="number"
                  name="occupancy"
                  value={office.occupancy || ''}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className=" relative ">
                <input
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Office Price"
                  type="number"
                  name="price"
                  value={office.price || ''}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className=" relative ">
                <input
                  className="mt-1 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Office Image"
                  type="text"
                  name="images1"
                  value={office.images1 || ''}
                  onChange={handleChange}
                />
                <input
                  className="mt-1 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Office Image"
                  type="text"
                  name="images2"
                  value={office.images2 || ''}
                  onChange={handleChange}
                />
                <input
                  className="mt-1 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Office Image"
                  type="text"
                  name="images3"
                  value={office.images3 || ''}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className=" relative ">
                <input
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Office Address"
                  type="text"
                  name="address"
                  value={office.address || ''}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-span-2">
              <textarea
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Office Description"
                name="description"
                value={office.description || ''}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2 text-right">
              <button
                type="button"
                onClick={handleClick}
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Create Office
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewOffice;
