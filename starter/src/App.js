import './App.css';
import React from 'react';

 class App extends React.Component {

  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      clicks: 0
    };
    this.handleCounter = this.handleCounter.bind(this);
    this.handleClicks = this.handleClicks.bind(this);
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.handleCounter();
    this.handleClicks();
  }

  handleCounter() {
    let { counter } = this.state;
    counter++;
    this.setState({counter});
  }

  handleClicks() {
    let { clicks } = this.state;
    clicks++;
    this.setState({clicks});
  }

  render() {
    const {counter, clicks} = this.state;
    return (<div>
        <div>ein container</div>
        <div>Counter: {counter}</div>
        <div>Clicks: {clicks}</div>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default App;
