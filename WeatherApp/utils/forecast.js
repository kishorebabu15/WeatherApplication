const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d6604a15d7696e7602a79831271b8fd9&query=' + latitude + ',' + longitude + '&units=m';

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback(error, undefined);
        } else if (response.body.error) {
            callback("unable to find the location !!", undefined)
        } else {
            callback(undefined, {
                weather_description: response.body.current.weather_descriptions[0],
                tempearture: response.body.current.temperature,
                feelslike: response.body.current.feelslike
            })
        }
    })

}

module.exports = forecast;