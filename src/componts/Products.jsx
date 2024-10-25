import React from 'react'
import { setProductsDetails } from './Redux/Action';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Products = ({ productName }) => {
    const { globleSearch, productsItem } = useSelector((state) => state.productReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Example product data structure (replace with fetched data from an API or state)
   
      

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-400'}>
                    ★
                </span>
            );
        }
        return stars;
    };

    const navigateToProduct = (id) => {
        navigate(`/products-details?product-name=${productName}&id=${id}`);
    };

    const filteredProducts = productsItem.filter((item) =>
        item.name.toLowerCase().includes(globleSearch.toLowerCase())
    );

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-2xl font-bold mb-6">Showing Products for: {productName}</h2>

            {/* Displaying the products */}

            {filteredProducts && filteredProducts.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="border p-4 rounded-lg shadow-lg relative hover:cursor-pointer"
                            onClick={() => {
                                dispatch(setProductsDetails(product));
                                navigateToProduct(product._id);
                            }}
                        >
                            <img src={product.images[0]} alt={product.name} className="mb-4 w-full h-48 object-contain rounded-lg" />

                            {/* Display availability */}
                            <span className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm ${product.isAvailable ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                {product.isAvailable ? 'Available' : 'Out of Stock'}
                            </span>

                            <h3 className="text-xl font-semibold">{product.name}</h3>

                            {/* Ensure description has a minimum of 3 lines */}
                            <p className="text-gray-600 line-clamp-3">{product.details}</p>

                            <p className="font-bold text-lg mt-2">Rs. {product.price}</p>

                            {/* Display rating */}
                            <div className="flex mt-2">
                                {renderStars(product.rating)}
                            </div>
                        </div>
                    ))}
                </div>
                :
                (
                    // Show this message if no products are found
                    <div className="text-center text-gray-500 text-xl mt-10">No data found</div>
                )}
        </div>
  )
}

export default Products