import Layout from '../components/Layout'
import { useState, useEffect } from 'react'

const menuItems = [
  // Appetizers
  { category: 'Appetizers', name: 'Mozzarella Sticks (V)', desc: 'Served with marinara', price: 8.50 },
  { category: 'Appetizers', name: 'Fried Pickles (V)', desc: 'Served with ranch', price: 6.50 },
  { category: 'Appetizers', name: 'Pimento Cheese Plate (V)', desc: 'Our own! Served with saltines. You can add celery!', price: 9.50 },
  { category: 'Appetizers', name: 'Spring Rolls', desc: '2 veg-filled, yet fried rolls. A yin-yang sorta thing.', price: 8.50 },
  { category: 'Appetizers', name: 'Pizza Rolls', desc: 'House-made, filled with ground beef, pepperoni and mozzarella. Served with marinara and ranch.', price: 11.00 },
  { category: 'Appetizers', name: 'Cuban Rolls', desc: 'Filled with our pork, ham, pickles, mustard & mojo.', price: 11.00 },
  { category: 'Appetizers', name: 'La Poutine de Georgia (V)', desc: 'Now with veggie gravy...but you can still add bacon!', price: 10.00 },
  { category: 'Appetizers', name: 'Hummus Plate (V)', desc: 'Made right \'cheer!', price: 12.00 },
  { category: 'Appetizers', name: 'Nachos', desc: 'Chips, Cheese Sauce, LTO, Jalapeños. SC on request. Ask your server what else you can add today!', price: 12.00 },
  { category: 'Appetizers', name: 'The Big Ass Pretzel (V)', desc: 'Add cheese +2', price: 8.00 },

  // Soups and Salads
  { category: 'Soups and Salads', name: 'Chili: Beef or Veggie', desc: 'Small $6 / Large $7', price: 6.00 },
  { category: 'Soups and Salads', name: 'Caesar Salad (V)', desc: 'Small $5 / Large $7', price: 5.00 },
  { category: 'Soups and Salads', name: 'Lemony Greens', desc: 'Spring Mix, Toasted Chickpeas, Cherry Toms, Blue Crumbles and Lemon Vinaigrette.', price: 12.00 },
  { category: 'Soups and Salads', name: 'Charred Broccoli Salad (V)', desc: 'Small $9 / Large $11', price: 9.00 },
  { category: 'Soups and Salads', name: 'Add Grilled Chicken', desc: 'Add to any salad', price: 5.00 },

  // Sandwiches
  { category: 'Sandwiches', name: 'Bowie Q', desc: 'Pulled pork from our own smoker.', price: 11.00 },
  { category: 'Sandwiches', name: 'B.L.T', desc: 'Available on White/Wheat bread.', price: 9.50 },
  { category: 'Sandwiches', name: 'Chicken Caesar Wrap', desc: 'Fresh grilled chicken with Caesar dressing', price: 15.00 },
  { category: 'Sandwiches', name: 'Fried Fish', desc: 'Served with Tartar or Cocktail sauce.', price: 15.50 },
  { category: 'Sandwiches', name: 'Chicken Philly or The Philly Philly (NV)', desc: 'Classic Philly cheese steak', price: 15.00 },
  { category: 'Sandwiches', name: 'Mushroom Philly (V)', desc: 'Vegetarian Philly option', price: 12.00 },

  // Burgers & Dogs
  { category: 'Burgers & Dogs*', name: 'Plain Burger*', desc: 'Classic beef burger with LTO+pickle & a side', price: 13.00 },
  { category: 'Burgers & Dogs*', name: 'The Holland*', desc: 'With Caramelized onions', price: 14.00 },
  { category: 'Burgers & Dogs*', name: 'Southern Living*', desc: 'With Pimento Cheese & Bacon', price: 17.00 },
  { category: 'Burgers & Dogs*', name: 'KR\'s Psychedelic N Mexico Experience*', desc: 'With Green chilies, cheddar', price: 16.00 },
  { category: 'Burgers & Dogs*', name: 'Buffalo Blue*', desc: 'With Buffalo Sauce & Blue Cheese', price: 16.00 },
  { category: 'Burgers & Dogs*', name: 'The Bowie*', desc: 'With Mushrooms, Swiss & Bacon', price: 17.00 },
  { category: 'Burgers & Dogs*', name: 'Plain Dog', desc: 'Ask what you can add.', price: 8.00 },
  { category: 'Burgers & Dogs*', name: 'The Carpetbagger (dog!)', desc: 'With Must., Rel., Onions, Tomato, Peppers, Celery Salt', price: 10.00 },
  { category: 'Burgers & Dogs*', name: 'Southern Dog', desc: 'With Pimento Cheese & Bacon', price: 11.00 },
  { category: 'Burgers & Dogs*', name: 'Make it Impossible', desc: 'Add to any burger', price: 4.00 },
  { category: 'Burgers & Dogs*', name: 'Add Cheese', desc: 'Add to any burger', price: 2.50 },
  { category: 'Burgers & Dogs*', name: 'Add a Fried Egg', desc: 'Add to any burger', price: 2.50 },
  { category: 'Burgers & Dogs*', name: 'Add Avocado', desc: 'Add to any burger', price: 2.50 },

  // Other Entrees
  { category: 'Other Entrees', name: 'Chicken Tenders', desc: 'Comes with a side \'n\' a sauce.', price: 15.00 },
  { category: 'Other Entrees', name: 'Fish \'N\' Chips', desc: 'Fried Cod with fries and slaw.', price: 15.00 },
  { category: 'Other Entrees', name: 'Falafel Wrap', desc: 'Falafel, Hummus, Blue Chz., Buff Sauce, L,T, Cukes.', price: 12.00 },
  { category: 'Other Entrees', name: 'Wings', desc: '10 wings $15.99 / 20 wings $29.99. Buffalo, AJ\'s Sweet Hot, Lemon Pepper, Jerk', price: 15.99 },

  // Sides
  { category: 'Sides', name: 'Fries', desc: 'Hand-cut French fries', price: 5.00 },
  { category: 'Sides', name: 'Slaw', desc: 'Fresh coleslaw', price: 3.00 },
  { category: 'Sides', name: 'Cup O\' Salad', desc: 'Fresh garden salad', price: 3.00 },
  { category: 'Sides', name: 'Tots', desc: 'The darn well worth a little more sides', price: 5.50 },
  { category: 'Sides', name: 'Broccoli', desc: 'Fresh steamed broccoli', price: 4.00 },
  { category: 'Sides', name: 'Green Beans', desc: 'Fresh steamed green beans', price: 5.00 },
  { category: 'Sides', name: 'Mac \'n\' Cheese', desc: 'Creamy mac and cheese', price: 6.00 },
  { category: 'Sides', name: 'Fresh Fried Okra', desc: 'If avail. - The darn well worth a little more sides', price: 6.00 },
]

