## Endpoints:

---

1. Tours : **/api/v1/tours**
2. Users: **/api/v1/users**

## Tours Endpoint:

---

#### GET ALL TOURS:

- Endpoint: `/api/v1/tours`
- Method: `GET`
- Authentication:
- Example:
- Returned Data:

```json
{
  "status": "success",
  "results": 11,
  "data": {
    "tours": [
      {
        "ratingsAverage": 4.7,
        "ratingsQuantity": 37,
        "images": ["tour-1-1.jpg", "tour-1-2.jpg", "tour-1-3.jpg"],
        "startDates": [
          "2021-04-25T04:00:00.000Z",
          "2021-07-20T04:00:00.000Z",
          "2021-10-05T04:00:00.000Z"
        ],
        "_id": "67e2c108cb68a45eae6c62d7",
        "name": "The Forest Hiker",
        "duration": 5,
        "maxGroupSize": 25,
        "difficulty": "easy",
        "price": 397,
        "summary": "Breathtaking hike through the Canadian Banff National Park",
        "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "imageCover": "tour-1-cover.jpg",
        "__v": 0
      },
      {
        "ratingsAverage": 4.8,
        "ratingsQuantity": 23,
        "images": ["tour-2-1.jpg", "tour-2-2.jpg", "tour-2-3.jpg"],
        "startDates": [
          "2021-06-19T04:00:00.000Z",
          "2021-07-20T04:00:00.000Z",
          "2021-08-18T04:00:00.000Z"
        ],
        "_id": "67e2c108cb68a45eae6c62d8",
        "name": "The Sea Explorer",
        "duration": 7,
        "maxGroupSize": 15,
        "difficulty": "medium",
        "price": 497,
        "summary": "Exploring the jaw-dropping US east coast by foot and by boat",
        "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "imageCover": "tour-2-cover.jpg",
        "__v": 0
      },
      {
        "ratingsAverage": 4.9,
        "ratingsQuantity": 332,
        "images": ["tour-9-1.jpg", "tour-9-2.jpg", "tour-9-3.jpg"],
        "startDates": [
          "2021-12-16T04:00:00.000Z",
          "2022-01-16T04:00:00.000Z",
          "2022-12-12T04:00:00.000Z"
        ],
        "_id": "67e2c108cb68a45eae6c62e1",
        "name": "The Mirsarai Explorer",
        "duration": 3,
        "maxGroupSize": 12,
        "difficulty": "easy",
        "price": 599,
        "summary": "Enjoy the Northern Lights in one of the best places in the world",
        "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
        "imageCover": "tour-9-cover.jpg",
        "__v": 0
      },
      {
        "ratingsAverage": 4.9,
        "ratingsQuantity": 330,
        "images": ["tour-9-1.jpg", "tour-9-2.jpg", "tour-9-3.jpg"],
        "startDates": [
          "2021-12-16T04:00:00.000Z",
          "2022-01-16T04:00:00.000Z",
          "2022-12-12T04:00:00.000Z"
        ],
        "_id": "67e2c108cb68a45eae6c62e0",
        "name": "The Kolkata Explorer",
        "duration": 3,
        "maxGroupSize": 12,
        "difficulty": "easy",
        "price": 699,
        "summary": "Enjoy the Northern Lights in one of the best places in the world",
        "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
        "imageCover": "tour-9-cover.jpg",
        "__v": 0
      },
      {
        "ratingsAverage": 4.5,
        "ratingsQuantity": 13,
        "images": ["tour-3-1.jpg", "tour-3-2.jpg", "tour-3-3.jpg"],
        "startDates": [
          "2022-01-05T04:00:00.000Z",
          "2022-02-12T04:00:00.000Z",
          "2023-01-06T04:00:00.000Z"
        ],
        "_id": "67e2c108cb68a45eae6c62d9",
        "name": "The Snow Adventurer",
        "duration": 4,
        "maxGroupSize": 10,
        "difficulty": "difficult",
        "price": 997,
        "summary": "Exciting adventure in the snow with snowboarding and skiing",
        "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
        "imageCover": "tour-3-cover.jpg",
        "__v": 0
      },
      {
        "ratingsAverage": 4.6,
        "ratingsQuantity": 54,
        "images": ["tour-4-1.jpg", "tour-4-2.jpg", "tour-4-3.jpg"],
        "startDates": [
          "2021-03-11T04:00:00.000Z",
          "2021-05-02T04:00:00.000Z",
          "2021-06-09T04:00:00.000Z"
        ],
        "_id": "67e2c108cb68a45eae6c62da",
        "name": "The City Wanderer",
        "duration": 9,
        "maxGroupSize": 20,
        "difficulty": "easy",
        "price": 1197,
        "summary": "Living the life of Wanderlust in the US' most beatiful cities",
        "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat lorem ipsum dolor sit amet.\nConsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat!",
        "imageCover": "tour-4-cover.jpg",
        "__v": 0
      },
      {
        "ratingsAverage": 4.9,
        "ratingsQuantity": 19,
        "images": ["tour-5-1.jpg", "tour-5-2.jpg", "tour-5-3.jpg"],
        "startDates": [
          "2021-08-05T04:00:00.000Z",
          "2022-03-20T04:00:00.000Z",
          "2022-08-12T04:00:00.000Z"
        ],
        "_id": "67e2c108cb68a45eae6c62db",
        "name": "The Park Camper",
        "duration": 10,
        "maxGroupSize": 15,
        "difficulty": "medium",
        "price": 1497,
        "summary": "Breathing in Nature in America's most spectacular National Parks",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!",
        "imageCover": "tour-5-cover.jpg",
        "__v": 0
      },
      {
        "ratingsAverage": 4.9,
        "ratingsQuantity": 33,
        "images": ["tour-9-1.jpg", "tour-9-2.jpg", "tour-9-3.jpg"],
        "startDates": [
          "2021-12-16T04:00:00.000Z",
          "2022-01-16T04:00:00.000Z",
          "2022-12-12T04:00:00.000Z"
        ],
        "_id": "67e2c108cb68a45eae6c62df",
        "name": "The Northern Lights",
        "duration": 3,
        "maxGroupSize": 12,
        "difficulty": "easy",
        "price": 1497,
        "summary": "Enjoy the Northern Lights in one of the best places in the world",
        "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
        "imageCover": "tour-9-cover.jpg",
        "__v": 0
      },
      {
        "ratingsAverage": 4.5,
        "ratingsQuantity": 35,
        "images": ["tour-7-1.jpg", "tour-7-2.jpg", "tour-7-3.jpg"],
        "startDates": [
          "2021-02-12T04:00:00.000Z",
          "2021-04-14T04:00:00.000Z",
          "2021-09-01T04:00:00.000Z"
        ],
        "_id": "67e2c108cb68a45eae6c62dd",
        "name": "The Wine Taster",
        "duration": 5,
        "maxGroupSize": 8,
        "difficulty": "easy",
        "price": 1997,
        "summary": "Exquisite wines, scenic views, exclusive barrel tastings, and much more",
        "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "imageCover": "tour-7-cover.jpg",
        "__v": 0
      },
      {
        "ratingsAverage": 4.7,
        "ratingsQuantity": 28,
        "images": ["tour-6-1.jpg", "tour-6-2.jpg", "tour-6-3.jpg"],
        "startDates": [
          "2021-07-19T04:00:00.000Z",
          "2021-09-06T04:00:00.000Z",
          "2022-03-18T04:00:00.000Z"
        ],
        "_id": "67e2c108cb68a45eae6c62dc",
        "name": "The Sports Lover",
        "duration": 14,
        "maxGroupSize": 8,
        "difficulty": "difficult",
        "price": 2997,
        "summary": "Surfing, skating, parajumping, rock climbing and more, all in one tour",
        "description": "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nVoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur!",
        "imageCover": "tour-6-cover.jpg",
        "__v": 0
      },
      {
        "ratingsAverage": 4.7,
        "ratingsQuantity": 28,
        "images": ["tour-8-1.jpg", "tour-8-2.jpg", "tour-8-3.jpg"],
        "startDates": [
          "2021-03-23T04:00:00.000Z",
          "2021-10-25T04:00:00.000Z",
          "2022-01-30T04:00:00.000Z"
        ],
        "_id": "67e2c108cb68a45eae6c62de",
        "name": "The Star Gazer",
        "duration": 9,
        "maxGroupSize": 8,
        "difficulty": "medium",
        "price": 2997,
        "summary": "The most remote and stunningly beautiful places for seeing the night sky",
        "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "imageCover": "tour-8-cover.jpg",
        "__v": 0
      }
    ]
  }
}
```

