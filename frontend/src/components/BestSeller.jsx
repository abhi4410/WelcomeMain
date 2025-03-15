import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const BestSeller = ({ inView }) => {
  const { products } = useContext(ShopContext)
  const [bestSellers, setBestSellers] = useState([])

  // Fetch best seller products from context
  useEffect(() => {
    if (products && products.length > 0) {
      const bestProducts = products.filter((item) => item.bestseller)
      setBestSellers(bestProducts.slice(0, 4)) // Limit to 4 for the grid layout
    }
  }, [products])

  // Helper function to determine tag and its color
  const getTagInfo = (product) => {
    if (product.discount && product.discount > 0) {
      return {
        tag: "Sale",
        className: "bg-rose-500"
      }
    } else if (product.new) {
      return {
        tag: "New",
        className: "bg-emerald-500"
      }
    } else if (product.bestseller) {
      return {
        tag: "Bestseller",
        className: "bg-black"
      }
    }
    return { tag: "", className: "" }
  }

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-light">
              BEST <span className="font-semibold">SELLERS</span>
            </h2>
            <div className="h-px w-16 bg-rose-500 mt-4"></div>
            <p className="text-gray-600 max-w-xl mt-6 text-lg">
              Our most loved pieces that have become customer favorites.
            </p>
          </div>
          <motion.div className="hidden md:block" whileHover={{ x: 5 }}>
            <Link to="/products" className="flex items-center space-x-2 text-black hover:text-rose-500 transition-colors">
              <span className="border-b border-black pb-1 hover:border-rose-500">View All Products</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {products.length === 0 ? (
          // Loading state
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="relative aspect-[4/5] bg-gray-200 mb-4 rounded-2xl"></div>
                <div className="h-4 w-3/4 bg-gray-200 mb-2 rounded"></div>
                <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          // Products grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product, index) => {
              const { tag, className } = getTagInfo(product)
              const discountPercentage = product.discount ? `-${Math.round(product.discount)}%` : ""
              const rating = product.rating || 4 // Default rating if not provided
              
              return (
                <motion.div
                  key={product._id || index}
                  className="group"
                  initial={{ opacity: 0, y: 100 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Link to={`/product/${product._id}`}>
                    <div className="relative aspect-[4/5] bg-stone-50 mb-4 overflow-hidden rounded-2xl shadow-sm">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                      {tag && (
                        <div className={`absolute top-4 left-4 px-3 py-1 text-xs uppercase tracking-wider text-white rounded-full ${className}`}>
                          {tag}
                        </div>
                      )}
                      {discountPercentage && (
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-xs font-medium">
                          {discountPercentage}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </Link>
                  <div className="space-y-1">
                    <div className="flex items-center mt-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300 fill-gray-300"}`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <h3 className="text-lg font-medium">{product.name}</h3>
                    <div className="flex items-center space-x-2">
                      <p className="text-gray-900 font-medium">${product.price}</p>
                      {product.discount > 0 && (
                        <p className="text-gray-500 line-through text-sm">
                          ${Math.round(product.price / (1 - product.discount / 100))}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}

        <motion.div className="mt-12 text-center md:hidden" whileHover={{ y: -5 }}>
          <Link to="/products" className="flex items-center space-x-2 text-black hover:text-rose-500 transition-colors mx-auto">
            <span className="border-b border-black pb-1 hover:border-rose-500">View All Products</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BestSeller
