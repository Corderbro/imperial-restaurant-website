import Layout from '../components/Layout'

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

const beverageItems = [
  // Bottled & Canned Beverages
  { category: 'Bottled & Canned Beverages', name: 'Miller High Life', desc: '16oz - The Champagne of canned beers.', price: 4.50 },
  { category: 'Bottled & Canned Beverages', name: 'Stella Artois', desc: '12oz - The tall-boy of Brussels.', price: 5.50 },
  { category: 'Bottled & Canned Beverages', name: 'Budweiser...Heavy or Light', desc: '16oz - The canned pride of Brussels, formerly of St. Louis.', price: 4.50 },
  { category: 'Bottled & Canned Beverages', name: 'Miller Lite', desc: '16oz - It done come first.', price: 4.50 },
  { category: 'Bottled & Canned Beverages', name: 'Natural Light', desc: '16oz - For when, whoa! That Bud Light is just a little too much!', price: 4.50 },
  { category: 'Bottled & Canned Beverages', name: 'Amstel Light', desc: '12oz - Can of the slim Dutch people.', price: 5.50 },
  { category: 'Bottled & Canned Beverages', name: 'Michelob Ultra', desc: '16oz - Can of the swanky, slim \'Murcan people.', price: 5.50 },
  { category: 'Bottled & Canned Beverages', name: 'Pabst Blue Ribbon!', desc: '16oz - The can for the ages.', price: 3.25 },
  { category: 'Bottled & Canned Beverages', name: 'Yuengling', desc: '16oz - The caramel-colored Budweiser.', price: 4.50 },
  { category: 'Bottled & Canned Beverages', name: 'Lone Star', desc: '12oz - The Longhorn Longneck.', price: 5.00 },
  { category: 'Bottled & Canned Beverages', name: 'Coronita', desc: '7oz - The Leetle Bitty Version.', price: 4.00 },
  { category: 'Bottled & Canned Beverages', name: 'Imperial Lager', desc: '12oz - Central American lager that has our name right on it.', price: 5.50 },
  { category: 'Bottled & Canned Beverages', name: 'Negra Modelo', desc: '12oz', price: 5.50 },
  { category: 'Bottled & Canned Beverages', name: 'Sierra Trail Pass N.A. IPA', desc: '12oz - You\'d never know it was N.A. So pay attention to the can.', price: 5.50 },
  { category: 'Bottled & Canned Beverages', name: 'Athletic: Hazy N.A. IPA & N.A. Lager', desc: '12oz - They\'re Californian, they love the trails and they brew NA.', price: 5.50 },
  { category: 'Bottled & Canned Beverages', name: 'Guinness N.A.', desc: '14oz - It\'ll purt near fool ya.', price: 6.50 },
  { category: 'Bottled & Canned Beverages', name: 'Weihenstephaner N.A.', desc: '12oz - A gefälscht Hefeweizen.', price: 6.00 },
  { category: 'Bottled & Canned Beverages', name: 'La Chouffe N.A.', desc: '11oz - The Belgian Pale Ale of your NA dreams.', price: 8.00 },
  { category: 'Bottled & Canned Beverages', name: '3 Taverns Night On Ponce IPA', desc: '16oz - What\'s a night on Ponce means to you? 7.5%.', price: 7.00 },
  { category: 'Bottled & Canned Beverages', name: 'Bell\'s Two Hearted IPA', desc: '16oz - A great IPA-style ale from MI. 7%.', price: 7.00 },
  { category: 'Bottled & Canned Beverages', name: 'Sierra Nevada Pale Ale', desc: '16oz - The classic original. 5.6%.', price: 6.00 },
  { category: 'Bottled & Canned Beverages', name: 'Daytime IPA', desc: '12oz - Low-grav goodness from Lagunitas. 4%.', price: 5.50 },
  { category: 'Bottled & Canned Beverages', name: 'Sweetwater 420', desc: '16oz - They used to be a micro once-upon-a-time. 5.7%.', price: 6.00 },
  { category: 'Bottled & Canned Beverages', name: 'Duchesse de Bourgogne', desc: '11oz - Flanders Red Sour. 6%.', price: 10.00 },
  { category: 'Bottled & Canned Beverages', name: '3 Taverns Rapturous Raspberry Sour', desc: '12oz - From the Sour Asylum Series and dang popular. 5%.', price: 6.00 },
  { category: 'Bottled & Canned Beverages', name: 'Schneider Weisse Tap 7', desc: '16.9oz - The grandaddy of German wheat beers 5.4%.', price: 10.00 },
  { category: 'Bottled & Canned Beverages', name: 'Schneider Aventinus', desc: '16.9oz - Schneider\'s Hefe-Weizenbock. 8.2%.', price: 10.50 },
  { category: 'Bottled & Canned Beverages', name: 'La Chouffe', desc: '11oz - The Belgian Strong Pale Ale of your dreams 8%.', price: 8.00 },
  { category: 'Bottled & Canned Beverages', name: 'Victory Golden Monkey Tripel', desc: '12oz - A tripel from the PA Brewing titans. 9.5% of greatness.', price: 6.50 },
  { category: 'Bottled & Canned Beverages', name: 'Blake\'s El Chavo Cider', desc: '12oz - Infused with Habañero & Mango. 6.5%.', price: 5.50 },
  { category: 'Bottled & Canned Beverages', name: 'Long Drink...Reg, Peach, SF Citrus', desc: '12oz - Fiendishly clever Finnish can gin, grapefruit and juniper. Yum! 5.5% OR they stuff peaches in! 5% OR Sugar Free.', price: 7.50 },
  { category: 'Bottled & Canned Beverages', name: 'White Claw', desc: '12oz - We\'re told they\'re popular with you young folks. 5%.', price: 5.50 },
  { category: 'Bottled & Canned Beverages', name: 'Bravazzi Italian Hard Soda', desc: '12oz - Various delightful, sunny flavors...all 4.2%.', price: 6.00 },

  // Red Wine
  { category: 'Red Wine', name: 'La Nevera Gran Vino Tinto', desc: 'España', price: 6.50 },
  { category: 'Red Wine', name: 'Domain La Berthéte Côtê du Rhône', desc: 'France - Glass $11 / Bottle $42', price: 11.00 },
  { category: 'Red Wine', name: '12 e mezzo Primitivo del Salento', desc: 'Italy - Glass $10.5 / Bottle $40', price: 10.50 },
  { category: 'Red Wine', name: 'Pillo de Panama Cab/Syr./Malbec', desc: 'Chile - Glass $10.5 / Bottle $40', price: 10.50 },
  { category: 'Red Wine', name: 'Sierra Batuco Reserva Pinot Noir', desc: 'Chile - Glass $10 / Bottle $36', price: 10.00 },

  // White Wine
  { category: 'White Wine', name: 'House White', desc: 'Spain', price: 5.00 },
  { category: 'White Wine', name: '12 e mezzo Chardonnay', desc: 'Puglia - Glass $10 / Bottle $38', price: 10.00 },
  { category: 'White Wine', name: 'Moretta Les Espias Chenin Blanc', desc: 'Chile - Glass $10 / Bottle $38', price: 10.00 },
  { category: 'White Wine', name: 'Reynaud Lacoste Sauv Blanc', desc: 'Bordeaux - Glass $9 / Bottle $34', price: 9.00 },
  { category: 'White Wine', name: 'Montasolo Pinot Grigio', desc: 'Delle Venezie - Glass $8 / Bottle $30', price: 8.00 },
  { category: 'White Wine', name: 'Getrank Grüner Veltliner', desc: 'Austria - Glass $9 / Bottle $40 (1L)', price: 9.00 },
  { category: 'White Wine', name: 'Vera Vinho Verde Rosé', desc: 'Portugal - Glass $9 / Bottle $34', price: 9.00 },
  { category: 'White Wine', name: 'Los Monteros Cava', desc: 'Requena, España - Glass $9 / Bottle $34', price: 9.00 },
  { category: 'White Wine', name: 'Los Monteros Rose Cava', desc: 'Requena, España - Glass $9 / Bottle $34', price: 9.00 },
]

