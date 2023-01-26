import React from 'react';
import {HoverRecordContainer, HoverRecordItem, HoverRecordTitle} from "./index";

const HoverRecord = ({ hoveredSquares }) => {
  const renderHoveredSquares = hoveredSquares.map((item) => {
    const row = Math.ceil(item/5);

    return `row ${row} col ${item}`;
  });

  return (
    <HoverRecordContainer>
      <HoverRecordTitle>Hover Squares</HoverRecordTitle>
      {renderHoveredSquares.map((item, idx) => (
        <HoverRecordItem key={idx}>{ item }</HoverRecordItem>
      ))}
    </HoverRecordContainer>
  );
};

export default HoverRecord;