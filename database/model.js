const db = require("./connection.js");

function getAllRecommendations()  {
  return db.query("SELECT restaurants.name, recommendations.recommendations FROM restaurants INNER JOIN recommendations ON restaurants.id = recommendations.restaurants_id;").then((result) => result.rows)
  .catch((error) => {
      console.error(error);
    });

}

function addNewUser(email, hashpassword, name){
  return db.query("INSERT INTO users(email, hashpassword, name) VALUES ($1, $2, $3)", [email, hashpassword, name])
}


module.exports = { getAllRecommendations, addNewUser }