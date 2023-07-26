const { sequelize, Restaurant, Category, Menu, Ingredient, Review } = require('./models');

const restaurantData = {
  "id": "ZKe5mhiC7BtwrsN51wWJ_w",
  "alias": "lima-criolla-austin",
  "name": "Lima Criolla",
  "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/bsTI9ZoiTmIFchkViY-SBw/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/lima-criolla-austin?adjust_creative=DCZgw_02OZNeg4oTnfSNUQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DCZgw_02OZNeg4oTnfSNUQ",
  "review_count": 373,
  "rating": 4,
  "coordinates": {
      "latitude": 30.326379,
      "longitude": -97.707544
  },
  "categories": [
    {
        "alias": "latin",
        "title": "Latin American"
    },
    {
        "alias": "peruvian",
        "title": "Peruvian"
    }
  ],
  "transactions": [
      "delivery",
      "pickup"
  ],
  "price": "$$",
  "location": {
      "address1": "6406 N Interstate 35 Frontage Rd",
      "address2": "Ste 1550",
      "address3": "",
      "city": "Austin",
      "zip_code": "78752",
      "country": "US",
      "state": "TX",
      "display_address": [
          "6406 N Interstate 35 Frontage Rd",
          "Ste 1550",
          "Austin, TX 78752"
      ]
  },
  "phone": "+15123235404",
  "display_phone": "(512) 323-5404",
  "distance": 1123.8289124674707,
  "averageCalorie": 263.05535714285713,
  "menu": [
    {
        "food": "Causa Limena",
        "ingredients": "Potato salad filled with shredded chicken. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/r2fk2kk3H017r_ZiCqU3BA/60s.jpg",
        "calorie": 391.1,
        "ingradientsList": [
            {
                "name": "shredded chicken",
                "calories": 168.5,
                "serving_size_g": 100,
                "fat_total_g": 6.6,
                "fat_saturated_g": 1.8,
                "protein_g": 24.8,
                "sodium_mg": 73,
                "potassium_mg": 194,
                "cholesterol_mg": 73,
                "carbohydrates_total_g": 0,
                "fiber_g": 0,
                "sugar_g": 0
            },
            {
                "name": "chicken",
                "calories": 222.6,
                "serving_size_g": 100,
                "fat_total_g": 12.9,
                "fat_saturated_g": 3.7,
                "protein_g": 23.7,
                "sodium_mg": 72,
                "potassium_mg": 179,
                "cholesterol_mg": 92,
                "carbohydrates_total_g": 0,
                "fiber_g": 0,
                "sugar_g": 0
            }
        ]
    },
    {
        "food": "Anticuchos",
        "ingredients": "Grilled Beef Heart chunks served in a kebab style. Served with Peruvian white corn and potatoes.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/CcbMjc4YPCQ6CB7osuVNXA/60s.jpg",
        "calorie": 297.4,
        "ingradientsList": [
            {
                "name": "kebab",
                "calories": 110.6,
                "serving_size_g": 100,
                "fat_total_g": 1.1,
                "fat_saturated_g": 0.3,
                "protein_g": 7.4,
                "sodium_mg": 373,
                "potassium_mg": 65,
                "cholesterol_mg": 18,
                "carbohydrates_total_g": 17.4,
                "fiber_g": 1.1,
                "sugar_g": 13.1
            },
            {
                "name": "corn",
                "calories": 93.9,
                "serving_size_g": 100,
                "fat_total_g": 1.5,
                "fat_saturated_g": 0.2,
                "protein_g": 3.4,
                "sodium_mg": 1,
                "potassium_mg": 75,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.4,
                "sugar_g": 4.6
            },
            {
                "name": "potatoes",
                "calories": 92.9,
                "serving_size_g": 100,
                "fat_total_g": 0.1,
                "fat_saturated_g": 0,
                "protein_g": 2.5,
                "sodium_mg": 10,
                "potassium_mg": 70,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.2,
                "sugar_g": 1.2
            }
        ]
    },
    {
        "food": "Papa a la Huancaina",
        "ingredients": "Baked potatoes covered with a creamy cheese and yellow peppers sauce.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/hlunQaUhTeDodl3soLpI8A/60s.jpg",
        "calorie": 563.0999999999999,
        "ingradientsList": [
            {
                "name": "potatoes",
                "calories": 92.9,
                "serving_size_g": 100,
                "fat_total_g": 0.1,
                "fat_saturated_g": 0,
                "protein_g": 2.5,
                "sodium_mg": 10,
                "potassium_mg": 70,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.2,
                "sugar_g": 1.2
            },
            {
                "name": "cheese",
                "calories": 393.9,
                "serving_size_g": 100,
                "fat_total_g": 33,
                "fat_saturated_g": 18.9,
                "protein_g": 22.7,
                "sodium_mg": 661,
                "potassium_mg": 459,
                "cholesterol_mg": 100,
                "carbohydrates_total_g": 3.2,
                "fiber_g": 0,
                "sugar_g": 0.5
            },
            {
                "name": "yellow peppers",
                "calories": 27.5,
                "serving_size_g": 100,
                "fat_total_g": 0.2,
                "fat_saturated_g": 0,
                "protein_g": 1,
                "sodium_mg": 1,
                "potassium_mg": 23,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 6.2,
                "fiber_g": 0.9,
                "sugar_g": 0
            },
            {
                "name": "sauce",
                "calories": 48.8,
                "serving_size_g": 100,
                "fat_total_g": 1.6,
                "fat_saturated_g": 0.2,
                "protein_g": 1.4,
                "sodium_mg": 438,
                "potassium_mg": 34,
                "cholesterol_mg": 2,
                "carbohydrates_total_g": 7.5,
                "fiber_g": 1.8,
                "sugar_g": 5
            }
        ]
    },
    {
        "food": "Yuca a la Huancaina",
        "ingredients": "Yuca with a side of a creamy cheese and yellow peppers sauce.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/CcugimEM1icDFooZmP58Gw/60s.jpg",
        "calorie": 470.2,
        "ingradientsList": [
            {
                "name": "cheese",
                "calories": 393.9,
                "serving_size_g": 100,
                "fat_total_g": 33,
                "fat_saturated_g": 18.9,
                "protein_g": 22.7,
                "sodium_mg": 661,
                "potassium_mg": 459,
                "cholesterol_mg": 100,
                "carbohydrates_total_g": 3.2,
                "fiber_g": 0,
                "sugar_g": 0.5
            },
            {
                "name": "yellow peppers",
                "calories": 27.5,
                "serving_size_g": 100,
                "fat_total_g": 0.2,
                "fat_saturated_g": 0,
                "protein_g": 1,
                "sodium_mg": 1,
                "potassium_mg": 23,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 6.2,
                "fiber_g": 0.9,
                "sugar_g": 0
            },
            {
                "name": "sauce",
                "calories": 48.8,
                "serving_size_g": 100,
                "fat_total_g": 1.6,
                "fat_saturated_g": 0.2,
                "protein_g": 1.4,
                "sodium_mg": 438,
                "potassium_mg": 34,
                "cholesterol_mg": 2,
                "carbohydrates_total_g": 7.5,
                "fiber_g": 1.8,
                "sugar_g": 5
            }
        ]
    },
    {
        "food": "Papa Rellena",
        "ingredients": "Deep fried mashed potato stuffed with ground beef.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/upRj6ajJrRaxfOjB6vLg0A/60s.jpg",
        "calorie": 391.6,
        "ingradientsList": [
            {
                "name": "mashed potato",
                "calories": 113,
                "serving_size_g": 100,
                "fat_total_g": 4.2,
                "fat_saturated_g": 0.7,
                "protein_g": 2,
                "sodium_mg": 337,
                "potassium_mg": 47,
                "cholesterol_mg": 1,
                "carbohydrates_total_g": 17,
                "fiber_g": 1.5,
                "sugar_g": 1.4
            },
            {
                "name": "ground beef",
                "calories": 278.6,
                "serving_size_g": 100,
                "fat_total_g": 17.1,
                "fat_saturated_g": 6.5,
                "protein_g": 27.2,
                "sodium_mg": 91,
                "potassium_mg": 223,
                "cholesterol_mg": 90,
                "carbohydrates_total_g": 0,
                "fiber_g": 0,
                "sugar_g": 0
            }
        ]
    },
    {
        "food": "Sweet Plantains",
        "ingredients": "",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/OUHU8Rz596C3A0yVjtc3Zg/60s.jpg",
        "calorie": 0,
        "ingradientsList": []
    },
    {
        "food": "Salchipapas",
        "ingredients": "Sliced and fried hot dogs served with french fries. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
        "calorie": 633.9,
        "ingradientsList": [
            {
                "name": "hot dogs",
                "calories": 321.4,
                "serving_size_g": 100,
                "fat_total_g": 29.9,
                "fat_saturated_g": 11.5,
                "protein_g": 11.8,
                "sodium_mg": 864,
                "potassium_mg": 137,
                "cholesterol_mg": 58,
                "carbohydrates_total_g": 2.6,
                "fiber_g": 0,
                "sugar_g": 1.3
            },
            {
                "name": "french fries",
                "calories": 312.5,
                "serving_size_g": 100,
                "fat_total_g": 14.4,
                "fat_saturated_g": 2.3,
                "protein_g": 3.4,
                "sodium_mg": 209,
                "potassium_mg": 123,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 42.1,
                "fiber_g": 3.8,
                "sugar_g": 0.3
            }
        ]
    },
    {
        "food": "Tamal",
        "ingredients": "Chopped chicken or pork wrapped in a corn dough.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/-W5ak1qelTONAjQemlA_ig/60s.jpg",
        "calorie": 552.7,
        "ingradientsList": [
            {
                "name": "corn",
                "calories": 93.9,
                "serving_size_g": 100,
                "fat_total_g": 1.5,
                "fat_saturated_g": 0.2,
                "protein_g": 3.4,
                "sodium_mg": 1,
                "potassium_mg": 75,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.4,
                "sugar_g": 4.6
            },
            {
                "name": "chicken",
                "calories": 222.6,
                "serving_size_g": 100,
                "fat_total_g": 12.9,
                "fat_saturated_g": 3.7,
                "protein_g": 23.7,
                "sodium_mg": 72,
                "potassium_mg": 179,
                "cholesterol_mg": 92,
                "carbohydrates_total_g": 0,
                "fiber_g": 0,
                "sugar_g": 0
            },
            {
                "name": "pork",
                "calories": 236.2,
                "serving_size_g": 100,
                "fat_total_g": 14,
                "fat_saturated_g": 4.9,
                "protein_g": 26.2,
                "sodium_mg": 57,
                "potassium_mg": 219,
                "cholesterol_mg": 88,
                "carbohydrates_total_g": 0,
                "fiber_g": 0,
                "sugar_g": 0
            }
        ]
    },
    {
        "food": "Empanadas",
        "ingredients": "Choice of baked dough filled with ground beef or spinach and cheese.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/sm0hT6Pa3zoXh8BUvfrp0w/60s.jpg",
        "calorie": 393.9,
        "ingradientsList": [
            {
                "name": "cheese",
                "calories": 393.9,
                "serving_size_g": 100,
                "fat_total_g": 33,
                "fat_saturated_g": 18.9,
                "protein_g": 22.7,
                "sodium_mg": 661,
                "potassium_mg": 459,
                "cholesterol_mg": 100,
                "carbohydrates_total_g": 3.2,
                "fiber_g": 0,
                "sugar_g": 0.5
            }
        ]
    },
    {
        "food": "Pan con Chicharron",
        "ingredients": "Braised pork with fried sweet potato slices sandwich  accompanied by an onion sauce.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
        "calorie": 48.8,
        "ingradientsList": [
            {
                "name": "sauce",
                "calories": 48.8,
                "serving_size_g": 100,
                "fat_total_g": 1.6,
                "fat_saturated_g": 0.2,
                "protein_g": 1.4,
                "sodium_mg": 438,
                "potassium_mg": 34,
                "cholesterol_mg": 2,
                "carbohydrates_total_g": 7.5,
                "fiber_g": 1.8,
                "sugar_g": 5
            }
        ]
    },
    {
        "food": "Anticuchos",
        "ingredients": "Grilled beef heart chunks served in a kebab style. Served with Peruvian white corn and potatoes. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/CcbMjc4YPCQ6CB7osuVNXA/60s.jpg",
        "calorie": 464.29999999999995,
        "ingradientsList": [
            {
                "name": "beef heart",
                "calories": 166.9,
                "serving_size_g": 100,
                "fat_total_g": 4.8,
                "fat_saturated_g": 1.4,
                "protein_g": 28.4,
                "sodium_mg": 57,
                "potassium_mg": 249,
                "cholesterol_mg": 212,
                "carbohydrates_total_g": 0.2,
                "fiber_g": 0,
                "sugar_g": 0
            },
            {
                "name": "kebab",
                "calories": 110.6,
                "serving_size_g": 100,
                "fat_total_g": 1.1,
                "fat_saturated_g": 0.3,
                "protein_g": 7.4,
                "sodium_mg": 373,
                "potassium_mg": 65,
                "cholesterol_mg": 18,
                "carbohydrates_total_g": 17.4,
                "fiber_g": 1.1,
                "sugar_g": 13.1
            },
            {
                "name": "corn",
                "calories": 93.9,
                "serving_size_g": 100,
                "fat_total_g": 1.5,
                "fat_saturated_g": 0.2,
                "protein_g": 3.4,
                "sodium_mg": 1,
                "potassium_mg": 75,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.4,
                "sugar_g": 4.6
            },
            {
                "name": "potatoes",
                "calories": 92.9,
                "serving_size_g": 100,
                "fat_total_g": 0.1,
                "fat_saturated_g": 0,
                "protein_g": 2.5,
                "sodium_mg": 10,
                "potassium_mg": 70,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.2,
                "sugar_g": 1.2
            }
        ]
    },
    {
        "food": "Chupe de la Limena",
        "ingredients": "Seafood milky chowder soup. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
        "calorie": 103.69999999999999,
        "ingradientsList": [
            {
                "name": "chowder",
                "calories": 79.1,
                "serving_size_g": 100,
                "fat_total_g": 4,
                "fat_saturated_g": 0,
                "protein_g": 2.6,
                "sodium_mg": 347,
                "potassium_mg": 64,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 8.4,
                "fiber_g": 1,
                "sugar_g": 0.2
            },
            {
                "name": "soup",
                "calories": 24.6,
                "serving_size_g": 100,
                "fat_total_g": 1,
                "fat_saturated_g": 0.3,
                "protein_g": 1.3,
                "sodium_mg": 343,
                "potassium_mg": 16,
                "cholesterol_mg": 4,
                "carbohydrates_total_g": 2.9,
                "fiber_g": 0.2,
                "sugar_g": 0.3
            }
        ]
    },
    {
        "food": "Caldo de Gallina",
        "ingredients": "Hen broth with spaghetti noodles and hard-boiled egg slices.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
        "calorie": 493.40000000000003,
        "ingradientsList": [
            {
                "name": "broth",
                "calories": 37.1,
                "serving_size_g": 100,
                "fat_total_g": 1.2,
                "fat_saturated_g": 0.3,
                "protein_g": 2.5,
                "sodium_mg": 144,
                "potassium_mg": 27,
                "cholesterol_mg": 2,
                "carbohydrates_total_g": 3.5,
                "fiber_g": 0,
                "sugar_g": 1.6
            },
            {
                "name": "spaghetti noodles",
                "calories": 147.5,
                "serving_size_g": 100,
                "fat_total_g": 0.6,
                "fat_saturated_g": 0.1,
                "protein_g": 5.2,
                "sodium_mg": 4,
                "potassium_mg": 76,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 29.9,
                "fiber_g": 1.3,
                "sugar_g": 1.1
            },
            {
                "name": "egg",
                "calories": 147,
                "serving_size_g": 100,
                "fat_total_g": 9.7,
                "fat_saturated_g": 3.1,
                "protein_g": 12.5,
                "sodium_mg": 139,
                "potassium_mg": 199,
                "cholesterol_mg": 371,
                "carbohydrates_total_g": 0.7,
                "fiber_g": 0,
                "sugar_g": 0.4
            },
            {
                "name": "noodles",
                "calories": 161.8,
                "serving_size_g": 100,
                "fat_total_g": 0.9,
                "fat_saturated_g": 0.2,
                "protein_g": 5.8,
                "sodium_mg": 0,
                "potassium_mg": 57,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 31.2,
                "fiber_g": 1.8,
                "sugar_g": 0.6
            }
        ]
    },
    {
        "food": "Sopa de Pollo",
        "ingredients": "The classic homemade chicken and noodle soup.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/yCdbcd-4QEgGshEcee6rNg/60s.jpg",
        "calorie": 247.2,
        "ingradientsList": [
            {
                "name": "chicken",
                "calories": 222.6,
                "serving_size_g": 100,
                "fat_total_g": 12.9,
                "fat_saturated_g": 3.7,
                "protein_g": 23.7,
                "sodium_mg": 72,
                "potassium_mg": 179,
                "cholesterol_mg": 92,
                "carbohydrates_total_g": 0,
                "fiber_g": 0,
                "sugar_g": 0
            },
            {
                "name": "soup",
                "calories": 24.6,
                "serving_size_g": 100,
                "fat_total_g": 1,
                "fat_saturated_g": 0.3,
                "protein_g": 1.3,
                "sodium_mg": 343,
                "potassium_mg": 16,
                "cholesterol_mg": 4,
                "carbohydrates_total_g": 2.9,
                "fiber_g": 0.2,
                "sugar_g": 0.3
            }
        ]
    },
    {
        "food": "Sancochado de Res",
        "ingredients": "Parboiled beef chunks with vegetables. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
        "calorie": 552.1,
        "ingradientsList": [
            {
                "name": "beef chunks",
                "calories": 195.8,
                "serving_size_g": 100,
                "fat_total_g": 6.9,
                "fat_saturated_g": 2.8,
                "protein_g": 32.2,
                "sodium_mg": 66,
                "potassium_mg": 226,
                "cholesterol_mg": 97,
                "carbohydrates_total_g": 0,
                "fiber_g": 0,
                "sugar_g": 0
            },
            {
                "name": "vegetables",
                "calories": 64.4,
                "serving_size_g": 100,
                "fat_total_g": 0.2,
                "fat_saturated_g": 0,
                "protein_g": 2.9,
                "sodium_mg": 35,
                "potassium_mg": 51,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 13.3,
                "fiber_g": 4.4,
                "sugar_g": 3.1
            },
            {
                "name": "beef",
                "calories": 291.9,
                "serving_size_g": 100,
                "fat_total_g": 19.7,
                "fat_saturated_g": 7.8,
                "protein_g": 26.6,
                "sodium_mg": 63,
                "potassium_mg": 206,
                "cholesterol_mg": 87,
                "carbohydrates_total_g": 0,
                "fiber_g": 0,
                "sugar_g": 0
            }
        ]
    },
    {
        "food": "Sopa a la Minuta",
        "ingredients": "Ground beef soup with angel hair noodles.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
        "calorie": 24.6,
        "ingradientsList": [
            {
                "name": "soup",
                "calories": 24.6,
                "serving_size_g": 100,
                "fat_total_g": 1,
                "fat_saturated_g": 0.3,
                "protein_g": 1.3,
                "sodium_mg": 343,
                "potassium_mg": 16,
                "cholesterol_mg": 4,
                "carbohydrates_total_g": 2.9,
                "fiber_g": 0.2,
                "sugar_g": 0.3
            }
        ]
    },
    {
        "food": "Chupe de Camarones",
        "ingredients": "Shrimp milky chowder soup. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/oeeN8MjIDpt5Lh_K9CB3fQ/60s.jpg",
        "calorie": 103.69999999999999,
        "ingradientsList": [
            {
                "name": "chowder",
                "calories": 79.1,
                "serving_size_g": 100,
                "fat_total_g": 4,
                "fat_saturated_g": 0,
                "protein_g": 2.6,
                "sodium_mg": 347,
                "potassium_mg": 64,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 8.4,
                "fiber_g": 1,
                "sugar_g": 0.2
            },
            {
                "name": "soup",
                "calories": 24.6,
                "serving_size_g": 100,
                "fat_total_g": 1,
                "fat_saturated_g": 0.3,
                "protein_g": 1.3,
                "sodium_mg": 343,
                "potassium_mg": 16,
                "cholesterol_mg": 4,
                "carbohydrates_total_g": 2.9,
                "fiber_g": 0.2,
                "sugar_g": 0.3
            }
        ]
    },
    {
        "food": "Parihuela",
        "ingredients": "Hearty and spicy seafood soup. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/YQagNAJHuZmYxIOjf9hlqQ/60s.jpg",
        "calorie": 164.29999999999998,
        "ingradientsList": [
            {
                "name": "seafood",
                "calories": 139.7,
                "serving_size_g": 100,
                "fat_total_g": 3.5,
                "fat_saturated_g": 0.7,
                "protein_g": 22.2,
                "sodium_mg": 407,
                "potassium_mg": 290,
                "cholesterol_mg": 80,
                "carbohydrates_total_g": 2.7,
                "fiber_g": 0,
                "sugar_g": 0.1
            },
            {
                "name": "soup",
                "calories": 24.6,
                "serving_size_g": 100,
                "fat_total_g": 1,
                "fat_saturated_g": 0.3,
                "protein_g": 1.3,
                "sodium_mg": 343,
                "potassium_mg": 16,
                "cholesterol_mg": 4,
                "carbohydrates_total_g": 2.9,
                "fiber_g": 0.2,
                "sugar_g": 0.3
            }
        ]
    },
    {
        "food": "Aguadito",
        "ingredients": "Chicken soup with rice and cilantro. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/zG4SvUiWpTa7GP9topg9PQ/60s.jpg",
        "calorie": 24.6,
        "ingradientsList": [
            {
                "name": "soup",
                "calories": 24.6,
                "serving_size_g": 100,
                "fat_total_g": 1,
                "fat_saturated_g": 0.3,
                "protein_g": 1.3,
                "sodium_mg": 343,
                "potassium_mg": 16,
                "cholesterol_mg": 4,
                "carbohydrates_total_g": 2.9,
                "fiber_g": 0.2,
                "sugar_g": 0.3
            }
        ]
    },
    {
        "food": "Sopa de Vegetales",
        "ingredients": "Vegetable Soup",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
        "calorie": 0,
        "ingradientsList": []
    },
    {
        "food": "Ceviche Limeno",
        "ingredients": "Tilapia marinated in freshly squeezed lime juice and aji. Sprinkled with herbs and served with sweet potatoes and corn over a bed of lettuce and onions. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/wWKR3NzZy1XIr3T_1bfVGQ/60s.jpg",
        "calorie": 186.8,
        "ingradientsList": [
            {
                "name": "corn",
                "calories": 93.9,
                "serving_size_g": 100,
                "fat_total_g": 1.5,
                "fat_saturated_g": 0.2,
                "protein_g": 3.4,
                "sodium_mg": 1,
                "potassium_mg": 75,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.4,
                "sugar_g": 4.6
            },
            {
                "name": "potatoes",
                "calories": 92.9,
                "serving_size_g": 100,
                "fat_total_g": 0.1,
                "fat_saturated_g": 0,
                "protein_g": 2.5,
                "sodium_mg": 10,
                "potassium_mg": 70,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.2,
                "sugar_g": 1.2
            }
        ]
    },
    {
        "food": "Ceviche Mixto",
        "ingredients": "Seafood and fish marinated in freshly squeezed lime juice and aji. Sprinkled with herbs and served with sweet potatoes and corn over a bed of lettuce and onions. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/VD8mISUxMfXmbMymXqRCVA/60s.jpg",
        "calorie": 186.8,
        "ingradientsList": [
            {
                "name": "corn",
                "calories": 93.9,
                "serving_size_g": 100,
                "fat_total_g": 1.5,
                "fat_saturated_g": 0.2,
                "protein_g": 3.4,
                "sodium_mg": 1,
                "potassium_mg": 75,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.4,
                "sugar_g": 4.6
            },
            {
                "name": "potatoes",
                "calories": 92.9,
                "serving_size_g": 100,
                "fat_total_g": 0.1,
                "fat_saturated_g": 0,
                "protein_g": 2.5,
                "sodium_mg": 10,
                "potassium_mg": 70,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.2,
                "sugar_g": 1.2
            }
        ]
    },
    {
        "food": "Jalea",
        "ingredients": "Breaded fish  calamari and shrimps served over a bed of fried yucca with onion salad and nuggets of toasted corn.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/Z25YFh13EVGZMnDqPP7Jcw/60s.jpg",
        "calorie": 93.9,
        "ingradientsList": [
            {
                "name": "corn",
                "calories": 93.9,
                "serving_size_g": 100,
                "fat_total_g": 1.5,
                "fat_saturated_g": 0.2,
                "protein_g": 3.4,
                "sodium_mg": 1,
                "potassium_mg": 75,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.4,
                "sugar_g": 4.6
            }
        ]
    },
    {
        "food": "Choritos a la Chalaca",
        "ingredients": "Mussels on the half shell served with creole salad. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
        "calorie": 185.9,
        "ingradientsList": [
            {
                "name": "shell",
                "calories": 162.3,
                "serving_size_g": 100,
                "fat_total_g": 0.9,
                "fat_saturated_g": 0.2,
                "protein_g": 5.8,
                "sodium_mg": 1,
                "potassium_mg": 58,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 30.4,
                "fiber_g": 1.8,
                "sugar_g": 0.6
            },
            {
                "name": "salad",
                "calories": 23.6,
                "serving_size_g": 100,
                "fat_total_g": 0.2,
                "fat_saturated_g": 0,
                "protein_g": 1.5,
                "sodium_mg": 36,
                "potassium_mg": 32,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 4.9,
                "fiber_g": 1.9,
                "sugar_g": 2.2
            }
        ]
    },
    {
        "food": "Tiradito",
        "ingredients": "Traditional Japanese-Peruvian costal dish. Tilapia cut into fine pieces and marinated in Peruvian spices. Aji amarillo (yellow pepper) and citrus. Accompanied with choclo (Peruvian corn). Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/-qYJKVyxqWIDL9Shu0uMhQ/60s.jpg",
        "calorie": 93.9,
        "ingradientsList": [
            {
                "name": "corn",
                "calories": 93.9,
                "serving_size_g": 100,
                "fat_total_g": 1.5,
                "fat_saturated_g": 0.2,
                "protein_g": 3.4,
                "sodium_mg": 1,
                "potassium_mg": 75,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.4,
                "sugar_g": 4.6
            }
        ]
    },
    {
        "food": "Arroz con Mariscos",
        "ingredients": "Peruvian version of the paella. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/QpRKrGYcgxVCTldDizvVAg/60s.jpg",
        "calorie": 185.4,
        "ingradientsList": [
            {
                "name": "paella",
                "calories": 185.4,
                "serving_size_g": 100,
                "fat_total_g": 9.1,
                "fat_saturated_g": 2.6,
                "protein_g": 10.2,
                "sodium_mg": 341,
                "potassium_mg": 103,
                "cholesterol_mg": 46,
                "carbohydrates_total_g": 13.8,
                "fiber_g": 0.4,
                "sugar_g": 1.1
            }
        ]
    },
    {
        "food": "Tallarin Saltado Limeno",
        "ingredients": "Noodles in a Lima-style sauteed. Made with beef or chicken. Served with onions and tomatoes.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/sWmaMeXGBoV1VAvf9DH46Q/60s.jpg",
        "calorie": 267.3,
        "ingradientsList": [
            {
                "name": "chicken",
                "calories": 222.6,
                "serving_size_g": 100,
                "fat_total_g": 12.9,
                "fat_saturated_g": 3.7,
                "protein_g": 23.7,
                "sodium_mg": 72,
                "potassium_mg": 179,
                "cholesterol_mg": 92,
                "carbohydrates_total_g": 0,
                "fiber_g": 0,
                "sugar_g": 0
            },
            {
                "name": "onion",
                "calories": 44.7,
                "serving_size_g": 100,
                "fat_total_g": 0.2,
                "fat_saturated_g": 0,
                "protein_g": 1.4,
                "sodium_mg": 2,
                "potassium_mg": 35,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 10.1,
                "fiber_g": 1.4,
                "sugar_g": 4.7
            }
        ]
    },
    {
        "food": "Tallarines Verdes",
        "ingredients": "Noodles in a lima-style pesto sauce make from cilantro served with steak.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/LVSXv49FbKcqFdfUecRoqA/60s.jpg",
        "calorie": 48.8,
        "ingradientsList": [
            {
                "name": "sauce",
                "calories": 48.8,
                "serving_size_g": 100,
                "fat_total_g": 1.6,
                "fat_saturated_g": 0.2,
                "protein_g": 1.4,
                "sodium_mg": 438,
                "potassium_mg": 34,
                "cholesterol_mg": 2,
                "carbohydrates_total_g": 7.5,
                "fiber_g": 1.8,
                "sugar_g": 5
            }
        ]
    },
    {
        "food": "Tallarines Rojos",
        "ingredients": "Noodles in marinara sauce served with a piece of chicken.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
        "calorie": 48.8,
        "ingradientsList": [
            {
                "name": "sauce",
                "calories": 48.8,
                "serving_size_g": 100,
                "fat_total_g": 1.6,
                "fat_saturated_g": 0.2,
                "protein_g": 1.4,
                "sodium_mg": 438,
                "potassium_mg": 34,
                "cholesterol_mg": 2,
                "carbohydrates_total_g": 7.5,
                "fiber_g": 1.8,
                "sugar_g": 5
            }
        ]
    },
    {
        "food": "Tallarines a la Huancaina",
        "ingredients": "Noodles in huancaina sauce topped with lomo saltado.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/BWXN9vIUX1_ZsjSPmL8INA/60s.jpg",
        "calorie": 48.8,
        "ingradientsList": [
            {
                "name": "sauce",
                "calories": 48.8,
                "serving_size_g": 100,
                "fat_total_g": 1.6,
                "fat_saturated_g": 0.2,
                "protein_g": 1.4,
                "sodium_mg": 438,
                "potassium_mg": 34,
                "cholesterol_mg": 2,
                "carbohydrates_total_g": 7.5,
                "fiber_g": 1.8,
                "sugar_g": 5
            }
        ]
    },
    {
        "food": "Arroz Chaufa Limeno",
        "ingredients": "Best-selling Peruvian style fried rice with chicken  pork and shrimp.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/yqyu9a5abV8D4h1Sl0qoYw/60s.jpg",
        "calorie": 458.79999999999995,
        "ingradientsList": [
            {
                "name": "chicken",
                "calories": 222.6,
                "serving_size_g": 100,
                "fat_total_g": 12.9,
                "fat_saturated_g": 3.7,
                "protein_g": 23.7,
                "sodium_mg": 72,
                "potassium_mg": 179,
                "cholesterol_mg": 92,
                "carbohydrates_total_g": 0,
                "fiber_g": 0,
                "sugar_g": 0
            },
            {
                "name": "pork",
                "calories": 236.2,
                "serving_size_g": 100,
                "fat_total_g": 14,
                "fat_saturated_g": 4.9,
                "protein_g": 26.2,
                "sodium_mg": 57,
                "potassium_mg": 219,
                "cholesterol_mg": 88,
                "carbohydrates_total_g": 0,
                "fiber_g": 0,
                "sugar_g": 0
            }
        ]
    },
    {
        "food": "Arroz Chaufa de Mariscos",
        "ingredients": "Peruvian style friend rice served with seafood.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/v9GFmUFuYoCly64CQiCb0A/60s.jpg",
        "calorie": 267.1,
        "ingradientsList": [
            {
                "name": "seafood",
                "calories": 139.7,
                "serving_size_g": 100,
                "fat_total_g": 3.5,
                "fat_saturated_g": 0.7,
                "protein_g": 22.2,
                "sodium_mg": 407,
                "potassium_mg": 290,
                "cholesterol_mg": 80,
                "carbohydrates_total_g": 2.7,
                "fiber_g": 0,
                "sugar_g": 0.1
            },
            {
                "name": "rice",
                "calories": 127.4,
                "serving_size_g": 100,
                "fat_total_g": 0.3,
                "fat_saturated_g": 0.1,
                "protein_g": 2.7,
                "sodium_mg": 1,
                "potassium_mg": 42,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 28.4,
                "fiber_g": 0.4,
                "sugar_g": 0.1
            }
        ]
    },
    {
        "food": "Tacu-Tacu Limeno",
        "ingredients": "Afro-Peruvian rice and beans pancake. Topped of with choice of chicken  beef or pork",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/mXWNevOjXxaIzXG_AT53ig/60s.jpg",
        "calorie": 458.79999999999995,
        "ingradientsList": [
            {
                "name": "chicken",
                "calories": 222.6,
                "serving_size_g": 100,
                "fat_total_g": 12.9,
                "fat_saturated_g": 3.7,
                "protein_g": 23.7,
                "sodium_mg": 72,
                "potassium_mg": 179,
                "cholesterol_mg": 92,
                "carbohydrates_total_g": 0,
                "fiber_g": 0,
                "sugar_g": 0
            },
            {
                "name": "pork",
                "calories": 236.2,
                "serving_size_g": 100,
                "fat_total_g": 14,
                "fat_saturated_g": 4.9,
                "protein_g": 26.2,
                "sodium_mg": 57,
                "potassium_mg": 219,
                "cholesterol_mg": 88,
                "carbohydrates_total_g": 0,
                "fiber_g": 0,
                "sugar_g": 0
            }
        ]
    },
    {
        "food": "Tacu-Tacu de Mariscos",
        "ingredients": "Afro-Peruvian rice and beans pancake. Topped of with seafood.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/SKS2cbcccFEvKhMOG85PXQ/60s.jpg",
        "calorie": 267.1,
        "ingradientsList": [
            {
                "name": "seafood",
                "calories": 139.7,
                "serving_size_g": 100,
                "fat_total_g": 3.5,
                "fat_saturated_g": 0.7,
                "protein_g": 22.2,
                "sodium_mg": 407,
                "potassium_mg": 290,
                "cholesterol_mg": 80,
                "carbohydrates_total_g": 2.7,
                "fiber_g": 0,
                "sugar_g": 0.1
            },
            {
                "name": "rice",
                "calories": 127.4,
                "serving_size_g": 100,
                "fat_total_g": 0.3,
                "fat_saturated_g": 0.1,
                "protein_g": 2.7,
                "sodium_mg": 1,
                "potassium_mg": 42,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 28.4,
                "fiber_g": 0.4,
                "sugar_g": 0.1
            }
        ]
    },
    {
        "food": "Vegetarian Platter",
        "ingredients": "Quinoa salad with carrots  peas and avocado  plantains  fried yucca  Peruvian white corn  sweet potato  criolla salad  huancaina sauce and toasted corn. Vegetarian  vegan and gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/oTJ4GLNhY9fY9jWHeqw5Sw/60s.jpg",
        "calorie": 142.7,
        "ingradientsList": [
            {
                "name": "corn",
                "calories": 93.9,
                "serving_size_g": 100,
                "fat_total_g": 1.5,
                "fat_saturated_g": 0.2,
                "protein_g": 3.4,
                "sodium_mg": 1,
                "potassium_mg": 75,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.4,
                "sugar_g": 4.6
            },
            {
                "name": "sauce",
                "calories": 48.8,
                "serving_size_g": 100,
                "fat_total_g": 1.6,
                "fat_saturated_g": 0.2,
                "protein_g": 1.4,
                "sodium_mg": 438,
                "potassium_mg": 34,
                "cholesterol_mg": 2,
                "carbohydrates_total_g": 7.5,
                "fiber_g": 1.8,
                "sugar_g": 5
            }
        ]
    },
    {
        "food": "Leafy Salad",
        "ingredients": "Lettuce  tomato  onion and peppers salad. Vegetarian  vegan and gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
        "calorie": 68.30000000000001,
        "ingradientsList": [
            {
                "name": "onion",
                "calories": 44.7,
                "serving_size_g": 100,
                "fat_total_g": 0.2,
                "fat_saturated_g": 0,
                "protein_g": 1.4,
                "sodium_mg": 2,
                "potassium_mg": 35,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 10.1,
                "fiber_g": 1.4,
                "sugar_g": 4.7
            },
            {
                "name": "salad",
                "calories": 23.6,
                "serving_size_g": 100,
                "fat_total_g": 0.2,
                "fat_saturated_g": 0,
                "protein_g": 1.5,
                "sodium_mg": 36,
                "potassium_mg": 32,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 4.9,
                "fiber_g": 1.9,
                "sugar_g": 2.2
            }
        ]
    },
    {
        "food": "Lomo Saltado Limeno",
        "ingredients": "Sauteed steak cooked in wok with onions and tomatoes accompanied with french fries and garlic rice. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/8Un5UtN6s6D4xthFGJK65g/60s.jpg",
        "calorie": 529.1,
        "ingradientsList": [
            {
                "name": "french fries",
                "calories": 312.5,
                "serving_size_g": 100,
                "fat_total_g": 14.4,
                "fat_saturated_g": 2.3,
                "protein_g": 3.4,
                "sodium_mg": 209,
                "potassium_mg": 123,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 42.1,
                "fiber_g": 3.8,
                "sugar_g": 0.3
            },
            {
                "name": "onion",
                "calories": 44.7,
                "serving_size_g": 100,
                "fat_total_g": 0.2,
                "fat_saturated_g": 0,
                "protein_g": 1.4,
                "sodium_mg": 2,
                "potassium_mg": 35,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 10.1,
                "fiber_g": 1.4,
                "sugar_g": 4.7
            },
            {
                "name": "rice",
                "calories": 127.4,
                "serving_size_g": 100,
                "fat_total_g": 0.3,
                "fat_saturated_g": 0.1,
                "protein_g": 2.7,
                "sodium_mg": 1,
                "potassium_mg": 42,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 28.4,
                "fiber_g": 0.4,
                "sugar_g": 0.1
            },
            {
                "name": "onions",
                "calories": 44.5,
                "serving_size_g": 100,
                "fat_total_g": 0.2,
                "fat_saturated_g": 0,
                "protein_g": 1.4,
                "sodium_mg": 3,
                "potassium_mg": 35,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 10.2,
                "fiber_g": 1.4,
                "sugar_g": 4.8
            }
        ]
    },
    {
        "food": "Frijol con Seco",
        "ingredients": "Beef cooked with chicha de jora and cilantro. Served with canario beans and rice. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/Ooys1hzm_vaU9MsaUUSFFA/60s.jpg",
        "calorie": 150.3,
        "ingradientsList": [
            {
                "name": "rice",
                "calories": 127.4,
                "serving_size_g": 100,
                "fat_total_g": 0.3,
                "fat_saturated_g": 0.1,
                "protein_g": 2.7,
                "sodium_mg": 1,
                "potassium_mg": 42,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 28.4,
                "fiber_g": 0.4,
                "sugar_g": 0.1
            },
            {
                "name": "cilantro",
                "calories": 22.9,
                "serving_size_g": 100,
                "fat_total_g": 0.5,
                "fat_saturated_g": 0,
                "protein_g": 2.3,
                "sodium_mg": 45,
                "potassium_mg": 48,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 3.8,
                "fiber_g": 2.8,
                "sugar_g": 0.8
            }
        ]
    },
    {
        "food": "Bistec a lo Pobre",
        "ingredients": "Steak plate served with plantains  a fried egg  french fries and garlic rice. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/DfIYMYuqNre287cASk8S4A/60s.jpg",
        "calorie": 586.9,
        "ingradientsList": [
            {
                "name": "french fries",
                "calories": 312.5,
                "serving_size_g": 100,
                "fat_total_g": 14.4,
                "fat_saturated_g": 2.3,
                "protein_g": 3.4,
                "sodium_mg": 209,
                "potassium_mg": 123,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 42.1,
                "fiber_g": 3.8,
                "sugar_g": 0.3
            },
            {
                "name": "egg",
                "calories": 147,
                "serving_size_g": 100,
                "fat_total_g": 9.7,
                "fat_saturated_g": 3.1,
                "protein_g": 12.5,
                "sodium_mg": 139,
                "potassium_mg": 199,
                "cholesterol_mg": 371,
                "carbohydrates_total_g": 0.7,
                "fiber_g": 0,
                "sugar_g": 0.4
            },
            {
                "name": "rice",
                "calories": 127.4,
                "serving_size_g": 100,
                "fat_total_g": 0.3,
                "fat_saturated_g": 0.1,
                "protein_g": 2.7,
                "sodium_mg": 1,
                "potassium_mg": 42,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 28.4,
                "fiber_g": 0.4,
                "sugar_g": 0.1
            }
        ]
    },
    {
        "food": "Pure con Asado",
        "ingredients": "Roast beef marinated in panca pepper and vinegar. Served with mashed potatoes and garlic rice. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
        "calorie": 205.9,
        "ingradientsList": [
            {
                "name": "potatoes",
                "calories": 92.9,
                "serving_size_g": 100,
                "fat_total_g": 0.1,
                "fat_saturated_g": 0,
                "protein_g": 2.5,
                "sodium_mg": 10,
                "potassium_mg": 70,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.2,
                "sugar_g": 1.2
            },
            {
                "name": "mashed potato",
                "calories": 113,
                "serving_size_g": 100,
                "fat_total_g": 4.2,
                "fat_saturated_g": 0.7,
                "protein_g": 2,
                "sodium_mg": 337,
                "potassium_mg": 47,
                "cholesterol_mg": 1,
                "carbohydrates_total_g": 17,
                "fiber_g": 1.5,
                "sugar_g": 1.4
            }
        ]
    },
    {
        "food": "Cau-Cau",
        "ingredients": "Beef tripe stew seasoned with yellow pepper. Served with potatoes and rice.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/Yvlv7Mak5U4oKirIY0Cu_Q/60s.jpg",
        "calorie": 92.9,
        "ingradientsList": [
            {
                "name": "potatoes",
                "calories": 92.9,
                "serving_size_g": 100,
                "fat_total_g": 0.1,
                "fat_saturated_g": 0,
                "protein_g": 2.5,
                "sodium_mg": 10,
                "potassium_mg": 70,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.2,
                "sugar_g": 1.2
            }
        ]
    },
    {
        "food": "Aji de Gallina Limeno",
        "ingredients": "Shredded chicken breast in a Parmesan cheese  pecan and yellow pepper sauce. Served with potatoes  an olive  a slice of a hard-boiled egg and rice.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/cp_E1mDF_wY-qE0cEw46Ig/60s.jpg",
        "calorie": 535.5999999999999,
        "ingradientsList": [
            {
                "name": "potatoes",
                "calories": 92.9,
                "serving_size_g": 100,
                "fat_total_g": 0.1,
                "fat_saturated_g": 0,
                "protein_g": 2.5,
                "sodium_mg": 10,
                "potassium_mg": 70,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.2,
                "sugar_g": 1.2
            },
            {
                "name": "cheese",
                "calories": 393.9,
                "serving_size_g": 100,
                "fat_total_g": 33,
                "fat_saturated_g": 18.9,
                "protein_g": 22.7,
                "sodium_mg": 661,
                "potassium_mg": 459,
                "cholesterol_mg": 100,
                "carbohydrates_total_g": 3.2,
                "fiber_g": 0,
                "sugar_g": 0.5
            },
            {
                "name": "sauce",
                "calories": 48.8,
                "serving_size_g": 100,
                "fat_total_g": 1.6,
                "fat_saturated_g": 0.2,
                "protein_g": 1.4,
                "sodium_mg": 438,
                "potassium_mg": 34,
                "cholesterol_mg": 2,
                "carbohydrates_total_g": 7.5,
                "fiber_g": 1.8,
                "sugar_g": 5
            }
        ]
    },
    {
        "food": "Arroz con Pollo",
        "ingredients": "Chicken and rice plate made in a cilantro and red peppers sauce. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/aXdtc1H0OU5IBmiqP-_oJg/60s.jpg",
        "calorie": 48.8,
        "ingradientsList": [
            {
                "name": "sauce",
                "calories": 48.8,
                "serving_size_g": 100,
                "fat_total_g": 1.6,
                "fat_saturated_g": 0.2,
                "protein_g": 1.4,
                "sodium_mg": 438,
                "potassium_mg": 34,
                "cholesterol_mg": 2,
                "carbohydrates_total_g": 7.5,
                "fiber_g": 1.8,
                "sugar_g": 5
            }
        ]
    },
    {
        "food": "Escabeche de Pollo",
        "ingredients": "Chicken and onions marinated in a vinegar and Peruvian peppers sauce. Served with rice. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/NktecsEKkfljUPfff4hK4Q/60s.jpg",
        "calorie": 48.8,
        "ingradientsList": [
            {
                "name": "sauce",
                "calories": 48.8,
                "serving_size_g": 100,
                "fat_total_g": 1.6,
                "fat_saturated_g": 0.2,
                "protein_g": 1.4,
                "sodium_mg": 438,
                "potassium_mg": 34,
                "cholesterol_mg": 2,
                "carbohydrates_total_g": 7.5,
                "fiber_g": 1.8,
                "sugar_g": 5
            }
        ]
    },
    {
        "food": "Estofado de Pollo",
        "ingredients": "Chicken stew with peas and carrots. Served with potatoes and rice. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/tagoNPmN3NGc9fApC0huQA/60s.jpg",
        "calorie": 92.9,
        "ingradientsList": [
            {
                "name": "potatoes",
                "calories": 92.9,
                "serving_size_g": 100,
                "fat_total_g": 0.1,
                "fat_saturated_g": 0,
                "protein_g": 2.5,
                "sodium_mg": 10,
                "potassium_mg": 70,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.2,
                "sugar_g": 1.2
            }
        ]
    },
    {
        "food": "Adobo Limeno",
        "ingredients": "Citrus-marinated pork and sliced sweet potato in a delicate stew. Served with steamed garlic rice. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/ziXwT5FhXHraGdxIORNq1w/60s.jpg",
        "calorie": 236.2,
        "ingradientsList": [
            {
                "name": "pork",
                "calories": 236.2,
                "serving_size_g": 100,
                "fat_total_g": 14,
                "fat_saturated_g": 4.9,
                "protein_g": 26.2,
                "sodium_mg": 57,
                "potassium_mg": 219,
                "cholesterol_mg": 88,
                "carbohydrates_total_g": 0,
                "fiber_g": 0,
                "sugar_g": 0
            }
        ]
    },
    {
        "food": "Chicharron Criollo",
        "ingredients": "Braised pork with criolle sauce and potatoes. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
        "calorie": 141.7,
        "ingradientsList": [
            {
                "name": "potatoes",
                "calories": 92.9,
                "serving_size_g": 100,
                "fat_total_g": 0.1,
                "fat_saturated_g": 0,
                "protein_g": 2.5,
                "sodium_mg": 10,
                "potassium_mg": 70,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.2,
                "sugar_g": 1.2
            },
            {
                "name": "sauce",
                "calories": 48.8,
                "serving_size_g": 100,
                "fat_total_g": 1.6,
                "fat_saturated_g": 0.2,
                "protein_g": 1.4,
                "sodium_mg": 438,
                "potassium_mg": 34,
                "cholesterol_mg": 2,
                "carbohydrates_total_g": 7.5,
                "fiber_g": 1.8,
                "sugar_g": 5
            }
        ]
    },
    {
        "food": "Carapulcra",
        "ingredients": "Braised pork in a sauce thickened with Andean dried potatoes  panca peppers and peanuts. Serve with steamed garlic rice. Gluten free.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/GEhyYuvweHxbdppP9j9-JA/60s.jpg",
        "calorie": 141.7,
        "ingradientsList": [
            {
                "name": "potatoes",
                "calories": 92.9,
                "serving_size_g": 100,
                "fat_total_g": 0.1,
                "fat_saturated_g": 0,
                "protein_g": 2.5,
                "sodium_mg": 10,
                "potassium_mg": 70,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.2,
                "sugar_g": 1.2
            },
            {
                "name": "sauce",
                "calories": 48.8,
                "serving_size_g": 100,
                "fat_total_g": 1.6,
                "fat_saturated_g": 0.2,
                "protein_g": 1.4,
                "sodium_mg": 438,
                "potassium_mg": 34,
                "cholesterol_mg": 2,
                "carbohydrates_total_g": 7.5,
                "fiber_g": 1.8,
                "sugar_g": 5
            }
        ]
    },
    {
        "food": "Chuletas de Puerco",
        "ingredients": "Pork chops with mashed potatoes  creole salad and steamed garlic rice.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
        "calorie": 205.9,
        "ingradientsList": [
            {
                "name": "potatoes",
                "calories": 92.9,
                "serving_size_g": 100,
                "fat_total_g": 0.1,
                "fat_saturated_g": 0,
                "protein_g": 2.5,
                "sodium_mg": 10,
                "potassium_mg": 70,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.2,
                "sugar_g": 1.2
            },
            {
                "name": "mashed potato",
                "calories": 113,
                "serving_size_g": 100,
                "fat_total_g": 4.2,
                "fat_saturated_g": 0.7,
                "protein_g": 2,
                "sodium_mg": 337,
                "potassium_mg": 47,
                "cholesterol_mg": 1,
                "carbohydrates_total_g": 17,
                "fiber_g": 1.5,
                "sugar_g": 1.4
            }
        ]
    },
    {
        "food": "Suspiro de la Limena",
        "ingredients": "Manjarblanco and merengue pudding.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/0bP-39qtyH4gbHfoTwNaSw/60s.jpg",
        "calorie": 415.2,
        "ingradientsList": [
            {
                "name": "merengue",
                "calories": 282.4,
                "serving_size_g": 100,
                "fat_total_g": 0,
                "fat_saturated_g": 0,
                "protein_g": 3.4,
                "sodium_mg": 53,
                "potassium_mg": 4,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 67.5,
                "fiber_g": 0,
                "sugar_g": 67
            },
            {
                "name": "pudding",
                "calories": 132.8,
                "serving_size_g": 100,
                "fat_total_g": 3.8,
                "fat_saturated_g": 1,
                "protein_g": 1.5,
                "sodium_mg": 144,
                "potassium_mg": 40,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 22.7,
                "fiber_g": 0,
                "sugar_g": 17.1
            }
        ]
    },
    {
        "food": "Picarones",
        "ingredients": "Funnel cakes with homemade honey.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/8TMKNgStDiukT9ba_q_LbA/60s.jpg",
        "calorie": 685.9,
        "ingradientsList": [
            {
                "name": "cakes",
                "calories": 383,
                "serving_size_g": 100,
                "fat_total_g": 18.2,
                "fat_saturated_g": 2.9,
                "protein_g": 3,
                "sodium_mg": 272,
                "potassium_mg": 141,
                "cholesterol_mg": 75,
                "carbohydrates_total_g": 56.3,
                "fiber_g": 0.3,
                "sugar_g": 41.7
            },
            {
                "name": "honey",
                "calories": 302.9,
                "serving_size_g": 100,
                "fat_total_g": 0,
                "fat_saturated_g": 0,
                "protein_g": 0.3,
                "sodium_mg": 3,
                "potassium_mg": 3,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 83,
                "fiber_g": 0.2,
                "sugar_g": 82.6
            }
        ]
    },
    {
        "food": "Crema Volteada",
        "ingredients": "Peruvian-style cream caramel.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/pa5DpAxrdpVeqHFlY87vPQ/60s.jpg",
        "calorie": 563.2,
        "ingradientsList": [
            {
                "name": "cream",
                "calories": 347.4,
                "serving_size_g": 100,
                "fat_total_g": 35.6,
                "fat_saturated_g": 22.9,
                "protein_g": 2.9,
                "sodium_mg": 27,
                "potassium_mg": 57,
                "cholesterol_mg": 111,
                "carbohydrates_total_g": 2.8,
                "fiber_g": 0,
                "sugar_g": 2.9
            },
            {
                "name": "caramel",
                "calories": 215.8,
                "serving_size_g": 100,
                "fat_total_g": 0,
                "fat_saturated_g": 0,
                "protein_g": 1.2,
                "sodium_mg": 340,
                "potassium_mg": 38,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 57.3,
                "fiber_g": 0,
                "sugar_g": 57.3
            }
        ]
    },
    {
        "food": "Alfajores",
        "ingredients": "Homemade cookies with dulce de leche.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/rojpeyy3emoqSvfQ31m3WA/60s.jpg",
        "calorie": 795.5,
        "ingradientsList": [
            {
                "name": "cookies",
                "calories": 489.2,
                "serving_size_g": 100,
                "fat_total_g": 24.6,
                "fat_saturated_g": 8.1,
                "protein_g": 5.1,
                "sodium_mg": 311,
                "potassium_mg": 107,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 65,
                "fiber_g": 2,
                "sugar_g": 32.7
            },
            {
                "name": "dulce de leche",
                "calories": 306.3,
                "serving_size_g": 100,
                "fat_total_g": 7.3,
                "fat_saturated_g": 4.6,
                "protein_g": 6.9,
                "sodium_mg": 128,
                "potassium_mg": 195,
                "cholesterol_mg": 28,
                "carbohydrates_total_g": 55.2,
                "fiber_g": 0,
                "sugar_g": 49.7
            }
        ]
    },
    {
        "food": "Mazamorra Morada",
        "ingredients": "Purple-corn pudding with pineapples and prunes.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
        "calorie": 93.9,
        "ingradientsList": [
            {
                "name": "corn",
                "calories": 93.9,
                "serving_size_g": 100,
                "fat_total_g": 1.5,
                "fat_saturated_g": 0.2,
                "protein_g": 3.4,
                "sodium_mg": 1,
                "potassium_mg": 75,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 21,
                "fiber_g": 2.4,
                "sugar_g": 4.6
            }
        ]
    },
    {
        "food": "Arroz con Leche",
        "ingredients": "Rice pudding with raisins.",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/HcyeHBM8PPrQJTclF8Ijrw/60s.jpg",
        "calorie": 132.8,
        "ingradientsList": [
            {
                "name": "pudding",
                "calories": 132.8,
                "serving_size_g": 100,
                "fat_total_g": 3.8,
                "fat_saturated_g": 1,
                "protein_g": 1.5,
                "sodium_mg": 144,
                "potassium_mg": 40,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 22.7,
                "fiber_g": 0,
                "sugar_g": 17.1
            }
        ]
    },
    {
        "food": "Torta de Chocolate con Maracuya",
        "ingredients": "Chocolate cake with passion fruit",
        "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
        "calorie": 98.1,
        "ingradientsList": [
            {
                "name": "passion fruit",
                "calories": 98.1,
                "serving_size_g": 100,
                "fat_total_g": 0.7,
                "fat_saturated_g": 0.1,
                "protein_g": 2.2,
                "sodium_mg": 27,
                "potassium_mg": 67,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 23.3,
                "fiber_g": 10.4,
                "sugar_g": 11.1
            }
        ]
    }
  ],
  "reviews": [
    {
        "username": "Jack L.",
        "review": "Great food and service! Took my Peruvian friend here and he approved!There's a Happy Lemon boba shop behind this place as well so it's a win win situation!"
    },
    {
        "username": "Felisha S.",
        "review": "Little further north in Austin  but if you're looking for something different this Peruvian spot def was worth a try! They had so many different options in the menu and I look forward to coming back and trying the other options they had.We got a steak empanada & it was delightful! Very light and airy. The dough was a little in the sweeter side but the inside steak evened it out with the savory salty side.Ceviche mixto was worth the $$! Such great flavors and they do not skimp out on the portion!!! Also ordered the Aji de gallina- the flavors were very good! Reminded me of an Indian curry with similar spices. The rice was also so yummy! The chicken was a little in the drier side - looked Kike shredded chicken breast. Potato's we're cooked perfectly. Had a friend get the lomo saltado limeno & said it was good! The meat gave me a Mongolian beef Smokey taste."
    },
    {
        "username": "Bern B.",
        "review": "We arrived right before the rush. Since it was a nice night we sat outside. Clean and spacious.First appetizer - 6.5/10 - taste was pretty good  probably would have been a lot better if it was hot. We didn't expect it to be cold. It gave potato chicken salad flavors. The white sauce on the plate was really tasty. Chicken empanada - a bit disappointed since the empanada was mostly air (see picture). We couldn't really taste chicken flavor however the meat was very seasoned. Arros con pollo - 4.5/10 - rice was decent. The chicken had a lot of skin. The flavor of the chicken was very bland. Peruvian fried rice - 7/10 - played it safe and got fried rice. Didn't get any Peruvian flavor vibes just fried rice. Was a tad greasy. We didn't order any alcoholic drinks  just waters. I wonder if this was the reason the waiters didn't check on us much to see if we needed anything during our meal. There were other tables outside drinking alcoholic beverages that the waiters seems to visit often during their meal. Nonetheless this will be a \"one and done\" for me."
    },
    {
        "username": "Veronica Y.",
        "review": "Very solid Peruvian food  and I'm so glad that they are here in Austin - we definitely don't have enough. That said  not quite five stars yet for me  but will for sure be back and try more things from the menu. Ceviche: loved this! Good portion size  very fresh fish. Will get again.Sweet plantains: nothing to complain about here: again a good portion size. Nice ripe plantains  slight crisp on outside  soft in the middle. Will get again.Arroz con mariscos: The seafood is very good - it was all tender  perfectly cooked and a good amount of it. But I was less enthused about the rice which was a little lacking in flavor and much too wet. This I probably wouldn't get again. Alfajore: very very good. Fairly thin cookie  delicious dulce de lèche filling. Always love these."
    },
    {
        "username": "Susan P.",
        "review": "After a going away party at Easy Tiger  we stopped into Lima Criolla for dinner.  We had a great experience.  Knowledgeable and service-oriented server who suggested several fan favorites.  We settled on splitting Anticuchos (Grill Beef Hearts Kebab) and Arroz Chaufa de Mariscos (seafood on rice).  Both were excellent   Even with two people splitting an appetizer and entree  we had enough leftovers for lunch the following day.  Can't wait to return for Ceviche.  This is a nice change of pace and a great neighborhood spot.  We will be back!  Thank you!"
    },
    {
        "username": "Braezion P.",
        "review": "HorribleNasty had roaches crawling out my drink rat on the floor like eewwwwewwwwwww"
    },
    {
        "username": "Michael C.",
        "review": "Reviewed this location about a year ago. Visit this location about once a month  but something has changed. I'm not talking about the \"post Covid conversions all restaurants have gone though lately (smaller portions/price increases) I'm talking about the flavor. My wife and father in law  both born in Peru  use to love this place  pre Covid. Great quality of meat and the flavor was very authentic. Today  the \"Arroz Chaufa\" was way over seasoned. Too much salt and the chicken was very overcooked. The larger shrimp portions has been reduced to three over cooked shrimp placed right on top. Folks  shrimp is supposed to be tender on the inside  not rubbery. The \"Lome Saltado\"  a signature dish of any good Peruvian restaurant was not the same  but to make matters worse  it was drowning in overcooked green onion stalks. I've never seen this dish prepared this way. I've had this meal many times in Lima Peru  and it's not served this way  with so many green onions.  The green onions overwhelmed the meal. It robbed the flavor from the few tomatoes and red onions you threw in. Then we played pick out the excess green onion from our meals. My wife enjoyed the Jalea  yet she noticed a lot less medium size shrimp and a whole lot of smaller shrimp. Ok  \"Lima Criollo\"  let's get back to basic. Consistency! Consistency! Consistency! Balanced seasoning  a reasonable amount of garnish and please taste your food before serving. You have already increased the prices  so please give us what we're paying for. We have always loved your Peruvian authenticity  but you missing the mark with the new changes. Michael C. - Georgetown"
    },
    {
        "username": "Eric B.",
        "review": "I was really looking forward to this place...the ceviche was really good  but otherwise our other dishes were simply ordinary...good eating  but nothing to rave home about. It's still worth a visit...service could be a tad faster  and I had to order the same drink twice...but just having this king of food available is nice. Inka Chicken  way up North is another Peruvian spot worthy of 5 stars."
    },
    {
        "username": "Johnathan G.",
        "review": "The food was absolutely incredible! I had the Chupe(It was out of this world fantastic) and the Arroz Chaufa de Mariscos! Jazmine was so kind and gave great recommendations. I loved the atmosphere and wonderful service too! I am definitely coming back here with more friends next time. This is by far my favorite place I've eaten at in Austin!"
    },
    {
        "username": "TJ R.",
        "review": "Excelente! Wow  how flavorful! Had the veggie platter and it had all the things.  All kinds of textures  and flavors  and temperatures  even salty and sweet. Great presentation - very impressed.Seating was fast and easy. Little hot and loud in there. Easy parking in a casual area. Outdoor seating available: will be back when its not so hot. Spent about $50 on two meals  app  drink  and tip. Lovely."
    }
  ]
}

