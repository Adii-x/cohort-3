import React, { useContext } from "react";
import {
  Sun,
  Package,
  Wallet,
  Star,
  Tags,
  ShoppingBag,
  ChevronRight,
  Heart,
  Cpu,
  Shirt,
  Sofa,
  Home as HomeIcon,
  Dumbbell,
  Watch,
  Zap,
  ShieldCheck,
  BadgeDollarSign,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router";
import { MainStore } from "../context/MainContext";

const Home = () => {
  const navigate = useNavigate();

  const { cartItems, totalPrice } = useContext(MainStore);

  const { name: userName } = JSON.parse(localStorage.getItem("loggedInUser"));

  const quickStats = [
    {
      icon: <Package size={18} />,
      value: cartItems.length,
      label: "Cart Items",
      sub: "In your bag",
      color: "lime",
    },
    {
      icon: <Wallet size={18} />,
      value: ` $ ${totalPrice.toFixed(2)}`,
      label: "Cart Value",
      sub: "Ready to checkout",
      color: "sky",
    },
    {
      icon: <Star size={18} />,
      value: "5",
      label: "Top Products",
      sub: "Highly rated",
      color: "amber",
    },
    {
      icon: <Tags size={18} />,
      value: "6",
      label: "Categories",
      sub: "To explore",
      color: "purple",
    },
  ];

  const statColorMap = {
    lime: "bg-lime-400/15 text-lime-400",
    sky: "bg-sky-400/15 text-sky-400",
    amber: "bg-amber-400/15 text-amber-400",
    purple: "bg-purple-400/15 text-purple-400",
  };

  const categories = [
    {
      name: "Electronics",
      count: 7,
      icon: <Cpu size={22} />,
      color: "text-sky-500",
    },
    {
      name: "Clothing",
      count: 2,
      icon: <Shirt size={22} />,
      color: "text-pink-500",
    },
    {
      name: "Furniture",
      count: 2,
      icon: <Sofa size={22} />,
      color: "text-amber-600",
    },
    {
      name: "Home",
      count: 14,
      icon: <HomeIcon size={22} />,
      color: "text-blue-500",
    },
    {
      name: "Sports",
      count: 4,
      icon: <Dumbbell size={22} />,
      color: "text-orange-500",
    },
    {
      name: "Accessories",
      count: 5,
      icon: <Watch size={22} />,
      color: "text-purple-500",
    },
  ];

  const topRated = [
    { name: "Wireless Headphones", price: "₹2,999.00" },
    { name: "Running Shoes", price: "₹1,799.00" },
    { name: "Smart Watch", price: "₹3,499.00" },
    { name: "Leather Wallet", price: "₹899.00" },
    { name: "Desk Lamp", price: "₹1,149.00" },
  ];

  const newArrivals = [
    { name: "Backpack", price: "₹1,599.00" },
    { name: "Bluetooth Speaker", price: "₹2,099.00" },
    { name: "Sunglasses", price: "₹899.00" },
    { name: "Ceramic Mug Set", price: "₹649.00" },
    { name: "Yoga Mat", price: "₹1,299.00" },
  ];

  const perks = [
    {
      icon: <Zap size={18} />,
      title: "Fast Delivery",
      desc: "Same-day on select items",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Secure Payments",
      desc: "100% encrypted checkout",
    },
    {
      icon: <BadgeDollarSign size={18} />,
      title: "Best Prices",
      desc: "Price-match guarantee",
    },
  ];

  const categoryMap = {
    Electronics: "electronics",
    Clothing: "men's clothing",
    Furniture: "electronics",
    Home: "electronics",
    Sports: "electronics",
    Accessories: "jewelery",
  };

  return (
    <div
      className="
      min-h-screen
      bg-[#0d0d10]
      text-white
      text-[15px]
      px-5
      md:px-10
      py-8
    "
    >
      {/* Hero */}
      <section className="max-w-5xl mx-auto">
        <div
          className="
            relative
            overflow-hidden
            border
            border-zinc-700
            rounded-2xl
            p-6
            md:p-8
          "
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(163,230,53,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(163,230,53,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            backgroundColor: "#111114",
          }}
        >
          {/* glow accents */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-lime-400/25 rounded-full blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 w-64 h-64 bg-lime-400/10 rounded-full blur-[90px]" />

          <div
            className="
            relative
            grid
            grid-cols-1
            md:grid-cols-[1fr_auto]
            gap-6
          "
          >
            <div>
              <div
                className="
                flex
                items-center
                gap-1.5
                text-lime-400
                text-sm
                font-semibold
                tracking-wide
                uppercase
              "
              >
                <Sun size={16} />
                Good evening
              </div>

              <h1
                className="
                mt-2
                text-3xl
                md:text-4xl
                font-bold
              "
              >
                Welcome back, <span className="text-lime-400">{userName}!</span>
              </h1>

              <p
                className="
                mt-2
                text-zinc-400
                text-sm
                max-w-sm
              "
              >
                Discover today's picks — hand-curated products across
                electronics, fashion, and more.
              </p>

              <div
                className="
                mt-5
                flex
                flex-wrap
                gap-3
              "
              >
                <button
                  onClick={() => navigate("/main/shop")}
                  className="
                    px-5
                    py-2.5
                    rounded-lg
                    bg-lime-400
                    text-black
                    text-sm
                    font-semibold
                    flex
                    items-center
                    gap-1.5
                    shadow-[0_0_20px_rgba(163,230,53,0.35)]
                    hover:shadow-[0_0_28px_rgba(163,230,53,0.5)]
                    transition-shadow
                  "
                >
                  Shop Now
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => navigate("/main/shop")}
                  className="
                    px-5
                    py-2.5
                    rounded-lg
                    border
                    border-zinc-600
                    text-sm
                    font-semibold
                  "
                >
                  View All Products
                </button>
              </div>
            </div>

            {/* stat boxes stacked on the right */}
            <div
              className="
              flex
              md:flex-col
              gap-3
              md:w-44
            "
            >
              <div
                className="
                flex-1
                bg-lime-400
                text-black
                rounded-xl
                p-4
                text-center
                flex
                flex-col
                items-center
                justify-center
              "
              >
                <p className="font-extrabold text-xl leading-tight">20+</p>
                <p className="text-xs font-medium">Products Available</p>
              </div>

              <div
                className="
                flex-1
                border
                border-zinc-700
                rounded-xl
                p-4
                text-center
                flex
                flex-col
                items-center
                justify-center
                bg-white/5
              "
              >
                <p className="font-extrabold text-xl leading-tight">Free</p>
                <p className="text-xs text-zinc-400">Delivery on ₹999+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section
        className="
        max-w-5xl
        mx-auto
        grid
        grid-cols-2
        md:grid-cols-4
        gap-3
        mt-4
      "
      >
        {quickStats.map((item, index) => (
          <div
            key={index}
            className="
              border
              border-zinc-700
              rounded-xl
              p-4
              flex
              items-center
              gap-3
            "
          >
            <div
              className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center ${
                statColorMap[item.color]
              }`}
            >
              {item.icon}
            </div>
            <div>
              <h3 className="font-bold text-xl leading-tight">{item.value}</h3>
              <p className="text-sm font-medium">{item.label}</p>
              <p className="text-xs text-zinc-500">{item.sub}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Shop by category */}
      <section className="max-w-5xl mx-auto mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">Shop by Category</h2>
          <button
            onClick={() => navigate("/main/shop")}
            className="
              text-lime-400
              text-sm
              font-semibold
              flex
              items-center
              gap-0.5
            "
          >
            View All
            <ChevronRight size={16} />
          </button>
        </div>

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-3
        "
        >
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() =>
                navigate(
                  `/main/shop?category=${encodeURIComponent(
                    categoryMap[cat.name] || "all",
                  )}`,
                )
              }
              className="
                bg-zinc-900
                border
                border-zinc-800
                text-white
                rounded-xl
                p-4
                text-left
                hover:-translate-y-0.5
                hover:border-zinc-700
                transition-all
              "
            >
              <div className={cat.color}>{cat.icon}</div>
              <h3 className="mt-2 text-base font-semibold">{cat.name}</h3>
              <p className="text-xs text-zinc-500">{cat.count} items</p>
            </button>
          ))}
        </div>
      </section>

      {/* Perks */}
      <section
        className="
        max-w-5xl
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-3
        gap-3
        mt-8
      "
      >
        {perks.map((perk, index) => (
          <div
            key={index}
            className="
              border
              border-zinc-700
              rounded-xl
              p-4
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
              text-lime-400
              w-9
              h-9
              rounded-full
              border
              border-zinc-700
              flex
              items-center
              justify-center
              shrink-0
            "
            >
              {perk.icon}
            </div>
            <div>
              <h4 className="text-base font-semibold">{perk.title}</h4>
              <p className="text-xs text-zinc-400">{perk.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto mt-10 pt-6 border-t border-zinc-800 text-center">
        <p className="text-lime-400 font-bold text-base">SkyMart</p>
        <p className="text-xs text-zinc-500 mt-1">
          © 2022 SkyMart · Built with React · Localstorage
        </p>
      </footer>
    </div>
  );
};

export default Home;
