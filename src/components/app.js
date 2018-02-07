import React from 'react';
import { Route } from 'react-router-dom';

import Events from './events';
import Login from './login';

const App = () => (
    <div className="app">
        <Route path="/" exact component={Login} />
        <Route path="/events" component={Events} />
    </div>
);

export default App;
