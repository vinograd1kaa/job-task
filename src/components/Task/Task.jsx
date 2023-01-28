import React, {useRef, useState} from 'react';
import { PlayGroundContainer, Br } from "./styles/PlayGround";
import { ModeContainer, PickButton, PickButtonPopup, PickPopup, PickPopupItem, StartButton } from "./styles/Mode";
import { Cell, HoverBlockContainer } from "./styles/HoverBlock";
import { HoverRecordContainer, HoverRecordItem, HoverRecordTitle } from "./styles/HoverRecord";
import RenderCells from "./RenderCells";

const data = [
  { name: "10x5", rows: 10, cells: 5 },
  { name: "50x10", rows: 50, cells: 10 },
  { name: "100x20", rows: 100, cells: 20 },
  { name: "1000x5", rows: 1000, cells: 5 },
];

const Task = () => {
  const hoverBlockRef = useRef();
  const [numSquares, setNumSquares] = useState(data[0]);
  const [hoveredSquares, setHoveredSquares] = useState([]);
  const [selectState, setSelectState] = useState(false);

  const renderRows = Array.from(Array(numSquares.rows).keys()).map((row) => {
    return Array.from(Array(numSquares.cells).keys()).map((cell) => `row ${row + 1} cell ${cell + 1}`)
  });

  const onChangeSelect = () => {
    setSelectState(!selectState);
  };

  const onChangeOption = (option) => {
    setNumSquares(option);
    setHoveredSquares([]);
    if (hoverBlockRef.current) {
      Array.prototype.slice.call(hoverBlockRef.current.children)
        .forEach((item) => item.style.backgroundColor = "#fff");
    }
  };

  const onHoverSquareAdd = (squareToAdd) => {
    setHoveredSquares((prev) =>
      ([...prev, squareToAdd]));
  };

  const onHoverSquareDelete = (squareToDelete) => {
    setHoveredSquares((prev) =>
      prev.filter((item) => item !== squareToDelete));
  };

  return (
    <>
      <PlayGroundContainer>
        <ModeContainer>
          <PickButtonPopup>
            <PickButton onClick={onChangeSelect}>{numSquares.name}</PickButton>
            <Br />
            <PickPopup>
              {selectState && data && data.map((item, idx) => (
                <PickPopupItem key={idx} onClick={() => onChangeOption(item)}>{ item.name }</PickPopupItem>
              ))}
            </PickPopup>
          </PickButtonPopup>
          <StartButton>Start</StartButton>
        </ModeContainer>
        <HoverBlockContainer ref={hoverBlockRef}>
          {renderRows && renderRows.map((arr) => (
            arr.map((cell) => (
              <RenderCells
                key={cell}
                name={cell}
                cellsOnRow={(100/numSquares.cells)-0.4}
                onHoverSquareAdd={onHoverSquareAdd}
                onHoverSquareDelete={onHoverSquareDelete}
              />
            ))
          ))}
        </HoverBlockContainer>
      </PlayGroundContainer>
      <HoverRecordContainer>
        <HoverRecordTitle>Hover Squares</HoverRecordTitle>
        {hoveredSquares.map((item, idx) => (
          <HoverRecordItem key={idx}>{ item }</HoverRecordItem>
        ))}
      </HoverRecordContainer>
    </>
  );
};

export default Task;