import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const LatestCollection = ({ inView }) => {
  const { products } = useContext(ShopContext)
  const [collections, setCollections] = useState([])
  
  // Fetch latest collections - using same approach as other component
  useEffect(() => {
    setCollections(products.slice(0, 3));
  }, [products])

  // Check if data is loading
  const isLoading = products.length === 0 || collections.length === 0

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 aspect-[16/9] bg-gray-200 animate-pulse rounded-2xl"></div>
            <div className="lg:col-span-4 grid grid-cols-1 gap-8">
              <div className="aspect-square bg-gray-200 animate-pulse rounded-2xl"></div>
              <div className="aspect-square bg-gray-200 animate-pulse rounded-2xl"></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div
              className="lg:col-span-8 group cursor-pointer relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Link to={`/product/${collections[0]?._id}`}>
                <div className="relative aspect-[16/9] bg-stone-100 overflow-hidden rounded-2xl">
                  <img
                    src={collections[0]?.image || "/images/collection-main.jpg"}
                    alt={collections[0]?.name || "Modern living room collection"}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    {collections[0]?.new && (
                      <span className="inline-block px-3 py-1 bg-rose-500 text-white text-xs uppercase tracking-wider rounded-full mb-4">
                        New Arrival
                      </span>
                    )}
                    <h3 className="text-3xl md:text-4xl font-light mb-2">
                      The <span className="font-semibold">{collections[0]?.name?.split(' ')[0] || "Signature"}</span> Collection
                    </h3>
                    <p className="mb-6 max-w-md text-white/80">
                      {collections[0]?.description || "Exquisite designs with premium materials that bring elegance and functionality to any space."}
                    </p>
                    <motion.div className="flex items-center space-x-2 text-white group/btn" whileHover={{ x: 5 }}>
                      <span className="text-xl font-light">Explore Collection</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>

            <div className="lg:col-span-4 grid grid-cols-1 gap-8">
              {[1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer relative overflow-hidden rounded-2xl"
                  initial={{ opacity: 0, y: 100 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + (index - 1) * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  {collections[index] ? (
                    <Link to={`/product/${collections[index]?._id}`}>
                      <div className="relative aspect-square bg-stone-100 overflow-hidden rounded-2xl">
                        <img
                          src={collections[index]?.image || `/images/collection-${index}.jpg`}
                          alt={collections[index]?.name || "Collection"}
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                          <h3 className="text-2xl font-light mb-2">
                            The <span className="font-semibold">{collections[index]?.name?.split(' ')[0] || "Collection"}</span> Collection
                          </h3>
                          <p className="mb-4 text-white/80">
                            {collections[index]?.shortDescription || collections[index]?.description?.slice(0, 50) || "Stunning designs for your modern home"}
                          </p>
                          <motion.div className="flex items-center space-x-2 text-white group/btn" whileHover={{ x: 5 }}>
                            <span>Discover</span>
                            <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </motion.div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="relative aspect-square bg-stone-100 overflow-hidden rounded-2xl">
                      <img
                        src={`/images/collection-${index}.jpg`}
                        alt={`Collection ${index}`}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-2xl font-light mb-2">
                          The <span className="font-semibold">{index === 1 ? "Urban" : "Rustic"}</span> Collection
                        </h3>
                        <p className="mb-4 text-white/80">
                          {index === 1
                            ? "Contemporary designs for the modern city dweller"
                            : "Timeless charm with natural wood and earthy tones"}
                        </p>
                        <div className="flex items-center space-x-2 text-white">
                          <span>Discover</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default LatestCollection
