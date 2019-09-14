import React from "react";
import PropTypes from "prop-types";

const flowerArray = [
  {
    id: 1,
    name: "lavendar",
    image:
      "https://cdn.pixabay.com/photo/2016/01/21/10/09/lavendar-1153408_1280.jpg",
      rating: 4.3
  },
  {
    id: 2,
    name: "jasmin",
    image:
      "https://cdn.pixabay.com/photo/2019/06/19/13/16/scent-of-jasmine-4284856_1280.jpg",
    rating: 4.5
  },
  {
    id: 3,
    name: "rose",
    image:
      "https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_1280.jpg",
    rating: 3.2
  },
  {
    id: 4,
    name: "orchid",
    image:
      "https://cdn.pixabay.com/photo/2018/10/28/13/35/orchid-3778816_1280.jpg",
    rating: 1.4
  },
  {
    id: 5,
    name: "lily",
    image:
      "https://cdn.pixabay.com/photo/2018/06/28/17/02/water-lily-3504363_1280.jpg",
    rating: 3.9
  }
];

function Flower({ name, pic, rating}) {
  return (
    <div>
      <h2>Subtle odor of {name}</h2>
      <h4>Rating: {rating}/5.0 </h4>
      <img src={pic} alt={name} />
    </div>
  );
}

Flower.propTypes = {
  // Write down discription of properties that I want to get. Check if it is 
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

// Component App: Component is a function that returns HTML
function App() {
  return (
    <div className="App">
      {// key and id: each react element must be unique. So we add this prop.
      flowerArray.map(element => (
        <Flower
          key={element.id}
          name={element.name}
          pic={element.image}
          rating={element.rating}
        />
      ))}
    </div>
  );
}

export default App;
