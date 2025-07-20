import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Top Navbar */}
      <div className="bg-[#d5a845]/80 backdrop-blur-lg shadow-lg px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-3xl font-bold text-[#5e3023]"
        >
          Local Bakery
        </Link>

        {/* Hamburger button (only shown when menu is closed) */}
        {!menuOpen && (
          <button
            onClick={() => setMenuOpen(true)}
            className="text-4xl font-bold text-[#5e3023]"
            aria-label="Open menu"
          >
            ☰
          </button>
        )}
      </div>

      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#5e3023]/70 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 text-white text-3xl">
          {/* X Button (inside the overlay) */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-4xl font-bold"
            aria-label="Close menu"
          >
            ✕
          </button>

          <NavLink href="/" label="Home" onClick={() => setMenuOpen(false)} />
          <NavLink href="/About" label="Our Story" onClick={() => setMenuOpen(false)} />
          <NavLink href="/menu" label="Menu" onClick={() => setMenuOpen(false)} />
          <NavLink href="/contact" label="Contact" onClick={() => setMenuOpen(false)} />
          
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, label, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="hover:text-[#d5a845] transition-colors duration-300"
    >
      {label}
    </Link>
  );
}
