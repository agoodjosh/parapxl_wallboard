import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import base, { firebase } from '../base';

import Wall from './wall';
// import Board from './board';


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
        console.log('App.js CWP:', this.props.match.params.locationId);
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
                {/*Object
                    .keys(this.props.walls)
                    .map(key => <Board
                        key={key}
                        index={key}
                        details={this.props.walls[key]} />
                    )*/}
                <Wall
                    walls={this.state.walls}
                    locationId={this.props.match.params.locationId}
                />
            </div>
        );
    }
}



export default App;
