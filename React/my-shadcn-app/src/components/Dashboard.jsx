import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AppStore } from "@/context/AppContext";
import { useContext } from "react";
import { replace } from "react-router";

export function Dashboard() {
  const { setUserInfo, navigate, setIsAuthenticated, userInfo } =
    useContext(AppStore);

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setUserInfo({});
    setIsAuthenticated(false);
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground font-sans selection:bg-[#cbf33b]/30">
      {/* 1. Header Navigation */}
      <header className="border-b border-border bg-[#0d0d0d] px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-tight text-white text-lg">
            SkyMart
          </span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="text-[#cbf33b] font-medium">
            Home
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Shop
          </a>
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-[#141414] border border-border px-2 py-1.5 rounded-full text-sm text-white">
            <div className="h-4 w-4 rounded-full bg-[#cbf33b] flex items-center justify-center text-[9px] text-black font-bold">
              A
            </div>
            <span>{user.name}</span>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-border bg-[#141414]"
          >
            <i className="ri-shopping-cart-line"></i>
          </Button>
          <Button
            onClick={logout}
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-border bg-[#141414]"
          >
            <i className="ri-logout-circle-r-line"></i>
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 space-y-6">
        {/* 2. Hero Welcome Banner */}
        <section className="grid md:grid-cols-3 gap-4 border border-border bg-[#0d0d0d] rounded-2xl p-6 relative overflow-hidden">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase text-[#cbf33b] font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#cbf33b] animate-pulse"></span>
              Good Evening
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Welcome back, <br />
              <span className="text-[#cbf33b]">{user.name}!</span>
            </h1>
            <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
              Discover today's picks — hand-curated products across electronics,
              fashion, and more.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Button
                size="sm"
                className="bg-[#cbf33b] text-black hover:bg-[#cbf33b]/90 font-semibold text-xs rounded-xl px-4 py-2"
              >
                Shop Now →
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-border text-white text-xs rounded-xl px-4 py-2 bg-[#141414] hover:bg-accent"
              >
                View All Products
              </Button>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3">
            <div className="border border-border bg-[#141414] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#cbf33b]">20+</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">
                Products Available
              </div>
            </div>
            <div className="border border-border bg-[#141414] rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-white">Free</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">
                Delivery on ₹599+
              </div>
            </div>
          </div>
        </section>

        {/* 3. Small Counter Overview Cards */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatMiniCard count="0" label="Items in bag" icon="📦" />
          <StatMiniCard
            count="$0.00"
            label="Cart Value ready to checkout"
            icon="💳"
          />
          <StatMiniCard count="5" label="Top Products highly rated" icon="⭐" />
          <StatMiniCard count="6" label="Categories to explore" icon="🏷️" />
        </section>

        {/* 4. Shop by Category Grid */}
        <section className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-bold tracking-tight uppercase text-muted-foreground">
              Shop by Category
            </h2>
            <a
              href="#"
              className="text-[11px] text-[#cbf33b] hover:underline font-medium"
            >
              View All →
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CategoryCard name="Electronics" count="17 Items" />
            <CategoryCard name="Clothing" count="2 Items" />
            <CategoryCard name="Furniture" count="3 Items" />
            <CategoryCard name="Home" count="11 Items" />
          </div>
        </section>

        {/* 5. Split Lists: Top Rated & New Arrivals */}
        <section className="grid md:grid-cols-2 gap-6">
          <ProductListBlock title="Top Rated" titleColor="border-[#cbf33b]" />
          <ProductListBlock title="New Arrivals" titleColor="border-blue-500" />
        </section>

        {/* 6. Footer Feature Value Bars */}
        <footer className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-border">
          <ValueBar
            title="Fast Delivery"
            desc="Same-day on select items"
            icon="⚡"
          />
          <ValueBar
            title="Secure Payments"
            desc="100% encrypted checkout"
            icon="🔒"
          />
          <ValueBar
            title="Best Prices"
            desc="Price-match guarantee"
            icon="🏷️"
          />
        </footer>
      </main>
    </div>
  );
}

/* ================== HELPER SUB-COMPONENTS ================== */

function StatMiniCard({ count, label, icon }) {
  return (
    <Card className="border-border bg-[#0d0d0d]">
      <CardContent className="p-4 flex items-center gap-3">
        <div className="text-xl bg-[#141414] border border-border h-9 w-9 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <div>
          <div className="text-sm font-bold text-white">{count}</div>
          <div className="text-[10px] text-muted-foreground leading-tight">
            {label}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function CategoryCard({ name, count }) {
  return (
    <Card className="border border-border bg-[#0d0d0d] hover:border-[#cbf33b]/40 cursor-pointer transition-all">
      <CardContent className="p-4 flex flex-col items-center justify-center text-center space-y-2">
        <div className="h-10 w-10 bg-[#141414] border border-border rounded-xl flex items-center justify-center">
          📦
        </div>
        <div>
          <div className="text-xs font-semibold text-white">{name}</div>
          <div className="text-[10px] text-muted-foreground">{count}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function ProductListBlock({ title, titleColor }) {
  const dummyProducts = Array(5).fill({
    name: "Product Name",
    price: "Price Item",
  });
  return (
    <div className="border border-border bg-[#0d0d0d] rounded-xl p-4 space-y-3">
      <div className="flex items-center gap-2 pb-1 border-b border-border">
        <span className="text-[10px] text-white font-bold tracking-wider uppercase">
          {title}
        </span>
      </div>
      <div className="space-y-2">
        {dummyProducts.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-2 rounded-lg bg-[#141414] border border-border/50 text-xs"
          >
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded bg-[#222] border border-border flex items-center justify-center text-[10px]">
                📷
              </div>
              <div>
                <div className="font-medium text-white">{item.name}</div>
                <div className="text-[10px] text-muted-foreground">
                  {item.price}
                </div>
              </div>
            </div>
            <Button
              size="icon"
              className="h-5 w-5 bg-transparent border border-border text-muted-foreground hover:text-white text-[10px]"
            >
              ↗
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ValueBar({ title, desc, icon }) {
  return (
    <div className="border border-border bg-[#0d0d0d] p-3 rounded-xl flex items-center gap-3">
      <div className="text-sm text-[#cbf33b]">{icon}</div>
      <div>
        <div className="text-xs font-bold text-white">{title}</div>
        <div className="text-[10px] text-muted-foreground">{desc}</div>
      </div>
    </div>
  );
}
