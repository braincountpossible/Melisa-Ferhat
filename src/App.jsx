import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoverPage from "./CoverPage";
import Menu from "./Menu";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Wishes from "./pages/Wishes";
import Advice from "./pages/Advice";

export default function App() {
  const [showCover, setShowCover] = useState(true);

  if (showCover) {
    return <CoverPage onOpen={() => setShowCover(false)} />;
  }

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/advice" element={<Advice />} />
      </Routes>
    </Router>
  );
}
