const html = require("../components/html")
const model = require("../../database/model")
const bcrypt = require("bcryptjs")


function getSignUp(request, response){
    const title = 'Sign Up | FAC Recommendations'
    const signUpContent = `  
        <form method="POST">         
        <label for="username">
            Username
            <span aria-hidden="true">*</span>
        </label>
        <input type="text" name="username" id="username" required>
        <label for="email">
            Email
            <span aria-hidden="true">*</span>
        </label>
        <input name="email" id="email" type="email" required>
        <label for="password">
            Password
            <span aria-hidden="true">*</span>
        </label>
        <div id="passwordRequirements">
            Passwords must contain at least one letter and one number, and contain at
            least 8 characters.
        </div>
        <input name="password" id="password" type="password" aria-describedby="passwordRequirements" minlength="8" required>
        <button> Submit
        </button>
        </form>
    `
    response.send(html.getReusableHTML(title, signUpContent))
}

function post(request, response){
    console.log(request.body);
    const username = request.body.username;
    const email = request.body.email;
    const password = request.body.password;
    bcrypt.hash(password, 10)
    .then((hashpassword) =>
        model.addNewUser(email, hashpassword, username))
    .then(() => {
        response.redirect("/")
    })
}
module.exports = {getSignUp, post}