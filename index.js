require("colors");
const { readInput, inquirerMenu, pause } = require("./helpers/inquirer");

const Searches = require("./models/searches");

const main = async () => {

    let opt = '';
    const searches = new Searches();

    do {
        // Prints menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Search by city
                const city = await readInput('Type the city:');
                await searches.searchByCity(city);
                // Show results
                // Select place
                // Weather
                // Save in DB

                console.log('\nInformation of the city\n'.green);
                console.log('City:', );
                console.log('Lat:', );
                console.log('Lng:', );
                console.log('Temperature:', );
                console.log('Min:', );
                console.log('Max:', );
            break;

            case '2':
                // List historical searches
                // searches.listHistoricalSearches();
            break;

        }

        if (opt !== '0') await pause();

    } while (opt !== '0');
    
};

main();