import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import {ReactComponent as Logo} from '../assets/logo.svg';

interface Props {
  height ?: number;
  width ?: number;
  [key: string] : any;
}

const fade = keyframes`
  from {
    opacity : 0;
  }
  to {
    opacity : 1;
  }
`;

const Container =  styled.div`
  /* animation: ${fade} 1s 0s both; */
`;

const Panel : React.FunctionComponent<Props> = (props) => {
  return (
    <Container {...props}>
      <Logo style={{width: "100%", height: "100%", objectFit: "contain"}} />
    </Container>
  )
}

export default Panel;