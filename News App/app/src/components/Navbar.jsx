import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="md:flex md:justify-between md:items-center p-6">
          <h1 className="text-4xl font-bold dark:text-white">Thinky</h1>
          <div>
            <ul className="flex flex-col items-center md:flex-row md:bg-white dark:bg-neutral-800 dark:text-white p-8 md:p-0 mt-3 md:mt-0">
              <Link to="/business"><li className="mr-3 font-thin cursor-pointer">Business</li></Link>
              <Link to="/entertainment"><li className="mr-3 font-thin cursor-pointer">Entertainment</li></Link>
              <Link to="/general"><li className="mr-3 font-thin cursor-pointer">General</li></Link>
              <Link to="/health"><li className="mr-3 font-thin cursor-pointer">Health</li></Link>
              <Link to="/science"><li className="mr-3 font-thin cursor-pointer">Science</li></Link>
              <Link to="/sports"><li className="mr-3 font-thin cursor-pointer">Sports</li></Link>
              <Link to="/technology"><li className="mr-3 font-thin cursor-pointer">Technology</li></Link>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="mr-6 bg-gradient-to-r from-blue-500 to-blue-400  p-3 rounded-md text-white"
              onClick={() => {
                if (this.props.darkMode) {
                  this.props.resetState();
                } else {
                  this.props.setMode();
                }
              }}
            >
              {this.props.darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-blue-400 p-3 rounded-md text-white">
              Check Projects
            </button>
          </div>
        </div>
      </>
    );
  }
}
