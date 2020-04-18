import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import {FiArrowDown} from 'react-icons/fi';

interface Props {
  goNext : React.MouseEventHandler
}

const fade = keyframes`
  from {
    opacity : 0;
  }
  to {
    opacity : 1;
  }
`;

const ArrowButton : React.FunctionComponent<Props> = (props) => {
  return (
    <Container onClick={props.goNext}>
      <FiArrowDown size={24} />
    </Container>
  )
}

const Container =  styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  transition: transform 300ms ease;
  /* animation: ${fade} 1s 0.3s both; */

  &:hover{
    transform: scale(1.15);
  }

`;

export default ArrowButton;