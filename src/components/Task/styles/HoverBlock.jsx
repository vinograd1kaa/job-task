import styled from "styled-components";

export const HoverBlockContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 28px;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  width: ${({ widthFromCells }) => `${widthFromCells*60}px`};
`;

export const Cell = styled.div`
  height: 54px;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  width: ${({ widthOfCells }) => `${(100/widthOfCells)}%`};
}`;