import React, { useState } from "react";
import CoverPage from "./CoverPage";

export default function SozDefteri() {
  const [showCover, setShowCover] = useState(true);

  if (showCover) {
    return <CoverPage onOpen={() => setShowCover(false)} />;
  }

  // Твоето красиво съдържание:
  return (
    <div style={{
      padding: "48px",
      fontFamily: "serif",
      background: "#f9fbe7",
      minHeight: "100vh"
    }}>
      <h1 style={{
        fontSize: "2.4rem",
        fontWeight: "bold",
        color: "#364d2d"
      }}>
        Kalpten Kalbe – Melisa & Ferhat’ın Söz Defteri
      </h1>
      <p style={{ marginTop: "20px", fontSize: "1.2rem" }}>
        Добре дошли в нашия дигитален дневник! 
        Тук ще откриете нашата история, галерия от снимки, пожелания и съвети за щастлив семеен живот. <br /><br />
        Разгледайте и споделете своята обич и вдъхновение!
      </p>
      <ul style={{ marginTop: "30px", fontSize: "1.1rem", lineHeight: "2em" }}>
        <li>📖 Нашата история</li>
        <li>📸 Галерия от снимки</li>
        <li>💌 Пожелания</li>
        <li>📝 Съвети към младото семейство</li>
      </ul>
      <p style={{ marginTop: "40px", color: "#888" }}>
        С обич, Мелиса & Ферхат
      </p>
    </div>
  );
}
