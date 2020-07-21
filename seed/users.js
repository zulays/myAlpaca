const db = require("../db/connection")
const User = require("../models/user")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const users = [

    {
      "username": "EgyptMed1",
      "email": "EgyptMed1@gmail.com",
      "password": "12345",
      "from_location": "Egypt",
      "to_location": "Dallas",
      "education": "UT Southwestern",
      "area_of_study": {
        healthcare: true,
        math: true
      },
      "hobbies": {
        cooking: true,
        jogging: true
      },
      "assistance": {
        currency: true
      },
      "priorities": {
        academics: true,
        staying_in_touch: true
      }
    },
    {
      "username": "Jane123",
      "email": "Jane123@gmail.com",
      "password": "12345",
      "from_location": "Bulgaria",
      "to_location": "New York City",
      "education": "New York University",
      "area_of_study": {
        science: true,
        art: true
      },
      "interests": {
        music: true
      },
      "hobbies": {
        dance: true
      },
      "assistance": {
        housing: true
      },
      "priorities": {
        culture: true
      }
    },
    {
      "username": "JohnDoe",
      "email": "JohnDoe@gmail.com",
      "password": "12345",
      "from_location": "Japan",
      "to_location": "Atlanta",
      "education": "Emory University",
      "area_of_study": {
        science: true
      },
      "interests": {
        sports: true
      },
      "hobbies": {
        bar_hopping: true
      },
      "assistance": {
        maps: true
      },
      "priorities": {
        shopping: true
      }
    },
    {
      "username": "Anabella24",
      "email": "Anabella24@gmail.com",
      "password": "12345",
      "from_location": "California",
      "to_location": "Florence",
      "education": "University of Florence",
      "area_of_study": {
        art: true,
        literature: true
      },
      "interests": {
        space: true,
        pop_culture: true
      },
      "hobbies": {
        jogging: true,
        hiking: true
      },
      "assistance": {
        language: true,
        maps: true
      },
      "priorities": {
        sightseeing: true,
        culture: true
      }
    },
    {
      "username": "Jack789",
      "email": "jack@gmail.com",
      "password": "12345",
      "from_location": "India",
      "to_location": "Seattle",
      "education": "University of Washington",
      "area_of_study": {
        healthcare: true
      },
      "interests": {
        politics: true
      },
      "hobbies": {
        bar_hopping: true
      },
      "assistance": {
        local_connections: true
      },
      "priorities": {
        culture: true
      }
    }
  ]


  await User.insertMany(users)
  console.log("Created users!")
}

const run = async () => {
  await main()
  db.close()
}

run()
