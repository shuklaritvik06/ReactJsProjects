import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

export default function RouteComponent() {
  return (
    <div>
      <Routes>
        <Route path="/:id" element={<Home />} />
      </Routes>
    </div>
  );
}
