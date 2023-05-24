require("colors");
const { readInput, inquirerMenu, pause } = require("./helpers/inquirer");

const Search = require("./models/search");

const main = async () => {

    let opt = '';
    const search = new Search();

    do {
        // Prints menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Search by city
                const cityToSearch = await readInput('Type the city:');
                const { city, latitude, longitude, temperature, min, max, description } = await search.searchByCity(cityToSearch);
                // Save in DB
                search.addHistory(city);

                console.clear();
                console.log('\nInformation of the city\n'.green);
                console.log('City:'.blue, city);
                console.log('Latitude:'.blue, latitude);
                console.log('Longitude:'.blue, longitude);
                console.log('Temperature: '.blue+`${temperature}°C`);
                console.log('Min: '.blue+`${min}°C`);
                console.log('Max: '.blue+`${max}°C`);
                console.log('Description:'.blue, description);
            break;

            case '2':
                // List historical searches
                search.historyCapitalized.forEach( (city, i) => {
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${city}`);
                });
            break;

        }

        if (opt !== '0') await pause();

    } while (opt !== '0');
    
};

main();