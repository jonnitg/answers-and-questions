import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Timer from './timer';

it('renders timer correctly', () => {
  const { getByText } = render(<Timer seconds={60} />);
  const spanElement = getByText(/min/i);
  expect(spanElement).toHaveTextContent('1min. 0segs.');
});

it('matches snapshot', () => {
  const tree = renderer.create(<Timer seconds={60} />).toJSON();
  expect(tree).toMatchSnapshot();
});
