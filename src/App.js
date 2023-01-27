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
  margin: 80px;
  width: 600px;
  white-space: nowrap;
  background: #ccc;
`;