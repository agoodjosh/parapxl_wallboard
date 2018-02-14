import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/app';
import Events from './components/events';
import Login from './components/login';
import Locations from './components/locations';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/location/:locationId" component={App} />
            <Route path="/events" component={Events} />
            <Route path="/locations" component={Locations} />
        </div>
    </Router>,
    document.getElementById('root')
);
