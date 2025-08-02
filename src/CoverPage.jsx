import React from "react";

const CoverPage = ({ onOpen }) => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#8d9572",
    }}
  >
    <img
      src="/cover.png"
      alt="Kalpten Kalbe – Melisa & Ferhat’ın Söz Defteri"
      style={{
        width: 400,
        borderRadius: 18,
        boxShadow: "0 8px 32px #4443",
        marginBottom: 32,
      }}
    />
    <button
      onClick={onOpen}
      style={{
        marginTop: 32,
        padding: "14px 44px",
        fontSize: 20,
        fontWeight: "bold",
        color: "#8d9572",
        background: "#fffbe9",
        border: "none",
        borderRadius: 10,
        boxShadow: "0 2px 8px #8883",
        cursor: "pointer",
        transition: "0.2s",
      }}
    >
      Влез в дневника
    </button>
  </div>
);

export default CoverPage;
