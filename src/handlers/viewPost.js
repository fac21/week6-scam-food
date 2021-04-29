const html = require("../components/html")
const model = require("../../database/model")

function getRecommendationPage(request, response){
  model.getAllRecommendations()
  .then((result) => { 
      return recommendationList = result.map((result) => `<ul><li>${result.name}</li><li>${result.recommendations}</li></ul>`).join(""); 
  })
  .then((result) => {
    let mainContent = `
      ${result}
    `
    let title = "FAC Recommendations"
    response.send(html.getReusableHTML(title, mainContent))
  })
}

//a function for adding recommendation 
// function addRecommendation(request, response){


// }

module.exports = { getRecommendationPage }