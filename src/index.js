function generateDesserts(event){
  event.preventDefault();

 

 new Typewriter('.food', {
  strings: "Chocolate Chip Cookies",
  autoStart: true,
  delay:1.9, 
  cursor:""
});
 
}

let dessertElement = document.querySelector("#dessert-idea-generator");
dessertElement.addEventListener("submit", generateDesserts)