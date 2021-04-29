const express = require("express");
const server = express();

const staticHandler = express.static("public");
server.use(staticHandler);

const bodyParser = express.urlencoded();

const homePage = require("./src/handlers/index");
const signUpPage = require("./src/handlers/signUp");
const addPostPage = require("./src/handlers/viewPost");
const logInPage = require("./src/handlers/logIn");

server.get("/", homePage.getHomepage)
server.get("/sign-up", signUpPage.getSignUp)
server.get("/view-posts", addPostPage.getRecommendationPage)
server.get("/log-in", logInPage.getLogin)
// server.post("view-posts", addPostPage.addRecommendation)
server.post("/log-in", bodyParser, logInPage.logIn)

 
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => { console.log(`Listening on http://localhost:${PORT}`)});









