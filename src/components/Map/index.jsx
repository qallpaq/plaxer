import React from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap
} from 'react-google-maps'
import {
  useMediaQuery,
  useTheme
} from '@material-ui/core'


const Google = () => {
  return <GoogleMap
    GoogleMap
    defaultZoom={15}
    defaultCenter={{
      lat: 48.71939,
      lng: 44.50183
    }}
  />
}

const WrappedMap = withScriptjs(withGoogleMap(Google))

const Map = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <div style={{width: '100vw', height: `${isMobile ? '70vh' : '50vh'}`}}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
        libraries=geometry,drawing,places&key=AIzaSyAnlRJ_oCLFf1JBIJVLgepwnQfRH4FCEMY`}
        loadingElement={<div style={{height: '100%'}}/>}
        containerElement={<div style={{height: '100%'}}/>}
        mapElement={<div style={{height: '100%'}}/>}
      />
    </div>
  )
}

export default Map