const draftItems = [
  // Draft Beer & Cider
  { category: 'Draft Beer & Cider', name: 'Abita Root Beer', desc: 'You know...for the kids.', price: 3.00 },
  { category: 'Draft Beer & Cider', name: 'The Beer We Got', desc: 'Cheap - Pint $3 / Pitcher $10', price: 3.00 },
  { category: 'Draft Beer & Cider', name: 'Mercier Grumpy Granny Cider', desc: 'From N. GA. 6.6% - Pint $6 / Pitcher $23', price: 6.00 },
  { category: 'Draft Beer & Cider', name: 'Weihenstephaner Hefe Weis Bier', desc: '5.4% - Pint $6.5 / Pitcher $7.5 (.5L)', price: 6.50 },
  { category: 'Draft Beer & Cider', name: 'Reissdorf Kölsch', desc: '4.8% - Pint $6 / Pitcher $23', price: 6.00 },
  { category: 'Draft Beer & Cider', name: 'Classic City Lager', desc: '4.2% - Pint $5.5 / Pitcher $21', price: 5.50 },
  { category: 'Draft Beer & Cider', name: 'Guinness Stout', desc: '4.2% - Imperial Pint $7', price: 7.00 },
  { category: 'Draft Beer & Cider', name: 'Founders Porter', desc: '6.5% - Pint $6 / Pitcher $23', price: 6.00 },
  { category: 'Draft Beer & Cider', name: 'Back 40 Naked Pig Pale Ale', desc: '6% - Pint $6 / Pitcher $23', price: 6.00 },
  { category: 'Draft Beer & Cider', name: 'Lagunitas IPA', desc: '6.2% - Pint $5.5 / Pitcher $21', price: 5.50 },
  { category: 'Draft Beer & Cider', name: 'CCBC Tropicalia', desc: '6.6% - Pint $7 / Pitcher $27', price: 7.00 },
  { category: 'Draft Beer & Cider', name: 'Sierra Hazy Little Thing', desc: '6.7% - Pint $6 / Pitcher $23', price: 6.00 },
]

