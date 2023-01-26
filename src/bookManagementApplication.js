import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
var books = [];
var input = prompt("Which operation you want to perform[add|list|exit]:");
while (input != "exit") {
  if (input == "add") {
    var newBook = prompt("Enter the name of the book:");
    books.push(newBook);
  } else if (input == "list") {
    console.log("List of available books:");
    console.log(books);
  } else {
    console.log("Choose Valid Option");
  }
  input = prompt("Which operation you want to perform[add|list|exit]:");
}
console.log("Thanks for your application");
