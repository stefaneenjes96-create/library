const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages
    this.hasRead = hasRead
}

myLibrary.push(
    new Book(
        "1984",
        "George Orwell",
        300,
        true
    ),
    new Book(
        "wool",
        "unknown",
        298,
        false
    )
)


renderShelf();
createForm();


function createForm() {
    const dialog = document.querySelector("#book-info");
    const form = document.createElement("form");

    const bookTitle = document.createElement("p");
    bookTitle.textContent = "title";
    const bookTitleInput = document.createElement("input");
    bookTitleInput.minLength = "1"

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
    addBook.type = "submit";
    addBook.textContent = "Add Book"
    addBook.addEventListener("click", (e) => {
        e.preventDefault();
        addBookToLibrary();
        dialog.close();
        dialog.style.display = "none";
    })
    
    form.append(bookTitle, bookTitleInput, bookAuthor, bookAuthorInput, 
        bookPages, bookPagesInput,
        hasRead, hasReadInput,
        addBook)
    dialog.append(form);

    function addBookToLibrary() {
        if (bookAuthorInput.value === "") {
            bookAuthorInput.value = "Unknown";
        }


        const book = new Book(
            bookTitleInput.value, 
            bookAuthorInput.value,
            bookPagesInput.value, 
            hasReadInput.checked
        )

        myLibrary.push(book);
        renderShelf()
    }
}

function renderShelf() {
    const bookshelf = document.querySelector(".bookshelf");
    bookshelf.textContent = "";
    for (const book of myLibrary) {
        renderBook(book);
    }
}

function renderBook(book) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book")
    const bookshelf = document.querySelector(".bookshelf")

    const bookTitle = document.createElement("p")
    bookTitle.textContent = `Title: ${book.title}`

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;

    const hasRead = document.createElement("p")
    hasRead.textContent = "Read book: "
    const hasReadCheckbox = document.createElement("input");
    hasReadCheckbox.type = "checkbox";
    if (book.hasRead) {
        hasReadCheckbox.checked = true;
    }
    hasRead.append(hasReadCheckbox);

    const deleteBook = document.createElement("p")
    deleteBook.textContent = "Delete book"
    deleteBook.addEventListener("click", () => {
        bookDiv.remove()
        const bookToRemove = myLibrary.findIndex(item => item.id === book.id)
        myLibrary.splice(bookToRemove, 1)
    })

    bookDiv.append(bookTitle, author, pages, hasRead, deleteBook);
    bookshelf.append(bookDiv)
}

const addBookButton = document.querySelector("button");
const dialog = document.querySelector("#book-info");

addBookButton.addEventListener("click", () => {
    dialog.showModal();
    dialog.style.display = "flex";
    clearForm();
})

function clearForm() {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input");
    Array.from(inputs).forEach((element) => element.value = "");
}