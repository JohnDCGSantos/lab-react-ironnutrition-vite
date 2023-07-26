
import { useState } from "react";
import FoodBox from "./FoodBox";
import foodsJson from "../foods.json";
import FoodForm from "./AddFoodForm";





function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
 
  const deleteFood = (foodId) => {
    const filteredFoods = foods.filter((oneFood) => {
      return oneFood.id !== foodId;
    });
    setFoods(filteredFoods);
  };

  const addFood = (newFood => {
    setFoods((nowFood) => [...nowFood, newFood])
  });

  return (
    <div className="App">
        
       
      <h1>LAB | React IronNutrition</h1>
      <FoodForm addFood={addFood} />
      {foods.map((oneFood) => {
        return (
          <div>
          <FoodBox food={oneFood} key={oneFood.id} deleteFood={deleteFood} />
          </div>
        );
      })}
      
    </div>
  );
}

export default FoodList;