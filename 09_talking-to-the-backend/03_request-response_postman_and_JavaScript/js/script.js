const response = await fetch("http://localhost:3000/todo/Ii3hf6K");
const json = await response.json();
console.table(json);
