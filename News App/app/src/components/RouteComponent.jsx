import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NewsArea from "./NewsArea";

export default class RouteComponent extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Navigate to={"/business"} />} />
        <Route
          path="/business"
          element={<NewsArea key={"business"} category="business" />}
        ></Route>
        <Route
          path="/entertainment"
          element={<NewsArea key={"entertainment"} category="entertainment" />}
        ></Route>
        <Route
          path="/general"
          element={<NewsArea key={"general"} category="general" />}
        ></Route>
        <Route
          path="/health"
          element={<NewsArea key={"health"} category="health" />}
        ></Route>
        <Route
          path="/science"
          element={<NewsArea key={"science"} category="science" />}
        ></Route>
        <Route
          path="/sports"
          element={<NewsArea key={"sports"} category="sports" />}
        ></Route>
        <Route
          path="/technology"
          element={<NewsArea key={"technology"} category="technology" />}
        ></Route>
      </Routes>
    );
  }
}
