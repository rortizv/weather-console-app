
class Searches {
    
    history = ['Bogota', 'Tokyo', 'Napoles'];
    
    constructor() {
        // TODO: read DB if exists
    }

    async searchByCity(city = '') {
        console.log({city});
        // http request
        return []; // Return the weather of the city that matches the city param
    }

    async listHistoricalSearches() {
        console.log('You have typed historical searches');
        // TODO: read DB if exists
    }

}


module.exports = Searches;