import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { getProducts } from "./Redux/Action";

const Dashboard = () => {
  const { globleSearch } = useSelector((state) => state.productReducer);
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  
  const Products = [
    {
      id: 1,
      name: "Sports, Fitness",
      key: "sports_fitness",
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Banner_440x330.jpg",
    },
    {
      id: 2,
      key: "laptop",
      name: "Laptop",
      image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg",
    },
    {
      id: 3,
      key: "mobile",
      name: "Mobile",
      image: "https://m.media-amazon.com/images/I/71GLMJ7TQiL._SL1500_.jpg",
    },
    {
      id: 4,
      key: "dress",
      name: "Dress",
      image: "https://m.media-amazon.com/images/I/71mX4WATh-L._SX679_.jpg",
    },
    {
      id: 5,
      key: "women_pants",
      name: "Women Pants",
      image: "https://m.media-amazon.com/images/I/61Z+d8dYvlL._SY879_.jpg",
    },
    {
      id: 6,
      key: "dupatta",
      name: "DUPATTA",
      image: "https://m.media-amazon.com/images/I/6144PfPimtL._SY741_.jpg",
    },
    {
      id: 7,
      key: "electronics",
      name: "Electronics & accessories",
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/Img23/Budget3/REC-PC_CC_379x304._SY304_CB564096366_.jpg",
    },
    {
      id: 8,
      key: "tools",
      name: "Tools",
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/Jup24/GW/PC_QC_8_1x._SY116_CB562243010_.jpg",
    },
    {
      id: 9,
      key: "garden_outdoor",
      name: "Garden & Outdoor",
      image: "https://m.media-amazon.com/images/G/31/img18/Lawn_Garden/Ud/2024/GIF/Halo/2._SS400_QL85_.jpg",
    },
    {
      id: 10,
      key: "two_wheelers",
      name: "Two wheelers",
      image: "https://m.media-amazon.com/images/I/71Wnw7s8XHL._AC_UL480_QL65_.jpg",
    },
    {
      id: 11,
      key: "kitchenware",
      name: "Kitchenware",
      image: "https://m.media-amazon.com/images/I/71hVnc3fENL._AC_UL480_QL65_.jpg",
    },
    {
      id: 12,
      key: "beauty_makeup",
      name: "Beauty & makeup",
      image: "https://m.media-amazon.com/images/I/31wrH2ekvkL._AC_UF480,480_SR480,480_.jpg",
    },
    {
      id: 13,
      key: "toys",
      name: "Toys",
      image: "https://m.media-amazon.com/images/I/41-3p79ueuL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: 14,
      key: "t_shirts",
      name: "T-shirts",
      image: "https://m.media-amazon.com/images/I/61l5bkV6U7L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 15,
      key: "shirt",
      name: "Shirt",
      image: "https://m.media-amazon.com/images/I/61uBH8gIIIL._AC_UL480_FMwebp_QL65_.jpg",
    },
  ];

  // Filtered Products based on search query
  const filteredProducts = Products.filter((item) =>
    item.name.toLowerCase().includes(globleSearch.toLowerCase())
  );

  // Handle navigation to product page with the selected product key
  const navigateToProduct = (product) => {
    navigate(`/products?product-name=${product.key}`);
    dispatch(getProducts(product.key));
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Welcome to Our Store</h2>

      {/* Check if any products match the search */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, i) => {
            return (
              <div
                key={i}
                className="hover:cursor-pointer align-middle border flex flex-col justify-center p-4 rounded-lg shadow-lg"
                onClick={() => navigateToProduct(product)} // Navigate when clicked
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={`Product ${i + 1}`}
                    className="mb-4 h-52 w-full transform object-contain transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <p className="mt-2 text-gray-600 text-xl font-semibold">{product.name}</p>
              </div>
            );
          })}
        </div>
      ) : (
        // Show this message if no products are found
        <div className="text-center text-gray-500 text-xl mt-10">No data found</div>
      )}
    </div>
  );
};

export default Dashboard;
