import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import base from '../base';


class App extends Component {
    constructor() {
        super();
        this.state = {
            walls: {
                boards: {}
            }
        };
    }

    componentWillMount() {
        this.ref = base.syncState(`${this.props.match.params.locationId}/walls`, {
            context: this,
            state: 'walls'
        });
    }

    componentWillUnmount() {
        base.removeBiding(this.ref);
    }

    render() {
        return (
            <div className="app">
                <h1>Hi</h1>
            </div>
        );
    }
}



export default App;
