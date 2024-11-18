import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from './Products';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { buyCancelHandler, getProducts, setCartHandler, setProductsDetails } from './Redux/Action';

const ProductDetails = () => {

  const location = useLocation();
  const dispatch = useDispatch();
  const {productsDetails, cartsData} = useSelector((state) => state.productReducer);
  const userID = localStorage.getItem('userId');
  const queryParams = new URLSearchParams(location.search);
  const productName = queryParams.get('product-name'); // Extract product-name from query string
  const productId = queryParams.get('id'); // Extract product-name from query string
   console.log("productId", productId);

  // State to hold the selected image
  const [selectedImage, setSelectedImage] = useState('');
  
  const cartHandler = () => {
    dispatch(setCartHandler(productsDetails._id));
  }

  const buyOrderHandler = () => {
    dispatch(buyCancelHandler(productsDetails._id));
  }

  useEffect(() => {
    if (productsDetails && Object.keys(productsDetails).length > 0) {
      window.scrollTo(0, 0);
      setSelectedImage(productsDetails.images[0]);
    }
    if (productsDetails && Object.keys(productsDetails).length == 0) {
      dispatch(getProducts(productName)).then((res) => {
        if (res.status) {
          const selectItemDetais = res.data && res.data.find(item => item._id == productId );
          dispatch(setProductsDetails(selectItemDetais));
        }
      })
    }
  }, [productsDetails]);
  
console.log("productsDetails", productsDetails);

  return (
    <>
    {Object.keys(productsDetails).length > 0 ? 
    <div className="flex flex-col min-h-screen min-w-full">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
      <div className="container mx-auto p-6">
      {/* Product Layout */}
      <div className="flex flex-col md:flex-row gap-8">

        {/* First Section - Product Images */}
        <div className="md:w-3/5">
          <div className="flex flex-col md:flex-row space-y-4">
            {/* Thumbnails */}
            <div className="flex flex-row w-full md:w-auto md:flex-col gap-4 mt-4 mr-5 overflow-x-auto md:overflow-hidden ">
              {
               productsDetails.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 h-auto rounded-md shadow-md cursor-pointer hover:opacity-75 transition"
                  onMouseEnter={() => setSelectedImage(image)} // Change image on hover
                />
              ))}
            </div>
            {/* Main image */}
            <div
              className="flex justify-center items-center w-full h-96 rounded-md shadow-md order-first md:order-last"
            >
              <img
                  src={selectedImage}
                  alt={`Thumbnail`}
                  className="object-contain h-96 "
                />
            </div>
          </div>
        </div>

        {/* Second Section - Product Details */}
        <div className="md:w-2/5">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{productsDetails.name}</h1>
            <p className="text-gray-600">
             {productsDetails.details}
            </p>
            <ul className="list-disc list-inside text-gray-800">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
          </div>
        </div>

        {/* Third Section - Price, Add to Cart, Seller Info */}
        <div className="border flex flex-col md:mt-0 md:w-1/5 mt-8 space-y-4 rounded-lg p-3 h-fit">
          <div className="space-y-2">
            <div>
              <h2 className="text-xl font-semibold">Price: {productsDetails.price}</h2>
              <p className="text-green-600">Free delivery</p>
              <p className="text-gray-600">Estimated delivery: Oct 25 - Oct 27</p>
              <p className="text-gray-500">
                Delivering to Rajkot 360004 -{' '}
                <a href="#" className="text-blue-500 underline">Update location</a>
              </p>
            </div>
            <div>
              <p className="text-gray-600">Payment: <span className="text-black font-semibold">Secure transaction</span></p>
              <p className="text-gray-600">Ships from: <span className="text-black font-semibold">Gokhlana</span></p>
              <p className="text-gray-600">Sold by: <span className="text-black font-semibold">Gokhlana Retail Private Ltd</span></p>
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
              onClick={() => cartHandler()}
            >
              {productsDetails.cart_id.includes(userID) ? "Remove to Cart" : "Add to Cart"}
            </button>
            <button className={`${productsDetails.order_id.includes(userID) ? "bg-red-500" : "bg-yellow-500" } text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition"`}
              onClick={() => {
                if (productsDetails.isAvailable) {
                  buyOrderHandler();
                }
              }}
            >
            {productsDetails.isAvailable ? productsDetails.order_id.includes(userID) ? "Cancel Order" : "Buy Now" : 'Not Available' }
            </button>
          </div>
        </div>
      </div>
    </div>

        <Products productName={productName} />
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
    :<></>}
    </>
    
  );
};

export default ProductDetails;
