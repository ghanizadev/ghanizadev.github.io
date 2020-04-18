import * as React from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import MediaLinks from '../components/MediaLinks';
import NavLink from '../components/NavLink';
import Panel from '../components/Panel';
import Logo from '../components/Logo';
import About from './About';
import { FiVolumeX } from 'react-icons/fi';

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

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
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

const Sidebar = styled.div`
  background-color: #fefefe;
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
`;

const Content = styled.div`
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 70%;
  margin: 0 50px;
  padding: 50px;
`;

const ScrollView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 15px;
  text-align: justify;
  overflow: hidden auto;
`;

const Items = styled(Sidebar)`
  height: 100%;
  width: 100%;
  padding: 0;
`;

const PageView = styled(Sidebar)`
  height: 100%;
  width: 100%;
  position: relative;
  padding-top: 50px;
`;

const Title = styled.span`
  position: absolute;
  right: 0;
  top: 0;

  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 39px;
`;

export default () => {
  const [title, setTitle] = React.useState('about');
  React.useEffect(() => {
    ReactDOM.render(<About />, document.getElementById('scrollview'));
  }, []);
  return(
    <Container>
      <Sidebar>
        <Items>
          <Logo style={{width: "75%", height: 100}} />
          <Panel style={{width: "75%"}}>
            <Wrapper>
              <NavLink href="/">home</NavLink>
              <NavLink>projects</NavLink>
              <NavLink>about</NavLink>
              <NavLink>articles</NavLink>
              <NavLink>links</NavLink>
              <NavLink>contact</NavLink>
            </Wrapper>
          </Panel>
          <MediaLinks />
        </Items>
      </Sidebar>
      <Content>
        <PageView>
          <Title>{title}</Title>
          <ScrollView id="scrollview" />
        </PageView>
      </Content>
    </Container>
  )
}



















