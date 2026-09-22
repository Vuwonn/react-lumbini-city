const Apicard = ({ products }) => {
  return (
    <div className="group w-72 overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-200 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-orange-400">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={products.thumbnail}
          alt={products.title}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold shadow">
          ⭐ {products.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h2 className="text-2xl font-extrabold text-gray-800 line-clamp-1">
          {products.title}
        </h2>

        <p className="text-gray-500 text-sm line-clamp-2">
          {products.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-600">
            ${products.price}
          </span>

          <button className="rounded-lg bg-orange-500 px-4 py-2 text-white font-medium transition hover:bg-orange-600 active:scale-95">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apicard;
