import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router";
import { Loader, Star, Clock, Users, ArrowLeft } from "lucide-react";

const Khanabitra = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

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

  const handleAddToCart = () => {
    alert("Food Added to Cart!");
  };

  const handleBuyNow = () => {
    alert("Proceeding to Buy Now!");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <Loader className="animate-spin text-blue-600" size={40} />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500">Food Not Found</h2>

          <Link
            to="/khanaCard"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white"
          >
            <ArrowLeft size={18} />
            Back to Food
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
        <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 md:p-10 lg:gap-14">
          <div className="flex min-h-[320px] items-center justify-center rounded-2xl bg-gray-50 p-6 md:min-h-[440px]">
            <img
              src={data.image}
              alt={data.name}
              className="h-80 w-full object-contain transition duration-300 hover:scale-105 md:h-[420px]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              {data.cuisine}
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              {data.name}
            </h1>

            <div className="mt-4 flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-md bg-yellow-50 px-2 py-1">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />

                <span className="text-sm font-semibold text-gray-700">
                  {data.rating}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                ({data.reviewCount} Reviews)
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gray-50 p-4">
                <Clock className="mb-2 text-blue-600" size={22} />

                <p className="text-sm text-gray-500">Cook Time</p>

                <p className="font-semibold text-gray-900">
                  {data.cookTimeMinutes} Minutes
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <Users className="mb-2 text-blue-600" size={22} />

                <p className="text-sm text-gray-500">Servings</p>

                <p className="font-semibold text-gray-900">
                  {data.servings} People
                </p>
              </div>
            </div>

            <p className="mt-6 text-gray-700">
              <span className="font-semibold">Difficulty:</span>{" "}
              {data.difficulty}
            </p>

            <p className="mt-2 text-gray-700">
              <span className="font-semibold">Meal Type:</span>{" "}
              {data.mealType?.join(", ")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleAddToCart}
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Buy Now
              </button>
            </div>

            <Link
              to="/khanaCard"
              className="mt-6 inline-flex items-center justify-center gap-2 font-semibold text-gray-600 hover:text-blue-600"
            >
              <ArrowLeft size={18} />
              Back to Food
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Khanabitra;
