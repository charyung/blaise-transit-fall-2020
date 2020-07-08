import React from 'react';
import { Marker } from '@urbica/react-map-gl';
import './marker.css';

function PassengerMarker(props) {
    return (
        <Marker
            longitude={props.lon}
            latitude={props.lat}
        >
            <div className="marker passenger-marker">P</div>
        </Marker>
    )
}

export default PassengerMarker