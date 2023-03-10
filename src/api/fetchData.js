import axios from "axios";

export const getData = async (lat, lon) => {
    console.log("inside getData")
    
        try {
          const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng`, {
            params: {
                latitude: lat,
                longitude: lon,
                limit: '30',
                currency: 'USD',
                distance: '2',
                open_now: 'false',
                lunit: 'km',
                lang: 'en_US'
            },
            headers: {
              'x-rapidapi-key': '4b60bff377msh09f4d49775ae77fp17ee00jsnb5d98b173e95',
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            },
          });
          console.log(data)
          console.log({object: lat, lon})
          return data;
        } catch (error) {
          console.log(error);
        }
}