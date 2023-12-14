import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {
  const { width, height } = useWindowSize();
  const moveOrb = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width}px, ${height}px);
        }
        100%{
            transform: translate(0, 0);
        }
    `;
  const OrbStyled = styled.div`
    width: ${width / 3}px;
    height: ${height / 3}px;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #f96692 0%, #f2994a 100%);
    filter: blur();
    animation: ${moveOrb} 1s alternate linear infinite;
  `;

  return <OrbStyled></OrbStyled>;
}
export default Orb;
