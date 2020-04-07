import React from 'react';
import styled from 'styled-components';

const DivContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 400px;
  max-width: 520px;
`;

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100vw;
  height: 100vh;
`;

const Container = ({ children }) => {
  return (
    <Wrapper>
      <DivContainer>{children}</DivContainer>
    </Wrapper>
  );
};

export default Container;
