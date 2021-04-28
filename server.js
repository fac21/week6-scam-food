const express = require("express");
const server = express();

const staticHandler = express.static("public");
server.use(staticHandler);

const homePage = require("./src/handlers/index");
const signUpPage = require("./src/handlers/signUp");

server.get("/", homePage.getHomepage)

server.get("/sign-up", signUpPage.getSignUp)

 
const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => { console.log(`Listening on http://localhost:${PORT}`)});









