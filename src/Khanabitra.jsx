import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router";
import { Loader, Star, Clock, Users, ArrowLeft } from "lucide-react";

const Khanabitra = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/recipes/${id}`);

      setData(res.data);
    } catch (error) {
      console.log(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  // Add to Cart
  const handleAddToCart = () => {
    const oldCart = JSON.parse(localStorage.getItem("cart")) || [];

    const alreadyAdded = oldCart.find((item) => item.id === data.id);

    if (alreadyAdded) {
      alreadyAdded.quantity += quantity;

      localStorage.setItem("cart", JSON.stringify(oldCart));

      window.dispatchEvent(new Event("cartUpdated"));

      alert("Quantity Updated!");
      return;
    }

    const newItem = {
      ...data,
      quantity: quantity,
    };

    const newCart = [...oldCart, newItem];

    localStorage.setItem("cart", JSON.stringify(newCart));

    window.dispatchEvent(new Event("cartUpdated"));

    alert("Food Added to Cart!");
  };

  const handleBuyNow = () => {
    alert("Proceeding to Buy Now!");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader className="animate-spin text-blue-600" size={40} />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">Food Not Found</h1>

        <Link
          to="/"
          className="mt-5 flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          <ArrowLeft size={20} />
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-12 pt-28">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="mb-6 flex items-center gap-2 text-blue-600">
          <ArrowLeft size={20} />
          Back
        </Link>

        <div className="grid gap-10 rounded-2xl bg-white p-6 shadow-lg md:grid-cols-2">
          {/* Image */}
          <div>
            <img
              src={data.image}
              alt={data.name}
              className="h-[450px] w-full rounded-xl object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-4xl font-bold">{data.name}</h1>

            <p className="mt-4 text-gray-600">
              Cuisine:{" "}
              <span className="font-semibold text-gray-900">
                {data.cuisine}
              </span>
            </p>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              <Star size={22} className="fill-yellow-400 text-yellow-400" />

              <span className="font-semibold">{data.rating}</span>

              <span className="text-gray-500">
                ({data.reviewCount} reviews)
              </span>
            </div>

            {/* Info */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gray-100 p-4">
                <Clock className="mb-2 text-blue-600" />

                <p className="text-sm text-gray-500">Cook Time</p>

                <p className="font-bold">{data.cookTimeMinutes} min</p>
              </div>

              <div className="rounded-lg bg-gray-100 p-4">
                <Users className="mb-2 text-blue-600" />

                <p className="text-sm text-gray-500">Servings</p>

                <p className="font-bold">{data.servings}</p>
              </div>
            </div>

            <p className="mt-5">
              Difficulty:{" "}
              <span className="font-bold text-blue-600">{data.difficulty}</span>
            </p>

            {/* Quantity */}
            <div className="mt-6">
              <p className="mb-2 font-semibold">Quantity</p>

              <div className="flex w-fit items-center rounded-lg border">
                <button
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  className="px-4 py-2 text-xl font-bold"
                >
                  -
                </button>

                <span className="px-5 py-2 font-bold">{quantity}</span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-xl font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleAddToCart}
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Add to Cart
              </button>

              <Link
                to="/addcard"
                className="rounded-lg bg-gray-800 px-6 py-3 text-center font-semibold text-white"
              >
                View Cart
              </Link>

              <button
                onClick={handleBuyNow}
                className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Khanabitra;
