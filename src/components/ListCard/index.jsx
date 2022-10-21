import React, { useState, useRef } from "react";
import Text from "../Text";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { MovieRow } from "../Card/styled";

export default ({ title, films }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = films.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <MovieRow>
      <div className="movieRow">
        <Text>{title}</Text>
        <div className="movieRow-left" onClick={handleLeftArrow}>
          <AiOutlineArrowLeft style={{ fontSize: 50 }} />
        </div>
        <div className="movieRow-right" onClick={handleRightArrow}>
          <AiOutlineArrowRight style={{ fontSize: 50 }} />
        </div>

        <div className="movieRow-listarea">
          <div
            className="movieRow-list"
            style={{
              marginLeft: scrollX,
              width: films.length * 150,
            }}
          >
            {films.length > 0 &&
              films.map((item, key) => (
                <div key={key} className="movieRow-item">
                  <img src={item.image} />
                </div>
              ))}
          </div>
        </div>
      </div>
      {films.length <= 0 && (
        <div className="loading">
          <img
            src="https://i.pinimg.com/originals/90/80/60/9080607321ab98fa3e70dd24b2513a20.gif"
            alt="loading"
          ></img>
        </div>
      )}
    </MovieRow>
  );
};
