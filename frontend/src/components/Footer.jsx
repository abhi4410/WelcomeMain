import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className='container mx-auto px-4 flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mb-10 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="WelcomeFurniture Logo" />
            <p className='w-full md:w-2/3 text-gray-600'>
              Welcome to WelcomeFurniture, where timeless craftsmanship meets contemporary design. 
              We provide beautifully crafted furniture that transforms your living spaces with elegance and comfort, 
              built to last for generations.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-rose-500">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-rose-500">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-rose-500">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-rose-500">
                <Linkedin size={20} />
              </a>
            </div>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li className="hover:text-rose-500 transition-colors">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-rose-500 transition-colors">
                  <Link to="/about">About us</Link>
                </li>
                <li className="hover:text-rose-500 transition-colors">
                  <Link to="/products">Products</Link>
                </li>
                <li className="hover:text-rose-500 transition-colors">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="hover:text-rose-500 transition-colors">
                  <Link to="/terms">Terms & Conditions</Link>
                </li>
                <li className="hover:text-rose-500 transition-colors">
                  <Link to="/privacy">Privacy policy</Link>
                </li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>123 Furniture Avenue</li>
                <li>New York, NY 10001</li>
                <li className="mt-2">+1-555-123-4567</li>
                <li className="hover:text-rose-500 transition-colors">
                  <a href="mailto:info@welcomefurniture.com">info@welcomefurniture.com</a>
                </li>
                <li className="mt-2">Mon-Fri: 9:00 AM - 8:00 PM</li>
                <li>Sat-Sun: 10:00 AM - 6:00 PM</li>
            </ul>
        </div>
      </div>

      <div className="container mx-auto px-4">
          <hr className="border-gray-200" />
          <p className='py-5 text-sm text-center text-gray-600'>
            Copyright &copy; {new Date().getFullYear()} WelcomeFurniture - All Rights Reserved.
          </p>
      </div>
    </footer>
  )
}

export default Footer
