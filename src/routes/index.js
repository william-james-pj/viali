import React from 'react';
import { Switch } from 'react-router-dom';
import MyRoute from './MyRoute';

import Home from '../views/Home/index';
import Podcast from '../views/Podcast/index';
import Game from '../views/Game/index';
import MentalMap from '../views/MentalMap/index';
import About from '../views/About/index';
import Page404 from '../views/Page404/index';

function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/podcast" component={Podcast} />
      <MyRoute exact path="/game" component={Game} />
      <MyRoute exact path="/mentalmap" component={MentalMap} />
      <MyRoute exact path="/about" component={About} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}

export default Routes;
