import React, {useState} from 'react';
import {PlayGroundContainer} from "./index";
import Mode from "./Mode/Mode";
import HoverBlock from "./HoverBlock/HoverBlock";

const PlayGround = ({ hoveredSquares, setHoveredSquares }) => {
  const [numSquares, setNumSquares] = useState(25);

  return (
    <PlayGroundContainer>
      <Mode
        numSquares={numSquares}
        setHoveredSquares={setHoveredSquares}
        setNumSquares={setNumSquares}
      />
      <HoverBlock
        hoveredSquares={hoveredSquares}
        setHoveredSquares={setHoveredSquares}
        numSquares={numSquares}
      />
    </PlayGroundContainer>
  );
};

export default PlayGround;