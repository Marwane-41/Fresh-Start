import Image from "next/image";


export default function HomePage(){

    return (

      <div className="bg-[#fff7ec] text-[#5e3023] font-sans">
  
      <section className="flex flex-col items-center justify-center text-center py-24 px-4">

        <p className="text-lg md:text-xl max-w-xl mb-6">
          Handmade pastries crafted fresh each morning. Taste the love in every bite.
        </p>
        <a
          href="/menu"
          className="bg-[#d5a845] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#c2983c] transition"
        >
          Explore Our Menu
        </a>

      </section>
      </div>
      );
}