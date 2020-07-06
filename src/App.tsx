import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import { PAGE_PATHS, STORES } from '~constants';
import Main from '~pages/Main';
import Text from '~pages/Text';
import Scroll from '~pages/scroll';
import { createGlobalStyle } from 'styled-components';

@inject(STORES.AUTH_STORE)
@observer
@autobind
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={PAGE_PATHS.MAIN} exact component={Main} />
          <Route path={PAGE_PATHS.TEXT} component={Text} />
          <Route path={PAGE_PATHS.SCROLL} component={Scroll} />
          <Redirect from='/' to={PAGE_PATHS.MAIN} />
        </Switch>
      </Router>
    );
  }
}


