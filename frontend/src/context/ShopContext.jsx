import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₹';
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('')
    const navigate = useNavigate();

    const addToCart = async (itemId) => {
        try {
            let cartData = structuredClone(cartItems);
            
            // Check if the item already exists in the cart
            if (cartData[itemId]) {
                cartData[itemId] += 1;
            } else {
                cartData[itemId] = 1;
            }
            
            // Update the cart state immediately
            setCartItems(cartData);
            
            // If the user is authenticated, send the data to the backend
            if (token) {
                await axios.post(
                    backendUrl + '/api/cart/add',
                    { itemId },
                    { headers: { token } }
                );
                toast.success('Product added to cart!');
            } else {
                toast.success('Product added to cart!');
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
            // Revert the cart state if the backend request fails
            setCartItems(cartItems);
            toast.error(error.response?.data?.message || 'Failed to add product to cart.');
        }
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                totalCount += cartItems[itemId];
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, quantity) => {
        try {
            if (quantity < 0) {
                toast.error('Quantity cannot be negative');
                return;
            }

            let cartData = structuredClone(cartItems);
            cartData[itemId] = quantity;
            setCartItems(cartData);

            if (token) {
                await axios.post(
                    backendUrl + '/api/cart/update',
                    { itemId, quantity },
                    { headers: { token } }
                );
            }
        } catch (error) {
            console.error('Error updating quantity:', error);
            // Revert the cart state if the backend request fails
            setCartItems(cartItems);
            toast.error(error.response?.data?.message || 'Failed to update quantity.');
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            const itemInfo = products.find((product) => product._id === itemId);
            if (itemInfo && cartItems[itemId] > 0) {
                totalAmount += itemInfo.price * cartItems[itemId];
            }
        }
        return totalAmount;
    }

    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            if (response.data.success) {
                setProducts(response.data.products.reverse());
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
            toast.error(error.response?.data?.message || 'Failed to fetch products.');
        }
    }

    const getUserCart = async (token) => {
        try {
            const response = await axios.post(
                backendUrl + '/api/cart/get',
                {},
                { headers: { token } }
            );
            if (response.data.success) {
                setCartItems(response.data.cartData);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error fetching cart:', error);
            toast.error(error.response?.data?.message || 'Failed to fetch cart data.');
        }
    }

    const clearCart = async () => {
        try {
            setCartItems({});
            if (token) {
                await axios.post(
                    backendUrl + '/api/cart/clear',
                    {},
                    { headers: { token } }
                );
            }
        } catch (error) {
            console.error('Error clearing cart:', error);
            toast.error(error.response?.data?.message || 'Failed to clear cart.');
        }
    }

    useEffect(() => {
        getProductsData();
    }, []);

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            const storedToken = localStorage.getItem('token');
            setToken(storedToken);
            getUserCart(storedToken);
        } else if (token) {
            getUserCart(token);
        }
    }, [token]);

    const value = {
        products,
        currency,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        setCartItems,
        getCartCount,
        updateQuantity,
        getCartAmount,
        clearCart,
        navigate,
        backendUrl,
        setToken,
        token
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;