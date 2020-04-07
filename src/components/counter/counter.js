import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  font-size: 0.8em;
  letter-spacing: 1px;
  opacity: 0.6;
`;

const Counter = ({ limit, current }) => {
  return (
    <Text>
      Question: {current}/{limit}
    </Text>
  );
};

export default Counter;
