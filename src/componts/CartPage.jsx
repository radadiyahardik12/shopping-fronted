import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // For navigation
import { buyCancelHandler, getCartData, setCartHandler } from './Redux/Action';

const CartPage = () => {
  const navigate = useNavigate(); // Hook for navigating to other pages
  const dispatch = useDispatch(); // Hook for dispatching actions
  const {productsDetails, cartsData} = useSelector((state) => state.productReducer);

  const userID = localStorage.getItem('userId');

  // Initial cart data as state
  const [cart, setCart] = useState(cartsData);

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  useEffect(() => {
    setCart(cartsData);
  }, [cartsData])


  // Handle removing an item from the cart
  const removeItem = (id) => {
    dispatch(setCartHandler(id, false))
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
  };

  // Handle Buy Now action for an item
  const handleBuyNow = (item, remove) => {
    buyOrderHandler(item);
    if (remove) {
      removeItem(item._id);
    }else{
     const updateCard =  cart.map((c) => {
                          if (c._id == item._id) {
                            c.order_id = c.order_id.filter((item) => item != userID);
                          }
                          return c;
                        })
      setCart(updateCard);
    }
  };

  const buyOrderHandler = (item) => {
    dispatch(buyCancelHandler(item._id, false));
  }

  // Calculate the total price of the cart
  const totalPrice = cart && cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <img src={item.images[0]} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                <div className="ml-4 flex-1">
                  <p>{item.name}</p>
                  <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                </div>

                <div>
                  <p className="text-sm">${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                </div>

                {/* Buy Now button */}
                <button
                  className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => handleBuyNow(item, item.order_id.includes(userID) ? false : true)}
                >
                  {item.order_id.includes(userID) ? "Cancel Order" : "Buy Now" }
                </button>

                {/* Remove item button */}
                <button
                  className="text-red-500 hover:text-red-700 ml-4"
                  onClick={() => removeItem(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total price section */}
          <div className="text-right mt-6">
            <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
