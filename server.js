const express = require("express");
const server = express();

const staticHandler = express.static("public");
server.use(staticHandler);

const bodyParser = express.urlencoded();
const homePage = require("./src/handlers/index");
const signUpPage = require("./src/handlers/signUp");
const viewPostPage = require("./src/handlers/viewPost");
const logInPage = require("./src/handlers/logIn");
const addPostPage = require("./src/handlers/addPost");
const cookieParser = require("cookie-parser");



server.get("/", homePage.getHomepage)
server.get("/sign-up", signUpPage.getSignUp)
server.get("/view-posts", viewPostPage.getRecommendationPage)
server.get("/log-in", logInPage.getLogin)
server.get("/add-post", addPostPage.getAddPost)
server.use(cookieParser())
// server.post("view-posts", addPostPage.addRecommendation)

server.post("/log-in", bodyParser, logInPage.logIn)
server.post("/add-post", bodyParser, addPostPage.post)
server.post("/sign-up", bodyParser, signUpPage.post)


 
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => { console.log(`Listening on http://localhost:${PORT}`)});









