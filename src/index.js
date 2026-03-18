function displayIdeas(response) {

  let foodElement = document.querySelector(".food");

  // Remove ```html if AI adds it
  let recipe = response.data.answer
    .replace(/```html/g, "")
    .replace(/```/g, "");

  foodElement.innerHTML = "";

  new Typewriter(".food", {
    strings: recipe,
    autoStart: true,
    delay: 2,
    cursor: ""
  });
}

function generateDesserts(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "4dab37b88309477t52afoc35f8fb2163";

  let prompt = `User ingredient: ${instructionsInput.value}. Generate 3 dessert recipes using this ingredient.`;

  let context = "You are a dessert expert. Suggest 3 desserts related to the user's instruction. Return the answer in HTML. Use <strong> for the title and <br> for spacing. Under each dessert include a short description and a clickable link using <a href='https://www.google.com/search?q=DESSERT+RECIPE' target='_blank'>View Recipes</a>. Do not include markdown or code blocks.";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let foodElement = document.querySelector(".food");
  foodElement.innerHTML = "🍰 Generating  dessert ideas...";

  axios.get(apiURL).then(displayIdeas);
}

let dessertElement = document.querySelector("#dessert-idea-generator");
dessertElement.addEventListener("submit", generateDesserts);