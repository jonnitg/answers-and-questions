import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  font-size: 0.8em;
  letter-spacing: 1px;
  opacity: 0.6;
`;

/**
 *
 * @param {number} time in seconds
 */
const formatSeconds = (time) => {
  const minutes = Math.floor(time / 60);

  if (time > 300) {
    return `${minutes}min.`;
  }
  const seconds = time % 60;

  if (minutes !== 0) {
    return `${minutes}min. ${seconds}segs.`;
  }

  return `${seconds}segs.`;
};

const Timer = ({ seconds }) => {
  return <Text>{formatSeconds(seconds)}</Text>;
};

export default Timer;
