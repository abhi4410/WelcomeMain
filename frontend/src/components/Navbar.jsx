import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, User, ShoppingBag, Menu } from 'lucide-react'
import { ShopContext } from '../context/ShopContext'

const Navbar = ({ isScrolled, setMobileMenuOpen }) => {
  // Get current location to determine active link
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Get cart count from ShopContext
  const { getCartCount } = useContext(ShopContext);
  const cartCount = getCartCount ? getCartCount() : 0;

  return (
    <header
      className={`py-4 px-6 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-semibold tracking-tight">
          Welcome Furniture<span className="text-rose-500">.</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`uppercase text-sm font-medium ${currentPath === '/' 
              ? 'border-b-2 border-black' 
              : 'text-gray-600 hover:text-black transition-colors'}`}
          >
            HOME
          </Link>
          <Link
            to="/collection"
            className={`uppercase text-sm font-medium ${currentPath === '/products' || currentPath === '/collection'
              ? 'border-b-2 border-black' 
              : 'text-gray-600 hover:text-black transition-colors'}`}
          >
            COLLECTION
          </Link>
          <Link
            to="/about"
            className={`uppercase text-sm font-medium ${currentPath === '/about' 
              ? 'border-b-2 border-black' 
              : 'text-gray-600 hover:text-black transition-colors'}`}
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className={`uppercase text-sm font-medium ${currentPath === '/contact' 
              ? 'border-b-2 border-black' 
              : 'text-gray-600 hover:text-black transition-colors'}`}
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
          <Link to="/cart" className="p-1 relative hover:text-rose-500 transition-colors">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
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
  )
}

export default Navbar
