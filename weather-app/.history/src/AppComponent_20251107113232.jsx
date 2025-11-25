import React from "react";

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Counter, {this.state.counter}</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment
        </button>
      </div>
    );
  }
}

function AppCounter() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <h1>Counter, {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}
export default AppComponent;
