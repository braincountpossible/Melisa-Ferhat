import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav style={{
      background: "#8d9572",
      padding: "16px",
      display: "flex",
      gap: "24px",
      fontFamily: "serif"
    }}>
      <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>Начало</Link>
      <Link to="/history" style={{ color: "#fff", textDecoration: "none" }}>Нашата история</Link>
      <Link to="/gallery" style={{ color: "#fff", textDecoration: "none" }}>Галерия</Link>
      <Link to="/wishes" style={{ color: "#fff", textDecoration: "none" }}>Пожелания</Link>
      <Link to="/advice" style={{ color: "#fff", textDecoration: "none" }}>Съвети</Link>
    </nav>
  );
}