#### GET SINGLE TOUR:

- Endpoint: `/api/v1/tours/[id]`
- Method: `GET`
- Authentication:
- Example: /api/v1/tours/67d4116f3f6e286d296d77da
- Return Data:

```json
{
  "status": "success",
  "data": {
    "tour": {
      "ratingsAverage": 4.8,
      "ratingsQuantity": 23,
      "images": ["tour-2-1.jpg", "tour-2-2.jpg", "tour-2-3.jpg"],
      "startDates": [
        "2021-06-19T04:00:00.000Z",
        "2021-07-20T04:00:00.000Z",
        "2021-08-18T04:00:00.000Z"
      ],
      "_id": "67e2c108cb68a45eae6c62d8",
      "name": "The Sea Explorer",
      "duration": 7,
      "maxGroupSize": 15,
      "difficulty": "medium",
      "price": 497,
      "summary": "Exploring the jaw-dropping US east coast by foot and by boat",
      "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "imageCover": "tour-2-cover.jpg",
      "__v": 0
    }
  }
}
```

- Description: Here provide the id of the single tour that you want to get

#### GET SINGLE TOUR (FILTER):

You can filter the output with parameters.
Accepted parameter modifiers:

- gt - (Greater Then)
- gte - (Greater Then Equal)
- lt - (Less Then)
- lte - (Less Then Equal)

##### Example:

`/api/v1/tours?price[gt]=500`

Here _price_ the endpoint will return data only the price less than 500.

#### GET SINGLE TOUR (SORT):

You can sort the output by name price or any fields in ascending or descending order.

- For `ASC` order: `api/v1/tours?sort=name`
- For `DESC` order: `/api/v1/tours?sort=-name`
