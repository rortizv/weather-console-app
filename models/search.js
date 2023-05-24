const fs = require('fs');
const axios = require('axios');
require('dotenv').config();


class Search {    
    history = [];
    dbPath = './db/database.json';
    
    constructor() {
        this.readFromDB();
    }

    get historyCapitalized() {
        return this.history.map( city => {
            let words = city.split(' ');
            words = words.map( word => word[0].toUpperCase() + word.substring(1) );
            return words.join(' ');
        });
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

    addHistory(city = '') {
        if (this.history.includes(city.toLocaleLowerCase())) {
            return;
        }
        this.history = this.history.splice(0, 10);
        this.history.unshift(city.toLocaleLowerCase());
        this.saveToDB();
    }

    saveToDB() {
        const payload = {
            history: this.history
        };
        fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }

    readFromDB() {
        if (!fs.existsSync(this.dbPath)) return null;
    
        try {
            const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
            const data = JSON.parse(info);
            this.history = data.history;
        } catch (error) {
            console.error('Error reading from the database:', error);
            return null;
        }
    }

}


module.exports = Search;