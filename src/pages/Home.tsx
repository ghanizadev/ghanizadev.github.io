import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import ArrowButton from '../components/ArrowButton';
import MediaLinks from '../components/MediaLinks';
import Panel from '../components/Panel';
import Logo from '../components/Logo';
import { useHistory } from "react-router-dom";

const enter = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const leave = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Container = styled.div`
background-color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;

  &.page-enter {
    animation: ${enter} 1s forwards;
  }

  &.page-exit {
    animation: ${leave} 1s forwards;
  }
`;

export default () => {
  const history = useHistory();
  return(
    <Container>
      <Logo style={{width: "35%"}} />
      <Panel>
        <>
          <p>Hi, I am Jean Melo, back-end developer</p>
          <br/>
          <p>Discover and do amazing things
            <br/>
              is what motivates me.
          </p>
        </>
      </Panel>
      <ArrowButton goNext={() => {history.push('/home')}}/>
      <MediaLinks />
    </Container>
  )
}



















