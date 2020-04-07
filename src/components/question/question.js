import React from 'react';
import Answer from 'components/answer';
import styled from 'styled-components';

const Container = styled.div``;

const QuestionHeading = styled.h1`
  margin-top: 0;
`;

const Answers = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px;
`;

const AnswerOption = styled.li`
  padding: 4px;
  font-size: 1em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;

const Question = ({ text, answers, onChange, cacheChecked }) => {
  return (
    <Container>
      <QuestionHeading>{text}</QuestionHeading>
      <Answers>
        {answers.map((answer) => (
          <AnswerOption key={answer.id}>
            <Answer
              id={answer.id}
              text={answer.text}
              onChange={onChange}
              checked={answer.id === cacheChecked || false}
            />
          </AnswerOption>
        ))}
      </Answers>
    </Container>
  );
};

export default Question;
