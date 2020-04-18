import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import './style.css';
import { Provider } from "./context";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

ReactDOM.render(
    <Provider>
      <Router>
        <Route 
        render={({ location }) => {
          return (
              <TransitionGroup component={null}>
                <CSSTransition
                  timeout={1000}
                  classNames="page"
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route exact path="/home" component={Main} />
                    <Route exact path="/" component={Home} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
          );
        }}
        />
      </Router>
    </Provider>,
  document.getElementById('root')
);
