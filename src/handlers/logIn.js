const html = require("../components/html")
const model = require("../../database/model");

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

function logIn(request, response) {
   const { email, password } = request.body;
    model.getUser(email)
    .then((DBuser) => bcrypt.compare(password, DBuser.hashpassword))
    .then((match) => {
        if(!match) {
            throw new Error('Password mismatch')
        } else {
            respond.send(`<h1>Welcome back ${email}</h1>`)
        }
    })
}

module.exports = {getLogin, logIn}