import React, { Component } from "react";
import Navbar from "./components/Navbar";
import RouteComponent from "./components/RouteComponent";
import Search from "./components/Search";
import NewsProvider from "./contexts/NewsContext";
import "./styles/global.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      setDarkMode:this.setDarkMode.bind(this),
      resetState:this.resetState.bind(this),
    };
  }
  setDarkMode = () => {
    this.setState({ darkMode: true });
  };
  resetState = () => {
    this.setState({ darkMode: false });
  };
  render() {
    return (
      <div className={this.state.darkMode ? "dark" : ""}>
        <div className="w-full h-full dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto">
            <NewsProvider>
              <Navbar
                darkMode={this.state.darkMode}
                setMode={this.setDarkMode}
                resetState={this.resetState}
              />
              <Search />
              <RouteComponent />
            </NewsProvider>
          </div>
        </div>
      </div>
    );
  }
}
