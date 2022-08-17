import React, { Component } from 'react';

export default class Updating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ritvik",
        };
        console.log("Logging constructor");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("Logging getDerivedStateFromProps");
        return null;
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Logging shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Logging getSnapshotBeforeUpdate");
        return { prevProps: prevProps, prevState: prevState };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Logging componentDidUpdate");
        console.log(snapshot);
        console.log(prevProps);
        console.log(prevState);
    }
  render() {
    console.log("Logging render");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.setState({ name: "React" })}>
            Change Name
        </button>
      </div>
    );
  }
}
