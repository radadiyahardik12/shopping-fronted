import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import { getProducts } from './Redux/Action';
import { useDispatch, useSelector } from 'react-redux';

const ProductPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {productsDetails, cartsData} = useSelector((state) => state.productReducer);


  const queryParams = new URLSearchParams(location.search);
  const productName = queryParams.get('product-name'); // Extract product-name from query string
  const productId = queryParams.get('id'); 

  useEffect(() => {
    if (productsDetails && Object.keys(productsDetails).length == 0) {
      dispatch(getProducts(productName))
    }
  }, [productsDetails]);


  return (
    <div className="flex flex-col min-h-screen min-w-full">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <Products productName={productName} />
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductPage;