export default function MenuPage() {
  const foodCategories = [...new Set(menuItems.map(item => item.category))]
  
  const allCategories = [
    ...foodCategories.map(cat => ({ name: cat, type: 'food', id: cat.toLowerCase().replace(/\s+/g, '-').replace(/[&*]/g, '') })),
  ]
  
  const [showScrollTop, setShowScrollTop] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
  
  const scrollToTop = () => {
    const categoryNav = document.querySelector('[data-category-nav]')
    if (categoryNav) {
      categoryNav.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-12 px-4 bg-off-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark tracking-tight letter-spacing-tight">
            Our Menu
          </h1>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto font-light leading-relaxed">
            Pure pub grub with Southern comfort and typical bar food with a twist. 
            Our menu features witty descriptions and creative takes on classic dishes.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 px-4 bg-off-white border-b border-light-gray" data-category-nav>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-center" style={{ color: '#A4343A' }}>Jump to Section</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {allCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className="px-4 py-2 bg-gray-100 hover:bg-imperial-red hover:text-white text-gray-700 rounded-lg text-sm font-medium transition-all duration-200"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-4">

      {/* Specials section removed per request */}
      
      {/* Food Menu */}
      {foodCategories.map(category => {
        const categoryItems = menuItems.filter(item => item.category === category);
        const mainItems = categoryItems.filter(item => !item.name.includes('Add') && !item.name.includes('Make it'));
        const addOnItems = categoryItems.filter(item => item.name.includes('Add') || item.name.includes('Make it'));
        
        const categoryId = category.toLowerCase().replace(/\s+/g, '-').replace(/[&*]/g, '')
        return (
          <div key={category} id={categoryId} className="mb-8 scroll-mt-24">
            <div className="border-b-2 pb-2 mb-6" style={{ borderColor: '#D4B896' }}>
              <h2 className="text-3xl font-bold" style={{ color: '#A4343A' }}>{category}</h2>
            </div>
            
            {/* Main Menu Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {mainItems.map((item, i) => (
                <div key={i} className="bg-light-cream border border-light-gray p-6 rounded-lg hover:shadow-lg transition-all duration-200 hover:border-imperial-red">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <div className="text-xl font-bold" style={{ color: '#A4343A' }}>${item.price.toFixed(2)}</div>
                  </div>
                  <p className="text-gray-600 text-sm italic">{item.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Add-on Items */}
            {addOnItems.length > 0 && (
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-lg font-bold mb-4 text-center" style={{ color: '#A4343A' }}>Add-ons</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addOnItems.map((item, i) => (
                    <div key={i} className="bg-light-cream p-4 rounded-lg shadow-sm border border-light-gray">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                        <span className="font-bold" style={{ color: '#A4343A' }}>+${item.price.toFixed(2)}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Disclaimer */}
      <div className="bg-light-cream p-6 rounded-lg border border-light-gray mb-8">
        <p className="text-sm text-gray-600 text-center">
          <strong>*</strong> Dekalb County would like you to know that eating undercooked meat can lead to foodborne illness. 
          So can undercooked shellfish, but if you're having that, you're in another restaurant.
        </p>
      </div>
      </div>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
          style={{ backgroundColor: '#A4343A' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B1E23'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#A4343A'}
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </Layout>
  )
}
