const axios = require('axios');
require('dotenv').config();


class Search {    
    history = ['Bogota', 'Tokyo', 'Napoles'];
    
    constructor() {
        // TODO: read DB if exists
    }

    async searchByCity(city = '') {
        try {
            const { data } = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${process.env.WEATHER_API_KEY}&contentType=json`);
            //console.log(data);
            let cityResult = {
                city: data.resolvedAddress,
                latitude: data.latitude,
                longitude: data.longitude,
                temperature: data.days[0].temp,
                min: data.days[0].tempmin,
                max: data.days[0].tempmax,
                description: data.description
            };
            return cityResult;
        } catch (error) {
            return {};
        }
    }

}


module.exports = Search;