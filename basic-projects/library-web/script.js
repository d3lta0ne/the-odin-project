let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(name, author, pages, readStatus) {
    let book = new Book(name, author, pages, readStatus);
    myLibrary.push(book);
    render();
}


// // Hook the array up to your HTML with a render() function that loops through 
// the array and displays each book on the page. You can display them in some sort of table,
// or each on their own “card”. It might help for now to manually add a few books to your array
// so you can see the display.
function render(){
    //TODO: 
    const bookshelf = document.querySelector(".books");
    bookshelf.appendChild();
}

// // Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.
// let popupContainer = document.getElementById("popupContainer");
// let name = document.getElementById("name");
// let authorName = document.getElementById("authorName");
// let noPages = document.getElementById("noPages");
// let readStatus = document.getElementById("readStatus")

// document.getElementById("newBook").onclick = function(){
//     popupContainer.style.display = "flex";
// };

// document.getElementById("closeButton").onclick = function(){
//     popupContainer.style.display = "none";
//     name.value="";
//     authorName.value="";
//     noPages.value="";
//     readStatus.checked=false;
// };

// document.getElementById("submit").onclick = function(){
//     // Check for empty fields if found change popUp display: attr to display
//     if(name.value.trim() != "" && authorName.value.trim() != "" && noPages.value != ""){
//         addBookToLibrary(name.value, authorName.value, noPages.value, readStatus.checked);
//         popupContainer.style.display = "none";
//         name.value="";
//         authorName.value="";
//         noPages.value="";
//         readStatus.checked=false;
//     }
//     else{
//         document.getElementById("alertContainer").style.display = "flex";
//     }
// };