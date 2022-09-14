import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Protectedroute from "../Protected Route/Protectedroute";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";

export default function RouteComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route
          path="/home"
          element={
            <Protectedroute>
              <Home />
            </Protectedroute>
          }
        />
      </Routes>
    </div>
  );
}
