function displayIdeas (response){
   new Typewriter('.food', {
  strings: response.data.answer,
  autoStart: true,
  delay:2, 
  cursor:""
});

}



function generateDesserts(event){
  event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
  let apiKey= "4dab37b88309477t52afoc35f8fb2163";
  let prompt =  `user instuction:Generate a short dessert recipe that ${instructionsInput.value} has submited`;
  let context= "You are a dessert expert and love listing different recipes of desserts from around the world. Youre mission is  suggest different kinds of desserts that relates with user Instruction. Make sure to follow the user intruction ";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
 
  let foodElement = document.querySelector(".food");
foodElement.innerHTML = "⏳ Generating your dessert recipe...";
  
axios.get(apiURL).then(displayIdeas)


 
}

let dessertElement = document.querySelector("#dessert-idea-generator");
dessertElement.addEventListener("submit", generateDesserts)