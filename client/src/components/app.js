import React from 'react';
import { Route } from 'react-router-dom';

import Events from './events';
import Login from './login';
import Locations from './locations';

const App = () => (
    <div className="app">
        <Route path="/" exact component={Login} />
        <Route path="/events" component={Events} />
        <Route path="/locations" component={Locations} />
    </div>
);

export default App;
