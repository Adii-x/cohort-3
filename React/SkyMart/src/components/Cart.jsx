import React, { useContext, useEffect } from "react";
import { X, ShoppingCart, Trash2 } from "lucide-react";
import { MainStore } from "../context/MainContext";

const Cart = ({ isOpen, setIsOpen }) => {
  const { setCartItems, cartItems, totalPrice } = useContext(MainStore);

  useEffect(() => {
    if (isOpen) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(cart);
    }
  }, [isOpen]);

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(updated));
    setCartItems(updated);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="
            fixed inset-0
            backdrop-blur-sm
            z-40
            "
        />
      )}

      {/* Drawer */}
      <aside
        className={`
          fixed top-0 right-0 z-50
          h-screen w-80
          bg-zinc-950 border-l border-zinc-800
          flex flex-col
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-zinc-800">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <ShoppingCart className="text-white" />
              <h1 className="text-2xl font-bold text-white">
                Cart ({cartItems.length})
              </h1>
            </div>

            <button onClick={() => setIsOpen(false)} className="text-white">
              <X />
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {cartItems.length === 0 ? (
            <p className="text-zinc-400 text-center mt-10">No items in cart</p>
          ) : (
            <div className="space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 border-b border-zinc-800 pb-4"
                >
                  <div className="bg-white rounded-lg p-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-white text-sm line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-lime-400 font-semibold mt-1">
                      ${item.price}
                    </p>

                    <p className="text-xs text-zinc-500">
                      Qty : {item.quantity}
                    </p>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-400"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-800 p-6">
          <div className="flex justify-between mb-4">
            <span className="text-zinc-400">Total</span>

            <span className="text-white font-bold">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <button
            className="
              w-full
              py-3
              rounded-lg
              bg-lime-400
              text-black
              font-semibold
              hover:bg-lime-300
            "
          >
            Checkout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Cart;
