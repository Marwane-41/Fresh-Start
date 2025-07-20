// HomePage.js
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HomePage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Scroll reveal animation setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="bg-[#f3ead7] text-[#5e3023] font-sans relative">
      <section className="relative h-screen w-full snap-start">
        <Image
          src="/BakeryAe.jpg"
          alt="Bakery Interior"
          fill
          className="object-cover"
          priority
        />
        
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-6 font-edu">
            Artisan Bakery
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-lg text-center mb-10">
            Handcrafted with passion since 1995
          </p>
          
          <button
            onClick={() => {
              document.getElementById("history").scrollIntoView({ 
                behavior: "smooth" 
              });
            }}
            className="bg-[#d5a845] hover:bg-[#c19338] text-[#5e3023] font-semibold px-8 py-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            Explore Our Menu
          </button>
        </div>
      </section>

      <section 
        id="history"
        ref={sectionRef}
        className="py-28 px-6 max-w-4xl mx-auto text-center opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-10 font-edu">
          Our Story
        </h2>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            What started as a small family kitchen in 1995 has grown into a local favorite for 
            handcrafted breads, pastries, and sweet treats.
          </p>
          <p className="bg-[#d5a845]/20 p-6 rounded-xl border-2 border-[#d5a845]/30">
            <span className="font-edu text-2xl font-semibold">[BAKERYNAME]</span> was founded by a passionate 
            baker with a dream — to bring the warmth of homemade baking to every table in the neighborhood.
          </p>
          <p>
            Using time-honored recipes, locally sourced ingredients, and a deep love for the craft, 
            we've built more than a bakery — we've built a community.
          </p>
        </div>
      </section>
    </div>
  );
}