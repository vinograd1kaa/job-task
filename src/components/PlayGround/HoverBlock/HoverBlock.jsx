import React, {useState} from 'react';
import {Cell, HoverBlockContainer} from "./index";

const HoverBlock = ({ hoveredSquares, setHoveredSquares, numSquares }) => {
  const renderSquares = Array.from(Array(numSquares).keys()).map((item) => item + 1);

  const checkIsHovered = (num) => {
    return hoveredSquares.find((item) => item === num);
  };

  const onHover = (item) => {
    if (checkIsHovered(item)) {
      setHoveredSquares(hoveredSquares.filter((i) => i !== item));
      return;
    }
    setHoveredSquares([...hoveredSquares, item]);
  };

  return (
    <HoverBlockContainer>
      {renderSquares && renderSquares.map((square) => (
        <Cell style={{background: checkIsHovered(square) ? '#00a9f3' : 'white'}} onMouseEnter={() => onHover(square)} key={square} />
      ))}
    </HoverBlockContainer>
  );
};

export default HoverBlock;