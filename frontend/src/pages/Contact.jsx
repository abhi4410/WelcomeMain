import React, { useState } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import { toast } from 'react-toastify'; // Import react-toastify for toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Import styles for react-toastify

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Send data to Web3Forms using fetch
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          access_key: '66cec739-a870-461b-9ab6-1c71ab5fbd8d', // Replace with your actual Web3Forms access key
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Show success toast
        toast.success('Message sent successfully!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Reset the form fields
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        // Show error toast if submission fails
        toast.error('Failed to send message. Please try again.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error(error);
      // Show error toast if there's an exception
      toast.error('An error occurred. Please try again later.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="pt-24">
      {/* Title */}
      <div className="text-center text-2xl">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Contact Section */}
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        {/* Image */}
        <img
          className="w-full md:max-w-[480px] rounded-lg shadow-lg"
          src={assets.contact_img}
          alt="Contact Us"
        />

        {/* Form */}
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />

            {/* Contact Number Field */}
            <input
              type="number"
              name="phone"
              placeholder="Contact Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />

            {/* Email Field */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />

            {/* Message Field */}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded h-32"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-rose-500 hover:bg-rose-600 transition-colors text-white p-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;