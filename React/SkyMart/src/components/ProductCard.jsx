import React, { useContext } from "react";
import { Star, ShoppingCart } from "lucide-react";
import addToCart from "../utility/cartAdd";
import { MainStore } from "../context/MainContext";

const ProductCard = ({ product }) => {
  const { cartItems, setCartItems } = useContext(MainStore);

  return (
    <div
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-3xl
        overflow-hidden
        transition-all
        duration-300
        hover:border-lime-400/50
        hover:-translate-y-1
      "
    >
      {/* Image Section */}
      <div className="bg-white p-5">
        <span
          className="
            inline-block
            px-3
            py-1
            rounded-full
            bg-zinc-500
            text-white
            text-[10px]
            font-semibold
            capitalize
          "
        >
          {product.category}
        </span>

        <div className="h-44 flex items-center justify-center mt-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-zinc-500 capitalize">{product.category}</p>

        <h2
          className="
            mt-2
            text-sm
            font-semibold
            text-white
            line-clamp-2
            min-h-10.5
          "
        >
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={12}
              className={
                star <= Math.round(product.rating.rate)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-zinc-600"
              }
            />
          ))}

          <span className="text-[11px] text-zinc-500">
            ({product.rating.count})
          </span>
        </div>

        <div className="border-t border-zinc-700 my-4"></div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-lime-400">${product.price}</h3>

          <button
            onClick={() => addToCart(product, cartItems, setCartItems)}
            className="
              flex
              items-center
              gap-2
              bg-lime-400
              text-black
              px-4
              py-2
              rounded-full
              text-xs
              font-semibold
              hover:bg-lime-300
              transition
            "
          >
            <ShoppingCart size={14} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
