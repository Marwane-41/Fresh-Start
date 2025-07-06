import Image from "next/image";


export default function HomePage(){

    return (

      <div className="bg-[#fff7ec] text-[#5e3023] font-sans">
  
        <section id="history" className="py-20 px-6 max-w-4xl mx-auto text-center text-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">Our Story</h2>
        <p className="text-lg leading-relaxed text-black">
          What started as a small family kitchen in 1995 has grown into a local favorite for handcrafted breads, pastries, and sweet treats. 
        <br /><br />
        <span className="text-yellow-300 font-medium">[BAKERYNAME]</span> was founded by a passionate baker with a dream — to bring the warmth of homemade baking to every table in the neighborhood. Using time-honored recipes, locally sourced ingredients, and a deep love for the craft, we’ve built more than a bakery — we’ve built a community.
        <br /><br />
        For nearly three decades, we've been rising with the sun to knead, bake, and serve fresh, flavorful creations every single day. Whether you’re stopping by for your morning croissant or a birthday cake made with care, you’ll always be greeted with a smile and the comforting aroma of something special in the oven.
        </p>
        </section>
      </div>
      );
}