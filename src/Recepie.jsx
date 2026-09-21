import axios from "axios";
import { useEffect, useState } from "react";
import KhanaCard from "./KhanaCard";
import { Loader, Search } from "lucide-react";
import { Link } from "react-router";

const Recepie = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchdata = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes");

      setData(res.data.recipes);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader className="animate-spin text-blue-600" size={40} />
      </div>
    );
  }

  const filtereddata = data.filter((value) =>
    value.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
        Explore Delicious Recipes
      </h1>

      {/* Search */}
      <div className="mx-auto mb-10 flex max-w-xl items-center rounded-lg border-2 bg-white px-4">
        <Search className="text-gray-500" size={22} />

        <input
          type="text"
          placeholder="Search your food..."
          className="w-full p-4 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {filtereddata.map((value) => (
          <KhanaCard khana={value} key={value.id} />
        ))}
      </div>

      {filtereddata.length === 0 && (
        <h2 className="mt-10 text-center text-xl text-red-500">
          Food Not Found
        </h2>
      )}
    </div>
  );
};

export default Recepie;
