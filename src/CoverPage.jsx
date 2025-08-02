import React from "react";

export default function CoverPage({ onOpen }) {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#8d9572"
    }}>
      <img
        src="/cover.jpg"
        alt="Kalpten Kalbe – Melisa & Ferhat’ın Söz Defteri"
        style={{ width: 420, borderRadius: 16, boxShadow: "0 8px 32px #4443" }}
      />
      <button
        onClick={onOpen}
        style={{
          marginTop: 32,
          padding: "12px 32px",
          fontSize: "1.1rem",
          background: "#fffbe5",
          color: "#8d9572",
          borderRadius: 8,
          border: "none",
          boxShadow: "0 2px 6px #aaa",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Отвори книгата
      </button>
    </div>
  );
}
