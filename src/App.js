import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  // class App is React Component. It extends from React.Component. To show sth on the screen you render and return HTML
  // React automatically renders these
  // Reasons to use class components: state!
  // state: object. you put your data (that will change) in here. 추후에 바뀌는 데이터를 넣는다!
  state = {
    count: 0
  };

  // Lets add a few JS code. Must use setState() to re-render your function!
  add = () => {
    // current: basically same as this.state. More neat and nice. Avoid overusage of this.setState
    // this.setState({ count: this.state.count - 1 }); <--- so you don't have to do this
    // Everytime you setState(), React renders again!
    this.setState(current => ({ count: current.count + 1 }));
  };
  subtract = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>Counting number: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>
      </div>
    );
  }
}

// Component App: Component is a function that returns HTML
/* In this example we used function component
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
*/

export default App;
