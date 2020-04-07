import React, { useState } from 'react';
import styled from 'styled-components';
import Question from 'components/question';
import Counter from 'components/counter';
import data from 'data/questions.json';

const GridArea = styled.form`
  display: grid;
  grid-template-rows: 20px auto 50px;
  grid-gap: 8px;
  height: 100%;
`;

const CounterSection = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
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

const Stepper = () => {
  const [current, setCurrent] = useState(0);
  const [cacheAnswers, setCacheAnswers] = useState({});

  const handleChange = (event) => {
    setCacheAnswers({
      ...cacheAnswers,
      [data.questions[current].id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ cacheAnswers });
  };

  return (
    <GridArea onSubmit={handleSubmit}>
      <CounterSection>
        <Counter current={current + 1} limit={data.questions.length} />
      </CounterSection>
      <Question
        text={data.questions[current].text}
        id={data.questions[current].id}
        answers={data.questions[current].answers}
        onChange={handleChange}
        cacheChecked={cacheAnswers[data.questions[current].id]}
      />
      <ButtonsSection>
        {current > 0 && (
          <PrevButton type="button" onClick={() => setCurrent(current - 1)}>
            Previous
          </PrevButton>
        )}
        {current !== data.questions.length - 1 ? (
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
