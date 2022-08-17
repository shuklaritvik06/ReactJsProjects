import React, { Component } from 'react';
import Mounting from './components/Mounting';
import Updating from './components/Updating';

export default class componentName extends Component {
  render() {
    return (
      <div>
        <Mounting />
        <Updating />
      </div>
    );
  }
}

