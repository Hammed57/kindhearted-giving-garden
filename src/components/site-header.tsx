import { Link } from "@tanstack/react-router";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/od-mark.png.asset.json";

const NAV = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About", exact: true },
  { to: "/programs", label: "Programs", exact: true },
  { to: "/portfolio", label: "Portfolio", exact: false },
  { to: "/contact", label: "Contact", exact: true },
] as const;

export function BrandMark() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-card shadow-soft">
        <img
          src={logo.url}
          alt="Olaide Doherty Charity Foundation logo"
          className="h-9 w-9 object-contain"
        />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-lg font-semibold text-foreground">
          Olaide Doherty
        </span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
          Charity Foundation
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <BrandMark />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="gold" size="default" className="px-6">
            <Link to="/donate">
              <Heart /> Donate
            </Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button asChild variant="gold" size="sm" className="px-4">
            <Link to="/donate">Donate</Link>
          </Button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-muted"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pb-6 pt-2 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-4 font-display text-xl text-foreground"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="gold" size="xl" className="mt-5 w-full">
            <Link to="/donate" onClick={() => setOpen(false)}>
              <Heart /> Donate now
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
