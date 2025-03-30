import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// Import required modules
import { Autoplay } from 'swiper/modules'; // Removed Navigation

const BestSeller = ({ inView }) => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);

  // Fetch best seller products from context
  useEffect(() => {
    if (products && products.length > 0) {
      const bestProducts = products.filter((item) => item.bestseller);
      setBestSellers(bestProducts); // No limit needed as Swiper handles the display
    }
  }, [products]);

  // Helper function to determine tag and its color
  const getTagInfo = (product) => {
    if (product.discount && product.discount > 0) {
      return {
        tag: 'Sale',
        className: 'bg-rose-500',
      };
    } else if (product.new) {
      return {
        tag: 'New',
        className: 'bg-emerald-500',
      };
    } else if (product.bestseller) {
      return {
        tag: 'Bestseller',
        className: 'bg-black',
      };
    }
    return { tag: '', className: '' };
  };

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
            <Link to="/collection" className="flex items-center space-x-2 text-black hover:text-rose-500 transition-colors">
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
          // Slider for Best Sellers
          <Swiper
            modules={[Autoplay]} // Removed Navigation
            spaceBetween={20}
            slidesPerView={5} // Display 5 items at a time
            loop={true} // Enable infinite looping
            autoplay={{
              delay: 3000, // Auto-slide every 3 seconds
              disableOnInteraction: false,
            }}
            breakpoints={{
              // Responsive breakpoints
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="swiper-container"
          >
            {bestSellers.map((product, index) => {
              const { tag, className } = getTagInfo(product);
              const discountPercentage = product.discount ? `-${Math.round(product.discount)}%` : '';

              return (
                <SwiperSlide key={product._id || index}>
                  {/* Wrap the entire slide content with Link */}
                  <Link
                    to={`/product/${product._id}`}
                    className="block cursor-pointer outline-none"
                    onClick={(e) => e.stopPropagation()} // Prevent Swiper conflicts
                  >
                    <motion.div
                      className="group overflow-hidden rounded-2xl shadow-sm transition-transform duration-300 hover:scale-[1.02]"
                      initial={{ opacity: 0, y: 100 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    >
                      <div className="relative aspect-[4/5] bg-stone-50 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                          onClick={() => {
                            window.location.href = `/product/${product._id}`;
                          }}
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
                      <div className="p-4 space-y-2">
                        <h3 className="text-lg font-medium">{product.name}</h3>
                        <div className="flex items-center space-x-2">
                          <p className="text-gray-900 font-medium">₹{product.price}</p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

        <motion.div className="mt-12 text-center md:hidden" whileHover={{ y: -5 }}>
          <Link to="/collection" className="flex items-center space-x-2 text-black hover:text-rose-500 transition-colors mx-auto">
            <span className="border-b border-black pb-1 hover:border-rose-500">View All Products</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BestSeller;