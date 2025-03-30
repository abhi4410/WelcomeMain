import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      className="text-gray-700 cursor-pointer block"
      to={`/product/${id}`}
    >
      {/* Image Container with Fixed Aspect Ratio */}
      <div className="w-full overflow-hidden relative" style={{ aspectRatio: '4 / 3' }}>
        {/* Loading Skeleton */}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          className={`w-full h-full object-cover transition ease-in-out duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          src={image[0]}
          alt={name}
          loading="lazy"
          onLoad={handleImageLoad}
          decoding="async"
        />
      </div>
      <p className="pt-3 pb-1 text-sm line-clamp-2">{name}</p>
      <p className="text-sm font-medium">{currency}{price}</p>
    </Link>
  );
};

export default ProductItem;