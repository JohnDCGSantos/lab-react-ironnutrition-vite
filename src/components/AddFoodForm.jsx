// Your code here
import { useState } from "react";
import { Divider, Input, Button } from "antd";

function FoodForm(addFood) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');
    
    const handleSubmit = event => {
        event.preventDefault()
        let id = Math.random()
        const newFood = {name, image, calories, servings, id}
        addFood.addFood(newFood)
        setName('')
        setImage('')
        setCalories('')
        setServings('')
      }
    
    return (
        <form className="add-food-form" onSubmit={handleSubmit}>
         
            <Divider><h2>Add Food</h2></Divider>
            <div>
            
            <Input value={name} onChange={event => setName(event.target.value)} placeholder="name"/>
            
            <Input value={image} onChange={event => setImage(event.target.value)} placeholder="image url"/>
            </div>
            <div>
            
            <Input value={calories} onChange={event => setCalories(event.target.value)} placeholder="calories"/>
            
            <Input value={servings} onChange={event => setServings(event.target.value)} placeholder="servings"/>
            </div>
            <Button type="submit">Submit</Button>
        </form>
       
    );
  }
   
  export default FoodForm;