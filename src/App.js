import React from "react";

import CarouselWrapper from "components/CarouselWrapper/CarouselWrapper";
import Header from "./components/Header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselWrapper />
    </div>
  );
}

export default App;
