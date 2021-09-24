const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku) 
console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV === "production"){
        app.use(express.static("client/build")
        );
    }

// Add routes
app.use(routes);
    
// Connect to Mongo db)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/decodingdiabetes");
mongoose.set('useFindAndModify', false);

// Run API
app.listen(PORT, function() {
    console.log (`🌎  ==> API Server now listening on PORT ${PORT}!`);
});