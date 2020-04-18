import * as React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  children ?: React.ReactElement<any>,
  style ?: any;
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
  width: 35%;
  border-left: 1px solid #16161d;
  border-right: 1px solid #16161d;
  font-size: 14pt;
  margin: 50px;
  /* animation: ${fade} 1s 0.15s both; */
`;

const Panel : React.FunctionComponent<Props> = (props) => {
  return (
    <Container style={props.style}>
      {props.children}
    </Container>
  )
}

export default Panel;