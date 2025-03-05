import { useState, useEffect, useRef } from 'react';
import { FaTimes } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import Alert from './Alert';

export default function ContactBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [state, handleSubmit] = useForm("mzzdnqwk");
  
  const formRef = useRef(null); // Create a reference for the form

  useEffect(() => {
    if (state.succeeded) {
      setShowAlert(true);
      setIsModalOpen(false);
      console.log("submitted");

      //To Reset the form fields after its submitted
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state.succeeded]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
    if (state.succeeded && formRef.current) {
      formRef.current.reset(); // Clears the form fields
    }
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="Contact">
      <div className="banner bg-gradient-to-b from-[#ff9e27] to-[#FF8A00] bg-center bg-cover bg-no-repeat shadow-md text-white h-[8rem] flex justify-between md:justify-center gap-5 items-center absolute top-[-65px] left-0 right-0 z-30 mx-10 lg:mx-[7rem] px-8 rounded-md">
        <h1 className="text-xl text-white font-semibold">
          Let`s Talk Business?
        </h1>
        <span
          onClick={toggleModal}
          className="bg-green-700  text-white shadow-md px-4 py-2 rounded hover:cursor-pointer"
        >
          <p>Contact Us</p>
        </span>
      </div>

      {isModalOpen && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded shadow-lg w-96 relative">
            <h2 className="text-xl mb-4">Contact Us</h2>
            <form ref={formRef} onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Company</label>
                <input
                  type="text"
                  name="company"
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <ValidationError prefix="Company" field="company" errors={state.errors} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send"}
              </button>
            </form>
            <FaTimes
              onClick={toggleModal}
              className="mt-4 text-black cursor-pointer absolute top-0 right-5 text-2xl"
            />
          </div>
        </div>
      )}

      {showAlert && (
        <Alert
          message="Thanks for your message!"
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
}
