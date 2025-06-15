import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="bg-[#d5a845] w-full shadow-md">
          <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col items-center justify-center">
            {/* Logo & Title */}
            <a href="/" className="flex items-center space-x-3 mb-4">
              <span className="font-edu text-5xl text-[#5e3023] font-semibold">
                Ola's Bakery
              </span>
            </a>
    
            {/* Navigation Items */}
            <ul className="flex space-x-6 text-lg text-[#5e3023] font-medium">
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
