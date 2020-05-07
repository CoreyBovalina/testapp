import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      inputStyle: { border: "1px solid black" },
      counter: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.clickMe = this.clickMe.bind(this);
  }

  handleChange = (event) => {
    let value = event.target.value;
    let inputStyle = {
      border: "1px solid black",
    };
    if (value.length > 20) {
      inputStyle = {
        border: "3px solid red",
      };
    }
    this.setState({ value: value, inputStyle: inputStyle });
  }

  clickMe = (event) => {
    let counter = this.state.counter;
    counter++;
    this.setState({ counter: counter });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <label>
          Enter Value:
          <input
            value={this.state.value}
            onChange={this.handleChange}
            style={this.state.inputStyle}
          />
        </label>
        <br />

        {this.state.value && (
          <div>
            <label>{this.state.value}</label>
            <br />
          </div>
        )}
        <button onClick={this.clickMe}>Click Me!</button>
        <br />
        <label>Number of clicks: {this.state.counter}</label>
      </div>
    );
  }
}
