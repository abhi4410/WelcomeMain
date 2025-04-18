import React, { useContext, useMemo, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { useInView } from 'react-intersection-observer';

const Collection = () => {
  const { products, search, showSearch, isLoading, error } = useContext(ShopContext);
  const [filters, setFilters] = useState({ category: [], sortType: 'relevant' });
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const toggleCategory = (value) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category.includes(value)
        ? prev.category.filter((item) => item !== value)
        : [...prev.category, value],
    }));
  };

  const handleSortChange = (e) => {
    setFilters((prev) => ({ ...prev, sortType: e.target.value }));
  };

  const filteredProducts = useMemo(() => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filters.category.length > 0) {
      productsCopy = productsCopy.filter((item) => filters.category.includes(item.category));
    }

    return productsCopy;
  }, [products, showSearch, search, filters.category]);

  const sortedProducts = useMemo(() => {
    let sorted = [...filteredProducts];

    switch (filters.sortType) {
      case 'low-high':
        return sorted.sort((a, b) => a.price - b.price);
      case 'high-low':
        return sorted.sort((a, b) => b.price - a.price);
      default:
        return sorted;
    }
  }, [filteredProducts, filters.sortType]);

  // Infinite scroll implementation
  useEffect(() => {
    if (inView && displayedProducts.length < sortedProducts.length) {
      const newProducts = sortedProducts.slice(
        displayedProducts.length,
        displayedProducts.length + 12
      );
      setDisplayedProducts(prev => [...prev, ...newProducts]);
    }
  }, [inView, sortedProducts, displayedProducts.length]);

  // Reset displayed products when filters change
  useEffect(() => {
    setDisplayedProducts(sortedProducts.slice(0, 12));
  }, [sortedProducts]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-red-500">
        Error loading products. Please try again later.
      </div>
    );
  }

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-20 pb-20 border-t'>
      {/* Filter Options */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS</p>
        <div className="border border-gray-300 pl-5 py-3 mt-6">
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {['Beds', 'Sofas', 'Kitchen & dinning', 'Home decor', 'Mattresses', 'Wardrobes', 'Dining Sets', 'Study tables'].map(
              (category) => (
                <p key={category} className="flex gap-2">
                  <input
                    className="w-3"
                    type="checkbox"
                    value={category}
                    checked={filters.category.includes(category)}
                    onChange={() => toggleCategory(category)}
                  />
                  {category}
                </p>
              )
            )}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          <select 
            onChange={handleSortChange} 
            className="border-2 border-gray-300 text-sm px-2"
            value={filters.sortType}
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {displayedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
              {displayedProducts.map((item) => (
                <ProductItem
                  key={item._id}
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>
            {/* Infinite scroll trigger */}
            {displayedProducts.length < sortedProducts.length && (
              <div ref={ref} className="h-20 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-gray-500 text-lg">No products found.</div>
        )}
      </div>
    </div>
  );
};

export default Collection;