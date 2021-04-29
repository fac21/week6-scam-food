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




function addNewUser(email, hashpassword, name){
  return db.query("INSERT INTO users(email, hashpassword, name) VALUES ($1, $2, $3)", [email, hashpassword, name])
}


function createSession(sid, email){
  const INSERT_SESSIONS = `
  INSERT INTO sessions(sid, email) VALUES ($1, $2)
  RETURNING sid
  `;
  return db.query(INSERT_SESSIONS, [sid, email])
  .then((result) => {
    console.log(result.rows[0].sid);
  });  
   
}

module.exports = { getAllRecommendations, getUser, addNewUser, createSession }

