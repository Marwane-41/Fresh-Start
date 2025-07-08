import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="fixed top-0 left-0 w-full bg-[#d5a845cc] shadow-md z-50">
          <div className="max-w-screen-xl mx-auto px-4 py-6 flex items-center justify-between ">
            {/* Logo & Title */}
            <a href="/" className="flex justify-front space-x-3 mb-5">
              <span className="font-edu text-5xl text-[#5e3023] font-bold">
                My Business Name 
              </span>
            </a>
    
            {/* Navigation Items */}
            <ul className="flex space-x-6 items-center text-md text-[#5e3023] font-light">
              <li>
                <a href="/" className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="/menu" className="hover:text-white transition">Menu</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      );

}
