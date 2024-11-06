const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
const output = document.getElementById("output");

for (let i = 0; i < people.length; i++) {
    output.innerHTML += people[i].toUpperCase() + "<br>";
}