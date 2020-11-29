import React from 'react';

function Food({name, image}){
  return <div>
    <h2>I like {name}</h2>
    <img src={image} />
  </div>
}

const foodILike = [
  {
    name: "kimchi",
    image: "https://i.ytimg.com/vi/4wLo1tH_Ee8/maxresdefault.jpg"
  },
  {
    name: "pizza",
    image: 
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FP-Ojv_1veCg%2Fmaxresdefault.jpg&f=1&nofb=1"
  },
  {
    name: "chicken",
    image:
    "https://www.tasteofhome.com/wp-content/uploads/2018/04/Crispy-Fried-Chicken_exps6445_PSG143429D03_05_5b_RMS-1.jpg"
  }
];

function App() {
  return (
  <div>
    {foodILike.map(dish => (
      <Food name={dish.name} image={dish.image} />
    ))}
  </div>
  );
}

export default App;
