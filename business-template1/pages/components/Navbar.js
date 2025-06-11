import Link from "next/link";


export default function Navbar(){
return(

    <header className="bg-[#fff7ec] shadow-md sticky top-0 z-50">
    <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-[#4e342e] tracking-wide">
            Ola's Bakery
        </span>
      
      </nav>

      <div className="hidden md:flex space-x-6 text-[#4e342e] font-medium">
          <Link href="/menu" className="hover:text-yellow-600 transition">Menu</Link>
          <Link href="/about" className="hover:text-yellow-600 transition">About</Link>
          <Link href="/contact" className="hover:text-yellow-600 transition">Contact</Link>
        </div>
      </header>
);

}
