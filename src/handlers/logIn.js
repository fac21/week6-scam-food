const html = require("../components/html")
const model = require("../../database/model");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const { response } = require("express");


function getLogin(request, response){
    const title = 'Log In | FAC Recommendations'
    const logInContent = `  
        <h1>Log In</h1>
        <form method = 'POST'>         
        <label for="email">
            Email
        </label>
        <input name="email" id="email" type="email">

        <label for="password">
            Password
        </label>
        <input name="password" id="password" type="password">
        <button> Submit
        </button>
        </form>
    `
    response.send(html.getReusableHTML(title, logInContent))
}


function saveUserSession(user){
    const sid = crypto.randomBytes(18).toString("base64");
    return model.createSession(sid, user.email )
}


function verifyUser(email, password) {
   return model.getUser(email)
  .catch((error) => {
    console.error(error)
    response.redirect("/error")
    response.send(`<h1>There is an error</h1>`);
  })
    .then((user) => {
        return bcrypt.compare(password, user[0].hashpassword)
    .then((match) => {
        if(!match) {
            throw new Error('Password mismatch')
    } else {
     delete user[0].hashpassword;
        return user[0];
            }
    });
    })
    
}



function logIn(request, response) {
   const { email, password } = request.body;
        //if(DBuser.length === 0){
         //response.redirect("/sign-up")   
        //response.send(`<p>This ${email} does not have an account. Sign up please.</a></p>`)
        //} else {
            verifyUser(email, password)
            .then((result) => {
                saveUserSession(result)
            })
            .then((sid) => {
                console.log(sid);
                response.cookie("sid", sid, {
                httpOnly: true,
                maxAge: 60
                })
            response.redirect("/");
            })      
        }
 





module.exports = {getLogin, logIn}