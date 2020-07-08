import React, { useState } from 'react';
import { Marker } from '@urbica/react-map-gl';
import './marker.css';

function StopMarker(props) {
    const [visible, setVisible] = useState('');

    return (
        <Marker
            longitude={props.lon}
            latitude={props.lat}
        >
            <div className={`marker-popup ${visible}`}>
                Number of closest passengers: {' '}
                {props.closestCount || 0}
            </div>
            <div
                className="marker stop-marker"
                onMouseEnter={() => { setVisible("visible-popup") }}
                onMouseLeave={() => { setVisible("") }}
            >
                S
            </div>
        </Marker>
    )
}

export default StopMarker