import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { asset } from "@/lib/asset";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary">
      <div
        className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "80rem" }}
      >
        {/* Left: Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <img
            src={asset("/logo.jpeg")}
            alt="RV Events & Entertainment Logo"
            className="h-10 md:h-12 w-auto rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-white text-lg md:text-xl leading-none tracking-wide group-hover:text-secondary transition-colors">
              RV Events
            </span>
            <span className="text-white/70 text-[10px] uppercase tracking-widest hidden sm:block mt-1">
              Vision Into Experiences
            </span>
          </div>
        </Link>

        {/* Right: Nav links + CTA (desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-secondary ${location === link.href
                  ? "text-secondary"
                  : "text-white/90"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center bg-secondary text-primary hover:bg-secondary/90 font-semibold text-sm px-5 py-2 rounded-sm transition-colors"
          >
            Request Proposal
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-white/10 px-4 pb-4">
          <div className="flex flex-col gap-3 pt-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors py-1 ${location === link.href
                    ? "text-white font-medium"
                    : "text-white/60 hover:text-white"
                  }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-secondary text-primary hover:bg-secondary/90 font-semibold text-sm px-5 py-2.5 rounded-sm transition-colors mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Request Proposal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
