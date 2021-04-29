const db = require("./connection.js");


function getAllRecommendations()  {
  return db.query("SELECT restaurants.name, recommendations.recommendations FROM restaurants INNER JOIN recommendations ON restaurants.id = recommendations.restaurants_id;")
  .then((result) => result.rows)
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

function addRecommendation(restaurant, recommendation, user_id){
  db.query(`SELECT restaurants.id FROM restaurants WHERE name='${restaurant}';`)
  .then((table)=> {
    if(table.rows[0].id){return table.rows[0].id}
    else {return "new"}})
  .then((restaurantID) => {
     if (restaurantID == "new"){
       db.query("INSERT INTO restaurants(name) VALUES ($1) RETURNING restaurants.id", [restaurant])
     }
   })
  .then(restID => db.query("INSERT INTO recommendations(recommendations, restaurant_id, user_id) VALUES ($1, $2, $3)"), [recommendation, restID, userID])
  }


  function getCookie(request, response){
    const cookies = request.cookies;
    const sid = cookies.sid;
    db.query(`SELECT user_id FROM sessions WHERE id = '${sid}' `)
    .then((result) => console.log(result));
    //query database and getthe user id from cookie sid
    //return user_id
  }


module.exports = { getAllRecommendations, getUser, addNewUser, addRecommendation, getCookie}

