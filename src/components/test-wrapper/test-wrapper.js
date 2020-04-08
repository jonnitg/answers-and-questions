import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Stepper from 'components/stepper';
import Score from 'components/score';
import Start from 'components/start';

const DivContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 400px;
  max-width: 520px;
`;

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100vw;
  height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const TestWrapper = ({ questions }) => {
  const [phase, setPhase] = useState(0);
  const [answers, setAnswers] = useState({});

  const nextPhase = () => {
    setPhase(phase + 1);
  };

  const resetPhases = () => {
    setAnswers({});
    setPhase(0);
  };

  const completeTest = (answers) => {
    setAnswers(answers);
    nextPhase();
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <DivContainer>
          {phase === 0 && (
            <Start questionsAmount={questions.length} nextPhase={nextPhase} />
          )}
          {phase === 1 && (
            <Stepper questions={questions} onCompleteTest={completeTest} />
          )}
          {phase === 2 && (
            <Score
              questions={questions}
              answers={answers}
              resetPhases={resetPhases}
            />
          )}
        </DivContainer>
      </Wrapper>
    </>
  );
};

export default TestWrapper;
