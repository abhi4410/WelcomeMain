import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);

  // State to store grouped orders
  const [groupedOrders, setGroupedOrders] = useState([]);

  // Function to load and group order data
  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        // Group orders by orderId
        const grouped = response.data.orders.map((order) => ({
          orderId: order._id, // Assuming each order has a unique ID
          status: order.status,
          payment: order.payment,
          amount: order.amount,
          paymentMethod: order.paymentMethod,
          date: order.date,
          items: order.items, // Keep items as an array within the order
        }));

        // Reverse the order list to show the latest orders first
        setGroupedOrders(grouped.reverse());
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      {/* Title */}
      <div className="text-3xl font-bold text-center text-gray-800 mb-8">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      {/* Order List */}
      <div className="space-y-6">
        {groupedOrders.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No orders found.</p>
        ) : (
          groupedOrders.map((order, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
            >
              {/* Order Header */}
              <div className="px-6 py-4 bg-gray-100 border-b border-gray-200 flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Order ID: <span className="text-gray-900">{order.orderId}</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Date: <span className="font-medium">{new Date(order.date).toDateString()}</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Total Amount: <span className="font-medium">{order.amount}</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${order.status === 'Delivered'
                        ? 'bg-green-500'
                        : order.status === 'Shipped'
                          ? 'bg-blue-500'
                          : 'bg-yellow-500'
                      }`}
                  ></span>
                  <p className="text-sm font-medium capitalize">{order.status.toLowerCase()}</p>
                </div>
              </div>

              {/* Order Items */}
              <div className="divide-y divide-gray-200">
                {order.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="px-6 py-4 flex items-start gap-6">
                    {/* Item Image */}
                    <img
                      className="w-20 h-20 object-cover rounded-md"
                      src={item.image[0]}
                      alt={item.name}
                    />

                    {/* Item Details */}
                    <div className="flex-1">
                      <p className="text-base font-medium text-gray-900">{item.name}</p>
                      <div className="flex items-center gap-3 mt-2 text-sm text-gray-700">
                        <p>{currency}{item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                      <p className="mt-2 text-xs text-gray-500">
                        Payment: <span className="font-medium">{order.paymentMethod}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;