const { sequelize, Restaurant, Category, Menu, Ingredient, Review } = require('./models');

const restaurantDataList = [
    {
        "id": "kpsH-uAoKvYO8PDn1I7xGA",
        "alias": "revelry-on-the-boulevard-austin",
        "name": "Revelry on the Boulevard",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/609y2rYFIVvrXXbPbXb7GA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/revelry-on-the-boulevard-austin?adjust_creative=DCZgw_02OZNeg4oTnfSNUQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DCZgw_02OZNeg4oTnfSNUQ",
        "review_count": 240,
        "categories": [
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            },
            {
                "alias": "sportsbars",
                "title": "Sports Bars"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 30.33072,
            "longitude": -97.723
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "6215 North Lamar Blvd",
            "address2": null,
            "address3": "",
            "city": "Austin",
            "zip_code": "78752",
            "country": "US",
            "state": "TX",
            "display_address": [
                "6215 North Lamar Blvd",
                "Austin, TX 78752"
            ]
        },
        "phone": "+15128615685",
        "display_phone": "(512) 861-5685",
        "distance": 965.5683044266076,
        "menu": [
            {
                "uuid": "a4b6150e-e168-414a-a5bb-d31f6fea2486",
                "food": "Boudin Balls",
                "ingredients": "Dijon Mayo  House-Made Pickles",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/RebDTstTtkdb3IPnpirF0w/60s.jpg",
                "calorie": 748.9,
                "totalFat": 78.69999999999999,
                "totalProtien": 4.9,
                "totalCarbohydrates": 8.6,
                "ingradientsList": [
                    {
                        "name": "dijon",
                        "calories": 58.3,
                        "serving_size_g": 100,
                        "fat_total_g": 3.1,
                        "fat_saturated_g": 0.2,
                        "protein_g": 3.5,
                        "sodium_mg": 2499,
                        "potassium_mg": 104,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 5.6,
                        "fiber_g": 3.9,
                        "sugar_g": 0.9
                    },
                    {
                        "name": "mayo",
                        "calories": 678.7,
                        "serving_size_g": 100,
                        "fat_total_g": 75.3,
                        "fat_saturated_g": 11.8,
                        "protein_g": 0.9,
                        "sodium_mg": 627,
                        "potassium_mg": 20,
                        "cholesterol_mg": 41,
                        "carbohydrates_total_g": 0.6,
                        "fiber_g": 0,
                        "sugar_g": 0.6
                    },
                    {
                        "name": "pickles",
                        "calories": 11.9,
                        "serving_size_g": 100,
                        "fat_total_g": 0.3,
                        "fat_saturated_g": 0.1,
                        "protein_g": 0.5,
                        "sodium_mg": 792,
                        "potassium_mg": 16,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 2.4,
                        "fiber_g": 1,
                        "sugar_g": 1.1
                    }
                ]
            },
            {
                "uuid": "7a6d9fdf-f29d-47c9-9038-7caf581b9260",
                "food": "Brussel Sprouts",
                "ingredients": "Maple Balsamic Glaze  Candied WalnutsChives  Togarashi",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/b0NmlKeNhm9z0VTJVSfdFQ/60s.jpg",
                "calorie": 178.6,
                "totalFat": 0,
                "totalProtien": 0.4,
                "totalCarbohydrates": 41.9,
                "ingradientsList": [
                    {
                        "name": "balsamic glaze",
                        "calories": 178.6,
                        "serving_size_g": 100,
                        "fat_total_g": 0,
                        "fat_saturated_g": 0,
                        "protein_g": 0.4,
                        "sodium_mg": 25,
                        "potassium_mg": 14,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 41.9,
                        "fiber_g": 0,
                        "sugar_g": 39.4
                    }
                ]
            },
            {
                "uuid": "b6833fe1-9f11-4148-a91f-8d37b5888301",
                "food": "Chips & Queso",
                "ingredients": "6oz Green Chile Queso Blanco  Pico de Gallo  House-made Tortilla Chips",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 871.7,
                "totalFat": 46.1,
                "totalProtien": 31.5,
                "totalCarbohydrates": 90.3,
                "ingradientsList": [
                    {
                        "name": "chile",
                        "calories": 66.6,
                        "serving_size_g": 170.09699999999998,
                        "fat_total_g": 0.8,
                        "fat_saturated_g": 0.1,
                        "protein_g": 3.2,
                        "sodium_mg": 15,
                        "potassium_mg": 73,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 15.1,
                        "fiber_g": 2.6,
                        "sugar_g": 8.9
                    },
                    {
                        "name": "queso blanco",
                        "calories": 312.3,
                        "serving_size_g": 100,
                        "fat_total_g": 24.7,
                        "fat_saturated_g": 13.7,
                        "protein_g": 20.2,
                        "sodium_mg": 704,
                        "potassium_mg": 466,
                        "cholesterol_mg": 70,
                        "carbohydrates_total_g": 2.5,
                        "fiber_g": 0,
                        "sugar_g": 1.8
                    },
                    {
                        "name": "pico de gallo",
                        "calories": 23.8,
                        "serving_size_g": 100,
                        "fat_total_g": 0.3,
                        "fat_saturated_g": 0,
                        "protein_g": 1.1,
                        "sodium_mg": 321,
                        "potassium_mg": 28,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 5.4,
                        "fiber_g": 1.5,
                        "sugar_g": 2.7
                    },
                    {
                        "name": "tortilla chips",
                        "calories": 469,
                        "serving_size_g": 100,
                        "fat_total_g": 20.3,
                        "fat_saturated_g": 2.6,
                        "protein_g": 7,
                        "sodium_mg": 325,
                        "potassium_mg": 221,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 67.3,
                        "fiber_g": 5.3,
                        "sugar_g": 0.7
                    }
                ]
            },
            {
                "uuid": "4dc7848d-5fe0-4726-9995-7157a8c3a506",
                "food": "Craw Fries",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "0e19bf86-3baf-4abf-ab2c-42596d725e1b",
                "food": "Crispy Shishito Peppers",
                "ingredients": "Parmesan  Sweet Corn Aioli",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/AxnF8JPDHB4a3GyQe1ofKQ/60s.jpg",
                "calorie": 1193.9,
                "totalFat": 105.1,
                "totalProtien": 34.1,
                "totalCarbohydrates": 37.9,
                "ingradientsList": [
                    {
                        "name": "parmesan",
                        "calories": 419.3,
                        "serving_size_g": 100,
                        "fat_total_g": 27.6,
                        "fat_saturated_g": 15.4,
                        "protein_g": 28.6,
                        "sodium_mg": 1811,
                        "potassium_mg": 635,
                        "cholesterol_mg": 85,
                        "carbohydrates_total_g": 14.1,
                        "fiber_g": 0,
                        "sugar_g": 0
                    },
                    {
                        "name": "sweet corn",
                        "calories": 98.7,
                        "serving_size_g": 100,
                        "fat_total_g": 1.5,
                        "fat_saturated_g": 0.2,
                        "protein_g": 3.4,
                        "sodium_mg": 0,
                        "potassium_mg": 76,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 21.3,
                        "fiber_g": 2.4,
                        "sugar_g": 4.5
                    },
                    {
                        "name": "aioli",
                        "calories": 675.9,
                        "serving_size_g": 100,
                        "fat_total_g": 76,
                        "fat_saturated_g": 11.1,
                        "protein_g": 2.1,
                        "sodium_mg": 304,
                        "potassium_mg": 52,
                        "cholesterol_mg": 123,
                        "carbohydrates_total_g": 2.5,
                        "fiber_g": 0.2,
                        "sugar_g": 0.3
                    }
                ]
            },
            {
                "uuid": "7252beb0-99e0-400d-849b-026baf8398ec",
                "food": "Crispy Wings",
                "ingredients": "Honey-Sriracha Glaze  Cruciferous Slaw Ranch  Sous-Vided in Duck FatSubstitute: Pomegranate Chipotle BBQ or Citrus Pepper$1",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 1466.2,
                "totalFat": 90.30000000000001,
                "totalProtien": 37.1,
                "totalCarbohydrates": 126.80000000000001,
                "ingradientsList": [
                    {
                        "name": "glaze",
                        "calories": 299,
                        "serving_size_g": 100,
                        "fat_total_g": 0.5,
                        "fat_saturated_g": 0.3,
                        "protein_g": 0.9,
                        "sodium_mg": 15,
                        "potassium_mg": 25,
                        "cholesterol_mg": 1,
                        "carbohydrates_total_g": 71.2,
                        "fiber_g": 0,
                        "sugar_g": 69.6
                    },
                    {
                        "name": "slaw",
                        "calories": 155.3,
                        "serving_size_g": 100,
                        "fat_total_g": 11.7,
                        "fat_saturated_g": 1.9,
                        "protein_g": 0.9,
                        "sodium_mg": 221,
                        "potassium_mg": 24,
                        "cholesterol_mg": 8,
                        "carbohydrates_total_g": 12.1,
                        "fiber_g": 1.9,
                        "sugar_g": 9.6
                    },
                    {
                        "name": "ranch",
                        "calories": 430,
                        "serving_size_g": 100,
                        "fat_total_g": 44.2,
                        "fat_saturated_g": 7,
                        "protein_g": 1.3,
                        "sodium_mg": 897,
                        "potassium_mg": 186,
                        "cholesterol_mg": 26,
                        "carbohydrates_total_g": 5.9,
                        "fiber_g": 0,
                        "sugar_g": 4.7
                    },
                    {
                        "name": "duck",
                        "calories": 329.3,
                        "serving_size_g": 100,
                        "fat_total_g": 28.2,
                        "fat_saturated_g": 9.6,
                        "protein_g": 19,
                        "sodium_mg": 59,
                        "potassium_mg": 153,
                        "cholesterol_mg": 85,
                        "carbohydrates_total_g": 0,
                        "fiber_g": 0,
                        "sugar_g": 0
                    },
                    {
                        "name": "pomegranate",
                        "calories": 84.2,
                        "serving_size_g": 100,
                        "fat_total_g": 1.2,
                        "fat_saturated_g": 0.1,
                        "protein_g": 1.7,
                        "sodium_mg": 2,
                        "potassium_mg": 35,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 18.5,
                        "fiber_g": 4.1,
                        "sugar_g": 13.7
                    },
                    {
                        "name": "bbq",
                        "calories": 168.4,
                        "serving_size_g": 100,
                        "fat_total_g": 4.5,
                        "fat_saturated_g": 1.4,
                        "protein_g": 13.3,
                        "sodium_mg": 667,
                        "potassium_mg": 159,
                        "cholesterol_mg": 35,
                        "carbohydrates_total_g": 19.1,
                        "fiber_g": 1.2,
                        "sugar_g": 15.3
                    }
                ]
            },
            {
                "uuid": "366d1af3-d5d1-4ca4-a99e-f24deb40b7f1",
                "food": "Mozzarella Sticks",
                "ingredients": "Fresh Breaded Deep Fried Mozzarella  Served with Ranch and Marinara",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 760,
                "totalFat": 62.2,
                "totalProtien": 15.9,
                "totalCarbohydrates": 30.5,
                "ingradientsList": [
                    {
                        "name": "ranch",
                        "calories": 430,
                        "serving_size_g": 100,
                        "fat_total_g": 44.2,
                        "fat_saturated_g": 7,
                        "protein_g": 1.3,
                        "sodium_mg": 897,
                        "potassium_mg": 186,
                        "cholesterol_mg": 26,
                        "carbohydrates_total_g": 5.9,
                        "fiber_g": 0,
                        "sugar_g": 4.7
                    },
                    {
                        "name": "fried mozzarella",
                        "calories": 330,
                        "serving_size_g": 100,
                        "fat_total_g": 18,
                        "fat_saturated_g": 6.8,
                        "protein_g": 14.6,
                        "sodium_mg": 875,
                        "potassium_mg": 318,
                        "cholesterol_mg": 35,
                        "carbohydrates_total_g": 24.6,
                        "fiber_g": 2,
                        "sugar_g": 2.4
                    }
                ]
            },
            {
                "uuid": "645fe610-6b5b-4e05-af45-5eca1a5d1864",
                "food": "Fried Green Tomatoes",
                "ingredients": "Sweet Lump Crab  Citrus Vinaigrette  Grape TomatoesCreole Remoulade  Herbs",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/lsWcnOju0VXFKO0LOWBUkg/60s.jpg",
                "calorie": 848.5,
                "totalFat": 54.49999999999999,
                "totalProtien": 34.199999999999996,
                "totalCarbohydrates": 73.3,
                "ingradientsList": [
                    {
                        "name": "crab",
                        "calories": 80.9,
                        "serving_size_g": 100,
                        "fat_total_g": 0.7,
                        "fat_saturated_g": 0.2,
                        "protein_g": 17.8,
                        "sodium_mg": 400,
                        "potassium_mg": 234,
                        "cholesterol_mg": 95,
                        "carbohydrates_total_g": 0,
                        "fiber_g": 0,
                        "sugar_g": 0
                    },
                    {
                        "name": "vinaigrette",
                        "calories": 234.3,
                        "serving_size_g": 100,
                        "fat_total_g": 20.7,
                        "fat_saturated_g": 3,
                        "protein_g": 0.4,
                        "sodium_mg": 1007,
                        "potassium_mg": 15,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 11.9,
                        "fiber_g": 0,
                        "sugar_g": 10.8
                    },
                    {
                        "name": "grape",
                        "calories": 67.4,
                        "serving_size_g": 100,
                        "fat_total_g": 0.2,
                        "fat_saturated_g": 0.1,
                        "protein_g": 0.7,
                        "sodium_mg": 1,
                        "potassium_mg": 20,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 18.3,
                        "fiber_g": 0.9,
                        "sugar_g": 15.6
                    },
                    {
                        "name": "remoulade",
                        "calories": 276.6,
                        "serving_size_g": 100,
                        "fat_total_g": 28.7,
                        "fat_saturated_g": 2.1,
                        "protein_g": 1.4,
                        "sodium_mg": 673,
                        "potassium_mg": 36,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 7.5,
                        "fiber_g": 1.5,
                        "sugar_g": 3.2
                    },
                    {
                        "name": "herbs",
                        "calories": 171.3,
                        "serving_size_g": 100,
                        "fat_total_g": 3.9,
                        "fat_saturated_g": 1.1,
                        "protein_g": 13,
                        "sodium_mg": 124,
                        "potassium_mg": 215,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 31.8,
                        "fiber_g": 14.6,
                        "sugar_g": 2.9
                    },
                    {
                        "name": "grape tomatoes",
                        "calories": 18,
                        "serving_size_g": 100,
                        "fat_total_g": 0.3,
                        "fat_saturated_g": 0,
                        "protein_g": 0.9,
                        "sodium_mg": 5,
                        "potassium_mg": 24,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 3.8,
                        "fiber_g": 1.1,
                        "sugar_g": 2.7
                    }
                ]
            },
            {
                "uuid": "3fdab81f-f1b9-4f91-abe3-59e40afdaf90",
                "food": "French Fries",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "e6754112-f662-4c61-9714-b56c45b547e1",
                "food": "Tater Tots",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "91ea7e23-fc80-410a-b8a9-7b398d26ddee",
                "food": "Caesar",
                "ingredients": "Romaine Lettuce  Caesar Dressing  Croutons  Parmesan",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/qC1oSAmb5GhgxCT2axrTlQ/60s.jpg",
                "calorie": 1430.2,
                "totalFat": 104.4,
                "totalProtien": 42.7,
                "totalCarbohydrates": 85.5,
                "ingradientsList": [
                    {
                        "name": "parmesan",
                        "calories": 419.3,
                        "serving_size_g": 100,
                        "fat_total_g": 27.6,
                        "fat_saturated_g": 15.4,
                        "protein_g": 28.6,
                        "sodium_mg": 1811,
                        "potassium_mg": 635,
                        "cholesterol_mg": 85,
                        "carbohydrates_total_g": 14.1,
                        "fiber_g": 0,
                        "sugar_g": 0
                    },
                    {
                        "name": "romaine lettuce",
                        "calories": 16.8,
                        "serving_size_g": 100,
                        "fat_total_g": 0.3,
                        "fat_saturated_g": 0,
                        "protein_g": 1.2,
                        "sodium_mg": 7,
                        "potassium_mg": 30,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 3.3,
                        "fiber_g": 2.1,
                        "sugar_g": 1.2
                    },
                    {
                        "name": "caesar dressing",
                        "calories": 534.6,
                        "serving_size_g": 100,
                        "fat_total_g": 58.2,
                        "fat_saturated_g": 8.7,
                        "protein_g": 2.2,
                        "sodium_mg": 1191,
                        "potassium_mg": 18,
                        "cholesterol_mg": 38,
                        "carbohydrates_total_g": 3.4,
                        "fiber_g": 0.5,
                        "sugar_g": 2.8
                    },
                    {
                        "name": "croutons",
                        "calories": 459.5,
                        "serving_size_g": 100,
                        "fat_total_g": 18.3,
                        "fat_saturated_g": 5.3,
                        "protein_g": 10.7,
                        "sodium_mg": 1089,
                        "potassium_mg": 139,
                        "cholesterol_mg": 6,
                        "carbohydrates_total_g": 64.7,
                        "fiber_g": 4.9,
                        "sugar_g": 4.5
                    }
                ]
            },
            {
                "uuid": "cc2aca01-9680-4ff5-a5f7-7f7095facd8d",
                "food": "Chicken Tortilla Soup",
                "ingredients": "Shredded Chicken  Fire Roasted Tomatoes  Corn  Black Beans  Topped with Sour Cream  Diced Avocado  Fresh Jalapeo  Shredded Cheese  & Tortilla Strips",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 1740.8,
                "totalFat": 105,
                "totalProtien": 71.9,
                "totalCarbohydrates": 138.3,
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
                        "name": "fire roasted tomatoes",
                        "calories": 16.3,
                        "serving_size_g": 100,
                        "fat_total_g": 0.3,
                        "fat_saturated_g": 0,
                        "protein_g": 0.8,
                        "sodium_mg": 115,
                        "potassium_mg": 16,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 3.4,
                        "fiber_g": 1.9,
                        "sugar_g": 2.5
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
                        "name": "black beans",
                        "calories": 132.5,
                        "serving_size_g": 100,
                        "fat_total_g": 0.5,
                        "fat_saturated_g": 0.1,
                        "protein_g": 8.8,
                        "sodium_mg": 1,
                        "potassium_mg": 141,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 23.9,
                        "fiber_g": 8.8,
                        "sugar_g": 0.3
                    },
                    {
                        "name": "sour cream",
                        "calories": 192.5,
                        "serving_size_g": 100,
                        "fat_total_g": 19.6,
                        "fat_saturated_g": 10.1,
                        "protein_g": 2.4,
                        "sodium_mg": 30,
                        "potassium_mg": 76,
                        "cholesterol_mg": 58,
                        "carbohydrates_total_g": 4.7,
                        "fiber_g": 0,
                        "sugar_g": 3.4
                    },
                    {
                        "name": "avocado",
                        "calories": 167.2,
                        "serving_size_g": 100,
                        "fat_total_g": 15.6,
                        "fat_saturated_g": 2.1,
                        "protein_g": 2,
                        "sodium_mg": 7,
                        "potassium_mg": 55,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 8.6,
                        "fiber_g": 6.7,
                        "sugar_g": 0.3
                    },
                    {
                        "name": "jalapeo",
                        "calories": 29.2,
                        "serving_size_g": 100,
                        "fat_total_g": 0.4,
                        "fat_saturated_g": 0.1,
                        "protein_g": 0.9,
                        "sodium_mg": 2,
                        "potassium_mg": 25,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 6.6,
                        "fiber_g": 2.8,
                        "sugar_g": 4.1
                    },
                    {
                        "name": "shredded cheese",
                        "calories": 408.4,
                        "serving_size_g": 100,
                        "fat_total_g": 33.3,
                        "fat_saturated_g": 19,
                        "protein_g": 23,
                        "sodium_mg": 656,
                        "potassium_mg": 454,
                        "cholesterol_mg": 100,
                        "carbohydrates_total_g": 3.1,
                        "fiber_g": 0,
                        "sugar_g": 0.5
                    },
                    {
                        "name": "tortilla strips",
                        "calories": 478.2,
                        "serving_size_g": 100,
                        "fat_total_g": 20.9,
                        "fat_saturated_g": 2.7,
                        "protein_g": 6.9,
                        "sodium_mg": 332,
                        "potassium_mg": 228,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 67,
                        "fiber_g": 5.4,
                        "sugar_g": 0.7
                    }
                ]
            },
            {
                "uuid": "1c549508-fdb4-4fda-b580-42de74884f9d",
                "food": "Fried Chicken Salad",
                "ingredients": "Romaine  Red Onions  Cucumbers  Grape Tomatoes  Shredded Cheese  Croutons  Bacon  Honey Dijon Mustard",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 1086.1,
                "totalFat": 55.8,
                "totalProtien": 42.1,
                "totalCarbohydrates": 112.59999999999998,
                "ingradientsList": [
                    {
                        "name": "dijon",
                        "calories": 58.3,
                        "serving_size_g": 100,
                        "fat_total_g": 3.1,
                        "fat_saturated_g": 0.2,
                        "protein_g": 3.5,
                        "sodium_mg": 2499,
                        "potassium_mg": 104,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 5.6,
                        "fiber_g": 3.9,
                        "sugar_g": 0.9
                    },
                    {
                        "name": "grape",
                        "calories": 67.4,
                        "serving_size_g": 100,
                        "fat_total_g": 0.2,
                        "fat_saturated_g": 0.1,
                        "protein_g": 0.7,
                        "sodium_mg": 1,
                        "potassium_mg": 20,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 18.3,
                        "fiber_g": 0.9,
                        "sugar_g": 15.6
                    },
                    {
                        "name": "croutons",
                        "calories": 459.5,
                        "serving_size_g": 100,
                        "fat_total_g": 18.3,
                        "fat_saturated_g": 5.3,
                        "protein_g": 10.7,
                        "sodium_mg": 1089,
                        "potassium_mg": 139,
                        "cholesterol_mg": 6,
                        "carbohydrates_total_g": 64.7,
                        "fiber_g": 4.9,
                        "sugar_g": 4.5
                    },
                    {
                        "name": "shredded cheese",
                        "calories": 408.4,
                        "serving_size_g": 100,
                        "fat_total_g": 33.3,
                        "fat_saturated_g": 19,
                        "protein_g": 23,
                        "sodium_mg": 656,
                        "potassium_mg": 454,
                        "cholesterol_mg": 100,
                        "carbohydrates_total_g": 3.1,
                        "fiber_g": 0,
                        "sugar_g": 0.5
                    },
                    {
                        "name": "romaine",
                        "calories": 16.5,
                        "serving_size_g": 100,
                        "fat_total_g": 0.3,
                        "fat_saturated_g": 0,
                        "protein_g": 1.2,
                        "sodium_mg": 7,
                        "potassium_mg": 29,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 3.2,
                        "fiber_g": 2.1,
                        "sugar_g": 1.2
                    },
                    {
                        "name": "red onions",
                        "calories": 42.9,
                        "serving_size_g": 100,
                        "fat_total_g": 0.2,
                        "fat_saturated_g": 0,
                        "protein_g": 1.4,
                        "sodium_mg": 2,
                        "potassium_mg": 35,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 10.3,
                        "fiber_g": 1.4,
                        "sugar_g": 4.7
                    },
                    {
                        "name": "cucumbers",
                        "calories": 15.1,
                        "serving_size_g": 100,
                        "fat_total_g": 0.1,
                        "fat_saturated_g": 0,
                        "protein_g": 0.7,
                        "sodium_mg": 1,
                        "potassium_mg": 23,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 3.6,
                        "fiber_g": 0.5,
                        "sugar_g": 1.7
                    },
                    {
                        "name": "grape tomatoes",
                        "calories": 18,
                        "serving_size_g": 100,
                        "fat_total_g": 0.3,
                        "fat_saturated_g": 0,
                        "protein_g": 0.9,
                        "sodium_mg": 5,
                        "potassium_mg": 24,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 3.8,
                        "fiber_g": 1.1,
                        "sugar_g": 2.7
                    }
                ]
            },
            {
                "uuid": "c77468ba-8a46-426e-9c43-f238c8e6f9c5",
                "food": "Baja Tequila Tacos",
                "ingredients": "Choice of Blackened Redfish or Blackened Shrimp  Pico de Gallo  Coleslaw  Sour Cream  Black Beans  Queso Fresco  served with Chips and Tequila Salsa",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 970.3000000000001,
                "totalFat": 64.80000000000001,
                "totalProtien": 53.300000000000004,
                "totalCarbohydrates": 49.6,
                "ingradientsList": [
                    {
                        "name": "pico de gallo",
                        "calories": 23.8,
                        "serving_size_g": 100,
                        "fat_total_g": 0.3,
                        "fat_saturated_g": 0,
                        "protein_g": 1.1,
                        "sodium_mg": 321,
                        "potassium_mg": 28,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 5.4,
                        "fiber_g": 1.5,
                        "sugar_g": 2.7
                    },
                    {
                        "name": "slaw",
                        "calories": 155.3,
                        "serving_size_g": 100,
                        "fat_total_g": 11.7,
                        "fat_saturated_g": 1.9,
                        "protein_g": 0.9,
                        "sodium_mg": 221,
                        "potassium_mg": 24,
                        "cholesterol_mg": 8,
                        "carbohydrates_total_g": 12.1,
                        "fiber_g": 1.9,
                        "sugar_g": 9.6
                    },
                    {
                        "name": "black beans",
                        "calories": 132.5,
                        "serving_size_g": 100,
                        "fat_total_g": 0.5,
                        "fat_saturated_g": 0.1,
                        "protein_g": 8.8,
                        "sodium_mg": 1,
                        "potassium_mg": 141,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 23.9,
                        "fiber_g": 8.8,
                        "sugar_g": 0.3
                    },
                    {
                        "name": "sour cream",
                        "calories": 192.5,
                        "serving_size_g": 100,
                        "fat_total_g": 19.6,
                        "fat_saturated_g": 10.1,
                        "protein_g": 2.4,
                        "sodium_mg": 30,
                        "potassium_mg": 76,
                        "cholesterol_mg": 58,
                        "carbohydrates_total_g": 4.7,
                        "fiber_g": 0,
                        "sugar_g": 3.4
                    },
                    {
                        "name": "redfish",
                        "calories": 126.1,
                        "serving_size_g": 100,
                        "fat_total_g": 1.7,
                        "fat_saturated_g": 0.3,
                        "protein_g": 26.5,
                        "sodium_mg": 56,
                        "potassium_mg": 199,
                        "cholesterol_mg": 46,
                        "carbohydrates_total_g": 0,
                        "fiber_g": 0,
                        "sugar_g": 0
                    },
                    {
                        "name": "blackened shrimp",
                        "calories": 340.1,
                        "serving_size_g": 100,
                        "fat_total_g": 31,
                        "fat_saturated_g": 19.1,
                        "protein_g": 13.6,
                        "sodium_mg": 1538,
                        "potassium_mg": 196,
                        "cholesterol_mg": 200,
                        "carbohydrates_total_g": 3.5,
                        "fiber_g": 1,
                        "sugar_g": 0.3
                    }
                ]
            },
            {
                "uuid": "7b373e31-2c8c-444c-a0b2-1b8679cb1d64",
                "food": "Wagyu Burger",
                "ingredients": "8 oz. Beef Patty  Sharp Cheddar  Lettuce  Tomato  Red Onions  Dijon Mayo  Challah Bun",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 1766,
                "totalFat": 144.3,
                "totalProtien": 87.7,
                "totalCarbohydrates": 25.9,
                "ingradientsList": [
                    {
                        "name": "dijon",
                        "calories": 58.3,
                        "serving_size_g": 100,
                        "fat_total_g": 3.1,
                        "fat_saturated_g": 0.2,
                        "protein_g": 3.5,
                        "sodium_mg": 2499,
                        "potassium_mg": 104,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 5.6,
                        "fiber_g": 3.9,
                        "sugar_g": 0.9
                    },
                    {
                        "name": "mayo",
                        "calories": 678.7,
                        "serving_size_g": 100,
                        "fat_total_g": 75.3,
                        "fat_saturated_g": 11.8,
                        "protein_g": 0.9,
                        "sodium_mg": 627,
                        "potassium_mg": 20,
                        "cholesterol_mg": 41,
                        "carbohydrates_total_g": 0.6,
                        "fiber_g": 0,
                        "sugar_g": 0.6
                    },
                    {
                        "name": "red onions",
                        "calories": 42.9,
                        "serving_size_g": 100,
                        "fat_total_g": 0.2,
                        "fat_saturated_g": 0,
                        "protein_g": 1.4,
                        "sodium_mg": 2,
                        "potassium_mg": 35,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 10.3,
                        "fiber_g": 1.4,
                        "sugar_g": 4.7
                    },
                    {
                        "name": "beef patty",
                        "calories": 534.1,
                        "serving_size_g": 226.796,
                        "fat_total_g": 31.7,
                        "fat_saturated_g": 12.2,
                        "protein_g": 55.4,
                        "sodium_mg": 182,
                        "potassium_mg": 470,
                        "cholesterol_mg": 189,
                        "carbohydrates_total_g": 0,
                        "fiber_g": 0,
                        "sugar_g": 0
                    },
                    {
                        "name": "sharp cheddar",
                        "calories": 416.8,
                        "serving_size_g": 100,
                        "fat_total_g": 33.5,
                        "fat_saturated_g": 19.4,
                        "protein_g": 24.4,
                        "sodium_mg": 631,
                        "potassium_mg": 468,
                        "cholesterol_mg": 100,
                        "carbohydrates_total_g": 2.2,
                        "fiber_g": 0,
                        "sugar_g": 0.3
                    },
                    {
                        "name": "lettuce",
                        "calories": 17,
                        "serving_size_g": 100,
                        "fat_total_g": 0.3,
                        "fat_saturated_g": 0,
                        "protein_g": 1.2,
                        "sodium_mg": 7,
                        "potassium_mg": 30,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 3.3,
                        "fiber_g": 2.1,
                        "sugar_g": 1.2
                    },
                    {
                        "name": "tomato",
                        "calories": 18.2,
                        "serving_size_g": 100,
                        "fat_total_g": 0.2,
                        "fat_saturated_g": 0,
                        "protein_g": 0.9,
                        "sodium_mg": 4,
                        "potassium_mg": 23,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 3.9,
                        "fiber_g": 1.2,
                        "sugar_g": 2.6
                    }
                ]
            },
            {
                "uuid": "62d2b20e-d8fc-4384-a19c-2ffe1e318b55",
                "food": "Cubano",
                "ingredients": "Mojo Roasted Berkshire Pork  Smoked Ham  Swiss  Provolone  Pickled Jalapeos Sourdough Bread",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/TPUkw2FMfK6c14SNlUrWRQ/60s.jpg",
                "calorie": 1428.9,
                "totalFat": 76.60000000000001,
                "totalProtien": 109.70000000000002,
                "totalCarbohydrates": 76.1,
                "ingradientsList": [
                    {
                        "name": "jalapeo",
                        "calories": 29.2,
                        "serving_size_g": 100,
                        "fat_total_g": 0.4,
                        "fat_saturated_g": 0.1,
                        "protein_g": 0.9,
                        "sodium_mg": 2,
                        "potassium_mg": 25,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 6.6,
                        "fiber_g": 2.8,
                        "sugar_g": 4.1
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
                    },
                    {
                        "name": "smoked ham",
                        "calories": 119.2,
                        "serving_size_g": 100,
                        "fat_total_g": 2.4,
                        "fat_saturated_g": 0.9,
                        "protein_g": 18.1,
                        "sodium_mg": 912,
                        "potassium_mg": 376,
                        "cholesterol_mg": 22,
                        "carbohydrates_total_g": 7.3,
                        "fiber_g": 0,
                        "sugar_g": 0
                    },
                    {
                        "name": "swiss",
                        "calories": 383.8,
                        "serving_size_g": 100,
                        "fat_total_g": 30.7,
                        "fat_saturated_g": 18.1,
                        "protein_g": 27.1,
                        "sodium_mg": 183,
                        "potassium_mg": 573,
                        "cholesterol_mg": 91,
                        "carbohydrates_total_g": 1.5,
                        "fiber_g": 0,
                        "sugar_g": 0
                    },
                    {
                        "name": "provolone",
                        "calories": 352.5,
                        "serving_size_g": 100,
                        "fat_total_g": 26.3,
                        "fat_saturated_g": 17.1,
                        "protein_g": 25.7,
                        "sodium_mg": 875,
                        "potassium_mg": 489,
                        "cholesterol_mg": 68,
                        "carbohydrates_total_g": 2.1,
                        "fiber_g": 0,
                        "sugar_g": 0.6
                    },
                    {
                        "name": "jalapeos",
                        "calories": 29.4,
                        "serving_size_g": 100,
                        "fat_total_g": 0.4,
                        "fat_saturated_g": 0.1,
                        "protein_g": 0.9,
                        "sodium_mg": 3,
                        "potassium_mg": 25,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 6.5,
                        "fiber_g": 2.7,
                        "sugar_g": 4.2
                    },
                    {
                        "name": "sourdough bread",
                        "calories": 278.6,
                        "serving_size_g": 100,
                        "fat_total_g": 2.4,
                        "fat_saturated_g": 0.5,
                        "protein_g": 10.8,
                        "sodium_mg": 598,
                        "potassium_mg": 103,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 52.1,
                        "fiber_g": 2.2,
                        "sugar_g": 4.6
                    }
                ]
            },
            {
                "uuid": "0c774db9-e39e-48a2-aec2-1b0c00fa9123",
                "food": "Quesadillas",
                "ingredients": "Choice of Chicken or Steak Fajita  Pico de Gallo  Shredded Cheese  Served with Black Beans  Spanish Rice  Salsa  Sour Cream  and Guacamole",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 979.8,
                "totalFat": 66.6,
                "totalProtien": 59,
                "totalCarbohydrates": 37.1,
                "ingradientsList": [
                    {
                        "name": "pico de gallo",
                        "calories": 23.8,
                        "serving_size_g": 100,
                        "fat_total_g": 0.3,
                        "fat_saturated_g": 0,
                        "protein_g": 1.1,
                        "sodium_mg": 321,
                        "potassium_mg": 28,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 5.4,
                        "fiber_g": 1.5,
                        "sugar_g": 2.7
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
                        "name": "black beans",
                        "calories": 132.5,
                        "serving_size_g": 100,
                        "fat_total_g": 0.5,
                        "fat_saturated_g": 0.1,
                        "protein_g": 8.8,
                        "sodium_mg": 1,
                        "potassium_mg": 141,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 23.9,
                        "fiber_g": 8.8,
                        "sugar_g": 0.3
                    },
                    {
                        "name": "sour cream",
                        "calories": 192.5,
                        "serving_size_g": 100,
                        "fat_total_g": 19.6,
                        "fat_saturated_g": 10.1,
                        "protein_g": 2.4,
                        "sodium_mg": 30,
                        "potassium_mg": 76,
                        "cholesterol_mg": 58,
                        "carbohydrates_total_g": 4.7,
                        "fiber_g": 0,
                        "sugar_g": 3.4
                    },
                    {
                        "name": "shredded cheese",
                        "calories": 408.4,
                        "serving_size_g": 100,
                        "fat_total_g": 33.3,
                        "fat_saturated_g": 19,
                        "protein_g": 23,
                        "sodium_mg": 656,
                        "potassium_mg": 454,
                        "cholesterol_mg": 100,
                        "carbohydrates_total_g": 3.1,
                        "fiber_g": 0,
                        "sugar_g": 0.5
                    }
                ]
            },
            {
                "uuid": "8ed21546-0bc9-49f8-8b58-d54e790116c8",
                "food": "Veggie Burger",
                "ingredients": "6 oz. Beyond Meat Patty  Sharp Cheddar  Lettuce  Tomato  Red Onions  Dijon Mayo  Challah Bun",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/4z5zBWEG05Ra3aA_1_NV_g/60s.jpg",
                "calorie": 1231.9,
                "totalFat": 112.6,
                "totalProtien": 32.3,
                "totalCarbohydrates": 25.9,
                "ingradientsList": [
                    {
                        "name": "dijon",
                        "calories": 58.3,
                        "serving_size_g": 100,
                        "fat_total_g": 3.1,
                        "fat_saturated_g": 0.2,
                        "protein_g": 3.5,
                        "sodium_mg": 2499,
                        "potassium_mg": 104,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 5.6,
                        "fiber_g": 3.9,
                        "sugar_g": 0.9
                    },
                    {
                        "name": "mayo",
                        "calories": 678.7,
                        "serving_size_g": 100,
                        "fat_total_g": 75.3,
                        "fat_saturated_g": 11.8,
                        "protein_g": 0.9,
                        "sodium_mg": 627,
                        "potassium_mg": 20,
                        "cholesterol_mg": 41,
                        "carbohydrates_total_g": 0.6,
                        "fiber_g": 0,
                        "sugar_g": 0.6
                    },
                    {
                        "name": "red onions",
                        "calories": 42.9,
                        "serving_size_g": 100,
                        "fat_total_g": 0.2,
                        "fat_saturated_g": 0,
                        "protein_g": 1.4,
                        "sodium_mg": 2,
                        "potassium_mg": 35,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 10.3,
                        "fiber_g": 1.4,
                        "sugar_g": 4.7
                    },
                    {
                        "name": "sharp cheddar",
                        "calories": 416.8,
                        "serving_size_g": 100,
                        "fat_total_g": 33.5,
                        "fat_saturated_g": 19.4,
                        "protein_g": 24.4,
                        "sodium_mg": 631,
                        "potassium_mg": 468,
                        "cholesterol_mg": 100,
                        "carbohydrates_total_g": 2.2,
                        "fiber_g": 0,
                        "sugar_g": 0.3
                    },
                    {
                        "name": "lettuce",
                        "calories": 17,
                        "serving_size_g": 100,
                        "fat_total_g": 0.3,
                        "fat_saturated_g": 0,
                        "protein_g": 1.2,
                        "sodium_mg": 7,
                        "potassium_mg": 30,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 3.3,
                        "fiber_g": 2.1,
                        "sugar_g": 1.2
                    },
                    {
                        "name": "tomato",
                        "calories": 18.2,
                        "serving_size_g": 100,
                        "fat_total_g": 0.2,
                        "fat_saturated_g": 0,
                        "protein_g": 0.9,
                        "sodium_mg": 4,
                        "potassium_mg": 23,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 3.9,
                        "fiber_g": 1.2,
                        "sugar_g": 2.6
                    }
                ]
            },
            {
                "uuid": "b5035841-753c-449f-aeff-2ded1f73c705",
                "food": "Kid Grilled Cheese",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "09515920-1a91-4751-9539-dcb1e3419951",
                "food": "Kid Sliders",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "c2cbc65d-c8d4-4cb2-b3e7-3058a6b31ffd",
                "food": "Sizzling Fajitas",
                "ingredients": "Steak  Chicken  or Combination  Served with Flour Tortillas  Spanish Rice  Black Beans  Sour Cream  Shredded Cheese Guacamole  Salsa Verde & Salsa Roja  Sauted Onions & Bell Peppers",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 956,
                "totalFat": 66.3,
                "totalProtien": 57.9,
                "totalCarbohydrates": 31.7,
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
                        "name": "black beans",
                        "calories": 132.5,
                        "serving_size_g": 100,
                        "fat_total_g": 0.5,
                        "fat_saturated_g": 0.1,
                        "protein_g": 8.8,
                        "sodium_mg": 1,
                        "potassium_mg": 141,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 23.9,
                        "fiber_g": 8.8,
                        "sugar_g": 0.3
                    },
                    {
                        "name": "sour cream",
                        "calories": 192.5,
                        "serving_size_g": 100,
                        "fat_total_g": 19.6,
                        "fat_saturated_g": 10.1,
                        "protein_g": 2.4,
                        "sodium_mg": 30,
                        "potassium_mg": 76,
                        "cholesterol_mg": 58,
                        "carbohydrates_total_g": 4.7,
                        "fiber_g": 0,
                        "sugar_g": 3.4
                    },
                    {
                        "name": "shredded cheese",
                        "calories": 408.4,
                        "serving_size_g": 100,
                        "fat_total_g": 33.3,
                        "fat_saturated_g": 19,
                        "protein_g": 23,
                        "sodium_mg": 656,
                        "potassium_mg": 454,
                        "cholesterol_mg": 100,
                        "carbohydrates_total_g": 3.1,
                        "fiber_g": 0,
                        "sugar_g": 0.5
                    }
                ]
            },
            {
                "uuid": "21e9892f-7760-481c-b00f-8b9f10975fac",
                "food": "Fish N' Chips",
                "ingredients": "Dos XX Tempura Battered Redfish  Cajun Fries  Jalapeo Tarter Sauce",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 263.5,
                "totalFat": 6,
                "totalProtien": 33.9,
                "totalCarbohydrates": 17.9,
                "ingradientsList": [
                    {
                        "name": "jalapeo",
                        "calories": 29.2,
                        "serving_size_g": 100,
                        "fat_total_g": 0.4,
                        "fat_saturated_g": 0.1,
                        "protein_g": 0.9,
                        "sodium_mg": 2,
                        "potassium_mg": 25,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 6.6,
                        "fiber_g": 2.8,
                        "sugar_g": 4.1
                    },
                    {
                        "name": "redfish",
                        "calories": 126.1,
                        "serving_size_g": 100,
                        "fat_total_g": 1.7,
                        "fat_saturated_g": 0.3,
                        "protein_g": 26.5,
                        "sodium_mg": 56,
                        "potassium_mg": 199,
                        "cholesterol_mg": 46,
                        "carbohydrates_total_g": 0,
                        "fiber_g": 0,
                        "sugar_g": 0
                    },
                    {
                        "name": "tempura",
                        "calories": 108.2,
                        "serving_size_g": 100,
                        "fat_total_g": 3.9,
                        "fat_saturated_g": 0.5,
                        "protein_g": 6.5,
                        "sodium_mg": 274,
                        "potassium_mg": 94,
                        "cholesterol_mg": 51,
                        "carbohydrates_total_g": 11.3,
                        "fiber_g": 1.2,
                        "sugar_g": 1.4
                    }
                ]
            },
            {
                "uuid": "2e16594e-9236-46b8-9a84-3ed3301d7ab8",
                "food": "Fried Chicken",
                "ingredients": "2 Boneless Chicken Breasts  House Batter  Roasted Garlic Mashed Potatoes  Green Beans  Savory Gravy",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/dmhvsvcHn-iMtbQZcted5g/60s.jpg",
                "calorie": 222.6,
                "totalFat": 12.9,
                "totalProtien": 23.7,
                "totalCarbohydrates": 0,
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
                    }
                ]
            },
            {
                "uuid": "07f00c9a-3d43-4856-892d-7dd4bc745648",
                "food": "Jambalaya Pasta",
                "ingredients": "Crawfish  Andouille Sausage  touffe  Fettuccini  Cream Sauce  Topped with Jumbo Grilled Shrimp",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/9ZqFSsaUn3BT8V9hrP43dg/60s.jpg",
                "calorie": 795.5999999999999,
                "totalFat": 42.4,
                "totalProtien": 59.199999999999996,
                "totalCarbohydrates": 40.699999999999996,
                "ingradientsList": [
                    {
                        "name": "crawfish",
                        "calories": 78.7,
                        "serving_size_g": 100,
                        "fat_total_g": 1,
                        "fat_saturated_g": 0.2,
                        "protein_g": 15.9,
                        "sodium_mg": 56,
                        "potassium_mg": 260,
                        "cholesterol_mg": 111,
                        "carbohydrates_total_g": 0,
                        "fiber_g": 0,
                        "sugar_g": 0
                    },
                    {
                        "name": "andouille sausage",
                        "calories": 306.2,
                        "serving_size_g": 100,
                        "fat_total_g": 28.3,
                        "fat_saturated_g": 9.3,
                        "protein_g": 12.1,
                        "sodium_mg": 833,
                        "potassium_mg": 157,
                        "cholesterol_mg": 60,
                        "carbohydrates_total_g": 0.9,
                        "fiber_g": 0,
                        "sugar_g": 0.9
                    },
                    {
                        "name": "fettuccini",
                        "calories": 149.5,
                        "serving_size_g": 100,
                        "fat_total_g": 0.6,
                        "fat_saturated_g": 0.1,
                        "protein_g": 5.3,
                        "sodium_mg": 4,
                        "potassium_mg": 75,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 29.9,
                        "fiber_g": 1.3,
                        "sugar_g": 1.1
                    },
                    {
                        "name": "cream sauce",
                        "calories": 142.2,
                        "serving_size_g": 100,
                        "fat_total_g": 10.7,
                        "fat_saturated_g": 6.6,
                        "protein_g": 3.3,
                        "sodium_mg": 98,
                        "potassium_mg": 78,
                        "cholesterol_mg": 30,
                        "carbohydrates_total_g": 8.3,
                        "fiber_g": 0.1,
                        "sugar_g": 4.3
                    },
                    {
                        "name": "shrimp",
                        "calories": 119,
                        "serving_size_g": 100,
                        "fat_total_g": 1.8,
                        "fat_saturated_g": 0.6,
                        "protein_g": 22.6,
                        "sodium_mg": 944,
                        "potassium_mg": 300,
                        "cholesterol_mg": 212,
                        "carbohydrates_total_g": 1.6,
                        "fiber_g": 0,
                        "sugar_g": 0
                    }
                ]
            },
            {
                "uuid": "ab7e4aaf-4fe7-456e-ad65-3a38c1ea118b",
                "food": "Shrimp & Grits",
                "ingredients": "Jumbo Shrimp  Sausage  Brandy  Smoked Sofrito  Sauted Kale  Cheddar Grits",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/3l7Rd6oFBMQi-aiXHmxqqg/60s.jpg",
                "calorie": 1534.8,
                "totalFat": 83,
                "totalProtien": 102.2,
                "totalCarbohydrates": 32.6,
                "ingradientsList": [
                    {
                        "name": "shrimp",
                        "calories": 119,
                        "serving_size_g": 100,
                        "fat_total_g": 1.8,
                        "fat_saturated_g": 0.6,
                        "protein_g": 22.6,
                        "sodium_mg": 944,
                        "potassium_mg": 300,
                        "cholesterol_mg": 212,
                        "carbohydrates_total_g": 1.6,
                        "fiber_g": 0,
                        "sugar_g": 0
                    },
                    {
                        "name": "jumbo shrimp",
                        "calories": 120.9,
                        "serving_size_g": 100,
                        "fat_total_g": 1.7,
                        "fat_saturated_g": 0.5,
                        "protein_g": 22.6,
                        "sodium_mg": 928,
                        "potassium_mg": 310,
                        "cholesterol_mg": 210,
                        "carbohydrates_total_g": 1.5,
                        "fiber_g": 0,
                        "sugar_g": 0
                    },
                    {
                        "name": "sausage",
                        "calories": 321.9,
                        "serving_size_g": 100,
                        "fat_total_g": 26.9,
                        "fat_saturated_g": 8.8,
                        "protein_g": 18.4,
                        "sodium_mg": 815,
                        "potassium_mg": 146,
                        "cholesterol_mg": 87,
                        "carbohydrates_total_g": 1.4,
                        "fiber_g": 0,
                        "sugar_g": 1.1
                    },
                    {
                        "name": "brandy",
                        "calories": 228.5,
                        "serving_size_g": 100,
                        "fat_total_g": 0,
                        "fat_saturated_g": 0,
                        "protein_g": 0,
                        "sodium_mg": 1,
                        "potassium_mg": 3,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 0,
                        "fiber_g": 0,
                        "sugar_g": 0
                    },
                    {
                        "name": "sofrito",
                        "calories": 236.9,
                        "serving_size_g": 100,
                        "fat_total_g": 17.9,
                        "fat_saturated_g": 0,
                        "protein_g": 12.7,
                        "sodium_mg": 1145,
                        "potassium_mg": 137,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 5.6,
                        "fiber_g": 1.7,
                        "sugar_g": 0
                    },
                    {
                        "name": "kale",
                        "calories": 27.2,
                        "serving_size_g": 100,
                        "fat_total_g": 0.4,
                        "fat_saturated_g": 0.1,
                        "protein_g": 1.9,
                        "sodium_mg": 23,
                        "potassium_mg": 28,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 5.6,
                        "fiber_g": 2,
                        "sugar_g": 1.3
                    },
                    {
                        "name": "cheddar",
                        "calories": 415.6,
                        "serving_size_g": 100,
                        "fat_total_g": 33.9,
                        "fat_saturated_g": 18.8,
                        "protein_g": 22.8,
                        "sodium_mg": 640,
                        "potassium_mg": 455,
                        "cholesterol_mg": 97,
                        "carbohydrates_total_g": 3.1,
                        "fiber_g": 0,
                        "sugar_g": 0.5
                    },
                    {
                        "name": "grits",
                        "calories": 64.8,
                        "serving_size_g": 100,
                        "fat_total_g": 0.4,
                        "fat_saturated_g": 0.1,
                        "protein_g": 1.2,
                        "sodium_mg": 2,
                        "potassium_mg": 14,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 13.8,
                        "fiber_g": 0.7,
                        "sugar_g": 0.1
                    }
                ]
            },
            {
                "uuid": "f7006952-5c64-4c1a-b9a4-1886275eb1e6",
                "food": "Bacon",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "c22244bc-4db8-4b91-b328-bb37c65b0851",
                "food": "Beef Patty",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "995aad51-1fc6-4501-91f0-c1804184696f",
                "food": "Cup of Etouffee",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "8858f921-55ab-41e3-bc61-e73235bda296",
                "food": "Fried Chicken SIDE",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "3a1fef29-1d53-4feb-a549-ffef85f1ffae",
                "food": "Green Beans",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/mZ7Pa8KuchQHlHfql7t7fg/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "e712d6fb-4d99-4bb2-8882-79af227e3fc6",
                "food": "Grilled Chicken Breast",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "5e3025b6-ae14-403d-aaa8-d47134d42869",
                "food": "Grits",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/alfnagu57YjfNZvpsRn3Yw/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "0f1cfce9-f316-4346-9c45-9e0b9975fa78",
                "food": "Grits Small",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "0d9db92e-eb49-4b59-a716-a87acc111151",
                "food": "Mashed Potatoes",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/mZ7Pa8KuchQHlHfql7t7fg/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "a19f0a15-c130-4f70-935f-2cb5ceb6a771",
                "food": "Mash Small",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "623f0f7f-a98a-42f3-903a-693aa1172a08",
                "food": "Redfish",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/mUupZxASVq8aD2qLg2tytw/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "9ab39b1f-3dbd-4992-90f2-02d49fddbbae",
                "food": "Shrimp",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/alfnagu57YjfNZvpsRn3Yw/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "a918b78f-b143-4f81-847e-a92a03d8f216",
                "food": "Side of Queso",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "82bcf143-cba4-40a3-87b5-c35bbb7d1c15",
                "food": "Single Egg",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "c4dc8388-f433-46f0-8213-de6496e57285",
                "food": "Veggie Patty",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "b245b4dd-5dc4-466e-b9a9-8c2d0fbe72c1",
                "food": "Cheesecake",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/mP79RgLTHjCIhZ8ETYO58w/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "a68de2ea-aeba-4ee4-84e5-f2f3b9dd908a",
                "food": "Pecan Pie",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "66c5b9fe-0b70-4071-a8c9-d4d5e35b5770",
                "food": "Creole Mustard",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "b01ac3ca-36f4-4593-81a4-9ae80c042be9",
                "food": "Dijon Mayo",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "8c1cfde0-8b8f-4c3b-aa9d-ee7f4bc93911",
                "food": "Honey Sriracha Glaze",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/Iwv1uzw3XovnsGYA-OaOiQ/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "f49ab93e-c8f8-4366-b740-ec7ac9fff9ca",
                "food": "Jalapeno Ranch",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "8b40a6df-7ee3-49aa-96ac-8a49767ca441",
                "food": "Ranch",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/9tgIvjv_S0_m92M223HMPw/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "d26e3357-9413-4d3e-96be-06df7fb15dc7",
                "food": "Remoulade",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/qPk9uOjZt2yEX-rdXBcykQ/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "b565f133-4a33-4855-9e78-ad2e4e8447e1",
                "food": "Sriracha Mayo",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "8993e6ea-b690-4f3c-bdbb-86db56d3e9dd",
                "food": "Sweet Corn Aioli",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/KvDP0gLeeOwTsl9EOd_TBw/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "5ec911e3-2d79-458d-a678-67e60f33d1a8",
                "food": "Berries & Bubbles",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "002bd144-ef25-4564-a46a-06072d4b59c9",
                "food": "Blueberry Mule",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/MBo_qWtmOBS9qd4AZQt8Xg/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "7d96e936-67e3-4104-b39b-9f17098eea20",
                "food": "Botanical Smashed",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "b8fd3014-dba6-4125-b137-4c68a89486f7",
                "food": "Champagne & Chambord",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "9cbb7ba8-258b-4932-bad0-c6b1fdc30238",
                "food": "Cold Brew Martini",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "fd2f2986-e448-4789-9731-e5b73c39c945",
                "food": "Don Cafe",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "b4fa38c8-bae8-49d5-8f5c-d430282bc907",
                "food": "Frozen Lemonade",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "d52d47ea-ba87-4374-8736-f7c2b4f50bb3",
                "food": "Frozen Marg",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "c5e48911-319f-48be-98d3-f32b7ef455cc",
                "food": "Ginger Yuzu Marg",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "495bd246-2cbd-4abd-98da-5f7d2f044668",
                "food": "Jameson Martini",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "5561fd35-96b9-4227-a61e-337910844d0e",
                "food": "M DUCK",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/UpScWmRsaYAtI3Qrua6Ulg/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "92a0c590-ef08-42e9-9f97-d464b36fbd8e",
                "food": "Mezcal Paloma",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/NTY7A_PNDg7wp9OgBTa5ag/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "84b6f86a-61f2-418a-bf33-d8d949bc4617",
                "food": "Old Fashioned",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/ikxxsAVmJgt3OynVzWaGuw/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "d39c204f-493e-460e-b0ab-cc46d7fe12c7",
                "food": "Pineapple Paloma",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "6819ed24-ca13-41d2-bf1e-0f4c6de49372",
                "food": "Ranch Water",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "f12edeb7-50ce-4117-a833-67bb0f9e76d8",
                "food": "RIDE OR DIE",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/R-O3ZAhYmuX98AB1xtkCGw/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "5445311b-b77c-4fcf-93be-eec8e41af8e7",
                "food": "Smoked Old Fashioned",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "9177ebb1-5a55-4c92-974a-e562ff2b7015",
                "food": "St. Germain Spritz",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "92855fc0-10c3-4de5-8873-f180c25da2fc",
                "food": "The Oaxacan",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "4f5e31c5-f729-4ada-b81d-075bf27c25e3",
                "food": "House Marg",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "e9b62985-2c7a-4516-8a43-fe752602287d",
                "food": "Chocolate Martini",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "7317f799-9b2e-4d72-b8ff-427c19be9dc6",
                "food": "Hibiscus Marg",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "ea34af72-228d-4858-bdc5-7f48ee38e478",
                "food": "Blvd Mule",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "ced6489f-e7f1-4376-8895-a6eae411ab6d",
                "food": "Daquiri",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "e18e09c6-47cb-435a-8480-e0b7f51a2e81",
                "food": "French 75",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "172ec5a6-bf75-4ee7-8e1c-d18860074472",
                "food": "Highball",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "393c09e7-7bf1-495e-b222-ab5e0900a7ec",
                "food": "Paloma",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/jDpVNEoeYSP0M33WOwE-kw/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "0e472c59-9149-4cbd-b0a0-1c4d56952779",
                "food": "Bud Light Bottle",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "7f44678d-e332-42db-915d-d883594008dc",
                "food": "Celis Peche",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "d69e14de-bc1b-4f7f-9ac5-68dee3978b8a",
                "food": "Celis White",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "40714b24-6303-4e80-83f1-66acbfc01139",
                "food": "Coors Light Bottle",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "8b16063c-2cc1-417a-9eaf-12605a21eefe",
                "food": "Lone Star",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "43f6a065-dcdb-417c-8e9c-03e2e5088787",
                "food": "Mich Ultra",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "39f0f9e8-081a-4fa8-af6b-7fbc5c197b93",
                "food": "Miller Lite Bottle",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "924a8441-7e64-4e65-870a-cee84c383fcc",
                "food": "Modelo Especial",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "5f0c3756-4c17-4462-a15a-938176ba8424",
                "food": "O'Douls NA",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "fa6a0d44-0980-436d-b9c8-495caccef8a4",
                "food": "WHITE CLAW BLACK CHERRY",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "5648a198-3caa-47fa-a525-cba4c20b6f1c",
                "food": "Bottled Water",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "17b69fda-48c8-4152-82b5-1609a2bb09bf",
                "food": "Coke",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "4cddef9a-66bd-410b-b8a4-2c16f69e80cb",
                "food": "Cold Brew",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/tzyaI7u5fgUe03IWTUxDYQ/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "a857a5ab-8da8-4bb9-8baa-de8a20720ab6",
                "food": "Diet Coke",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "1bb7bc91-efce-4595-8499-46b3d5df08a4",
                "food": "Lemonade",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "01cf831a-edfe-4d13-8177-ab7ef66a1c78",
                "food": "Red Bull",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "8191120f-d161-4eca-9b8d-8d60e263cb47",
                "food": "Sprite",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "d111a4eb-ffd7-48a2-bd18-569f59b03be6",
                "food": "Topo Chico",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "e08b0c5e-8a60-46b0-ba1f-4cd7e90c9db2",
                "food": "Mexican Coke",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "c65f2fdd-63d2-498c-98c2-bd0e9e94bc37",
                "food": "Gatorade",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            }
        ],
        "reviews": [
            {
                "username": "Devianna C.",
                "review": "Came in at 2pm on football Sunday. Was a little disappointed they didn't have the game on. Had to ask two different staff to help putting the game on outside. We were very pleased when they did. I can see why this place has good reviews  the service is on point. We had three different people in the beginning asking if we've ordered? If we have been helped or serviced. They brought us water right away. They come out often to ask if we need anything. Their energy is good and they look like a happy staff which is great. I used the check in offer on Yelp to get free queso and chips. Definitely recommend them and also the Buffalo wings. The flavoring for the Buffalo was perfect and the wings weren't fatty at all which was nice. They were good size wings  I wasn't even finished with them when they brought out my meal. I ordered the ahi tuna seared salad. It's a must try. I gotta say for as casual and chill as this restaurant is  their selection meals are pretty great. It's more than just your average little restaurant. The inside isn't anything special which is why I'm so impressed with their menu. The place looks so chill and the food is above average. The restaurant has outdoor seating in the front and the back. There's two large tvs in both areas  no volume. The parking is in the back  decent amount of spots but when we arrived there was no parking so we had to wait a bit. There's an empty store across the street where you can park at. Overall if I could come back I would. This place and it's staff need to come to LA."
            },
            {
                "username": "Mary L.",
                "review": "Nice brunch place  with indoor and outdoor seating and plenty of parking. The brunch menu was tempting  but I grab any possible chance to try a Scotch Egg  and their version come with Crawfish Etoufee. It was a nice-sized portion  and very tasty.My friend is a Shrimp and Grits girl and declared that hers were right up there with the best. Her cold brew martini was also excellent (apparently the secret is a bit of nutmeg...shhh...don't tell!). She had three of them (don't worry  I was driving).The last Bloody Mary Bar I saw was overwhelming  practically a buffet  so I was a bit underwhelmed when I saw Revelry's setup. But I was wrong. All one really needs on a Bloody Mary bar was available on this one: olives  lemon  hot sauces  chunks of cheese  celery sticks  and most importantly...BACON.Do I need to say my Bloody Mary was bloody good?With generous portions and Chips & Queso (free with a Yelp check in)  both of us boxed up leftovers for later.On this Father's Day  it was mellow when we arrived just after noon. By the time we left at 1:30  the place was packed. Our server was a little scattered  but that was mostly due to a huge family group at the next table.All the plates the servers carried past our table looked disgustingly delicious. We'll be back for more."
            },
            {
                "username": "Lauren S.",
                "review": "I was very impressed with the service at Revelry as all our food came out very quickly. Would have appreciated selections from Louisiana (eg Abita beer) on the drink menu.I really enjoyed my gumbo and appreciate how much of the meat I got rather than just broth or rice. That said  the food was a bit expensive for what it was  and it was funny to see a $24 version of a jambalaya pasta on the menu. After coming up in the Louisiana public school system  I always assumed \"pastalaya\" was served to make use of leftover materials.  I'll have to come back to Revelry to see if the premium ingredients in their version elevate the dish enough to justhe cost."
            },
            {
                "username": "Nanisi W.",
                "review": "Not great; the pictures on yelp are pretty deceiving. We went here on a Friday night and there were only 3 other people there. Save your money on the alcohol  the drinks are priced high and not good. We got several forgettable dishes but the best thing we had there was the crispy brussels. I think there are way better spots in the area."
            },
            {
                "username": "Manda M.",
                "review": "This place is great... So huge and completely empty on a hot Saturday afternoon. Seems like more ppl should know about it! Lots of outdoor seating with mister fans everywhere. Yummy food in large portions... Fabulous drinks... Fantastic service! Go here!!"
            },
            {
                "username": "Christy V C.",
                "review": "Came here for dinner the other night for a casual birthday dinner and we had a nice time! We got the Boudin Balls and free Chips and Queso to start. The boudin balls were great  but definitely needed the sauce  otherwise  they were a little in the dry side. Queso is always good  but I especially liked their chips. I ordered the Pecan Crusted Redfish for dinner and it was a lot bigger than I expected! Also  very delicious  especially the sauce! I don't think I've had redfish before  but I thoroughly enjoyed it. Pros: Good food  plenty of parking  friendly servers.Cons: Freezing cold in there"
            },
            {
                "username": "Natalia R.",
                "review": "Parking - in front and backAmbiance - fun  good upbeat music selectionService - friendly and presentFood - large portions! Flavorful. I wish there were more fun vegetarian or vegan options.Drinks - fun as well and fresh Bathrooms - clean and maintainedThis was a good stop for brunch and good for large groups.- got the brussel sprouts and I would order them again. The walnuts in it were a good touch for added flavor and texture- partner got the tacos; they were large tortillas and the fish was a bit \"fishy\" but he didn't mind- queso provided by Yelp was flavorful  buttery with a small spice kick"
            },
            {
                "username": "Jeff B.",
                "review": "A nice bar in North Austin with decent food! The staff is friendly and ready to serve. They have a nice bar selection of beers to include IPAs and many different cocktails. The prices are average. My medium cooked burger was a good sized burger and had an excellent flavor. As you can see from my attached picture. It comes with fries ot tots. The tots was quite a lot. I'm happy to say I left with a full belly and completely satisfied.There is plenty of parking in the rear and even a couple spots up front. There is both indoors and outdoors seating as well as a long bar. The next time you are in the neighborhood  stop by and give the Revelry a try."
            },
            {
                "username": "Gabi D.",
                "review": "I came here with my S.O. on Saturday and all I can say is  I was adequately whelmed. The first thing you notice when you walk in is the (quite loud) bar music which consisted of early 2010's mashups which made me feel not-so-hungry all of a sudden. I mean  I get it. It's a bar  but the music was fairly distracting seeing as there weren't too many people there and it was midday. Anyways  the food - being pescatarian I opted in for the tuna tataki salad and my partner got the pecan crusted redfish (not pictured). The tuna tataki was actually very good - it had no tendons or tough parts. It was thick-cut and actually very tasty. The salad that accompanied it was slightly overdressed which made it a tad bit soggy  but overall  a very good meal. My partners redfish was also very good  no complaints. My only real qualm with this place is that the food is slightly overpriced for what you receive. For the salad  redfish and a blueberry mule (which was meh)  the total came out to $80. In summary  I probably wouldn't go here again  but it was a nice enough experience!"
            },
            {
                "username": "Gina L.",
                "review": "Meh just ok. Service was great and environment was family friendly. They were able to accommodate our family of 4 adults and 3 kids. We don't drink so we did not try anything from the bar  but their drink menu was very extensive! The menu offered a good variety of dishes  but all of our dishes were lacking flavor. It needed an extra little \"oomph.\""
            }
        ],
        "averageCalorie": 211.07525773195871,
        "averageTotalFat": 14.202061855670102,
        "averageTotalProtien": 9.62577319587629,
        "averageTotalCarbohydrates": 11.167010309278352
    },
    {
        "id": "dxtcChjSodta7nx4_4QNZg",
        "alias": "paprika-atx-austin",
        "name": "Paprika ATX",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/rT33cPiiItE_DCqAuuseBw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/paprika-atx-austin?adjust_creative=DCZgw_02OZNeg4oTnfSNUQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DCZgw_02OZNeg4oTnfSNUQ",
        "review_count": 90,
        "categories": [
            {
                "alias": "tacos",
                "title": "Tacos"
            },
            {
                "alias": "foodtrucks",
                "title": "Food Trucks"
            }
        ],
        "rating": 5,
        "coordinates": {
            "latitude": 30.333323,
            "longitude": -97.721302
        },
        "transactions": [
            "delivery"
        ],
        "price": "$",
        "location": {
            "address1": "6519 N Lamar Blvd",
            "address2": null,
            "address3": "",
            "city": "Austin",
            "zip_code": "78752",
            "country": "US",
            "state": "TX",
            "display_address": [
                "6519 N Lamar Blvd",
                "Austin, TX 78752"
            ]
        },
        "phone": "+15127165873",
        "display_phone": "(512) 716-5873",
        "distance": 809.1903520151724,
        "menu": [
            {
                "uuid": "4604446b-1b7b-4bc0-83c3-9a05b9e064dd",
                "food": "Fresas Con Crema",
                "ingredients": "Strawberries and cream.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 174.5,
                "totalFat": 13.9,
                "totalProtien": 1.8,
                "totalCarbohydrates": 11.2,
                "ingradientsList": [
                    {
                        "name": "strawberries and cream",
                        "calories": 174.5,
                        "serving_size_g": 100,
                        "fat_total_g": 13.9,
                        "fat_saturated_g": 8.7,
                        "protein_g": 1.8,
                        "sodium_mg": 65,
                        "potassium_mg": 57,
                        "cholesterol_mg": 46,
                        "carbohydrates_total_g": 11.2,
                        "fiber_g": 1.2,
                        "sugar_g": 9.1
                    }
                ]
            },
            {
                "uuid": "69a3ae5f-9ec1-4142-9467-b978359cdc5d",
                "food": "Pepino Limon",
                "ingredients": "Cucumber  lime and mint.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 450.1,
                "totalFat": 0.30000000000000004,
                "totalProtien": 1.2999999999999998,
                "totalCarbohydrates": 112.89999999999999,
                "ingradientsList": [
                    {
                        "name": "cucumber",
                        "calories": 15.3,
                        "serving_size_g": 100,
                        "fat_total_g": 0.1,
                        "fat_saturated_g": 0,
                        "protein_g": 0.6,
                        "sodium_mg": 1,
                        "potassium_mg": 24,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 3.7,
                        "fiber_g": 0.5,
                        "sugar_g": 1.7
                    },
                    {
                        "name": "lime",
                        "calories": 29.6,
                        "serving_size_g": 100,
                        "fat_total_g": 0.2,
                        "fat_saturated_g": 0,
                        "protein_g": 0.7,
                        "sodium_mg": 2,
                        "potassium_mg": 17,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 10.6,
                        "fiber_g": 2.9,
                        "sugar_g": 1.7
                    },
                    {
                        "name": "mint",
                        "calories": 405.2,
                        "serving_size_g": 100,
                        "fat_total_g": 0,
                        "fat_saturated_g": 0,
                        "protein_g": 0,
                        "sodium_mg": 38,
                        "potassium_mg": 2,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 98.6,
                        "fiber_g": 0,
                        "sugar_g": 63.5
                    }
                ]
            },
            {
                "uuid": "e4406daf-1e81-4968-a4f8-25b7601680b2",
                "food": "Sandia Chamoy",
                "ingredients": "Watermelon and chamoy sauce.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 79.1,
                "totalFat": 1.7000000000000002,
                "totalProtien": 2,
                "totalCarbohydrates": 14.9,
                "ingradientsList": [
                    {
                        "name": "watermelon",
                        "calories": 30.3,
                        "serving_size_g": 100,
                        "fat_total_g": 0.1,
                        "fat_saturated_g": 0,
                        "protein_g": 0.6,
                        "sodium_mg": 0,
                        "potassium_mg": 10,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 7.4,
                        "fiber_g": 0.4,
                        "sugar_g": 6.2
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
                "uuid": "923c4941-a5ec-44be-ab35-6289aaa3c698",
                "food": "Queso",
                "ingredients": "Pickled jalapeno  cilantro  and cotija. Served with EI milagro chips.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/C9LFRswbDz7bISofmsmwrg/60s.jpg",
                "calorie": 957.5999999999999,
                "totalFat": 65.6,
                "totalProtien": 29.5,
                "totalCarbohydrates": 66.8,
                "ingradientsList": [
                    {
                        "name": "chips",
                        "calories": 540.8,
                        "serving_size_g": 100,
                        "fat_total_g": 34.4,
                        "fat_saturated_g": 3.4,
                        "protein_g": 6.4,
                        "sodium_mg": 533,
                        "potassium_mg": 150,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 54.3,
                        "fiber_g": 3.1,
                        "sugar_g": 0.3
                    },
                    {
                        "name": "pickled jalapeno",
                        "calories": 27.8,
                        "serving_size_g": 100,
                        "fat_total_g": 0.9,
                        "fat_saturated_g": 0.1,
                        "protein_g": 0.9,
                        "sodium_mg": 1661,
                        "potassium_mg": 18,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 4.7,
                        "fiber_g": 2.6,
                        "sugar_g": 2.1
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
                    },
                    {
                        "name": "cotija",
                        "calories": 366.1,
                        "serving_size_g": 100,
                        "fat_total_g": 29.8,
                        "fat_saturated_g": 17.5,
                        "protein_g": 19.9,
                        "sodium_mg": 1423,
                        "potassium_mg": 716,
                        "cholesterol_mg": 100,
                        "carbohydrates_total_g": 4,
                        "fiber_g": 0,
                        "sugar_g": 0
                    }
                ]
            },
            {
                "uuid": "5bab290b-86a8-42bf-9edd-9c058a8cad53",
                "food": "Guacamole",
                "ingredients": "Lime and sea salt  Served with Ei milagro chips.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 570.4,
                "totalFat": 34.6,
                "totalProtien": 7.1000000000000005,
                "totalCarbohydrates": 64.89999999999999,
                "ingradientsList": [
                    {
                        "name": "chips",
                        "calories": 540.8,
                        "serving_size_g": 100,
                        "fat_total_g": 34.4,
                        "fat_saturated_g": 3.4,
                        "protein_g": 6.4,
                        "sodium_mg": 533,
                        "potassium_mg": 150,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 54.3,
                        "fiber_g": 3.1,
                        "sugar_g": 0.3
                    },
                    {
                        "name": "lime",
                        "calories": 29.6,
                        "serving_size_g": 100,
                        "fat_total_g": 0.2,
                        "fat_saturated_g": 0,
                        "protein_g": 0.7,
                        "sodium_mg": 2,
                        "potassium_mg": 17,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 10.6,
                        "fiber_g": 2.9,
                        "sugar_g": 1.7
                    }
                ]
            },
            {
                "uuid": "7995d5e8-96d6-498f-82fd-00f6441f0e7d",
                "food": "Elote",
                "ingredients": "Grilled corn  lime  mayo  chili powder  cilantro and cotija.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 772.6,
                "totalFat": 76.8,
                "totalProtien": 4.3,
                "totalCarbohydrates": 21.6,
                "ingradientsList": [
                    {
                        "name": "mayo",
                        "calories": 678.7,
                        "serving_size_g": 100,
                        "fat_total_g": 75.3,
                        "fat_saturated_g": 11.8,
                        "protein_g": 0.9,
                        "sodium_mg": 627,
                        "potassium_mg": 20,
                        "cholesterol_mg": 41,
                        "carbohydrates_total_g": 0.6,
                        "fiber_g": 0,
                        "sugar_g": 0.6
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
                    }
                ]
            },
            {
                "uuid": "968efbe6-a964-4702-a99b-444af84eb1e0",
                "food": "Taco De Carne Molida",
                "ingredients": "Ground beef  shrettuce and tomato on corn tortilla.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/rKIj5xHjyTakZzgq9hmfpg/60s.jpg",
                "calorie": 112.10000000000001,
                "totalFat": 1.7,
                "totalProtien": 4.3,
                "totalCarbohydrates": 24.9,
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
                        "name": "tomato",
                        "calories": 18.2,
                        "serving_size_g": 100,
                        "fat_total_g": 0.2,
                        "fat_saturated_g": 0,
                        "protein_g": 0.9,
                        "sodium_mg": 4,
                        "potassium_mg": 23,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 3.9,
                        "fiber_g": 1.2,
                        "sugar_g": 2.6
                    }
                ]
            },
            {
                "uuid": "c3a4c4c4-cb57-4d18-94cd-2957673a818a",
                "food": "Taco De Nopalitos",
                "ingredients": "Prickly pear cactus  salsa roja  refried lentils and cotija on corn tortilla.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/95Bcv5k3wB31Q6FfzhruEw/60s.jpg",
                "calorie": 123.5,
                "totalFat": 1.7,
                "totalProtien": 4.9,
                "totalCarbohydrates": 27.5,
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
                        "name": "salsa",
                        "calories": 29.6,
                        "serving_size_g": 100,
                        "fat_total_g": 0.2,
                        "fat_saturated_g": 0,
                        "protein_g": 1.5,
                        "sodium_mg": 715,
                        "potassium_mg": 32,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 6.5,
                        "fiber_g": 1.9,
                        "sugar_g": 4
                    }
                ]
            },
            {
                "uuid": "6a675610-0d17-45f3-a48e-b5212c30720a",
                "food": "Agua",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/YlkblD3kSCSTT2CRwhNDpA/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "e917b9bd-dbfc-40a3-b60b-4cf4c4e6068d",
                "food": "Mexican Coke",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            }
        ],
        "averageCalorie": 323.98999999999995,
        "averageTotalFat": 19.629999999999995,
        "averageTotalProtien": 5.52,
        "averageTotalCarbohydrates": 34.47
    },
    {
        "id": "xUtzkHhNH3XCISfzH5mTgQ",
        "alias": "soha-austin-2",
        "name": "SOHA",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/xluApXMx4oYcdeZ5VI9AKw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/soha-austin-2?adjust_creative=DCZgw_02OZNeg4oTnfSNUQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DCZgw_02OZNeg4oTnfSNUQ",
        "review_count": 257,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 30.348158799999464,
            "longitude": -97.71484877057412
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "911 W Anderson Ln",
            "address2": "Ste 114",
            "address3": "",
            "city": "Austin",
            "zip_code": "78757",
            "country": "US",
            "state": "TX",
            "display_address": [
                "911 W Anderson Ln",
                "Ste 114",
                "Austin, TX 78757"
            ]
        },
        "phone": "+15123025433",
        "display_phone": "(512) 302-5433",
        "distance": 1571.7395164993727,
        "menu": [
            {
                "uuid": "de360de6-f0ff-426e-92c6-8ad3c6075c95",
                "food": "A1. Corn Cheese",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/9cNPbCBqkxyPcW7zELsCUA/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "ac98708a-87fa-4ac0-8c2e-b994ea961a41",
                "food": "A2. Goon Mandoo",
                "ingredients": "Fried dumpling.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/19l2ywiRewBqOJydSrAUOQ/60s.jpg",
                "calorie": 212.8,
                "totalFat": 10.2,
                "totalProtien": 9.5,
                "totalCarbohydrates": 19.9,
                "ingradientsList": [
                    {
                        "name": "fried dumpling",
                        "calories": 212.8,
                        "serving_size_g": 100,
                        "fat_total_g": 10.2,
                        "fat_saturated_g": 2.2,
                        "protein_g": 9.5,
                        "sodium_mg": 380,
                        "potassium_mg": 91,
                        "cholesterol_mg": 24,
                        "carbohydrates_total_g": 19.9,
                        "fiber_g": 1.3,
                        "sugar_g": 1
                    }
                ]
            },
            {
                "uuid": "59c6eeb5-24a2-45bb-a5c4-1fc63e81e5d9",
                "food": "A3. Mul Mandoo",
                "ingredients": "Steamed dumpling.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 185.8,
                "totalFat": 6.4,
                "totalProtien": 9.8,
                "totalCarbohydrates": 21.1,
                "ingradientsList": [
                    {
                        "name": "steamed dumpling",
                        "calories": 185.8,
                        "serving_size_g": 100,
                        "fat_total_g": 6.4,
                        "fat_saturated_g": 2.1,
                        "protein_g": 9.8,
                        "sodium_mg": 390,
                        "potassium_mg": 92,
                        "cholesterol_mg": 25,
                        "carbohydrates_total_g": 21.1,
                        "fiber_g": 1.5,
                        "sugar_g": 1.2
                    }
                ]
            },
            {
                "uuid": "74567ca0-c54d-4ad0-b66d-fa84d2021559",
                "food": "A4. Gaeran Jjim",
                "ingredients": "Steamed egg. Add cheese for an additional charge.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 540.9,
                "totalFat": 42.7,
                "totalProtien": 35.2,
                "totalCarbohydrates": 3.9000000000000004,
                "ingradientsList": [
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
                "uuid": "b786b823-8c17-4e5e-985a-4510837de906",
                "food": "A5. Gamja Twigim",
                "ingredients": "French fries.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 630.2,
                "totalFat": 29.200000000000003,
                "totalProtien": 6.8,
                "totalCarbohydrates": 83.2,
                "ingradientsList": [
                    {
                        "name": "fries",
                        "calories": 317.7,
                        "serving_size_g": 100,
                        "fat_total_g": 14.8,
                        "fat_saturated_g": 2.3,
                        "protein_g": 3.4,
                        "sodium_mg": 212,
                        "potassium_mg": 124,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 41.1,
                        "fiber_g": 3.8,
                        "sugar_g": 0.3
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
                "uuid": "81eab50b-96e5-4a3e-95b9-f4784df3e8a2",
                "food": "Extra spicy",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/sixoJWRxPN4D4clMa6OVXA/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "18e4abb0-9713-4fee-9ee3-e3e42e796d3b",
                "food": "Side of Kimchi",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/Lgh0RkLb43gsmfdkebkFPg/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "783bc04d-ed52-4b8e-82a6-7ffbd954a3ca",
                "food": "C1. Dukmandookook",
                "ingredients": "Dumplings soup with rice cake.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 655.3,
                "totalFat": 9,
                "totalProtien": 15.7,
                "totalCarbohydrates": 123,
                "ingradientsList": [
                    {
                        "name": "dumplings",
                        "calories": 235.9,
                        "serving_size_g": 100,
                        "fat_total_g": 5.3,
                        "fat_saturated_g": 1.4,
                        "protein_g": 6.2,
                        "sodium_mg": 856,
                        "potassium_mg": 168,
                        "cholesterol_mg": 3,
                        "carbohydrates_total_g": 38.9,
                        "fiber_g": 1.2,
                        "sugar_g": 1.6
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
                    },
                    {
                        "name": "rice cake",
                        "calories": 394.8,
                        "serving_size_g": 100,
                        "fat_total_g": 2.7,
                        "fat_saturated_g": 0.6,
                        "protein_g": 8.2,
                        "sodium_mg": 332,
                        "potassium_mg": 354,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 81.2,
                        "fiber_g": 4.2,
                        "sugar_g": 0.9
                    }
                ]
            },
            {
                "uuid": "3106c3af-4a66-47c6-abf5-f4175cca4dbd",
                "food": "C2. Dukboke",
                "ingredients": "Rice cake in spicy sauce. Add extras for an additional charge.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 443.6,
                "totalFat": 4.300000000000001,
                "totalProtien": 9.6,
                "totalCarbohydrates": 88.7,
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
                    },
                    {
                        "name": "rice cake",
                        "calories": 394.8,
                        "serving_size_g": 100,
                        "fat_total_g": 2.7,
                        "fat_saturated_g": 0.6,
                        "protein_g": 8.2,
                        "sodium_mg": 332,
                        "potassium_mg": 354,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 81.2,
                        "fiber_g": 4.2,
                        "sugar_g": 0.9
                    }
                ]
            },
            {
                "uuid": "2350ad1c-a9b8-4465-b803-7797b0454088",
                "food": "C3. Mandooguk",
                "ingredients": "Dumpling soup.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 249.5,
                "totalFat": 6.3,
                "totalProtien": 7.5,
                "totalCarbohydrates": 42.1,
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
                    },
                    {
                        "name": "dumpling",
                        "calories": 224.9,
                        "serving_size_g": 100,
                        "fat_total_g": 5.3,
                        "fat_saturated_g": 1.4,
                        "protein_g": 6.2,
                        "sodium_mg": 839,
                        "potassium_mg": 169,
                        "cholesterol_mg": 3,
                        "carbohydrates_total_g": 39.2,
                        "fiber_g": 1.2,
                        "sugar_g": 1.6
                    }
                ]
            },
            {
                "uuid": "82277422-47fe-460b-9aec-ea7d0c0939f6",
                "food": "C5. Chadolbake Ddukboke",
                "ingredients": "Beef-brisket rice cake.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/ljjlQ23AQw1bE2GF5hXs9A/60s.jpg",
                "calorie": 394.8,
                "totalFat": 2.7,
                "totalProtien": 8.2,
                "totalCarbohydrates": 81.2,
                "ingradientsList": [
                    {
                        "name": "rice cake",
                        "calories": 394.8,
                        "serving_size_g": 100,
                        "fat_total_g": 2.7,
                        "fat_saturated_g": 0.6,
                        "protein_g": 8.2,
                        "sodium_mg": 332,
                        "potassium_mg": 354,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 81.2,
                        "fiber_g": 4.2,
                        "sugar_g": 0.9
                    }
                ]
            },
            {
                "uuid": "e09302d2-b35f-4fdc-a596-84ee85e06865",
                "food": "C6. Dakbal",
                "ingredients": "Spicy chicken feet. Add extras for an additional charge.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 222.6,
                "totalFat": 12.9,
                "totalProtien": 23.7,
                "totalCarbohydrates": 0,
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
                    }
                ]
            },
            {
                "uuid": "67445c98-a2e2-4644-a44e-fa09e41ce3c9",
                "food": "F1. Pa Dak",
                "ingredients": "Sweet soy sauce glazed fried chicken with scallions.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/XavqYgPEfBb0X46CyPquvA/60s.jpg",
                "calorie": 521.6,
                "totalFat": 13.4,
                "totalProtien": 24.599999999999998,
                "totalCarbohydrates": 71.2,
                "ingradientsList": [
                    {
                        "name": "glaze",
                        "calories": 299,
                        "serving_size_g": 100,
                        "fat_total_g": 0.5,
                        "fat_saturated_g": 0.3,
                        "protein_g": 0.9,
                        "sodium_mg": 15,
                        "potassium_mg": 25,
                        "cholesterol_mg": 1,
                        "carbohydrates_total_g": 71.2,
                        "fiber_g": 0,
                        "sugar_g": 69.6
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
                "uuid": "9856b33f-d364-475d-8261-89cba29b0ab2",
                "food": "F2. Yang Dak",
                "ingredients": "Sweet and spicy Korean fried chicken. Add extra pickled radish for an additional charge.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/f_CSH7cZ-bal03-vvgertA/60s.jpg",
                "calorie": 222.6,
                "totalFat": 12.9,
                "totalProtien": 23.7,
                "totalCarbohydrates": 0,
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
                    }
                ]
            },
            {
                "uuid": "29e60a8b-951a-4b42-9244-f5041abf180d",
                "food": "N1. Ramyun",
                "ingredients": "Ramyun noodles in spicy soup.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 24.6,
                "totalFat": 1,
                "totalProtien": 1.3,
                "totalCarbohydrates": 2.9,
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
                "uuid": "959d886d-5d56-4ac3-8fad-0fdfd4f10350",
                "food": "N2. Udong",
                "ingredients": "Japanese style noodles.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/tCTvgMwJqM9fHDChioHuTw/60s.jpg",
                "calorie": 161.8,
                "totalFat": 0.9,
                "totalProtien": 5.8,
                "totalCarbohydrates": 31.2,
                "ingradientsList": [
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
                "uuid": "39e8c8dd-92c3-4c42-a823-b023e8a57aa5",
                "food": "N4. Kimchi Bibimkooksoo",
                "ingredients": "Thin noodles with kimchi.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/UD3UQXebg0iveNbcGMYeIg/60s.jpg",
                "calorie": 161.8,
                "totalFat": 0.9,
                "totalProtien": 5.8,
                "totalCarbohydrates": 31.2,
                "ingradientsList": [
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
                "uuid": "0bd1359a-e7e9-47d0-b526-288309ebf81a",
                "food": "Japchae",
                "ingredients": "Korean Glass Noodles with Beef and Vegetables.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 161.8,
                "totalFat": 0.9,
                "totalProtien": 5.8,
                "totalCarbohydrates": 31.2,
                "ingradientsList": [
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
                "uuid": "597919dc-e519-47fe-9b40-1d38d196b6ac",
                "food": "Chapagetti",
                "ingredients": "Black Soybean Paste with Egg and Cheese.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 540.9,
                "totalFat": 42.7,
                "totalProtien": 35.2,
                "totalCarbohydrates": 3.9000000000000004,
                "ingradientsList": [
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
                "uuid": "3a85faaa-e51d-41db-9c37-23f3509a0c06",
                "food": "E1. Bossam",
                "ingredients": "Napa wraps with steamed pork.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 562.5999999999999,
                "totalFat": 21.2,
                "totalProtien": 34.9,
                "totalCarbohydrates": 55.9,
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
                    },
                    {
                        "name": "wraps",
                        "calories": 326.4,
                        "serving_size_g": 100,
                        "fat_total_g": 7.2,
                        "fat_saturated_g": 1.7,
                        "protein_g": 8.7,
                        "sodium_mg": 475,
                        "potassium_mg": 125,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 55.9,
                        "fiber_g": 3.3,
                        "sugar_g": 0
                    }
                ]
            },
            {
                "uuid": "097323e3-378f-431c-9208-d64e06e0bb23",
                "food": "E3. Gopchang bokum",
                "ingredients": "Stir-fried intestines.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/jCTdkD33Wepe9M8Ld3Nejw/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "7e8a9ddb-eb3f-4701-8747-0ed3194172d1",
                "food": "E5. Galbi",
                "ingredients": "Korean beef short ribs.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/iTNsLieL6csFkXOqgmlDpA/60s.jpg",
                "calorie": 593.4,
                "totalFat": 42.4,
                "totalProtien": 51.900000000000006,
                "totalCarbohydrates": 0,
                "ingradientsList": [
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
                    },
                    {
                        "name": "beef short ribs",
                        "calories": 301.5,
                        "serving_size_g": 100,
                        "fat_total_g": 22.7,
                        "fat_saturated_g": 10,
                        "protein_g": 25.3,
                        "sodium_mg": 69,
                        "potassium_mg": 167,
                        "cholesterol_mg": 98,
                        "carbohydrates_total_g": 0,
                        "fiber_g": 0,
                        "sugar_g": 0
                    }
                ]
            },
            {
                "uuid": "c81462eb-31e5-4ed5-8790-fb91835e4548",
                "food": "E6. Jaeyookbokum",
                "ingredients": "Stir-fried pork BBQ with vegetables.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 469,
                "totalFat": 18.7,
                "totalProtien": 42.4,
                "totalCarbohydrates": 32.400000000000006,
                "ingradientsList": [
                    {
                        "name": "bbq",
                        "calories": 168.4,
                        "serving_size_g": 100,
                        "fat_total_g": 4.5,
                        "fat_saturated_g": 1.4,
                        "protein_g": 13.3,
                        "sodium_mg": 667,
                        "potassium_mg": 159,
                        "cholesterol_mg": 35,
                        "carbohydrates_total_g": 19.1,
                        "fiber_g": 1.2,
                        "sugar_g": 15.3
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
                    }
                ]
            },
            {
                "uuid": "c68822c7-734d-489a-8955-946981180e49",
                "food": "E9. Bulgogi",
                "ingredients": "Stir-fried Korean beef BBQ with vegetables.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/KvqqLrhp0pf5KuGniUzvlg/60s.jpg",
                "calorie": 524.6999999999999,
                "totalFat": 24.4,
                "totalProtien": 42.800000000000004,
                "totalCarbohydrates": 32.400000000000006,
                "ingradientsList": [
                    {
                        "name": "bbq",
                        "calories": 168.4,
                        "serving_size_g": 100,
                        "fat_total_g": 4.5,
                        "fat_saturated_g": 1.4,
                        "protein_g": 13.3,
                        "sodium_mg": 667,
                        "potassium_mg": 159,
                        "cholesterol_mg": 35,
                        "carbohydrates_total_g": 19.1,
                        "fiber_g": 1.2,
                        "sugar_g": 15.3
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
                    }
                ]
            },
            {
                "uuid": "760bbfca-41dc-4fc7-bfc5-e2fbdf0439f4",
                "food": "E10. Golbange Muchim",
                "ingredients": "Seasoned snails with vegetables and noodles.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/bbP7STXice5lKwkt4l_QNA/60s.jpg",
                "calorie": 161.8,
                "totalFat": 0.9,
                "totalProtien": 5.8,
                "totalCarbohydrates": 31.2,
                "ingradientsList": [
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
                "uuid": "8dddda7e-ceb1-4733-928f-6a86c796f8f7",
                "food": "E11. Dooboo Kimchi",
                "ingredients": "Stir-fried pork with kimchi and tofu.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/zbEv_3yaaPgTniiCfbGwjw/60s.jpg",
                "calorie": 266.4,
                "totalFat": 14.1,
                "totalProtien": 27.8,
                "totalCarbohydrates": 5.6,
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
                    },
                    {
                        "name": "kimchi",
                        "calories": 30.2,
                        "serving_size_g": 100,
                        "fat_total_g": 0.1,
                        "fat_saturated_g": 0,
                        "protein_g": 1.6,
                        "sodium_mg": 277,
                        "potassium_mg": 43,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 5.6,
                        "fiber_g": 3.1,
                        "sugar_g": 1.3
                    }
                ]
            },
            {
                "uuid": "317aa20d-03e0-48ef-b473-0ce94b918994",
                "food": "E12. Haemul Pajeon",
                "ingredients": "Seafood pancake.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/cp3BvjRL6Z2SHWjohYySeA/60s.jpg",
                "calorie": 365.7,
                "totalFat": 13,
                "totalProtien": 28.7,
                "totalCarbohydrates": 31.2,
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
                        "name": "pancake",
                        "calories": 226,
                        "serving_size_g": 100,
                        "fat_total_g": 9.5,
                        "fat_saturated_g": 2.1,
                        "protein_g": 6.5,
                        "sodium_mg": 435,
                        "potassium_mg": 156,
                        "cholesterol_mg": 59,
                        "carbohydrates_total_g": 28.5,
                        "fiber_g": 0,
                        "sugar_g": 0
                    }
                ]
            },
            {
                "uuid": "52ed0b7b-2673-46bf-8212-7100450065b7",
                "food": "E13. Kimchi Pajeon",
                "ingredients": "Kimchi pancake.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/M9Crg5erOHlRQA11zqp8lw/60s.jpg",
                "calorie": 30.2,
                "totalFat": 0.1,
                "totalProtien": 1.6,
                "totalCarbohydrates": 5.6,
                "ingradientsList": [
                    {
                        "name": "kimchi",
                        "calories": 30.2,
                        "serving_size_g": 100,
                        "fat_total_g": 0.1,
                        "fat_saturated_g": 0,
                        "protein_g": 1.6,
                        "sodium_mg": 277,
                        "potassium_mg": 43,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 5.6,
                        "fiber_g": 3.1,
                        "sugar_g": 1.3
                    }
                ]
            },
            {
                "uuid": "b20e242d-a93b-4169-b8ed-52bd7f0dd3be",
                "food": "E15. Gaeranmalee",
                "ingredients": "Cheese omelet.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 393.9,
                "totalFat": 33,
                "totalProtien": 22.7,
                "totalCarbohydrates": 3.2,
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
                "uuid": "e7a86384-c3bc-402f-a016-2bd9a1666404",
                "food": "E16. Daktongjip",
                "ingredients": "Stir-fried chicken gizzards.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 222.6,
                "totalFat": 12.9,
                "totalProtien": 23.7,
                "totalCarbohydrates": 0,
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
                    }
                ]
            },
            {
                "uuid": "5ef7f3cb-f0f1-4487-ac36-32a3e7bd719f",
                "food": "E17. Daktongjip Bokum",
                "ingredients": "Spicy stir-fried chicken gizzards.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 222.6,
                "totalFat": 12.9,
                "totalProtien": 23.7,
                "totalCarbohydrates": 0,
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
                    }
                ]
            },
            {
                "uuid": "d6483f82-99fe-4ccf-8d84-5a217b0c0f99",
                "food": "E19. Samgyupsal Kimchibokum",
                "ingredients": "Stir-fried pork belly and kimchi.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 266.4,
                "totalFat": 14.1,
                "totalProtien": 27.8,
                "totalCarbohydrates": 5.6,
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
                    },
                    {
                        "name": "kimchi",
                        "calories": 30.2,
                        "serving_size_g": 100,
                        "fat_total_g": 0.1,
                        "fat_saturated_g": 0,
                        "protein_g": 1.6,
                        "sodium_mg": 277,
                        "potassium_mg": 43,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 5.6,
                        "fiber_g": 3.1,
                        "sugar_g": 1.3
                    }
                ]
            },
            {
                "uuid": "f8a77878-b4c6-4f9d-a00b-214bdde1f49f",
                "food": "E21. Fire Chicken with Cheese (cheese buldak)",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/wbQScZWljGcCzXDlIV0BWg/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "00c42a4b-f608-492b-8b95-8cc3df0b4bf4",
                "food": "E22. Stir Fried Pork Belly with Baby Octopus (Zzusam)",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "8e1b50d7-54d2-4701-9489-dfd617a59eec",
                "food": "S1. Gamjatang",
                "ingredients": "Pork rib soup.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/uy5RVBtNfDk5BlA_d9Yskg/60s.jpg",
                "calorie": 260.8,
                "totalFat": 15,
                "totalProtien": 27.5,
                "totalCarbohydrates": 2.9,
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
                "uuid": "9555473b-a718-4525-8d28-9adef8b1022b",
                "food": "S2. Kimchi Jjigae",
                "ingredients": "Spicy kimchi soup.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/IeJJNQwp2eZhQNArSMucdw/60s.jpg",
                "calorie": 24.6,
                "totalFat": 1,
                "totalProtien": 1.3,
                "totalCarbohydrates": 2.9,
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
                "uuid": "404ed49e-c8dd-4da1-a918-8121613134a3",
                "food": "S3. Budae Jjigae",
                "ingredients": "Various meats soup. AKA military soup.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/wk-UIUisSQqWVSWaaG1-_g/60s.jpg",
                "calorie": 400.90000000000003,
                "totalFat": 21.7,
                "totalProtien": 48.4,
                "totalCarbohydrates": 2.9,
                "ingradientsList": [
                    {
                        "name": "meat",
                        "calories": 376.3,
                        "serving_size_g": 170.09699999999998,
                        "fat_total_g": 20.7,
                        "fat_saturated_g": 7.5,
                        "protein_g": 47.1,
                        "sodium_mg": 118,
                        "potassium_mg": 356,
                        "cholesterol_mg": 154,
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
                "uuid": "69909c86-32aa-467b-b36a-841f3c59f314",
                "food": "S4. Gopchang Jeongol",
                "ingredients": "Intestine stew.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 106.6,
                "totalFat": 3.3,
                "totalProtien": 11.5,
                "totalCarbohydrates": 8.1,
                "ingradientsList": [
                    {
                        "name": "stew",
                        "calories": 106.6,
                        "serving_size_g": 100,
                        "fat_total_g": 3.3,
                        "fat_saturated_g": 1.5,
                        "protein_g": 11.5,
                        "sodium_mg": 66,
                        "potassium_mg": 102,
                        "cholesterol_mg": 33,
                        "carbohydrates_total_g": 8.1,
                        "fiber_g": 1.3,
                        "sugar_g": 1.8
                    }
                ]
            },
            {
                "uuid": "33b1849b-375e-4472-8c0c-0e801c7322d8",
                "food": "S6. Honghoptang",
                "ingredients": "Green mussels soup.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 24.6,
                "totalFat": 1,
                "totalProtien": 1.3,
                "totalCarbohydrates": 2.9,
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
                "uuid": "9c0f7009-d4a4-4fb1-9788-27b415f3221e",
                "food": "S7. Odengtang",
                "ingredients": "Fish cake soup.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 24.6,
                "totalFat": 1,
                "totalProtien": 1.3,
                "totalCarbohydrates": 2.9,
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
                "uuid": "ed0f9d23-59a8-4cde-9945-b0b90cdaac5a",
                "food": "S8. Doenjang Jjigae",
                "ingredients": "Soybean paste soup with tofu and pork.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 260.8,
                "totalFat": 15,
                "totalProtien": 27.5,
                "totalCarbohydrates": 2.9,
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
                "uuid": "3f8bb3f2-2694-4240-8ce8-4c030ba4c479",
                "food": "S9. Soondubu Jjigae",
                "ingredients": "Extra soft tofu soup with pork.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/KR81JTWGxw98OehuPT9VrQ/60s.jpg",
                "calorie": 260.8,
                "totalFat": 15,
                "totalProtien": 27.5,
                "totalCarbohydrates": 2.9,
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
                "uuid": "60b43dee-dca9-4daa-9100-e5d8711abfb7",
                "food": "S10. Kongnamool Guk",
                "ingredients": "Bean sprouts soup.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 24.6,
                "totalFat": 1,
                "totalProtien": 1.3,
                "totalCarbohydrates": 2.9,
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
                "uuid": "846981c4-cec3-409d-bb30-d15cf02da327",
                "food": "Haemul Jjamppongtang",
                "ingredients": "Spicy seafood soup.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 24.6,
                "totalFat": 1,
                "totalProtien": 1.3,
                "totalCarbohydrates": 2.9,
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
                "uuid": "1e75f39f-dc65-4fc5-88b0-234a0a852979",
                "food": "G2. Makchangmodeum",
                "ingredients": "Combination intestines and entrails. Add extras for an additional charge.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/YzNj1qRrVuv3tOaDbiNk0w/60s.jpg",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "ad633aa1-f4b3-43eb-83f7-ae9d56bf9dbf",
                "food": "G3. Gopchang",
                "ingredients": "Grilled beef small intestines. Add extras for an additional charge.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 291.9,
                "totalFat": 19.7,
                "totalProtien": 26.6,
                "totalCarbohydrates": 0,
                "ingradientsList": [
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
                "uuid": "795fa3c5-6a31-438e-8603-a6a0f637c087",
                "food": "G4. Makchang",
                "ingredients": "Grilled beef entrails. Add extras for an additional charge.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 291.9,
                "totalFat": 19.7,
                "totalProtien": 26.6,
                "totalCarbohydrates": 0,
                "ingradientsList": [
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
                "uuid": "e75270d0-2012-42b1-907b-19fd97d35032",
                "food": "G5. Daechang",
                "ingredients": "Grilled beef large intestines. Add extras for an additional charge.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 291.9,
                "totalFat": 19.7,
                "totalProtien": 26.6,
                "totalCarbohydrates": 0,
                "ingradientsList": [
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
                "uuid": "345450a7-4fb6-4849-8238-78e02300c91a",
                "food": "E18. Samgyubsal",
                "ingredients": "Grilled pork belly.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/jCTdkD33Wepe9M8Ld3Nejw/60s.jpg",
                "calorie": 236.2,
                "totalFat": 14,
                "totalProtien": 26.2,
                "totalCarbohydrates": 0,
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
                "uuid": "e9ab6dc1-23e4-40d5-9b83-c104cc4b3949",
                "food": "R1. Bibimbob",
                "ingredients": "Rice and assorted vegetables. Add protein for an additional charge.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/x-SLGTDe7ewnvtWX8XGrOA/60s.jpg",
                "calorie": 64.4,
                "totalFat": 0.2,
                "totalProtien": 2.9,
                "totalCarbohydrates": 13.3,
                "ingradientsList": [
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
                    }
                ]
            },
            {
                "uuid": "93c563e4-a3c2-4b1d-a911-8c2da115a5c9",
                "food": "R2. Bokumbob",
                "ingredients": "Fried rice topped with a fried egg. Add protein for an additional charge.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 147,
                "totalFat": 9.7,
                "totalProtien": 12.5,
                "totalCarbohydrates": 0.7,
                "ingradientsList": [
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
                    }
                ]
            },
            {
                "uuid": "0024576e-42ae-41c3-b29e-c2375d5aab14",
                "food": "R3. Dooboodupbob",
                "ingredients": "Rice topped with tofu  pork and veggies.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/ZS4E6QPHyy-FtgzLrjxsMw/60s.jpg",
                "calorie": 383.2,
                "totalFat": 23.7,
                "totalProtien": 38.7,
                "totalCarbohydrates": 0.7,
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
                    }
                ]
            },
            {
                "uuid": "e925cc84-7819-45a5-965d-6f103890b486",
                "food": "R5. Chulpan Kimchi Bokumbob",
                "ingredients": "Pan-fried kimchi rice. Add protein for an additional charge.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/bphoto/A99zGFpaIgmiYBKLpg7VTg/60s.jpg",
                "calorie": 30.2,
                "totalFat": 0.1,
                "totalProtien": 1.6,
                "totalCarbohydrates": 5.6,
                "ingradientsList": [
                    {
                        "name": "kimchi",
                        "calories": 30.2,
                        "serving_size_g": 100,
                        "fat_total_g": 0.1,
                        "fat_saturated_g": 0,
                        "protein_g": 1.6,
                        "sodium_mg": 277,
                        "potassium_mg": 43,
                        "cholesterol_mg": 0,
                        "carbohydrates_total_g": 5.6,
                        "fiber_g": 3.1,
                        "sugar_g": 1.3
                    }
                ]
            },
            {
                "uuid": "5023237a-a92c-4253-89b0-5f76ff3a95f9",
                "food": "R6. Spam Mayo Dupbob",
                "ingredients": "Rice topped with spam.",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "e7591a41-3381-4a2b-bca0-d08c71a9575b",
                "food": "D1. Perrier",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "62d40ecb-d688-4f28-9b03-3bdcfaafb5ee",
                "food": "D2. Soft Drink",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            },
            {
                "uuid": "5562efab-e41b-4eea-91c4-0e40fe608a03",
                "food": "D4. Bottled Water",
                "ingredients": "",
                "imgSrc": "https://s3-media0.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png",
                "calorie": 0,
                "totalFat": 0,
                "totalProtien": 0,
                "totalCarbohydrates": 0,
                "ingradientsList": []
            }
        ],
        "reviews": [
            {
                "username": "Melissa T.",
                "review": "I had a wonderful dinner at Soha with my mom  and it was a nostalgic experience as Korean BBQ takes me back to my time living in Korea. We started our meal with delicious steamed dumplings and cheese corn  which were delightful. My mom enjoyed her bibimbob  while I savored my all-time favorite bulgogi and rice. The employees were attentive  quick to help  and polite throughout our dining experience. The cherry on top was the enjoyable K-pop music playing in the background  adding to the overall ambiance. Definitely a great place to relish Korean cuisine and create special memories!"
            },
            {
                "username": "Chelsea L.",
                "review": "kimchi fried rice with fried egg + cheese  Food was very good and worth the wait! It was packed and very loud - I was surprised they were playing a kdrama on the TV You can view the menu by scanning the QR code on the table. (You still order with the servers though). Water is self-serve-you can pour yourself water from the bottle they provide. Kimchi taste is very prominent and I LOVE it! They can make it extra spicy if you want too (my friend got it that way). I want to go back and try more food"
            },
            {
                "username": "Thomas N.",
                "review": "My friends and I love going here to get our Korean bar food fix in and its open late! The food never disappoints  good atmosphere  and definitely has been super friendly service each time. The only downside of Soha is the size of the place  so if you go during peak dinner hours you may have a long wait especially if you have a large group of people. This place is quite comparable to to Seoulju  but I do like the variety of this menu overall a take bit more at Soha than Seoulju."
            },
            {
                "username": "Marsha C.",
                "review": "Small Korean restaurant of Lamar and 183. Service is what you would expect from a small mom and pops Korean restaurant. Atmosphere is dark and pretty loud with Korean music playing.  We had a large group by us that was extremely loud (not the restaurant's fault) but you might want to bring earplugs just in case (it was that loud).The seafood pancake was really crispy and tasty but a little greasy.  It was my favorite thing. We also had the galbi which was good but could use a dash of salt to bring out the flavor.  Skip the bulgogi  it was a little dry and underwhelming."
            },
            {
                "username": "Brian T.",
                "review": "A great local joint in Austin for tasty Korean food!  Had the bulgogi and the bibambap and both were really tasty and came in massive portions. The atmosphere is delightful and there were K-pop videos playing on the screens. I'd definitely return and recommend to anyone!"
            },
            {
                "username": "Danny H.",
                "review": "Decided to try Soha for the first time and I can't even put into words how absolutely scrumptious the Bulgogi with vegetables was. At first I was a little taken aback by the prices as they were higher than I expected but it was so so worth it."
            },
            {
                "username": "Jade P.",
                "review": "I love that this place is open until 3am. We usually arrive back late from a trip and this is our go to spot for food. We always order the pork rib soup (size small) and the padak chicken. They do charge for rice which I don't like as it should come free with an entree but still worth it. The place itself is dark and plays loud K-pop and kdramas on the tv. Be careful as the floor is slippery sometimes."
            },
            {
                "username": "Angela L.",
                "review": "SOHA is so delicious! There are so many good options to get and I find myself getting something different each time.I got spam rice with mayo. It was something so simple yet it went well together. Their portions are huge as well. Enough to share with 2-3 people. I came to celebrate a friend's birthday and they gave us a birthday freebie! They are always so busy so I recommend getting there early to get a table especially if you have a huge party. My favorites are the pork belly  army soup  and corn cheese!"
            },
            {
                "username": "Courtney B.",
                "review": "Such a cute place and the food is sooo so good. Also open super late so a good place to stop by with friends! So glad my friend brought me here I definitely need to go back soon"
            },
            {
                "username": "Ni N.",
                "review": "I really enjoy coming here for a late night hangout to eat and drink with friends. The ambiance is very chill  music is loud but we like it. The food is pretty good. Definitely get the soy fried chicken! However  as for service... I come here probably every few weeks. Service is great by some of the servers. But every time I come here  there's always this one particular girl server (prob the only girl server there) that gives a unwelcoming attitude and vibe. It seems like it's a bother when we ask for something. Todays experience  out of consideration for her time  we told her in advance that we will have three checks and whenever the check was handed to us  she said she could not do it. But we never encountered this problem as we did it before and the other server had to do it for her. Overall  there has been many other instances that we come in and she is not that nice. Love this place and love the service of all the servers except the girl."
            }
        ],
        "averageCalorie": 220.34210526315792,
        "averageTotalFat": 10.278947368421056,
        "averageTotalProtien": 15.30877192982456,
        "averageTotalCarbohydrates": 15.654385964912285
    }
]

restaurantDataList.forEach((restaurantData) => {
    Restaurant.findOrCreate({
        where: { id: restaurantData.id },
        defaults: {
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
        averageCalorie: restaurantData.averageCalorie,
        averageTotalFat: restaurantData.averageTotalFat,
        averageTotalProtien: restaurantData.averageTotalProtien,
        averageTotalCarbohydrates: restaurantData.averageTotalCarbohydrates
        }
    }).then(([restaurant, created]) => {
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
            ingredients: menuItem.ingredients,
            imgSrc: menuItem.imgSrc,
            calorie: menuItem.calorie,
            restaurant_id: restaurant.id
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
    }).catch(error => console.log('Error inserting data: ', error));
});