const { sequelize, Restaurant, Category, Menu, Ingredient, Review } = require('./models');

/**
 * @jchen
 * Get a list of all resturant in the database
 * @returns {Promise<Object[]>} A promise that return all the restaurants.
 */

async function getAllRestaurantId() {
    try {
        const restaurants = await Restaurant.findAll({ attributes: ['id'] })
        const ids = restaurants.map((restaurant) => restaurant.id)
        return ids
    } catch (error) {
        console.error('Error retrieving restaurants:', error);
    };
}

// Use await to fetch the ids
getAllRestaurantId().then((ids) => {
    console.log(ids);
    console.log("\n\n----------")
})


/**
 * @jchen
 * Get all information on Table 'Restaurant' and 'Menus' by the primary key
 * @param {String} id - The restaurant id
 * @returns {Promise<Object>} A promise that return all the restaurants and their menus.
 */

async function getResturantAndMenusById(restaurant_id) {
    try {
        const restaurant = await Restaurant.findByPk(restaurant_id, {
            include: [{
                model: Menu,
                as: "menus"
            }]
        });
        return restaurant;
    } catch (error) {
        console.error('Error retrieving restuarants and menus:', error);
    }
}

getResturantAndMenusById("dxtcChjSodta7nx4_4QNZg").then((restaurant) => {
    console.log("\n********RESTAURANT**********")
    console.log(`restaurant: ${JSON.stringify(restaurant)}`);
    console.log(`restaurant name: ${restaurant.alias}`);
    console.log(`restaurant rating: ${restaurant.rating}`);
    console.log(`restaurant price: ${restaurant.price}`);
    console.log(`restaurant average calorie: ${restaurant.averageCalorie}`);
    console.log(`restaurant average totalFat: ${restaurant.averageTotalFat}`);
    console.log(`restaurant average totalProtein: ${restaurant.averageTotalProtien}`);
    console.log(`restaurant average totalCarbohydrates: ${restaurant.averageTotalCarbohydrates}`);
    console.log("*********RESTAURANT*********\n")

    const menus = restaurant.menus;
    menus.forEach((menu) => {
        console.log("-----")
        console.log(menu.id);
        console.log(menu.food);
    });
});



