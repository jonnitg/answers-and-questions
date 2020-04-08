import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Counter from './counter';

afterAll(cleanup);

it('renders counter correctly', () => {
  const { getByText } = render(<Counter limit={20} current={5} />);
  const spanElement = getByText(/question/i);
  expect(spanElement).toHaveTextContent('Question: 5/20');
});

it('matches snapshot', () => {
  const tree = renderer.create(<Counter limit={30} current={3} />).toJSON();
  expect(tree).toMatchSnapshot();
});
