import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float3D = keyframes`
  0% { transform: translate(0, 0); }
  100% { transform: translate(-2px, -2px); }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(270deg, #ff6ec4, #7873f5, #4ade80);
  background-size: 600% 600%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  animation: ${gradientShift} 8s ease infinite, ${float3D} 2s ease-in-out infinite alternate;
`;

const Header = () => {
  return (
    <header>
      <Title>EBDESK</Title>
      <h2>
        Unlocking Better Decision Making with Big Data, Data Science, and Generative AI
      </h2>
    </header>
  );
};

export default Header;
