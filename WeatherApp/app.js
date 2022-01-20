const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



geocode(process.argv[2], (error, {latitude, longitude,location} = {}) => {
    if (error) {
        return console.log(chalk.red.bold("Error : " + error));
    } 
    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(chalk.red.bold("Error : " + error));
        }
        console.log(location);
        console.log(forecastData);
    })
})




