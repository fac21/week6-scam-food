const express = require("express");
const server = express();

const staticHandler = express.static("public");
server.use(staticHandler);

const homePage = require("./src/handlers/index");

server.get("/", homePage.getHomepage)



 
const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => { console.log(`Listening on http://localhost:${PORT}`)});









