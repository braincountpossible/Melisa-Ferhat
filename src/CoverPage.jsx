import React, { useState } from "react";
import "./Book.css"; // Добави този CSS файл!

export default function CoverPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className={open ? "book book--open" : "book"} onClick={() => setOpen(true)}>
      <div className="book__cover">
        <h1>Kalpten Kalbe<br />Melisa & Ferhat’ın Söz Defteri</h1>
        <p className="book__subtitle">6 Eylül 2025</p>
        {!open && (
          <p className="book__instruction">
            <em>Докоснете или кликнете върху корицата,<br />
            за да отворите нашия дигитален дневник.</em>
          </p>
        )}
      </div>
      {open && (
        <div className="book__pages">
          {/* Тук зареждаш друг компонент със страниците */}
          <YourBookPages />
        </div>
      )}
    </div>
  );
}

function YourBookPages() {
  return (
    <div className="book__content">
      {/* Пример: */}
      <h2>Нашата история</h2>
      <p>Тук ще откриете нашата история...</p>
      {/* Добави компоненти за галерия, пожелания и т.н. */}
    </div>
  );
}
