// React
import React, { useState } from 'react';
import MapGL, { Source, Layer } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Components
import PassengerMarker from '../marker/passengerMarker';
import StopMarker from '../marker/stopMarker';

// Data
import passengers from '../data/passengers.json';
import stops from '../data/stops.json'

function calculateCenter() {
    let lon = 0;
    let lat = 0;

    for (const p of passengers) {
        lon += p.lon;
        lat += p.lat;
    }

    for (const s of stops) {
        lon += s.lon;
        lat += s.lat;
    }

    lon /= (passengers.length + stops.length);
    lat /= (passengers.length + stops.length);

    return [lon, lat]
}

function calculateClosest() {
    // Could be much more efficient but no point in preemptively optimizing :)

    const closestCounts = {};
    const lines = {
        type: 'MultiLineString',
        coordinates: []
    };

    for (const p of passengers) {
        let closest = Number.MAX_SAFE_INTEGER;
        let [sLat, sLon] = [0, 0];

        for (const s of stops) {
            const dist = Math.sqrt(Math.pow(s.lon - p.lon, 2) + Math.pow(s.lat - p.lat, 2));
            if (dist < closest) {
                closest = dist;
                sLat = s.lat;
                sLon = s.lon;
            }
        }

        // Not the best but Javascript is not that great for these things
        const coordString = `${sLat},${sLon}`;

        if (!(coordString in closestCounts)) {
            closestCounts[coordString] = 0;
        }

        closestCounts[coordString]++;
        lines.coordinates.push([[p.lon, p.lat], [sLon, sLat]]);
    }

    return [closestCounts, lines]
}

function generateMarkers(closestCounts) {
    const passengerMarkers = passengers.map(({lat, lon}) => (
        <PassengerMarker
            lat={lat}
            lon={lon}
            key={`${lat},${lon}`}
        />
    ));

    const stopMarkers = stops.map(({lat, lon}) => {
        return (
        <StopMarker
            lat={lat}
            lon={lon}
            key={`${lat},${lon}`}
            closestCount={closestCounts[`${lat},${lon}`]}
        />
    )});

    return [passengerMarkers, stopMarkers]
}

function BusMap() {
    const [longitude, latitude] = calculateCenter();
    const [closestCounts, lines] = calculateClosest();
    let [passengerMarkers, stopMarkers] = generateMarkers(closestCounts);

    const mapStyle = 'mapbox://styles/mapbox/light-v9';
    const [viewport, setViewport] = useState({
        longitude,
        latitude,
        zoom: 14.75
    })
    
    return (
        <MapGL
        style={{ width: '100vw', height: '100vh' }}
        mapStyle={mapStyle}
        accessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        longitude={viewport.longitude}
        latitude={viewport.latitude}
        zoom={viewport.zoom}
        onViewportChange={setViewport}
        >
            <Source id='closestPaths' type='geojson' data={lines} />
            <Layer
                id='closestPaths'
                type='line'
                source='closestPaths'
                paint={{
                  'line-color': '#888',
                  'line-width': 3
                }}
            />
            {passengerMarkers}
            {stopMarkers}
        </MapGL>
    )
}

export default BusMap