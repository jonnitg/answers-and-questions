import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Question from 'components/question';
import Counter from 'components/counter';
import Timer from 'components/timer';

const LIMIT_TIME = 1000 * 60; // 1 minute

const GridArea = styled.form`
  display: grid;
  grid-template-rows: 20px auto 50px;
  grid-gap: 8px;
  height: 100%;
`;

const SettingsSection = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonsSection = styled.div`
  display: flex;
`;

const Button = styled.button`
  appearance: none;
  font-size: 1em;
  border: 0;
  margin: 0;
  padding: 0;
  padding-left: 0.6em;
  padding-right: 0.6em;
  cursor: pointer;
  outline: none;

  &:hover {
    border-bottom: 2px solid black;
  }
`;

const PrevButton = styled(Button)`
  justify-self: flex-start;
`;

const NextButton = styled(Button)`
  margin-left: auto;
  justify-self: flex-end;
`;

const FinalizeButton = styled(NextButton)``;

const Stepper = ({ questions, onCompleteTest }) => {
  const [timeLeft, setTimeLeft] = useState(LIMIT_TIME / 1000);
  const [current, setCurrent] = useState(0);
  const [cacheAnswers, setCacheAnswers] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      onCompleteTest(cacheAnswers);
    }, LIMIT_TIME);
    const timing = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(timing);
    };
  }, [cacheAnswers, onCompleteTest]);

  const handleChange = (event) => {
    setCacheAnswers({
      ...cacheAnswers,
      [questions[current].id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCompleteTest(cacheAnswers);
  };

  return (
    <GridArea onSubmit={handleSubmit}>
      <SettingsSection>
        <Timer seconds={timeLeft} />
        <Counter current={current + 1} limit={questions.length} />
      </SettingsSection>

      <Question
        text={questions[current].text}
        id={questions[current].id}
        answers={questions[current].answers}
        onChange={handleChange}
        cacheChecked={cacheAnswers[questions[current].id]}
      />

      <ButtonsSection>
        {current > 0 && (
          <PrevButton type="button" onClick={() => setCurrent(current - 1)}>
            Previous
          </PrevButton>
        )}

        {current !== questions.length - 1 ? (
          <NextButton type="button" onClick={() => setCurrent(current + 1)}>
            Next
          </NextButton>
        ) : (
          <FinalizeButton type="submit">Finalize</FinalizeButton>
        )}
      </ButtonsSection>
    </GridArea>
  );
};

export default Stepper;
