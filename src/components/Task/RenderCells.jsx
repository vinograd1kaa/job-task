import React, {useEffect, useRef} from 'react';
import {Cell} from "./styles/HoverBlock";
import '../../index.css';

const RenderCells = ({ name, cellsOnRow, onHoverSquareAdd, onHoverSquareDelete }) => {
  const cellRef = useRef(null);

  const onHover = (cell) => {
    if (cell.style.backgroundColor !== 'rgb(255, 255, 255)') {
      cell.style.backgroundColor = "#fff";
      onHoverSquareDelete(name);
    } else {
      cell.style.backgroundColor = "#00a9f3";
      onHoverSquareAdd(name);
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
    <>
      <Cell style={{ width: `${cellsOnRow}%`, backgroundColor: "#fff" }} ref={cellRef} />
    </>
  );
};

export default RenderCells;