Restaurant.create({
  id: restaurantData.id,
  alias: restaurantData.alias,
  name: restaurantData.name,
  image_url: restaurantData.image_url,
  is_closed: restaurantData.is_closed,
  url: restaurantData.url,
  review_count: restaurantData.review_count,
  rating: restaurantData.rating,
  coordinates: restaurantData.coordinates,
  transactions: restaurantData.transactions,
  price: restaurantData.price,
  location: restaurantData.location,
  phone: restaurantData.phone,
  display_phone: restaurantData.display_phone,
  distance: restaurantData.distance,
  averageCalorie: restaurantData.averageCalorie
}).then(restaurant => {
  const categories = restaurantData.categories.map(category => {
    return {
      alias: category.alias,
      title: category.title,
      restaurant_id: restaurant.id
    };
  });

  Category.bulkCreate(categories);

  const menus = restaurantData.menu.map(menuItem => {
    return {
      food: menuItem.food,
      Ingredients: menuItem.ingredients,
      imgSrc: menuItem.imgSrc,
      calorie: menuItem.calorie,
      restaurant_id: restaurant_id
    };
  });

  Menu.bulkCreate(menus).then(createdMenus => {
    createdMenus.forEach((menu, index) => {
      const ingredients = restaurantData.menu[index].ingradientsList.map(ingredient => {
        return {
          ...ingredient,
          menu_id: menu.id
        };
      });

      Ingredient.bulkCreate(ingredients);
    });
  });

  const reviews = restaurantData.reviews.map(review => {
    return {
      username: review.username,
      review: review.review,
      restaurant_id: restaurant.id
    };
  });

  Review.bulkCreate(reviews);
})
.catch(error => console.log('Error inserting data: ', error));