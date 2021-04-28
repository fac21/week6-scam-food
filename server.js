const express = require("express");
const staticHandler = express.static("public");

const server = express();
server.use(staticHandler);





 
const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => { console.log(`Listening on http://localhost:${PORT}`)});









