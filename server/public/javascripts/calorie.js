const axios = require('axios');

async function getCalorieByFood(food) {
    const options = {
        method: 'GET',
        url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
        params: {
            query: food
        },
        headers: {
            'X-RapidAPI-Key': '62dcf4eee1mshf297d936448fd63p1e19fdjsn0db61a11cfb9',
            'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log("response: ",response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getCalorieByFood
}