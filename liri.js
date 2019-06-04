require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require('axios');
var fs = require('fs');


var liriSearch = process.argv[2]
var search = process.argv.slice(3).join(" ");

// Search Spotify
switch (liriSearch) {

    case ('spotify-this-song'): {

        console.log(search)
        spotify.search({ type: 'track', query: search, limit: 1 }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log(data.tracks.items[0].artists[0].name);
            console.log(data.tracks.items[0].name)
            console.log(data.tracks.href)
            console.log(data.tracks.items[0].album.name)

        });
    }
        break;

    // case ('do-what-it-says'): {

    //     function randomtext() {
    //         fs.readFile('random.txt', 'utf8', function (err, data) {
    //           if (err) {
    //             return console.log(err);
    //         }
    //       ​
    //           var random = data.split(',');
    //       ​
    //           console.log(randomSearch[1]);

    //         spotify.search({ type: 'track', query: randomSearch[1], limit: 1}, function(err, data) {
    //         if (err) {
    //           return console.log('Error occurred: ' + err);
    //         }
    //         console.log(data.tracks.items[0].artists[0].name);
    //         console.log(data.tracks.items[0].name)
    //         console.log(data.tracks.href)
    //         console.log(data.tracks.items[0].album.name)

    //         });
    //       ​
    //         })
    //     }
    // }

    case ('concert-this'): {

        var concerts = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";

        axios.get(concerts).then(
            function (response) {
                if (!response.data.length) {
                    console.log("Cant find that artist")
                    return
                }
                console.log(response.data[0].venue.name);
                console.log(response.data[0].venue.country);
                console.log(response.data[0].datetime)
                console.log(response.data[0].lineup[0]);
            }

        );

    }
        break;

    case ('movie-this'): {

        var movies = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";
        // if(searchFilm != liriFilm){
        //     console.log("If you haven't watched 'Mr. Nobody,' the you should  http://www.imdb.com/title/tt0485947/. It's on Netflix!")
        // }

        console.log(movies);

        axios.get(movies).then(
            function (response) {
                console.log(response.data.Title)
                console.log(response.data.Year);
                console.log(response.data.imdbRating);
                console.log(response.data.Country);
                console.log(response.data.Language);
                console.log(response.data.Plot);
                console.log(response.data.Actors);
            }
        );
    }
        break;

    case 'random':


        fs.readFile('random.txt', 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            var random = data.split(',');
            console.log(random[1]);

            spotify.search({ type: 'track', query: random[1], limit: 1 }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }
                console.log(data.tracks.items[0].artists[0].name);
                console.log(data.tracks.items[0].name)
                console.log(data.tracks.href)
                console.log(data.tracks.items[0].album.name)

            })

        })
}














// search concerts
// var liriConcert = process.argv[2] 
// var searchConcert = process.argv.slice(3).join(" "); 

// switch(liriConcert) {

//     case('concert-this'):{ 

//         var concerts = "https://rest.bandsintown.com/artists/" + searchConcert + "/events?app_id=codingbootcamp";                                            

//         axios.get(concerts).then(
//             function(response) {
//                 if (!response.data.length) {
//                     console.log("Cant find that artist")
//                     return
//                 } 
//                 console.log(response.data[0].venue.name);
//                 console.log(response.data[0].venue.country);
//                 console.log(response.data[0].datetime)
//                 console.log(response.data[0].lineup[0]);  
//             }

//         );

//     }
// }

// // search movie
// var liriFilm = process.argv[2] 
// var searchFilm = process.argv.slice(3).join(" "); 

// switch(liriFilm) { 

//     case('movie-this'): {

//         var movies = "http://www.omdbapi.com/?t=" + searchFilm + "&y=&plot=short&apikey=trilogy";
//             if(searchFilm != liriFilm){
//                 console.log("If you haven't watched 'Mr. Nobody,' the you should  http://www.imdb.com/title/tt0485947/. It's on Netflix!")
//             }

//         console.log(movies);

//         axios.get(movies).then(
//         function(response) {
//             console.log(response.data.Title)
//             console.log(response.data.Year);
//             console.log(response.data.imdbRating);
//             console.log(response.data.Country);
//             console.log(response.data.Language);
//             console.log(response.data.Plot);
//             console.log(response.data.Actors);
//         }
//         );
//     }
// }

// Search random.txt file 
// var randomSearch = process.argv[2] 

// var searchRandom = process.argv.slice(3).join(" "); 

// switch (randomSearch) {

//     case ('do-what-it-says'): {

//         function randomtext() {
//             fs.readFile('random.txt', 'utf8', function (err, data) {
//               if (err) {
//                 return console.log(err);
//             }
//           ​
//               var random = data.split(',');
//           ​
//               console.log(randomSearch[1]);

//             spotify.search({ type: 'track', query: randomSearch[1], limit: 1}, function(err, data) {
//             if (err) {
//               return console.log('Error occurred: ' + err);
//             }
//             console.log(data.tracks.items[0].artists[0].name);
//             console.log(data.tracks.items[0].name)
//             console.log(data.tracks.href)
//             console.log(data.tracks.items[0].album.name)

//             });
//           ​
//             })
//         }
//     }
















