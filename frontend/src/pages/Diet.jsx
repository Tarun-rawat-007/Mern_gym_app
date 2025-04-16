import { useState } from "react";
import "./Diet.css";

const Diet = () => {
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("underweight"); // default

  const handleCheckboxChange = (index) => {
    setSelectedMeals((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const calculateTotalCalories = () => {
    return selectedMeals.reduce(
      (total, index) => total + foodItems[index].calories,
      0
    );
  };

  const foodItems = [
    { name: "🍚 Rice 1 plate (300g)", calories: 390 },
    { name: "🥣 Dal Tadka 1 bowl", calories: 300 },
    { name: "🍞 Roti 1 piece", calories: 149 },
    { name: "🥚 Egg Bhurji", calories: 180 },
    { name: "🍪 Biscuit 1 piece", calories: 50 },
    { name: "☕ Tea 1 cup", calories: 30 },
    { name: "🍛 Chicken Biryani", calories: 630 },
    { name: "🧀 Paneer Butter Masala", calories: 450 },
    { name: "🥤 Lassi", calories: 213 },
    { name: "🍌 Banana", calories: 105 },
    { name: "🥗 Salad", calories: 100 },
    { name: "🥛 Milk", calories: 150 },
    { name: "🥬 Palak (Spinach)", calories: 35 },
    { name: "🥜 Roasted Peanuts", calories: 285 },
    { name: "🍜 Veg Maggi", calories: 414 },
  ];

  const diets = {
    underweight: [
      "Breakfast: Peanut butter paratha with banana, Oats with milk, Boiled eggs, Chia seeds, Aloo paratha- curd",
      "Lunch: Rice, ghee, and sabzi, Paneer curry with chapati, Lentil soup, Bhindi masala with roti",
      "Dinner: Paneer butter masala with roti, Grilled chicken, Sweet potato, Dal makhani with naan",
    ],
    normal: [
      "Breakfast: Dal Tadka with roti, Paratha with curd, Poha with peanuts, Aloo tikki, Upma",
      "Lunch: Sprouts chaat, Brown rice with rajma, Mixed vegetable curry, Pulao with raita",
      "Dinner: Paneer bhurji with roti, Grilled fish, Stir-fried veggies, Baingan bharta with chapati",
    ],
    obese: [
      "Breakfast: Moong dal soup, Grilled paneer with veggies, Oats porridge with flaxseeds, Poha with veggies",
      "Lunch: Grilled paneer with veggies, Quinoa salad with lemon dressing, Stir-fried tofu, Vegetable biryani",
      "Dinner: Steamed idli with sambhar, Zucchini noodles, Salad with lemon dressing, Methi thepla with curd",
    ],
  };
  

  const dietImages = {
    underweight:
      "https://images.unsplash.com/photo-1631880383152-f29099b0fd16?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5vcm1hbCUyMGhlYWx0aHV5JTIwJTIwZGlldHN8ZW58MHx8MHx8fDA%3D",
    normal:
      "https://images.unsplash.com/photo-1641642400143-6be68f1a0918?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bm9ybWFsJTIwaGVhbHRodXklMjAlMjBkaWV0c3xlbnwwfHwwfHx8MA%3D%3D",
    obese:
      "https://images.unsplash.com/photo-1550005876-1049c5ce92da?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5vcm1hbCUyMGhlYWx0aHV5JTIwJTIwZGlldHN8ZW58MHx8MHx8fDA%3D",
  };

  const renderDietCard = (type) => (
    <li className="dcards_item" key={type}>
      <div className="dcard">
        <div className="dcard_image">
          <img src={dietImages[type]} alt={`${type} diet`} />
        </div>
        <div className="dcard_content">
          <h2 className="dcard_title">
            {type.charAt(0).toUpperCase() + type.slice(1)} Diet
          </h2>
          <ul className="dcard_text">
            {diets[type].map((item, idx) => (
              <li key={idx}>&#10003; {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );

  return (
    <>
      {/* Info Section */}
      <div className="diet-info">
        <h1>Diet and Its Role in Our Life</h1>
        <p>
      
Diet plays a vital role in our health and well-being. A balanced diet provides essential nutrients like vitamins, minerals, proteins, and fats that help our body function properly. It supports growth, repairs tissues, strengthens the immune system, and maintains energy levels for optimal daily performance.



        </p>
      </div>

      {/* Filter Buttons */}
      <div className="button-container">
        {["underweight", "normal", "obese"].map((category) => (
          <button
            key={category}
            className={`diet-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} Diet
          </button>
        ))}
      </div>

      {/* Diet Card */}
      <div className="dmain">
        <ul className="dcards">{renderDietCard(selectedCategory)}</ul>
      </div>

      {/* Calorie Table */}
      <div className="fcontainer">
        <h1 className="chart-title">🍽️ Calculate Your Total Calories</h1>
        <table className="food-table">
          <thead>
            <tr>
              <th>Select</th>
              <th>Meal No.</th>
              <th>Food Item</th>
              <th>Calories (kcal)</th>
            </tr>
          </thead>
          <tbody>
            {foodItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    onChange={() => handleCheckboxChange(index)}
                    checked={selectedMeals.includes(index)}
                  />
                </td>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.calories} kcal</td>
              </tr>
            ))}
            <tr className="total-row">
              <td colSpan="3" className="resultchart">
                <strong>Total Calories:</strong>
              </td>
              <td className="resultchart">
                <strong>{calculateTotalCalories()} kcal</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Ending Section */}
      <section className="ending-section">
        <div className="overlay">
          <div className="quote-box">
            <p>&ldquo;Eat Well, Live Well.&rdquo;</p>
            <p>Good nutrition is the key to a long and happy life. Choose your food wisely!</p>
          </div>
          <div className="quote-image">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500"
              alt="Healthy Lifestyle"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Diet;
