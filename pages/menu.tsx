import Layout from '../components/Layout'

const menuItems = [
  // Appetizers
  { category: 'Appetizers', name: 'Spring Rolls', desc: 'Filipino-style Lumpia', price: 6.25 },
  { category: 'Appetizers', name: 'Black-Eyed Pea Dip', desc: 'Southern classic with chips', price: 8.75 },
  { category: 'Appetizers', name: 'La Poutine de Georgia', desc: 'Fries with beef gravy and pimiento cheese', price: 8.25 },
  { category: 'Appetizers', name: 'Queso Flameado', desc: 'Melted cheese with tortillas', price: 9.25 },
  { category: 'Appetizers', name: 'Mozzarella Sticks', desc: 'Crispy fried mozzarella', price: 6.00 },
  
  // Salads
  { category: 'Salads', name: 'Charred Broccoli Salad', desc: 'Large portion', price: 10.15 },
  { category: 'Salads', name: 'Baby Kale Salad', desc: 'Fresh and healthy', price: 8.95 },
  
  // Burgers & Dogs
  { category: 'Burgers & Dogs', name: 'The Bowie', desc: 'Mushroom, Swiss, and bacon', price: 10.25 },
  { category: 'Burgers & Dogs', name: 'The Southern Living', desc: 'Pimiento cheese and bacon', price: 10.95 },
  { category: 'Burgers & Dogs', name: 'Beef Burger', desc: 'Five-ounce patty on fluffy bun', price: 8.25 },
  { category: 'Burgers & Dogs', name: 'Plain Dog', desc: 'Classic hot dog', price: 6.95 },
  
  // Sandwiches
  { category: 'Sandwiches', name: 'Imperial Cuban', desc: 'Traditional Cuban sandwich', price: 9.75 },
  { category: 'Sandwiches', name: 'Philly Cheese Steak', desc: 'Beef or chicken option', price: 10.75 },
  { category: 'Sandwiches', name: 'Grilled Chicken Sandwich', desc: 'Fresh grilled chicken', price: 8.25 },
  
  // Sides
  { category: 'Sides', name: 'Hand-cut French Fries', desc: 'Basket of crispy fries', price: 3.75 },
  { category: 'Sides', name: 'Mac n Cheese', desc: 'Browned in cast-iron pan', price: 5.00 },
  { category: 'Sides', name: 'Sweet Potato Fries', desc: 'Crispy sweet potato fries', price: 3.75 },
  { category: 'Sides', name: 'Green Beans', desc: 'Fresh steamed green beans', price: 3.50 },
]

export default function MenuPage() {
  const categories = [...new Set(menuItems.map(item => item.category))]
  
  return (
    <Layout>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Pure pub grub with Southern comfort and typical bar food with a twist. 
          Our menu features witty descriptions and creative takes on classic dishes.
        </p>
      </div>
      
      {categories.map(category => (
        <div key={category} className="mb-12">
          <div className="border-b-2 border-red-600 pb-2 mb-6">
            <h2 className="text-3xl font-bold text-gray-800">{category}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems
              .filter(item => item.category === category)
              .map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all duration-200 hover:border-red-300">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <div className="text-xl font-bold text-red-600">${item.price.toFixed(2)}</div>
                  </div>
                  <p className="text-gray-600 text-sm italic">{item.desc}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
      
      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg border border-red-200">
        <h3 className="text-2xl font-bold mb-4 text-center">Extras & Add-ons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">Cheese Options</h4>
            <p className="text-sm text-gray-600">Blue, American, Cheddar, Swiss - $1.35</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">Pimiento Cheese</h4>
            <p className="text-sm text-gray-600">Southern favorite - $2.00</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">Bacon</h4>
            <p className="text-sm text-gray-600">Crispy bacon strips - $1.00</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">Extra Patty</h4>
            <p className="text-sm text-gray-600">Additional burger patty - $3.75</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
