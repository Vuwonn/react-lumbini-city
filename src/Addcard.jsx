import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Trash2 } from "lucide-react";

const Addcard = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];

    setCart(data);
  }, []);

  // Increase quantity
  const increase = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCart(newCart);

    localStorage.setItem("cart", JSON.stringify(newCart));

    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Decrease quantity
  const decrease = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });

    setCart(newCart);

    localStorage.setItem("cart", JSON.stringify(newCart));

    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Remove
  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);

    setCart(newCart);

    localStorage.setItem("cart", JSON.stringify(newCart));

    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 pt-24">
      <h1 className="mb-8 text-3xl font-bold">My Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Cart is Empty</h2>

          <Link
            to="/"
            className="mt-5 inline-block rounded bg-blue-600 px-5 py-2 text-white"
          >
            Go Home
          </Link>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-3">
          {cart.map((item) => (
            <div key={item.id} className="rounded-lg bg-white p-4 shadow">
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full rounded object-cover"
              />

              <h2 className="mt-3 text-xl font-bold">{item.name}</h2>

              <p className="text-gray-500">{item.cuisine}</p>

              <p className="mt-2">⭐ {item.rating}</p>

              <div className="mt-4 flex w-fit items-center rounded border">
                <button
                  onClick={() => decrease(item.id)}
                  className="px-4 py-2 text-xl font-bold"
                >
                  -
                </button>

                <span className="px-5 font-bold">{item.quantity}</span>

                <button
                  onClick={() => increase(item.id)}
                  className="px-4 py-2 text-xl font-bold"
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.id)}
                className="mt-4 flex items-center gap-2 rounded bg-red-500 px-4 py-2 text-white"
              >
                <Trash2 size={18} />
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Addcard;
