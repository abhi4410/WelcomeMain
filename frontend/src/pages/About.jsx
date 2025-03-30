import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Hammer, Leaf, Users } from 'lucide-react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {


  // Fade in and slide up animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  // Slide in from left animation
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  // Slide in from right animation
  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  return (
    // Added pt-20 to provide space below the navbar
    <div className="pt-24">
      {/* About Us Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.2 }}
        variants={fadeInUp}
        className='text-2xl text-center' // Removed border-t
      >
        <Title text1={'ABOUT'} text2={'US'} />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.2 }}
        className='my-10 flex flex-col md:flex-row gap-16'
      >
        <motion.img
          variants={slideInLeft}
          className='w-full md:max-w-[450px] rounded-lg shadow-lg object-cover hover:shadow-xl transition-shadow duration-300'
          src={assets.about_img}
          alt="Welcome Furniture workshop"
        />
        <motion.div
          variants={slideInRight}
          className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'
        >
          <p>Welcome Furniture was born out of a passion for craftsmanship and a desire to bring timeless, quality furniture into people's homes. Our journey began with a simple idea: to provide beautifully crafted furniture that combines traditional woodworking techniques with contemporary design, allowing customers to create spaces that reflect their personal style.</p>
          <p>Since our inception, we've worked tirelessly to source the finest materials and collaborate with skilled artisans who share our commitment to quality. From living room centerpieces to bedroom essentials, we offer an extensive collection of furniture pieces that are built to last generations.</p>
          <b className='text-gray-800 text-xl'>Our Mission</b>
          <p>Our mission at Welcome Furniture is to elevate everyday living through thoughtfully designed furniture. We're dedicated to creating pieces that not only beautify your space but also enhance your daily life, from the moment you wake up to when you gather with loved ones at the end of the day.</p>
        </motion.div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.2 }}
        variants={fadeInUp}
        className='text-xl py-4'
      >
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.2 }}
        className='flex flex-col md:flex-row text-sm mb-20'
      >
        {/* Craftsmanship Excellence */}
        <motion.div
          variants={fadeInUp}
          custom={0}
          transition={{ delay: 0.1 }}
          className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:shadow-lg transition-shadow duration-300 hover:-translate-y-2"
        >
          <div className="flex items-center gap-3">
            <Hammer className="w-8 h-8 text-blue-500" />
            <b className="text-xl">Craftsmanship Excellence:</b>
          </div>
          <p className="text-gray-600">
            We meticulously craft each piece of furniture to ensure it meets our exacting standards. Every joint, finish, and detail is carefully considered and executed by skilled artisans.
          </p>
        </motion.div>

        {/* Sustainable Materials */}
        <motion.div
          variants={fadeInUp}
          custom={1}
          transition={{ delay: 0.3 }}
          className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:shadow-lg transition-shadow duration-300 hover:-translate-y-2"
        >
          <div className="flex items-center gap-3">
            <Leaf className="w-8 h-8 text-green-500" />
            <b className="text-xl">Sustainable Materials:</b>
          </div>
          <p className="text-gray-600">
            With our commitment to environmental responsibility, we source sustainable materials and implement eco-friendly practices throughout our production process.
          </p>
        </motion.div>

        {/* Personalized Service */}
        <motion.div
          variants={fadeInUp}
          custom={2}
          transition={{ delay: 0.5 }}
          className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:shadow-lg transition-shadow duration-300 hover:-translate-y-2"
        >
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-rose-500" />
            <b className="text-xl">Personalized Service:</b>
          </div>
          <p className="text-gray-600">
            Our team of furniture experts is here to assist you every step of the way, ensuring your satisfaction from browsing to delivery and beyond.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About