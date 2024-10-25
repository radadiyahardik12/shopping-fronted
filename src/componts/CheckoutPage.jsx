import React from 'react';
import { useLocation } from 'react-router-dom';

const CheckoutPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const itemId = searchParams.get('item'); // Retrieve item ID from query string

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout Page</h1>
      <p>Proceeding with the purchase for item ID: {itemId}</p>
      {/* You could fetch item details using this item ID and display them */}
    </div>
  );
};

export default CheckoutPage;
