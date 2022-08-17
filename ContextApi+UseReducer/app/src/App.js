import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import RouteComponent from "./components/Routes/RouteComponent";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
          <RouteComponent />
        <Footer />
      </Router>
    </div>
  );
}