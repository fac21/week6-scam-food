const html = require("../components/html");
const model = require("../../database/model");
const { response } = require("express");

function getAddPost(request, response){
    const title = `Add Post | FAC Recommendations`
    const mainContent = `
    <form method="POST">
    <label for="restaurant">
        Restaurant Name
        <span aria-hidden="true">*</span>
    </label>
    <input type="text" name="restaurant" id="restaurant" required>
    <label for="recommendation">
        Recommendation (Comment)
        <span aria-hidden="true">*</span>
    </label>
    <input name="recommendation" id="recommendation" type="text" required>
    <button>
        Submit
    </button>
    </form>
    `
    response.send(html.getReusableHTML(title, mainContent));
}

function post(request, response){
    const {restaurant, recommendation} = request.body
    const user_id = model.getCookie(request, response);
    //model.addRecommendation(restaurant, recommendation, user_id)
    response.redirect("/view-posts")

}

module.exports = {getAddPost, post}