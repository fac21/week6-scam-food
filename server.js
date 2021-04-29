const express = require("express");
const server = express();

const staticHandler = express.static("public");
server.use(staticHandler);

const homePage = require("./src/handlers/index");
const signUpPage = require("./src/handlers/signUp");
const addPostPage = require("./src/handlers/viewPost")

server.get("/", homePage.getHomepage)
server.get("/sign-up", signUpPage.getSignUp)
server.get("/view-posts", addPostPage.getRecommendationPage)
// server.post("view-posts", addPostPage.addRecommendation)


 
const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => { console.log(`Listening on http://localhost:${PORT}`)});









