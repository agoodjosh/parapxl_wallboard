import React, { Component } from 'react';
import base, { firebase } from '../base';


class Wall extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const locationRef = firebase.database().ref(this.props.locationId);


        locationRef.once("value")
            .then((snapshot) => {
                const data = snapshot.val() || {};

                if (!data.name) {
                    locationRef.set({
                        name: 'Costa Mesa, CA',
                        walls: { lobby: { name: "TV in Lobby" } }
                    });
                }
            });
    }

    render() {
        return (
            <div>
                <ul>
                    {Object.keys(this.props.walls).map(this.renderInventory)}
                </ul>
            </div>
        )
    }
}

export default Wall;
