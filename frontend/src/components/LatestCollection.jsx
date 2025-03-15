import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const LatestCollection = ({ inView }) => {
  const { products } = useContext(ShopContext)
  const [featuredProducts, setFeaturedProducts] = useState([])
  
  // Fetch latest collections - using same approach as other component
  useEffect(() => {
    setFeaturedProducts(products.slice(0, 4)); 
  }, [products])

  // Check if data is loading
  const isLoading = products.length === 0 || featuredProducts.length === 0

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-stone-50">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-light mb-2">
            LATEST <span className="font-semibold">COLLECTIONS</span>
          </h2>
          <div className="h-px w-24 bg-rose-500 mt-4"></div>
          <p className="text-gray-600 max-w-2xl text-center mt-8 text-lg">
            Discover our newest furniture pieces designed to transform your living spaces with elegance and comfort.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 gap-8">
              <div className="aspect-[16/9] bg-gray-200 animate-pulse rounded-2xl"></div>
              <div className="aspect-square bg-gray-200 animate-pulse rounded-2xl"></div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <div className="aspect-square bg-gray-200 animate-pulse rounded-2xl"></div>
              <div className="aspect-[16/9] bg-gray-200 animate-pulse rounded-2xl"></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="grid grid-cols-1 gap-8">
              {/* Big Tile */}
              <motion.div
                className="group cursor-pointer relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Link to={`/product/${featuredProducts[0]?._id}`}>
                  <div className="relative aspect-[16/9] bg-stone-100 overflow-hidden rounded-2xl">
                    <img
                      src={featuredProducts[0]?.image || "/images/collection-main.jpg"}
                      alt={featuredProducts[0]?.name || "Modern living room furniture"}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                      {featuredProducts[0]?.new && (
                        <span className="inline-block px-3 py-1 bg-rose-500 text-white text-xs uppercase tracking-wider rounded-full mb-4">
                          New Arrival
                        </span>
                      )}
                      <h3 className="text-3xl md:text-4xl font-light mb-2">
                        {featuredProducts[0]?.name || "Signature Furniture"}
                      </h3>
                      <p className="mb-6 max-w-md text-white/80">
                        {featuredProducts[0]?.description || "Exquisite design with premium materials that bring elegance and functionality to any space."}
                      </p>
                      <motion.div className="flex items-center space-x-2 text-white group/btn" whileHover={{ x: 5 }}>
                        <span className="text-xl font-light">View Details</span>
                        <ChevronRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
              
              {/* Small Tile */}
              <motion.div
                className="group cursor-pointer relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <Link to={`/product/${featuredProducts[1]?._id}`}>
                  <div className="relative aspect-square bg-stone-100 overflow-hidden rounded-2xl">
                    <img
                      src={featuredProducts[1]?.image || "/images/collection-1.jpg"}
                      alt={featuredProducts[1]?.name || "Furniture item"}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-light mb-2">
                        {featuredProducts[1]?.name || "Urban Furniture"}
                      </h3>
                      <p className="mb-4 text-white/80">
                        {featuredProducts[1]?.shortDescription || featuredProducts[1]?.description?.slice(0, 50) || "Contemporary design for the modern home"}
                      </p>
                      <motion.div className="flex items-center space-x-2 text-white group/btn" whileHover={{ x: 5 }}>
                        <span>View Details</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
            
            {/* Right Column */}
            <div className="grid grid-cols-1 gap-8">
              {/* Small Tile */}
              <motion.div
                className="group cursor-pointer relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -10 }}
              >
                <Link to={`/product/${featuredProducts[2]?._id}`}>
                  <div className="relative aspect-square bg-stone-100 overflow-hidden rounded-2xl">
                    <img
                      src={featuredProducts[2]?.image || "/images/collection-2.jpg"}
                      alt={featuredProducts[2]?.name || "Furniture item"}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-light mb-2">
                        {featuredProducts[2]?.name || "Rustic Furniture"}
                      </h3>
                      <p className="mb-4 text-white/80">
                        {featuredProducts[2]?.shortDescription || featuredProducts[2]?.description?.slice(0, 50) || "Timeless charm with natural materials"}
                      </p>
                      <motion.div className="flex items-center space-x-2 text-white group/btn" whileHover={{ x: 5 }}>
                        <span>View Details</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
              
              {/* Big Tile */}
              <motion.div
                className="group cursor-pointer relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <Link to={`/product/${featuredProducts[3]?._id}`}>
                  <div className="relative aspect-[16/9] bg-stone-100 overflow-hidden rounded-2xl">
                    <img
                      src={featuredProducts[3]?.image || "/images/collection-3.jpg"}
                      alt={featuredProducts[3]?.name || "Modern furniture"}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                      <h3 className="text-3xl md:text-4xl font-light mb-2">
                        {featuredProducts[3]?.name || "Modern Furniture"}
                      </h3>
                      <p className="mb-6 max-w-md text-white/80">
                        {featuredProducts[3]?.description || "Stylish and functional piece for contemporary living spaces."}
                      </p>
                      <motion.div className="flex items-center space-x-2 text-white group/btn" whileHover={{ x: 5 }}>
                        <span className="text-xl font-light">View Details</span>
                        <ChevronRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default LatestCollection
