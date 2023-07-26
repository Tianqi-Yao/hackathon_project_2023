const axios = require("axios");
require('dotenv').config()


async function searchBusinessByYelp(lat, lng, radius = 2000, offset) {
  const options = {
    method: "GET",
    url: "https://api.yelp.com/v3/businesses/search",
    // limit: 0 - 50;  radius: 0 - 40000; offset: 0 - 1000
    params: { latitude: lat, longitude: lng, limit: 20, radius: radius, offset: offset, term: 'restaurants' },  
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.YELP_API_KEY}`
    },
  };
  console.log("########searchBusinessByYelp options", options);
  const data = await axios
    .request(options)
    .then(function (response) {
      // console.log("response: ", response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log("#####error");
      console.error(error);
    });
  return data;
}

module.exports = {
  searchBusinessByYelp,
};
