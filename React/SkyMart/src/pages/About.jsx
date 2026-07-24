import React from "react";
import {
  ShieldCheck,
  Zap,
  Star,
  Truck,
  Users,
  Heart,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  const stats = [
    {
      icon: <Users size={14} />,
      value: "20K+",
      label: "Products",
    },
    {
      icon: <Users size={14} />,
      value: "50K+",
      label: "Happy Customers",
    },
    {
      icon: <Star size={14} />,
      value: "4.9",
      label: "Avg Rating",
    },
    {
      icon: <Truck size={14} />,
      value: "99%",
      label: "On-time Delivery",
    },
  ];

  const values = [
    {
      icon: <ShieldCheck size={16} />,
      title: "Trust",
      desc: "Every product is verified for quality and authenticity before listing.",
    },
    {
      icon: <Zap size={16} />,
      title: "Speed",
      desc: "Fast delivery times so your orders arrive when promised.",
    },
    {
      icon: <Heart size={16} />,
      title: "Community",
      desc: "Building a strong customer community that grows together.",
    },
    {
      icon: <Star size={16} />,
      title: "Quality",
      desc: "We curate the best products with no compromise.",
    },
  ];

  const team = [
    {
      name: "Aditya",
      role: "Founder & CEO",
      color: "bg-lime-400",
    },
    {
      name: "Yash",
      role: "Product Manager",
      color: "bg-blue-500",
    },
    {
      name: "Sanakar",
      role: "Lead Engineer",
      color: "bg-purple-500",
    },
    {
      name: "Dagdu",
      role: "Design Expert",
      color: "bg-pink-500",
    },
  ];

  return (
    <div
      className="
      min-h-screen
      bg-zinc-950
      text-white
      px-5
      md:px-10
      py-10
    "
    >
      {/* Hero */}
      <section className="text-center">
        <div
          className="
          mx-auto
          w-10
          h-10
          rounded-full
          bg-lime-400
          text-black
          flex
          items-center
          justify-center
          mb-4
        "
        >
          <Zap size={20} />
        </div>

        <h1
          className="
          text-3xl
          md:text-4xl
          font-bold
        "
        >
          About
          <span className="text-lime-400"> SkyMart</span>
        </h1>

        <p
          className="
          mt-3
          text-zinc-400
          text-sm
          max-w-md
          mx-auto
        "
        >
          SkyMart is a next-generation e-commerce platform built to make online
          shopping fast, fair and enjoyable for everyone.
        </p>
      </section>

      {/* Stats */}
      <section
        className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-3
        max-w-4xl
        mx-auto
        mt-8
      "
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className="
              border
              border-zinc-700
              rounded-xl
              p-4
              text-center
            "
          >
            <div
              className="
              text-lime-400
              flex
              justify-center
              mb-2
            "
            >
              {item.icon}
            </div>

            <h3
              className="
              font-bold
              text-lg
            "
            >
              {item.value}
            </h3>

            <p
              className="
              text-xs
              text-zinc-400
            "
            >
              {item.label}
            </p>
          </div>
        ))}
      </section>

      {/* Story */}
      <section
        className="
        max-w-4xl
        mx-auto
        mt-7
        border
        border-zinc-700
        rounded-xl
        p-5
      "
      >
        <h2
          className="
          font-bold
          mb-3
        "
        >
          Our Story
        </h2>

        <p
          className="
          text-xs
          text-zinc-400
          leading-6
        "
        >
          SkyMart started in 2022 with a simple idea — make shopping easier and
          more reliable. We combine technology, trust and customer-focused
          service to create a better online shopping experience.
        </p>

        <p
          className="
          text-xs
          text-zinc-400
          leading-6
          mt-2
        "
        >
          Today thousands of customers choose SkyMart because we deliver
          authentic products, transparent pricing and everyday value.
        </p>
      </section>

      {/* Values */}

      <section
        className="
        max-w-4xl
        mx-auto
        mt-7
      "
      >
        <h2
          className="
          text-center
          font-bold
          mb-4
        "
        >
          What We Stand For
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          gap-3
        "
        >
          {values.map((item, index) => (
            <div
              key={index}
              className="
                  border
                  border-zinc-700
                  rounded-xl
                  p-4
                  flex
                  gap-3
                "
            >
              <div
                className="
                  text-lime-400
                "
              >
                {item.icon}
              </div>

              <div>
                <h3
                  className="
                    text-sm
                    font-semibold
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-xs
                    text-zinc-400
                    mt-1
                  "
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}

      <section
        className="
        max-w-4xl
        mx-auto
        mt-7
      "
      >
        <h2
          className="
          text-center
          font-bold
          mb-4
        "
        >
          Meet the Team
        </h2>

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-3
        "
        >
          {team.map((member, index) => (
            <div
              key={index}
              className="
                  border
                  border-zinc-700
                  rounded-xl
                  p-4
                  text-center
                "
            >
              <div
                className={`
                  ${member.color}
                  w-8
                  h-8
                  rounded-full
                  mx-auto
                  flex
                  items-center
                  justify-center
                  text-black
                  text-xs
                  font-bold
                `}
              >
                {member.name.charAt(0)}
              </div>

              <h3
                className="
                  mt-3
                  text-sm
                  font-semibold
                "
              >
                {member.name}
              </h3>

              <p
                className="
                  text-xs
                  text-zinc-400
                "
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section
        className="
        max-w-4xl
        mx-auto
        mt-7
        border
        border-lime-900
        rounded-xl
        p-6
        text-center
      "
      >
        <h2
          className="
          font-bold
        "
        >
          Ready to shop?
        </h2>

        <p
          className="
          text-xs
          text-zinc-400
          mt-2
        "
        >
          Explore thousands of products at unbeatable prices.
        </p>

        <button
          onClick={() => navigate("/main/shop")}
          className="
            mt-4
            px-5
            py-2
            rounded-lg
            bg-lime-400
            text-black
            font-semibold
            text-sm
            flex
            items-center
            gap-2
            mx-auto
          "
        >
          Explore Products
          <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
};

export default About;
