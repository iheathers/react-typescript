import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
  // state = { counter: 0 };

  constructor(props: AppProps) {
    super(props);

    this.state = { counter: 0 };
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>

        <button>{this.state.counter}</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
