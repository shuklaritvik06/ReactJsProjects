import React, { Component } from "react";
import Child from "./Mounting/Child";

export default class Mounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ritvik",
    };
    console.log("Mounting constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Mounting getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("Mounting componentDidMount");
  }
  render() {
    console.log("Mounting render");
    return <div> <Child /> textInComponent </div>;
  }
}
