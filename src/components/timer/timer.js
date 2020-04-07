import React from 'react';
import styled from 'styled-components';
import { formatSeconds } from './helper';

const Text = styled.span`
  font-size: 0.8em;
  letter-spacing: 1px;
  opacity: 0.6;
`;

const Timer = ({ seconds }) => {
  return <Text>{formatSeconds(seconds)}</Text>;
};

export default Timer;
