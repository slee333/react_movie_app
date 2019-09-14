import React from "react";

const flowerArray = [
  {
    id: 1,
    name: "lavendar",
    image:
      "https://cdn.pixabay.com/photo/2016/01/21/10/09/lavendar-1153408_1280.jpg"
  },
  {
    id: 2,
    name: "jasmin",
    image:
      "https://cdn.pixabay.com/photo/2019/06/19/13/16/scent-of-jasmine-4284856_1280.jpg"
  },
  {
    
    id: 3,
    name: "rose",
    image:
      "https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_1280.jpg"
  },
  {
    id: 4,
    name: "orchid",
    image:
      "https://cdn.pixabay.com/photo/2018/10/28/13/35/orchid-3778816_1280.jpg"
  },
  {
    id: 5,
    name: "lily",
    image:
      "https://cdn.pixabay.com/photo/2018/06/28/17/02/water-lily-3504363_1280.jpg"
  }
];

function Flower({ name, pic }) {
  return (
    <div>
      <h2>Subtle odor of {name}</h2>
      <img src={pic} alt={name} />
    </div>
  );
}
// Component App: Component is a function that returns HTML
function App() {
  return (
    <div className="App">
      { // key and id: each react element must be unique. So we add this prop.
        flowerArray.map(element => (
        <Flower key={element.id} name={element.name} pic={element.image} />
      ))}
    </div>
  );
}

export default App;
