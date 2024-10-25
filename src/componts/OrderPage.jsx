import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOrderData } from './Redux/Action';

const OrderPage = () => {
  const navigate = useNavigate(); // Hook for navigating to other pages
  const dispatch = useDispatch(); // Hook for dispatching actions
  const {productsDetails, orderItems} = useSelector((state) => state.productReducer);
  const date = new Date().toLocaleDateString();
  
  // Initial cart data as state
  const [order, setorder] = useState(orderItems);

  useEffect(() => {
    dispatch(getOrderData());
  }, []);

  useEffect(() => {
    setorder(orderItems);
  }, [orderItems])

  const totalPrice = orderItems && orderItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
      {order.length === 0 ? (
        <p>Your order is empty.</p>
      ) : (
      <div>
      {order.map((item, i) => (
        <div key={i} className="bg-white shadow-md rounded-lg p-4 mb-6">
          <div className="flex justify-between">
            <div>
              <p className="text-lg font-semibold">Order #{item._id}</p>
              <p className="text-sm text-gray-500">Date: {date}</p>
            </div>
            <div>
            </div>
          </div>

          <div className="mt-4">
              <div className="flex items-center justify-between py-2">
                <img 
                  src={item.images[0]} 
                  alt={item.name} 
                  className="w-16 h-16 object-cover rounded-md" 
                />
                <div className="ml-4 flex-1">
                  <p>{item.name} (x1)</p>
                </div>
                <div>
                  <p>{item.price}</p>
                </div>
              </div>
          </div>
        </div>
      ))}
      <div className="flex justify-end mt-4">
            <p className="font-semibold">Total: {totalPrice}</p>
          </div>
      </div>)}
    </div>
  );
};

export default OrderPage;