export default function MenuPage() {
  const foodCategories = [...new Set(menuItems.map(item => item.category))]
  const beverageCategories = [...new Set(beverageItems.map(item => item.category))]
  const draftCategories = [...new Set(draftItems.map(item => item.category))]
  
  return (
    <Layout>
      <div className="text-center mb-8 pt-8">
        <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Pure pub grub with Southern comfort and typical bar food with a twist. 
          Our menu features witty descriptions and creative takes on classic dishes.
        </p>
      </div>

      {/* Special Items */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg border border-red-200 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">This Week's Specials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="font-bold text-lg text-red-600 mb-2">Burger Of The Week</h3>
            <p className="text-gray-800 font-semibold">The Drunken Mushroom</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="font-bold text-lg text-red-600 mb-2">Dessert</h3>
            <p className="text-gray-800 font-semibold">Robert's Heat-Beatin', Life-Affirmin' Key Lime Pie</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="font-bold text-lg text-red-600 mb-2">Draft Cocktail</h3>
            <p className="text-gray-800 font-semibold">The Gin-Gin Negroni</p>
          </div>
        </div>
      </div>
      
      {/* Food Menu */}
      {foodCategories.map(category => {
        const categoryItems = menuItems.filter(item => item.category === category);
        const mainItems = categoryItems.filter(item => !item.name.includes('Add') && !item.name.includes('Make it'));
        const addOnItems = categoryItems.filter(item => item.name.includes('Add') || item.name.includes('Make it'));
        
        return (
          <div key={category} className="mb-12">
            <div className="border-b-2 border-red-600 pb-2 mb-6">
              <h2 className="text-3xl font-bold text-gray-800">{category}</h2>
            </div>
            
            {/* Main Menu Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {mainItems.map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all duration-200 hover:border-red-300">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <div className="text-xl font-bold text-red-600">${item.price.toFixed(2)}</div>
                  </div>
                  <p className="text-gray-600 text-sm italic">{item.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Add-on Items */}
            {addOnItems.length > 0 && (
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-lg font-bold mb-4 text-center text-red-700">Add-ons</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addOnItems.map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-red-100">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                        <span className="text-red-600 font-bold">+${item.price.toFixed(2)}</span>
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

      {/* Beverage Menu */}
      {beverageCategories.map(category => (
        <div key={category} className="mb-12">
          <div className="border-b-2 border-blue-600 pb-2 mb-6">
            <h2 className="text-3xl font-bold text-gray-800">{category}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beverageItems
              .filter(item => item.category === category)
              .map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all duration-200 hover:border-blue-300">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <div className="text-xl font-bold text-blue-600">${item.price.toFixed(2)}</div>
                  </div>
                  <p className="text-gray-600 text-sm italic">{item.desc}</p>
                </div>
              ))}
          </div>
        </div>
      ))}

      {/* Draft Menu */}
      {draftCategories.map(category => (
        <div key={category} className="mb-12">
          <div className="border-b-2 border-green-600 pb-2 mb-6">
            <h2 className="text-3xl font-bold text-gray-800">{category}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {draftItems
              .filter(item => item.category === category)
              .map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all duration-200 hover:border-green-300">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <div className="text-xl font-bold text-green-600">${item.price.toFixed(2)}</div>
                  </div>
                  <p className="text-gray-600 text-sm italic">{item.desc}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
      




      {/* Disclaimer */}
      <div className="bg-gray-100 p-6 rounded-lg border border-gray-300">
        <p className="text-sm text-gray-600 text-center">
          <strong>*</strong> Dekalb County would like you to know that eating undercooked meat can lead to foodborne illness. 
          So can undercooked shellfish, but if you're having that, you're in another restaurant.
        </p>
      </div>
    </Layout>
  )
}
