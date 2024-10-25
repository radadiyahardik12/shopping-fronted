import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-sm">
            We are a leading e-commerce platform offering the best products for
            your needs. Shop with us and experience unmatched quality and service.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">
            Email: support@my-gokhlanaecommerce.com
            <br />
            Phone: +1 (800) 123-4567
            <br />
            Address: 123 Gokhlana E-commerce St, Gokhlana, India
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; 2024 My Gokhlana E-Commerce. All rights reserved.</p>
        <p>Follow us on: 
          <a href="https://facebook.com" className="mx-2 hover:underline">Facebook</a> | 
          <a href="https://twitter.com" className="mx-2 hover:underline">Twitter</a> | 
          <a href="https://instagram.com" className="mx-2 hover:underline">Instagram</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
