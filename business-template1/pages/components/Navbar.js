import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar(){



  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(()=> {
    document.body.style.overflow = menuOpen ? "hidden" : "";

  }, [menuOpen]);

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#d5a845cc] shadow-md backdrop-blur-md z-50">
          <div className=" max-w-screen-xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="flex space-x-3 font-edu text-4xl text-[#5e3023] font-bold">
            My business Name
          </Link>


          <div className=" text-[#5e3023] text-3xl cursor-pointer z-50"
          onClick={() => setMenuOpen((prev)=> !prev)}
          > 
          {menuOpen ? "x" : "☰"}


          </div>
          </div>
          
          {menuOpen && (
        <div className="fixed inset-0 bg-[#5e3023] bg-opacity-95 text-white flex flex-col items-center justify-center space-y-8 text-2xl z-40">
          <Link href="/" className="hover:text-[#d5a845] transition" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/menu" className="hover:text-[#d5a845] transition" onClick={() => setMenuOpen(false)}>
            Menu
          </Link>
          <Link href="/about" className="hover:text-[#d5a845] transition" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="hover:text-[#d5a845] transition" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}




        </nav>

      );

}
