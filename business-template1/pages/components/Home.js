export default function HomePage(){


    return (
        <section className="bg-[#fff7ec] min-h-screen flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-edu text-[#5e3023] mb-6">
            Welcome to Olas Bakery
          </h1>
          <p className="text-lg md:text-xl font-sans text-[#5e3023] max-w-xl mb-8">
            Homemade pastries, baked fresh every morning with love and tradition.
          </p>
          <a
            href="/menu"
            className="bg-[#d5a845] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#c2983c] transition"
          >
            Explore Our Menu
          </a>
        </section>
      );
}