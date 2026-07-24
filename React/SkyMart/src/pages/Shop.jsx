import React, { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { useNavigate, useSearchParams } from "react-router";

const Shop = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    searchParams.get("category") || "all",
  );
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    setCategory(searchParams.get("category") || "all");
  }, [searchParams]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ["all", ...new Set(products.map((item) => item.category))];

  const filteredProducts = useMemo(() => {
    let data = [...products];

    if (category !== "all") {
      data = data.filter((item) => item.category === category);
    }

    if (search) {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [products, search, category, sort]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-5 md:px-10 py-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">
          All <span className="text-lime-400">Products</span>
        </h1>

        <p className="text-xs text-zinc-500 mt-1">
          {filteredProducts.length} products found
        </p>
      </div>

      {/* Filters */}

      <div className="mt-8 border border-zinc-700 rounded-2xl p-3 flex flex-col lg:flex-row gap-3">
        {/* Search */}

        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              bg-zinc-900
              border
              border-zinc-700
              rounded-xl
              pl-11
              pr-4
              py-3
              text-sm
              outline-none
              focus:border-lime-400
            "
          />
        </div>

        {/* Category */}

        <select
          value={category}
          onChange={(e) => {
            const value = e.target.value;
            setCategory(value);
            navigate(`/main/shop?category=${encodeURIComponent(value)}`);
          }}
          className="
            bg-zinc-900
            border
            border-zinc-700
            rounded-xl
            px-4
            py-3
            text-sm
            outline-none
          "
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.replace("-", " ")}
            </option>
          ))}
        </select>

        {/* Sort */}

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="
            bg-zinc-900
            border
            border-zinc-700
            rounded-xl
            px-4
            py-3
            text-sm
            outline-none
          "
        >
          <option value="featured">Featured</option>
          <option value="low">Price : Low to High</option>
          <option value="high">Price : High to Low</option>
        </select>
      </div>

      {/* Products */}

      {loading ? (
        <div className="text-center mt-20 text-zinc-400">
          Loading Products...
        </div>
      ) : (
        <div
          className="
            mt-6
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            2xl:grid-cols-5
            gap-5
          "
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
