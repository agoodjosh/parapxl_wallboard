import React, { Component } from 'react';
import { ReactRouter } from 'react-router';


class LocationsPicker extends Component {
    constructor(props) {
        super(props);
    }


    goToLocation(event) {
        event.preventDefault();
        let locationId = this.refs.locationId.value;
        console.log("Going to: ", locationId);
        this.props.history.push(`/location/${locationId}/`);
    }

    render() {
        return (
            <form onSubmit={this.goToLocation.bind(this)}>
                <h2>Please Enter a Location</h2>
                <input type="text" ref="locationId" />
                <button>Add Location</button>
            </form>
        )
    }

};

Location.contextTypes = {
    router: React.PropTypes.object
};

export default LocationsPicker;