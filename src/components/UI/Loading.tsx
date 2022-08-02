import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { colors } from '../../styles';
const ripple = keyframes`
   0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
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

const Box = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    position: absolute;
    border: 4px solid ${colors.primary};
    opacity: 1;
    border-radius: 50%;
    animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  & div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Loading = () => {
  return (
    <Container>
      <Box>
        <div></div>
        <div></div>
      </Box>
    </Container>
  );
};
