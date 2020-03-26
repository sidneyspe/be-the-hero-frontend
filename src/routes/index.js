import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Logon from '~/pages/Logon';
import Register from '~/pages/Register';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Logon} />
      <Route path="/register" exact component={Register} />
    </Switch>
  );
}
