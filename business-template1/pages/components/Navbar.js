import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling when menu is open
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Top Nav Bar */}
      <div className="bg-[#d5a845]/80 backdrop-blur-md shadow-md px-6 py-4 flex items-center justify-between">
        <Link href="/" onClick={() => setMenuOpen(false)} className="text-3xl font-bold text-[#5e3023]">
          Sweet Delights
        </Link>

        {/* Toggle Button: Hamburger or X */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`text-4xl font-bold z-50 transition-colors duration-300 ${
            menuOpen ? "text-white" : "text-[#5e3023]"
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#5e3023]/70 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-white text-3xl z-40 transition-all duration-300">
          <NavLink href="/" label="Home" onClick={() => setMenuOpen(false)} />
          <NavLink href="/menu" label="Menu" onClick={() => setMenuOpen(false)} />
          <NavLink href="/about" label="Our Story" onClick={() => setMenuOpen(false)} />
          <NavLink href="/contact" label="Contact" onClick={() => setMenuOpen(false)} />
          <NavLink href="/order" label="Order Online" onClick={() => setMenuOpen(false)} />
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
