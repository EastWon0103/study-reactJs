import React from 'react';
import PropTypes from "prop-types";

function Food({name, image, rating}){
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={image} alt={name} />
  </div>
}

const foodILike = [
  {
    id:1,
    name: "kimchi",
    rating: 4,
    image: "https://i.ytimg.com/vi/4wLo1tH_Ee8/maxresdefault.jpg"
  },
  {
    id:2,
    name: "pizza",
    rating: 5,
    image: 
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FP-Ojv_1veCg%2Fmaxresdefault.jpg&f=1&nofb=1"
  },
  {
    id:3,
    name: "chicken",
    rating: 4.4,
    image:
    "https://www.tasteofhome.com/wp-content/uploads/2018/04/Crispy-Fried-Chicken_exps6445_PSG143429D03_05_5b_RMS-1.jpg"
  }
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
}

class App extends React.Component{
  state = {
    count:0
  };
  add = () =>{
    console.log("add");
  };
  minus = () =>{
    console.log("minus");
  };
  render(){
  return (
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>)
  }
}

export default App;
