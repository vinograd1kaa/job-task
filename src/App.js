import React from 'react';
import styled from "styled-components";
import Task from "./components/Task/Task";

const App = () => {
  return (
    <AppWrapper>
      <Task />
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  width: 600px;
  height: 630px;
  margin: 80px;
  white-space: nowrap;
  overflow: auto;
  background: #ccc;
`;