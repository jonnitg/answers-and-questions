import React from 'react';
import styled from 'styled-components';

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StartHeading = styled.h1`
  margin: 0;
`;
const StartText = styled.p``;
const StartButton = styled.button`
  appearance: none;
  font-size: 1em;
  border: 0;
  margin: 0;
  padding: 0.6em 1.6em;
  font-size: 1.2em;
  border: 2px solid black;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const Start = ({ questionsAmount, nextPhase }) => {
  return (
    <StartContainer>
      <StartHeading>Welcome!</StartHeading>
      <StartText>This test has {questionsAmount} questions to answer</StartText>
      <StartButton type="button" onClick={nextPhase}>
        Start
      </StartButton>
    </StartContainer>
  );
};

export default Start;
