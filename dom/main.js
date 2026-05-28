const title = document.getElementById("title");

const students = ["hang", "Hari", "mohan", "Dev"];
const listElement = document.getElementById("list");

students.map(student => {
  const listItems = document.createElement("li");
  listItems.innerText = student;
  listElement.appendChild(listItems);
});
