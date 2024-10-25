import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { globleSearchString, setGlobleView } from "./Redux/Action";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [seachProduct, setSeachProduct] = useState("");
  const [isProductPopoverOpen, setIsProductPopoverOpen] = useState(false);

  // Example product list
  const productList =[
    { name: "Electronics", key: "electronics" },
    { name: "Fashion", key: "fashion" },
    { name: "Home Appliances", key: "home_appliances" },
    { name: "Books", key: "books" },
    { name: "Toys", key: "toys" },
    { name: "Sports, Fitness", key: "sports_fitness" },
    { name: "Laptop", key: "laptop" },
    { name: "Mobile", key: "mobile" },
    { name: "Dress", key: "dress" },
    { name: "Women Pants", key: "women_pants" },
    { name: "DUPATTA", key: "dupatta" },
    { name: "Tools", key: "tools" },
    { name: "Garden & Outdoor", key: "garden_outdoor" },
    { name: "Two wheelers", key: "two_wheelers" },
    { name: "Kitchenware", key: "kitchenware" },
    { name: "T-shirts", key: "t_shirts" },
    { name: "Shirt", key: "shirt" },
  ];

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const productModal = document.getElementById("productModal");
      if (productModal && !productModal.contains(event.target)) {
        setIsProductPopoverOpen(false);
      }
    };

    if (isProductPopoverOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isProductPopoverOpen]);

  return (
    <header className=" bg-blue-500 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" felx-col  sm:flex sm:flex-row ">
          <h1 className="text-xl font-bold">Gokhlana Shopping</h1>

          {/* Search Bar */}
          <div className="flex-grow md:mx-4 flex md:w-[650px]">
            <input
              id="searchInput"
              type="text"
              placeholder="Search for products"
              className="w-full p-2 rounded-l-lg text-gray-700"
              value={seachProduct}
              onChange={(e) => {
                if (e.target.value.length === 0) {
                  dispatch(globleSearchString(""));
                }
                setSeachProduct(e.target.value);
              }}
            />
            <button
              className="bg-yellow-500 text-white p-2 rounded-r-lg font-semibold hover:bg-yellow-600"
              onClick={() => dispatch(globleSearchString(seachProduct))}
            >
              Search
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex relative">
          <ul className="flex space-x-4">
            <li onMouseEnter={() => setIsProductPopoverOpen(false)}>
              <a
                href="#"
                className="hover:underline font-semibold hover:text-yellow-500"
                onClick={() => {
                  navigate("/");
                  dispatch(setGlobleView("homeView"));
                }}
              >
                Home
              </a>
            </li>

            {/* Products link with popover */}
            <li
              className="relative"
              onMouseEnter={() => {
                setIsProductPopoverOpen(true);
              }}
            >
              <div>
                <a
                  href="#"
                  className="hover:underline font-semibold hover:text-yellow-500"
                >
                  Products
                </a>

                {/* Popover menu */}
                {isProductPopoverOpen && (
                  <div
                    onMouseLeave={() => {
                      setIsProductPopoverOpen(false);
                    }}
                    id="productModal"
                    className="absolute bg-white font-normal left-[-240px] mt-2 right-[-170px] rounded-lg shadow-lg text-gray-500 text-sm top-full w-auto"
                  >
                    <ul className="py-2 grid grid-cols-3">
                      {productList.map((product, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-gray-200 hover:text-blue-700 cursor-pointer"
                          onClick={() => {
                            setSeachProduct('');
                            dispatch(globleSearchString(""));
                            navigate(`/products?product-name=${product.key}`);
                            setIsProductPopoverOpen(false);
                          }}
                        >
                          {product.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>

            <li onMouseEnter={() => setIsProductPopoverOpen(false)}>
              <a
                href="#"
                className="hover:underline font-semibold hover:text-yellow-500"
                onClick={() => {
                  navigate("/");
                  dispatch(setGlobleView("orderView"))
                }}
              >
                Order
              </a>
            </li>
            <li onMouseEnter={() => setIsProductPopoverOpen(false)}>
              <a
                href="#"
                className="hover:underline font-semibold hover:text-yellow-500"
                onClick={() =>{
                  navigate("/");
                  dispatch(setGlobleView("cardView"))
                }}

              >
                Cart
              </a>
            </li>
            {localStorage.getItem("authToken") ? (
              <li
                onMouseEnter={() => setIsProductPopoverOpen(false)}
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                <a
                  href="#"
                  className="hover:underline font-semibold hover:text-black"
                >
                  Logout
                </a>
              </li>
            ) : (
              <li onMouseEnter={() => setIsProductPopoverOpen(false)}>
                <a
                  href="#"
                  className="hover:underline font-semibold hover:text-black"
                >
                  Login
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
