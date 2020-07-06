// Write a constructor for making “book” objects. 
// We will revisit this in the project at the end of this lesson.
// Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function (){
        if(this.read === true) return `"${this.title} by ${this.author}, ${this.pages} pages, already read"`;
        return `"${this.title} by ${this.author}, ${this.pages} pages, not read yet"`;
    }
}