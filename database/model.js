const db = require("./connection.js");

function getAllRecommendations()  {
  return db.query("SELECT restaurants.name, recommendations.recommendations FROM restaurants INNER JOIN recommendations ON restaurants.id = recommendations.restaurants_id;").then((result) => result.rows)
  .catch((error) => {
      console.error(error);
    });

}

function getUser(email)  {
  return db.query(`SELECT email, hashpassword FROM users WHERE email = '${email}';`)
  .then((result) => result.rows)
  .catch((error) => {
      console.error(error);
    });

}



module.exports = { getAllRecommendations, getUser }