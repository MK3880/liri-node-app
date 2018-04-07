//require("dotenv").config();
//require("keys.js"); <==== none of this junk worked even though I npm installed the modules I needed. 
var request = require("request");

//var client = new twitter(keys.twitter);


var inquirer = require("inquirer");

   inquirer
       //I could not figure out how to make Switch function so would have coded the commands into the form of a list 
       // {
           //type: "list",
           //message: "which do you choose?",
           //choices: ["My Tweets","Movie This","Do What it Says"],
           //name: "selection"


       //} I decided to focus on the movie portion, which works below.
   
   
        .prompt ([

    {
        type: "input",
        message: "What movie do you want to know about?",
        name: "moviename"
    },
   
    {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true
    },





])

.then(function(inquirerResponse) {

    if (inquirerResponse.confirm) {
        console.log("Looking up: " + inquirerResponse.moviename);
//===============moviestuff==============
var queryUrl = "http://www.omdbapi.com/?t=" + inquirerResponse.moviename + "&y=&plot=short&apikey=trilogy";
//console.log(queryUrl);
request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log("RELEASE YEAR: " + JSON.parse(body).Year);
        console.log("PLOT: " + JSON.parse(body).Plot);
        console.log("ACTORS: " + JSON.parse(body).Actors);
        console.log("IMDB RATING: "+ JSON.parse(body).imdbRating);
        console.log("FILMING LOCATION(S): " + JSON.parse(body).Country);
        

//=============================
    }


}
)
}

else {
    console.log("We can look up " + inquirerResponse.moviename + " some other time. Cya :3c");
}

}
)
;