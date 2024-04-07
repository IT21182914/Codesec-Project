import React, { useState } from "react";
import "./styles.css";

const FavoriteButton = ({ isFavorite, onClick }) => {
  const [favorited, setFavorited] = useState(isFavorite);

  const handleClick = () => {
    setFavorited(!favorited);
    onClick(!favorited);
  };

  return (
    <button className="favorite-btn" onClick={handleClick}>
      {favorited ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFD700"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#FFD700"
          width="24px"
          height="24px"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6s-8 4.5-8 8c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4 0-3.5-8-8-8-8z"
          />
        </svg>
      )}
    </button>
  );
};

export default FavoriteButton;
