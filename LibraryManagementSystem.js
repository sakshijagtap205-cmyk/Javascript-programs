class Book 
{
    constructor(bookId, title, author, isIssued = false)
  {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.isIssued = isIssued;
    }

    display()
  {
        console.log("Book ID :", this.bookId);
        console.log("Title   :", this.title);
        console.log("Author  :", this.author);
        console.log("Status  :", this.isIssued ? "Issued" : "Available");
        console.log("----------------------------");
    }
}

class LibraryManagementSystem {
    constructor() {
        this.books = [];
    }

    addBook(bookId, title, author) {
        const book = new Book(bookId, title, author);
        this.books.push(book);
        console.log("Book added successfully.\n");
    }

    displayAllBooks() {
        if (this.books.length === 0) {
            console.log("No books available.");
            return;
        }

        console.log("===== Library Books =====");
        this.books.forEach(book => book.display());
    }

    searchBook(bookId) {
        const book = this.books.find(b => b.bookId === bookId);

        if (book) {
            console.log("Book Found:");
            book.display();
        } else {
            console.log("Book not found.");
        }
    }

    issueBook(bookId) {
        const book = this.books.find(b => b.bookId === bookId);

        if (book && !book.isIssued) {
            book.isIssued = true;
            console.log("Book issued successfully.");
        } else if (book && book.isIssued) {
            console.log("Book is already issued.");
        } else {
            console.log("Book not found.");
        }
    }

    returnBook(bookId) {
        const book = this.books.find(b => b.bookId === bookId);

        if (book && book.isIssued) {
            book.isIssued = false;
            console.log("Book returned successfully.");
        } else if (book && !book.isIssued) {
            console.log("Book was not issued.");
        } else {
            console.log("Book not found.");
        }
    }
}

// Main Program
const library = new LibraryManagementSystem();

library.addBook(1, "JavaScript Basics", "John Smith");
library.addBook(2, "Data Structures", "Alice Brown");
library.addBook(3, "Web Development", "David Lee");

library.displayAllBooks();

library.searchBook(2);

library.issueBook(2);

library.displayAllBooks();

library.returnBook(2);

library.displayAllBooks();
