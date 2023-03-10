import React from 'react'
import { useState, useEffect } from 'react'
import { getData } from './api/fetchData'
import useLocation from './useLocation';

const FetchData = () => {  
  const [data, setData] = useState([])
  const location = useLocation();
  console.log(location)

const handleClick = () => {
  if(location.loaded) {
    getData(location.coordinates.lat, location.coordinates.lng).then((data) => {
      console.log(data)
      setData(data)
    })
  }
}
  
  
getData()
  return (
    <div>
      data here
      <div className="" onClick={handleClick}>Submit</div>
      {
        data.map((item) => (
          <div className="" id={item.location_id}>
            {
              item.name
            }
          </div>
        ))
      }
    </div>
  )
}

export default FetchData
