const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoia2lzaG9yZWJhYnUxNSIsImEiOiJja3lqcXg5cm8yN3RwMm9xaGhvdGVrNDVtIn0.FeTdSdeb1cDJhG4BnMNJHA'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to Geocode (mapbox)!!", undefined)
        } else if (response.body.features.length === 0) {
            callback("unable to find the location,try another search!!", undefined)
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;