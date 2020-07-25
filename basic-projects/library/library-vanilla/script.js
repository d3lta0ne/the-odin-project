class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }
}

const myLibrary = [
  new Book(
    "The Communist Manifesto",
    "Karl Marx and Friedrich Engels",
    288,
    false
  ),
  new Book(
    "The Will to Change: Men, Masculinity, and Love",
    "bell hooks",
    188,
    true
  ),
  new Book(
    "Teaching to Transgress: Education as the Practice of Freedom",
    "bell hooks",
    216,
    true
  ),
];

function addBookToLibrary(name, author, pages, readStatus) {
  let book = new Book(name, author, pages, readStatus);
  myLibrary.push(book);
  render();
}

// // Hook the array up to your HTML with a render() function that loops through
// the array and displays each book on the page. You can display them in some sort of table,
// or each on their own “card”. It might help for now to manually add a few books to your array
// so you can see the display.
function render() {
  //TODO:
  const bookshelf = document.querySelector(".books");

  //   If there are no books on the shelf initialize all the books
  if (!bookshelf.hasChildNodes()) {
    myLibrary.forEach((book, index) => {
      //   Append a Book Card
      bookshelf.appendChild(createCard(book, index));
    });
  } else {
    //   Add the last book to the bookshelf
    bookshelf.appendChild(
      createCard(myLibrary[myLibrary.length - 1], myLibrary.length - 1)
    );
  }
}

function createCard(book, index) {
  let bookCard = document.createElement("div");
  bookCard.className = "book-container";
  bookCard.id = "book-" + index;

  // Main Card Body
  bookCard.innerHTML = `
                <h2>${book.title}</h2>
                <h3>by ${book.author}</h3>
                <p>Pages: ${book.pages}</p>
                <p>${book.readStatus ? "Read" : "Not Read"}</p>
                `;

  // Options Body
  const options = document.createElement("div");
  options.classList.add("options");
  options.innerHTML = `
                <button class="toggle">Toggle Read</button>
                <button class="delete">Delete</button>
                `;
  bookCard.appendChild(options);

  // Event Listeners for each card

  // // Add EventListeners on all Book Cards
  // const del = Array.from(document.getElementsByClassName("delete"));
  // del.forEach(function (button, index) {
  //   button.addEventListener("click", function () {
  //     myLibrary.splice(index, 1);
  //     render();
  //   });
  // });

  return bookCard;
}

render();

// // Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.
// let popupContainer = document.getElementById("popupContainer");
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let readStatus = document.getElementById("readStatus");

// document.getElementById("newBook").onclick = function () {
//   popupContainer.style.display = "flex";
// };

// document.getElementById("closeButton").onclick = function(){
//     popupContainer.style.display = "none";
//     name.value="";
//     author.value="";
//     pages.value="";
//     readStatus.checked=false;
// };

// Function that adds new book into the library
document.getElementById("submit").onclick = function (e) {
  e.preventDefault();

  // Check for empty fields if found change popUp display: attr to display
  if (
    title.value.trim() != "" &&
    author.value.trim() != "" &&
    pages.value > 0
  ) {
    addBookToLibrary(
      title.value,
      author.value,
      pages.value,
      readStatus.checked
    );
    //     popupContainer.style.display = "none";
    //     title.value = "";
    //     authorName.value = "";
    //     noPages.value = "";
    //     readStatus.checked = false;
    //   } else {
    //     document.getElementById("alertContainer").style.display = "flex";
  }
};
