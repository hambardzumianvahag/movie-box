// Main.js
import React from "react";
import Movies from "./Movies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EachMovie from "./EachMovie";

export default function Main() {

  return (
    <div className="main">
      <div className="main-child">
        <h1>Movies</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movies/:movieId" element={<EachMovie />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
