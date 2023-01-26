// import logo from './logo.svg';
import "./App.css";
import React from "react";

import Navigation from "./Pages/Navigation";
import LeftSections from "./Pages/LeftSections";
import RightSection from "./Pages/RightSection";

function App() {
  return (
    <div className="main">
      <Navigation />
      <LeftSections />
      <RightSection />
    </div>
  );
}

export default App;
