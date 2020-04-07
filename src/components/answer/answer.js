import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs({ type: 'radio', name: 'select' })`
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  position: relative;
  padding-top: 6px;
  padding-bottom: 6px;
  cursor: pointer;
`;

const Circle = styled.span`
  position: relative;
  width: 1em;
  height: 1em;
  border: 2px solid black;
  border-radius: 50%;
  margin-right: 0.6em;

  ${Input}:checked + &::before {
    opacity: 1;
    transform: scale(0.6);
  }

  ${Input}:active + &::after {
    opacity: 0.1;
    transform: scale(2.6);
  }

  &::after,
  &::before {
    content: '';
    display: block;

    width: inherit;
    height: inherit;

    border-radius: inherit;

    position: absolute;
    transform: scale(0);
    transform-origin: center center;
  }

  &:before {
    background: black;
    opacity: 0;
    transition: 0.3s;
  }

  &:after {
    background: black;
    opacity: 0.4;
    transition: 0.6s;
  }
`;

const Text = styled.span``;

const Answer = ({ text, id, onChange, checked }) => {
  return (
    <Label htmlFor={id}>
      <Input id={id} value={id} onChange={onChange} checked={checked} />
      <Circle />
      <Text>{text}</Text>
    </Label>
  );
};

export default Answer;
