import React from "react";

const CoverPage = ({ onOpen }) => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#8d9572"
    }}
  >
    <img
      src="/cover.png"
      alt="Kalpten Kalbe – Melisa & Ferhat’ın Söz Defteri"
      style={{ width: 400, borderRadius: 18, boxShadow: "0 8px 32px #4443" }}
    />
    <button
      onClick={onOpen}
      style={{
        marginTop: 32,
        padding: "12px 32px",
        fontSize: 22,
        fontWeight: "bold",
        background: "#fffbe6",
        color: "#637047",
        border: "none",
        borderRadius: 12,
        boxShadow: "0 2px 8px #4443",
        cursor: "pointer"
      }}
    >
      Отвори книгата
    </button>
  </div>
);

export default CoverPage;
