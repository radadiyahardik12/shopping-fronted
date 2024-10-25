import React, { useState, useRef } from 'react';
import { productService } from '../product-services/productServices';

const AddProduct = () => {
    const [product, setProduct] = useState({
        product_key: '',
        name: '',
        details: '',
        price: '',
        rating: '',
        isAvailable: true,
        images: [],
    });

    // References to input fields for focus control
    const nameRef = useRef(null);
    const priceRef = useRef(null);
    const ratingRef = useRef(null);
    const detailsRef = useRef(null);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    // Handle Enter key navigation
    const handleKeyDown = (e, nextRef) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default form submission
            if (nextRef && nextRef.current) {
                nextRef.current.focus(); // Move focus to the next field
            }
        }
    };

    const addProduct = async (e) => {
        e.preventDefault();
        console.log("123");
        
        try {
            productService.addProductItem(product).then((res) => {
                console.log("res", res);
                
                alert('Product added successfully!');
                setProduct({
                    product_key: '',
                    name: '',
                    details: '',
                    price: '',
                    rating: '',
                    isAvailable: true,
                    images: [],
                });
            });
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const removeImage = (index) => {
        setProduct({ 
            ...product, 
            images: product.images.filter((_, i) => i !== index) 
        });
    };
console.log("product", product);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div 
                className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Add New Product</h2>
                <div className="grid grid-cols-2 gap-5">
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2" htmlFor="product_key">Product Key</label>
                        <input 
                            type="text"
                            name="product_key"
                            placeholder="Product Key"
                            value={product.product_key}
                            onChange={handleChange}
                            onKeyDown={(e) => handleKeyDown(e, nameRef)} // Focus next field
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2" htmlFor="name">Name</label>
                        <input 
                            type="text"
                            name="name"
                            placeholder="Product Name"
                            value={product.name}
                            onChange={handleChange}
                            ref={nameRef}
                            onKeyDown={(e) => handleKeyDown(e, priceRef)} // Focus next field
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2" htmlFor="price">Price</label>
                        <input 
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={product.price}
                            onChange={handleChange}
                            ref={priceRef}
                            onKeyDown={(e) => handleKeyDown(e, ratingRef)} // Focus next field
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2" htmlFor="rating">Rating</label>
                        <input 
                            type="number"
                            name="rating"
                            placeholder="Rating"
                            value={product.rating}
                            onChange={handleChange}
                            ref={ratingRef}
                            onKeyDown={(e) => handleKeyDown(e, detailsRef)} // Focus next field
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="details">Details</label>
                    <textarea 
                        name="details"
                        placeholder="Product Details"
                        value={product.details}
                        onChange={handleChange}
                        ref={detailsRef}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="images">Images</label>
                    <input 
                        type="text"
                        name="images"
                        placeholder='Image URL'
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setProduct({ ...product, images: (product.images).concat([e.target.value])});
                                e.target.value = '';
                            }
                        }}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    {product.images.map((image, index) => (
                        <div 
                            key={index} 
                            className="flex items-center justify-between p-2 bg-gray-100 rounded-md mb-2"
                        >
                            <div className="text-gray-700 line-clamp-1">{image}</div>
                            <button 
                                className="text-red-500 hover:text-red-700"
                                onClick={() => removeImage(index)}
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mb-4 flex items-center">
                    <label className="block text-gray-600 font-medium mb-2 mr-2" htmlFor="isAvailable">Available</label>
                    <input 
                        type="checkbox"
                        name="isAvailable"
                        checked={product.isAvailable}
                        onChange={(e) => setProduct({ ...product, isAvailable: e.target.checked })}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                </div>

                <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md font-medium"
                onClick={addProduct}
                >
                    Add Product
                </button>
            </div>
        </div>
    );
};

export default AddProduct;
