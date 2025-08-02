import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./Book3d.css";

const Book = () => {
  return (
    <div className="book-3d-container">
      <HTMLFlipBook
        width={400}
        height={600}
        size="stretch"
        minWidth={315}
        maxWidth={800}
        minHeight={420}
        maxHeight={1200}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="book-3d"
      >
        <div className="page cover">
          <h2>Kalpten Kalbe</h2>
          <p>Melisa & Ferhat’ın Söz Defteri</p>
          <p>6 Eylül 2025</p>
          <span className="cover-instruction">Докоснете за да разгръщате!</span>
        </div>
        <div className="page">
          <h3>Нашата история</h3>
          <p>Тук ще разкажем нашата любовна история...</p>
        </div>
        <div className="page">
          <h3>Галерия</h3>
          <p>Тук ще добавим снимки от събитието!</p>
        </div>
        <div className="page">
          <h3>Пожелания</h3>
          <p>Оставете своето пожелание!</p>
        </div>
        <div className="page">
          <h3>Съвети към младото семейство</h3>
          <p>Тук ще събираме съвети и напътствия за щастлив живот!</p>
        </div>
        <div className="page cover">
          <h2>С обич, Мелиса & Ферхат</h2>
          <p>Благодарим Ви, че сте част от нашия ден!</p>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Book;
