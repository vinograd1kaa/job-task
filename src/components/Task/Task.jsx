import React, {useState} from 'react';
import { PlayGroundContainer, Br } from "./styles/PlayGround";
import { ModeContainer, PickButton, PickButtonPopup, PickPopup, PickPopupItem, StartButton } from "./styles/Mode";
import { Cell, HoverBlockContainer } from "./styles/HoverBlock";
import { HoverRecordContainer, HoverRecordItem, HoverRecordTitle } from "./styles/HoverRecord";
import RenderCells from "./RenderCells";

const data = [
  { name: "100x10", rows: 100, cells: 10 },
  { name: "100x20", rows: 100, cells: 20 },
  { name: "1000x100", rows: 1000, cells: 100 },
  { name: "1000x100", rows: 10000, cells: 100 },
];

const Task = () => {
  const [numSquares, setNumSquares] = useState(data[0]);

  const [selectState, setSelectState] = useState(false);

  const renderRows = Array.from(Array(numSquares.rows).keys()).map((item) => item + 1);

  const onChangeSelect = () => {
    setSelectState(!selectState);
  };

  const onChangeOption = (option) => {
    console.log(option);
    setNumSquares(option);
  };

  // const renderHoveredSquares = hoveredSquares.map((item) => {
  //   const row = Math.ceil(item/5);
  //
  //   return `row ${row} col ${item}`;
  // });

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
        <HoverBlockContainer>
          {renderRows && renderRows.map((row) => (
            <RenderCells
              key={row}
              cellsOnRow={100/numSquares.cells}
            />
          ))}
        </HoverBlockContainer>
      </PlayGroundContainer>
      <HoverRecordContainer>
        <HoverRecordTitle>Hover Squares</HoverRecordTitle>
        {[1].map((item, idx) => (
          <HoverRecordItem key={idx}>{ item }</HoverRecordItem>
        ))}
      </HoverRecordContainer>
    </>
  );
};

export default Task;