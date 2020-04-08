import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Start from './start';

afterAll(cleanup);

it('renders score correctly', () => {
  const nextPhase = jest.fn();
  const { getByText } = render(
    <Start questionsAmount={5} nextPhase={nextPhase} />
  );
  const startTextElement = getByText(/questions/i);
  expect(startTextElement).toHaveTextContent(
    'This test has 5 questions to answer'
  );
});

it('clicks button', () => {
  const nextPhase = jest.fn();
  const { getByText } = render(
    <Start questionsAmount={5} nextPhase={nextPhase} />
  );
  const startButtonElement = getByText(/start/i);

  fireEvent.click(startButtonElement);
  expect(nextPhase.mock.calls.length).toEqual(1);
});

it('matches snapshot', () => {
  const nextPhase = jest.fn();
  const tree = renderer
    .create(<Start questionsAmount={5} nextPhase={nextPhase} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
