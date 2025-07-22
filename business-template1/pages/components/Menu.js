export default function MenuPage(){

    const menuItems = [
        {
          id: 1,
          name: "Classic Sourdough Bread",
          description: "A crusty, tangy sourdough loaf made with organic flour.",
          price: "$5.00",
        },
        {
          id: 2,
          name: "Chocolate Croissant",
          description: "Buttery, flaky croissant filled with rich dark chocolate.",
          price: "$3.50",
        },
        {
          id: 3,
          name: "Cinnamon Roll",
          description: "Soft, sweet roll topped with cream cheese icing.",
          price: "$4.00",
        },
      ];
    
  return(


    <section id="menu" className="min-h-screen py-30 px-4 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-[#5e3023]">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map(({ id, name, description, price }) => (
            <div
              key={id}
              className="border border-[#d5a845] rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <h3 className="text-2xl font-semibold mb-2 text-[#5e3023]">{name}</h3>
              <p className="text-sm mb-4 text-[#7a6e5f]">{description}</p>
              <p className="font-bold text-[#d5a845]">{price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  )

}