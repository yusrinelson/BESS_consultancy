// import React from 'react';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function ContactBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', surname: '', message: '' });
  const [errors, setErrors] = useState({});

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.surname) newErrors.surname = 'Surname is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {

      setFormData({ name: '', company: '', message: '' });
      toggleModal();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="Contact">
      <div className="banner bg-gradient-to-b from-[#ff9e27] to-[#FF8A00] bg-center bg-cover bg-no-repeat shadow-md text-white h-[8rem] flex justify-between md:justify-center gap-5 items-center absolute top-[-65px] left-0 right-0 z-30 mx-10 lg:mx-[7rem] px-8 rounded-md">
        <h1 className="text-xl text-white font-semibold">Lets`s Talk Business ? </h1>
        <span onClick={toggleModal} className="bg-green-700 text-white shadow-md px-4 py-2 rounded hover:cursor-pointer">
          Contact Us
        </span>
      </div>

      {isModalOpen && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
          <div className="bg-white text-black p-6 rounded shadow-lg w-96 relative">
            <h2 className="text-xl mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} action="" method="POST">
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Company</label>
                <input
                  type="text"
                  name="surname"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                Send
              </button>
            </form>
            <FaTimes onClick={toggleModal} className="mt-4 text-black cursor-pointer absolute top-0 right-5 text-2xl" />
          </div>
        </div>
      )}
    </div>
  );
}