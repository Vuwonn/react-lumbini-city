import React from "react";
import { Link } from "react-router";

const KhanaCard = ({ khana }) => {
  return (
    <div className="rounded-xl bg-white p-4 shadow-md">
      <img
        src={khana.image}
        alt={khana.name}
        className="h-48 w-full rounded-lg object-cover"
      />

      <h2 className="mt-3 text-xl font-bold">{khana.name}</h2>

      <p className="mt-2 text-gray-600">Cuisine: {khana.cuisine}</p>

      <Link
        to={`/khanabitra/${khana.id}`}
        className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
};

export default KhanaCard;
