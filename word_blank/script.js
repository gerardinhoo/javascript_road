// Mad Libs game => Free Bootcamp Challenge;
const wordBlank = (noun, adj, verb, adverb) => {
  return `People call me ${noun}. People consider me to be ${adj} at soccer. I would love to ${verb} on ${adverb} field.`;
};
let showWords = wordBlank("Gerardinho", "good", "score", "beautiful");

function mySentence() {
  document.getElementById("demo").innerHTML = showWords;
}
