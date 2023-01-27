import React, {useEffect, useRef} from 'react';
import {Cell} from "./styles/HoverBlock";

const RenderCells = ({ cellsOnRow }) => {
  const cellRef = useRef();

  const onHover = (cell) => {
    if (cell.name === "hovered") {
      cell.name = "default";
      cell.style.backgroundColor = "#fff";
    } else {
      cell.name = "hovered";
      cell.style.backgroundColor = "#00a9f3";
    }
  };

  useEffect(() => {
    const node = cellRef.current;
    if (node) {
      node.addEventListener("mouseover", () => onHover(node));
      return () => {
        node.removeEventListener("mouseover", onHover);
      };
    }
  }, []);

  return (
    <Cell style={{ width: `${cellsOnRow-0.4}%` }} ref={cellRef} />
  );
};

export default RenderCells;