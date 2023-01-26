import React, {useEffect, useState} from 'react';
import {ModeContainer, PickButton, PickButtonPopup, StartButton, PickPopup, PickPopupItem} from "./index";
import axios from "axios";

const Mode = ({ numSquares, setHoveredSquares, setNumSquares }) => {
  const [data, setData] = useState([]);
  const [selectState, setSelectState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://demo7919674.mockable.io/');
      const options = await response.data;
      setData(options);
    };

    fetchData().catch(console.error);
  }, []);

  const onChangeSelect = () => {
    setSelectState(!selectState);
  };

  const onChangeOption = (option) => {
    setNumSquares(option);
    setHoveredSquares([]);
  };

  return (
    <ModeContainer>
      <PickButtonPopup>
        <PickButton onClick={onChangeSelect}>{numSquares === 0 ? 'Pick Mode' : numSquares}</PickButton>
        <br />
        <PickPopup>
          {selectState && data && data.map((item, idx) => (
            <PickPopupItem key={idx} onClick={() => onChangeOption(item.field)}>{ item.field }</PickPopupItem>
          ))}
        </PickPopup>
      </PickButtonPopup>
      <StartButton>Start</StartButton>
    </ModeContainer>
  );
};

export default Mode;