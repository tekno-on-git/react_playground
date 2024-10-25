import React, { Component } from "react";

export class Car extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>
          A{" "}
          <span
            style={{
              textDecorationLine: "line-through",
              textDecorationStyle: "solid",
              textDecorationColor: this.state.color,
              fontStyle: "italic",
            }}
          >
            {this.state.year}
          </span>{" "}
          <span style={{ color: this.state.color }}> {this.state.color} </span>
          {this.state.brand}{" "}
          <span
            style={{
              fontStyle: "italic",
              textDecorationLine: "underline",
              textDecorationStyle: "wavy",
              textDecorationColor: this.state.color,
            }}
          >
            {this.state.model}.
          </span>{" "}
        </h1>
      </div>
    );
  }
}

export default Car;
