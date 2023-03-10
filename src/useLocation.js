import React, {useState, useEffect} from 'react'

const useLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: {lat: '', lng: ''}
   })
   const onSuccess = location => {
       setLocation({
           loaded: true,
           coordinates: {
               lat: location.coords.latitude,
               lng: location.coords.longitude
           }
       })
   }

 const  onError = error => {
       setLocation({
           loaded: true,
           error
       })
   }
   useEffect(() => {
     if(!('geolocation' in navigator)){
       console.log('geolocation not available')
       setLocation(state => ({
           ...state,
           loaded: true,
           error: {
               code: 0,
               message: 'Geolocation not available'
           }
       }))
     }

     navigator.geolocation.getCurrentPosition(onSuccess, onError)
   }, [])

 return location
}

export default useLocation
