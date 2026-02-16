const myLibrary = [];

function Book(id, title, author, pages, hasRead) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages
    this.hasRead = hasRead
}

function createForm() {
    console.log("activated")


    const bookshelf = document.querySelector(".bookshelf");
    const form = document.createElement("form");

    const bookTitle = document.createElement("p");
    bookTitle.textContent = "title";
    const bookTitleInput = document.createElement("input");

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = "Author";
    const bookAuthorInput = document.createElement("input");

    const bookPages = document.createElement("p");
    bookPages.textContent = "pages";
    const bookPagesInput = document.createElement("input");

    const hasRead = document.createElement("p");
    hasRead.textContent = "has read?";
    const hasReadInput = document.createElement("input");
    hasReadInput.type = "checkbox";

    const addBook = document.createElement("button");
    addBook.textContent = "Add Book"
    addBook.addEventListener("click", (e) => {
        e.preventDefault();
        myLibrary.push(new Book(1, bookTitleInput.value, bookAuthorInput.value,
            bookPagesInput.value, hasRead.value))
    })
    
    form.append(bookTitle, bookTitleInput, bookAuthor, bookAuthorInput, 
        bookPages, bookPagesInput,
        hasRead, hasReadInput,
        addBook)
    bookshelf.append(form);
}


const addBookButton = document.querySelector("button");

addBookButton.addEventListener("click", () => {
    createForm();
})