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
                        name: this.props.locationId,
                        walls: { lobby: { name: "TV in Lobby" } }
                    });
                }
            });
    }

    render() {
        return (
            <div>
                {/*Object.keys(this.props.walls).map(this.renderWalls)*/}
            </div>
        )
    }
}

export default Wall;
