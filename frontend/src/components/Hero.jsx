import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = ({ isScrolled }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 min-h-screen">
        <motion.div
          className="flex flex-col justify-center p-10 md:p-16 lg:p-24 mt-16 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-md">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-px w-8 bg-black"></div>
              <span className="text-sm uppercase tracking-wider">REDEFINING SPACES</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight">
              Modern Living <span className="text-rose-500">Redefined</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Curated furniture collections that blend style, comfort, and functionality for the modern home.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/collection" className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6 inline-block">
                EXPLORE COLLECTIONS
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="relative min-h-[400px] md:min-h-screen bg-stone-100"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={assets.hero_img}
            alt="Modern living room furniture"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent mix-blend-multiply"></div>
        </motion.div>
      </section>
    </>
  )
}

export default Hero