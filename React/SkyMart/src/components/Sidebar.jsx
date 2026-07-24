import React, { useState } from "react";
import { ShoppingCart, Zap } from "lucide-react";
import { useNavigate } from "react-router";
import Cart from "./Cart";
import { toast } from "react-toastify";

const Sidebar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* ================= MOBILE NAVBAR ================= */}
      <nav
        className="
          md:hidden
          bg-zinc-950
          text-white
          px-4
          py-3
          border-b
          border-zinc-800
          flex
          items-center
          justify-between
          gap-3
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div
            className="
              w-9
              h-9
              rounded-full
              bg-lime-400
              text-black
              flex
              items-center
              justify-center
            "
          >
            <Zap size={18} />
          </div>

          <h1 className="text-lg font-bold text-[#9AE600]">SkyMart</h1>
        </div>

        {/* Navigation */}
        <div
          className="
            flex
            items-center
            gap-3
            text-xs
            sm:text-sm
          "
        >
          <button
            onClick={() => navigate("/main/")}
            className="
              text-zinc-300
              hover:text-white
            "
          >
            Home
          </button>

          <button
            onClick={() => navigate("/main/shop")}
            className="
              text-zinc-300
              hover:text-white
            "
          >
            Shop
          </button>

          <button
            onClick={() => navigate("/main/about")}
            className="
              text-zinc-300
              hover:text-white
            "
          >
            About
          </button>
        </div>

        {/* Right Buttons */}
        <div
          className="
            flex
            items-center
            gap-2
            shrink-0
          "
        >
          <button
            onClick={() => setCartOpen(true)}
            className="
              p-2
              rounded-lg
              bg-[#f5f5f5]
              text-black
            "
          >
            <ShoppingCart size={18} />
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("loggedInUser");
              toast.success("Logged out");
              navigate("/");
            }}
            className="
              px-3
              py-2
              rounded-lg
              bg-red-600
              text-white
              text-xs
              font-semibold
            "
          >
            Logout
          </button>
        </div>
      </nav>

      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside
        className="
          hidden
          md:flex
          fixed
          top-0
          left-0
          h-screen
          w-64
          bg-zinc-950
          border-r
          border-zinc-800
          flex-col
          justify-between
          p-6
        "
      >
        {/* Top */}
        <div>
          {/* Logo */}
          <div
            className="
              flex
              items-center
              gap-3
              mb-10
            "
          >
            <div
              className="
                w-10
                h-10
                rounded-full
                bg-lime-400
                flex
                items-center
                justify-center
                text-black
              "
            >
              <Zap size={20} />
            </div>

            <h2
              className="
                text-3xl
                font-bold
                text-[#9AE600]
              "
            >
              SkyMart
            </h2>
          </div>

          {/* Navigation */}
          <nav className="space-y-3">
            <button
              onClick={() => navigate("/main/")}
              className="
                w-full
                text-left
                px-4
                py-3
                rounded-lg
                text-zinc-300
                hover:bg-zinc-800
                hover:text-white
                transition
              "
            >
              Home
            </button>

            <button
              onClick={() => navigate("/main/shop")}
              className="
                w-full
                text-left
                px-4
                py-3
                rounded-lg
                text-zinc-300
                hover:bg-zinc-800
                hover:text-white
                transition
              "
            >
              Shop
            </button>

            <button
              onClick={() => navigate("/main/about")}
              className="
                w-full
                text-left
                px-4
                py-3
                rounded-lg
                text-zinc-300
                hover:bg-zinc-800
                hover:text-white
                transition
              "
            >
              About
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setCartOpen(true)}
              className="
                mt-8
                w-full
                py-3
                rounded-lg
                bg-white
                text-black
                font-semibold
                flex
                items-center
                justify-center
                gap-2
                hover:bg-zinc-200
                cursor-pointer
              "
            >
              <ShoppingCart size={20} />
              Cart
            </button>
          </nav>
        </div>

        {/* Logout */}
        <button
          onClick={() => {
            localStorage.removeItem("loggedInUser");
            toast.success("Logged out");
            navigate("/");
          }}
          className="
            w-full
            py-3
            rounded-lg
            bg-red-600
            hover:bg-red-700
            text-white
            font-semibold
            cursor-pointer
          "
        >
          Logout
        </button>
      </aside>

      {/* Cart Drawer */}
      <Cart isOpen={cartOpen} setIsOpen={setCartOpen} />
    </>
  );
};

export default Sidebar;
