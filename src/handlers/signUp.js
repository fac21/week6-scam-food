const html = require("../components/html")

function getSignUp(request, response){
    const title = 'Sign Up | FAC Recommendations'
    const signUpContent = `           
        <label for="username">
            Username
        </label>
        <input type="text" name="username" id="username">
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
    `
    response.send(html.getReusableHTML(title, signUpContent))
}

module.exports = {getSignUp}