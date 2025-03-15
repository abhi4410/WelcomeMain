import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <header
        className={`py-4 px-6 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-tight">
            Welcome Furniture<span className="text-rose-500">.</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="uppercase text-sm font-medium border-b-2 border-black">
              HOME
            </Link>
            <Link
              to="/collection"
              className="uppercase text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              COLLECTION
            </Link>
            <Link
              to="/about"
              className="uppercase text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className="uppercase text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              CONTACT
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="p-1 hover:text-rose-500 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="Account" className="p-1 hover:text-rose-500 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button aria-label="Cart" className="p-1 relative hover:text-rose-500 transition-colors">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
            <button
              aria-label="Menu"
              className="p-1 md:hidden hover:text-rose-500 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-50 flex flex-col p-6"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex justify-between items-center mb-8">
            <div className="text-2xl font-semibold tracking-tight">
              Welcome Furniture<span className="text-rose-500">.</span>
            </div>
            <button aria-label="Close menu" className="p-1" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            <Link to="/" className="text-xl font-medium">
              HOME
            </Link>
            <Link to="/collection" className="text-xl font-medium text-gray-600">
              COLLECTION
            </Link>
            <Link to="/about" className="text-xl font-medium text-gray-600">
              ABOUT
            </Link>
            <Link to="/contact" className="text-xl font-medium text-gray-600">
              CONTACT
            </Link>
          </nav>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 min-h-screen pt-16">
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