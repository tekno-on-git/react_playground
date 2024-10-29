import React, { Component } from "react";

export class Car extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="text-3xl font-black">
        A{" "}
        <span
          className="decoration-solid line-through"
          style={{ textDecorationColor: this.props.color }}
        >
          {this.state.year}
        </span>{" "}
        <span style={{ color: this.props.color }}>{this.state.color}</span>{" "}
        <span>{this.state.brand}</span>{" "}
        <span
          className="decoration-wavy underline italic"
          style={{ textDecorationColor: this.props.color }}
        >
          {this.state.model}
        </span>{" "}
      </div>
    );
  }
}

export default Car;
