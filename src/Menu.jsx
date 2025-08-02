import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "center",
      gap: 24,
      padding: "24px 0",
      background: "#e8ede0",
      boxShadow: "0 2px 8px #ccc"
    }}>
      <Link to="/" style={{ fontWeight: "bold", color: "#364d2d", textDecoration: "none" }}>Нашата история</Link>
      <Link to="/gallery" style={{ fontWeight: "bold", color: "#364d2d", textDecoration: "none" }}>Галерия</Link>
      <Link to="/wishes" style={{ fontWeight: "bold", color: "#364d2d", textDecoration: "none" }}>Пожелания</Link>
      <Link to="/advice" style={{ fontWeight: "bold", color: "#364d2d", textDecoration: "none" }}>Съвети</Link>
    </nav>
  );
}
