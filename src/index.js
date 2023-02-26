// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = evt => {
    console.log('Increment button was clicked!', evt); // працює
    console.log('this.props: ', this.props); // працює
    this.setState((state, props) => ({
      value: state.value + props.step,
    }));
  };

  handleDecrement = evt => {
    console.log('Decrement button was clicked!', evt); // працює
    console.log('this.props: ', this.props); // працює
    this.setState({
      value: this.state.value - this.props.step,
    });
  };

  render() {
    const { step } = this.props;
    return (
      <div>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter step={5} />
  </React.StrictMode>
);