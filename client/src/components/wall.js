import React, { Component } from 'react';
import base, { firebase } from '../base';


class Wall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            walls: {}
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const locationRef = firebase.database().ref(this.props.locationId);

        locationRef.once("value")
            .then((snapshot) => {
                const data = snapshot.val() || {};

                if (!data.name) {
                    locationRef.set({
                        name: this.props.locationId,
                    });
                }
            });
    }

    handleInput(e) {

        this.setState({
            walls: {
                name: e.target.value,
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('submitted:', e.target);
        const locationRef = firebase.database().ref(this.props.locationId);

        locationRef.once("value")
            .then((snapshot) => {
                const data = snapshot.val() || {};

                if (!data.name) {
                    return;
                } else {
                    locationRef.set({
                        walls: this.state.walls,
                    });
                }
            });
    };


    render() {
        return (
            <div>
                {/*Object.keys(this.props.walls).map(this.renderWalls)*/}
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleInput} />
                    <button>Submit Wall</button>
                </form>
            </div>
        )
    }
}

export default Wall;
