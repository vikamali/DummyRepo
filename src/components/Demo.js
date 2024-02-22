import React, { Component } from "react";

export class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Amali",
    };
  }
  handleClick = () => {
    this.setState({
      name: "Rojer",
    });
  };
  render() {
    return (
      <div>
        <h1>Hello Iam {this.state.name}</h1>
        <button onClick={this.handleClick}> Change the name</button>
      </div>
    );
  }
}

export default Demo;
