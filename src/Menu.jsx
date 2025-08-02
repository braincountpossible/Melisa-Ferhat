import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav style={{ background: "#8d9572", padding: "16px" }}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "#fff" : "#23371c",
          background: isActive ? "#657046" : "#e7e8cc",
          padding: "10px 22px",
          margin: "0 8px",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "1.1rem",
          transition: "0.2s",
          border: isActive ? "2px solid #364d2d" : "2px solid transparent",
        })}
      >
        Начало
      </NavLink>
      <NavLink to="/history" style={navBtnStyle}>Нашата история</NavLink>
      <NavLink to="/gallery" style={navBtnStyle}>Галерия</NavLink>
      <NavLink to="/wishes" style={navBtnStyle}>Пожелания</NavLink>
      <NavLink to="/advice" style={navBtnStyle}>Съвети</NavLink>
    </nav>
  );
}

const navBtnStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "#fff" : "#23371c",
  background: isActive ? "#657046" : "#e7e8cc",
  padding: "10px 22px",
  margin: "0 8px",
  borderRadius: "8px",
  fontWeight: "bold",
  fontSize: "1.1rem",
  transition: "0.2s",
  border: isActive ? "2px solid #364d2d" : "2px solid transparent",
});
