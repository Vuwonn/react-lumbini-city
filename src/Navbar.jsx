import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";
import "./App.css";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    setCartCount(cart.length);
  };

  useEffect(() => {
    updateCartCount();

    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <div className="text-white flex bg-gray-900 px-8 h-16 w-full  z-10 items-center justify-between shadow-lg">
      {/* LOGO */}
      <div className="text-2xl font-bold">LOGO HO YO</div>

      {/* NAVIGATION */}
      <div className="flex gap-8 items-center">
        <Link to="/" className="hover:text-yellow-400 transition">
          Home
        </Link>

        <Link to="/contact" className="hover:text-yellow-400 transition">
          Contact
        </Link>

        <Link to="/about" className="hover:text-yellow-400 transition">
          About
        </Link>

        <Link to="/ourproduct" className="hover:text-yellow-400 transition">
          Our Products
        </Link>

        {/* CART ICON */}
        <Link
          to="/addcard"
          className="relative hover:text-yellow-400 transition"
        >
          <ShoppingCart size={28} />

          {cartCount > 0 && (
            <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {cartCount}
            </span>
          )}
        </Link>

        <Link to="/login">
          <button className="rounded-lg bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-700">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
