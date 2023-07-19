const axios = require('axios');

async function searchBusinessByYelp(lat, lng) {
    const options = {
        method: 'GET',
        url: 'https://api.yelp.com/v3/businesses/search',
        params: {latitude:lat,longitude:lng},
        headers: {
            accept: 'application/json',
            Authorization: 'API KEY'
            // Authorization: `Bearer ${process.env.YELP_API_KEY}`
        }
    };
    console.log("########searchBusinessByYelp options", options);
    const data = await axios
        .request(options)
        .then(function (response) {
            // console.log("response: ", response.data);
            return response.data
        })
        .catch(function (error) {
            console.log("#####error");
            console.error(error);
        });
    return data;
}

module.exports = {
    searchBusinessByYelp
}