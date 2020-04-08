import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loading from 'components/loading';
import { getCorrectAnswers } from './helper';

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ScoreHeading = styled.h1`
  margin: 0;
`;
const ScoreText = styled.p``;
const ScoreButton = styled.button`
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

const Score = ({ questions, answers, resetPhases }) => {
  const [loading, setLoading] = useState(true);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    setLoading(false);
    setTotalScore(getCorrectAnswers(questions, answers));
  }, [answers, questions]);

  if (loading) {
    return <Loading />;
  }

  return (
    <ScoreContainer>
      <ScoreHeading>Thanks for your participation!</ScoreHeading>
      <ScoreText>
        You got {totalScore} right of {questions.length} questions
      </ScoreText>
      <ScoreButton type="button" onClick={resetPhases}>
        Reset Test
      </ScoreButton>
    </ScoreContainer>
  );
};

export default Score;
