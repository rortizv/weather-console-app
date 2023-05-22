const axios = require('axios');

class Searches {
    
    history = ['Bogota', 'Tokyo', 'Napoles'];
    
    constructor() {
        // TODO: read DB if exists
    }

    async searchByCity(city = '') {
        try {
            const { status, data } = await axios.get('https://reqres.in/api/users?page=2');
            console.log('Response status: ', status);
            console.log('Data: ', data);
        } catch (error) {
            return [];
        }
    }

    // async listHistoricalSearches() {
    //     console.log('You have typed historical searches');
    //     // TODO: read DB if exists
    // }

}


module.exports = Searches;