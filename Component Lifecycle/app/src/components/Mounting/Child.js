import React, { Component } from "react";

export default class Child extends Component {
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
    console.log("Mounting render child");
    return <div> textInComponent </div>;
  }
}
