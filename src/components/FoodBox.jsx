// Your code here
import { Card, Col, Button, Divider } from "antd";

function FoodBox({food, deleteFood}) {
    return (
      
        <Col>
        <Card title={food.name} 
        className="card">
        <Divider />
        
      
        <img src={food.image} style={{'height':'200px' }}/>
      
        <p>Calories: {food.calories}</p>
        <p>Servings {food.servings}</p>
      
        <p>
          <b>Total Calories: {food.servings * food.calories} </b> kcal
        </p>
      
        <Button type="primary" onClick={() => deleteFood(food.id)}>
          Delete
        </Button>
        </Card>
    </Col>
   
    );
  }
   
  export default FoodBox;