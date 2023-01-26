import React, {useState} from 'react';
import styled from "styled-components";
import PlayGround from "./components/PlayGround/PlayGround";
import HoverRecord from "./components/HoverRecord/HoverRecord";

const App = () => {
  const [hoveredSquares, setHoveredSquares] = useState([]);

  return (
    <AppWrapper>
      <PlayGround hoveredSquares={hoveredSquares} setHoveredSquares={setHoveredSquares}/>
      <HoverRecord hoveredSquares={hoveredSquares} />
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  margin: 80px;
  width: 600px;
  white-space: nowrap;
  background: #ccc;
`;
