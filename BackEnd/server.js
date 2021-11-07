const express = require('express') //Creates a variable to Include Express with the node REQUIRE Function
const cors = require('cors') //Creates a variable to Include CORS with the node REQUIRE Function
const app = express() //Create an Express application and store as a Varaible
const port = 4000 //Define a Port variable

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {//Create a Node response to a HTTP Get request at the root Address of localHost, responding with a message
    res.send('Hello World')
})

app.get('/api/movies', (req, res) => {//Create another Node response to a HTTP Get request at the /api/movies Address of localHost, responding with JSON Data
    const myMovies =//Create a variabe to store the Json Data
        [
            {
                "Title": "Avengers: Infinity War",
                "Year": "2018",
                "imdbID": "tt4154756",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
                "Title": "Captain America: Civil War",
                "Year": "2016",
                "imdbID": "tt3498820",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
                "Title": "World War Z",
                "Year": "2013",
                "imdbID": "tt0816711",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
            }
            , {
                "Title": "War of the Worlds",
                "Year": "2005",
                "imdbID": "tt0407304",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
            }
        ]

    res.json({ movies: myMovies })//Respond with Json Data
})

app.listen(port, () => {//Create a Node HTTP Server and Specify the Port to listen with the 'port' Variable
    console.log(`Example app listening at http://localhost:${port}`)
})