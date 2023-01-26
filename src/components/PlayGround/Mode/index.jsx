import styled from "styled-components";

export const ModeContainer = styled.div`
  display: flex;
  height: 35px;
`;

export const PickButtonPopup = styled.div`
  width: 70%;
  z-index: 999;
`;

export const PickButton = styled.button`
  width: 80%;
  padding: 8px;
  
  cursor: pointer;
  position: relative;
  text-align: left;
  
  background: #fff;
  border: 1px solid #000;
  
  &:after {
    content: "❯";
    position: absolute;
    right: 10px;
    transform: rotate(90deg);
  }
`;

export const PickPopup = styled.span`
  display: flex;
  flex-wrap: wrap;
  width: 79%;
  background: #fff;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  z-index: 999;
`;

export const PickPopupItem = styled.span`
  width: 100%;
  padding: 4px;
  border-top: 1px solid #000;
  cursor: pointer;

  &:first-child {
    border-top: none;
  }

  &:last-child {
    border-bottom: 1px solid #000;
  }
`;

export const StartButton = styled.button`
  width: 30%;
  background: #3390ec;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;