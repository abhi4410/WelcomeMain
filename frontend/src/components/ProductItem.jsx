import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      className="text-gray-700 cursor-pointer block"
      to={`/product/${id}`}
    >
      {/* Image Container with Fixed Aspect Ratio */}
      <div className="w-full overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
        <img
          className="w-full h-full object-cover hover:scale-110 transition ease-in-out duration-300"
          src={image[0]}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">{currency}{price}</p>
    </Link>
  );
};

export default ProductItem;