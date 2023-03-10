import React from 'react'
import ReactMapGL from 'react-map-gl'
//import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

const Graph = () => {
    const [viewport, setViewport] = React.useState({
        latitude: 37.7577,
        longitude: -122.4376,
        width: "100vw",
        height: "100vh",
        zoom: 10
    })
  return (
    <div>
    <ReactMapGL {...viewport}></ReactMapGL>
    </div>
  )
}

export default Graph
