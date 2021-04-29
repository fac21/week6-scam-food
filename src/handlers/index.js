const html = require("../components/html")

function getHomepage(request, response){
    let mainContent = `
    <nav>
        <a href= "/log-in">
            Log In
        </a>
        <a href="/sign-up">
            Sign Up
        </a>
        <a href="/view-posts">
            View Recommendations
        </a>
        <a href="/add-post">
            Add a Recommendation
        </a>
    </nav>
    `;
    let title = 'Home|FAC Recommendations'
    response.send(html.getReusableHTML(title, mainContent))
}

module.exports = {getHomepage}