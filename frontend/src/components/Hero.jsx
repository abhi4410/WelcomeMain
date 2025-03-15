import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {
  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Array of hero images to cycle through
  const heroImages = [
    assets.hero_img1,
    assets.hero_img2,
    assets.hero_img3,
    assets.hero_img4,
    assets.hero_img5
  ]
  
  // Set up automatic image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 3000) // Change image every 5 seconds
    
    // Clean up on unmount
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen w-full pt-16 bg-black">
      {/* Full-screen image carousel with slide animation */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <img
              src={heroImages[currentImageIndex]}
              alt={`Furniture showcase ${currentImageIndex + 1}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 mix-blend-multiply"></div>
          </motion.div>
        </AnimatePresence>
        
        {/* Image indicator dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentImageIndex === index ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-6 flex items-center min-h-screen">
        <motion.div
          className="max-w-xl text-white pt-16 md:pt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-px w-8 bg-white"></div>
            <span className="text-sm uppercase tracking-wider">REDEFINING SPACES</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight">
            Modern Living <span className="text-rose-500">Redefined</span>
          </h1>
          <p className="text-gray-200 mb-8 text-lg max-w-lg">
            Curated furniture collections that blend style, comfort, and functionality for the modern home.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/collection" className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-8 py-4 h-auto inline-block font-medium">
              EXPLORE COLLECTIONS
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
