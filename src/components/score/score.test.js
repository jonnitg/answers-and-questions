import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Score from './score';

const resetPhases = jest.fn();

afterAll(cleanup);

it('renders score correctly', () => {
  const { getByText } = render(
    <Score questions={[]} answers={{}} resetPhases={resetPhases} />
  );
  const scoreTextElement = getByText(/questions/i);
  expect(scoreTextElement).toHaveTextContent('You got 0 right of 0 questions');
});

it('clicks button', () => {
  const { getByText } = render(
    <Score questions={[]} answers={{}} resetPhases={resetPhases} />
  );
  const scoreButtonElement = getByText(/reset test/i);
  fireEvent.click(scoreButtonElement);
  expect(resetPhases.mock.calls.length).toEqual(1);
});

it('matches snapshot', () => {
  const tree = renderer
    .create(<Score questions={[]} answers={{}} resetPhases={resetPhases} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
