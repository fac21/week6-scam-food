const express = require("express");
const server = express();

const staticHandler = express.static("public");
server.use(staticHandler);

const homePage = require("./src/handlers/index");
const signUpPage = require("./src/handlers/signUp");
const addPostPage = require("./src/handlers/viewPost");
const bodyParser = express.urlencoded();


server.get("/", homePage.getHomepage)
server.get("/sign-up", signUpPage.getSignUp)
server.get("/view-posts", addPostPage.getRecommendationPage)
// server.post("view-posts", addPostPage.addRecommendation)

server.post("/sign-up", bodyParser, signUpPage.post)

 
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => { console.log(`Listening on http://localhost:${PORT}`)});









