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

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-[#d5a845]/80 backdrop-blur-lg shadow-lg px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          onClick={closeMenu}
          className="text-3xl font-bold text-[#5e3023]"
        >
          Local Bakery
        </a>

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

      {menuOpen && (
        <div className="fixed inset-0 bg-[#5e3023]/70 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 text-white text-3xl">
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-white text-4xl font-bold"
            aria-label="Close menu"
          >
            ✕
          </button>

          <a href="/" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>Our Story</a>
          <a href="#menu" onClick={closeMenu}>Menu</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
}
