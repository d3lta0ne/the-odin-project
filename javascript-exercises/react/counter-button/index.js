import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./style.css";

// Class Component

// class Counter extends React.Component {
//   state = {
//     counter: 0,
//   };
//   increment = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   componentDidMount() {
//     this.setState({ counter: 42 });
//   }

//   componentDidUpdate() {
//     alert("Number of clicks: " + this.state.counter);
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.counter}</p>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }

// Functional Component

function Counter() {
  // useState
  const [counter, setCounter] = useState(0);

  // useEffect combines all the lifecycle methods into one
  useEffect(() => {
    alert("Number of clicks: " + counter);
  });

  /**
   * By passing something into the second part of the useEffect method,
   * it will only run when it is updated and not run on the initial mount.
   */

  // useEffect(() => {
  //   // similar to "componentDidUpdate"
  //   return () => {
  //     // cleanup
  //     // similar to "componentDidUnmount"
  //   };
  // }, [count]); // When dependencies are added the method will not run on the initial mount

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

const el = <Counter />;
ReactDOM.render(el, document.getElementById("root"));
