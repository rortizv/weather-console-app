const axios = require('axios');
require('dotenv').config();


class Searches {    
    history = ['Bogota', 'Tokyo', 'Napoles'];
    
    constructor() {
        // TODO: read DB if exists
    }

    async searchByCity(city = '') {
        console.log(process.env.WEATHER_API_KEY);
        try {
            const resp = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${process.env.WEATHER_API_KEY}&contentType=json`);
            console.log(resp.data);
        } catch (error) {
            return [];
        }
    }

}


module.exports = Searches;