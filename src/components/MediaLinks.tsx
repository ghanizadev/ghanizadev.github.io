import * as React from 'react';
import {FiInstagram, FiFacebook, FiLinkedin, FiGithub} from 'react-icons/fi'
import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    opacity : 0;
  }
  to {
    opacity : 1;
  }
`;

const Container = styled.div`
  display: inline-block;
  margin: 50px 15px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  transition: transform 300ms ease;
  margin: 15px;
  /* animation: ${fade} 1s 0.45s both; */

  &:hover {
    transform: scale(1.1);
  }
`;

const MediaLinks = () => {
  return(
    <Container>
      <Button>
        <FiFacebook size={32} />
      </Button>
      <Button>
        <FiInstagram size={32} />
      </Button>
      <Button>
        <FiLinkedin size={32} />
      </Button>
      <Button>       
        <FiGithub size={32} />
      </Button>
    </Container>
  )
}

export default MediaLinks;