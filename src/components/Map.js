import React,{ useState } from 'react'
import MapGL, {GeolocateControl } from 'react-map-gl'
import config from '../config'
import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN=config.REACT_APP_TOKEN

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};

//init Map component > a map container
const Map = () => {
    /* 
        use the state Hook to initiate viewport, setViewport which we’ll feed to the MapGL component as props.
        + use viewport to initiate the initial coordinates of the map along with its zoom and size
        + use setViewPort  to update the values of the viewport 
    */
  const [viewport, setViewPort ] = useState({
    width: "100%",
    height: 900,
    latitude: 0,
    longitude: 0,
    zoom: 2
  })

  const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })
  /* 
    MapGL uses:
    + mapboxApiAccessToken:  required to make calls to the mapbox API and can be obtained from mapbox
    + mapStyle: links to a variety of map styles provided by mapbox, here is dark mode
    + onViewportChange a function that we use to update our viewport
  */

  /*
    GeolocateControl: component is used to To add geolocation
    + style:  declared as geolocateStyle
        > determines the size and placement of the button that triggers the geolocation service
    + positionOptions :  an object containing the options passed to the Geolocation API to get and watch the user’s position
        enableHighAccuracy > enabling high accuracy about user's postion
    + trackUserLocation: makes the geolocate button a toggle that monitors and updates the user’s location when it changes
  */
  return (
    <div style={{ margin: '0 auto'}}>
      <h1 style={{textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>GeoLocator: Click To Find Your Location or click <a href="/search">here</a> to search for a location</h1>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}n
        />
      </MapGL>
    </div>
  )
}

export default Map