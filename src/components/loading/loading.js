import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoadingWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;
const LoadingCircle = styled.div`
  position: absolute;
  border: 4px solid #000;
  opacity: 1;
  border-radius: 50%;
  animation: ${animation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;

const Loading = () => (
  <LoadingContainer>
    <LoadingWrapper>
      <LoadingCircle />
    </LoadingWrapper>
  </LoadingContainer>
);

export default Loading;
