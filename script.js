const myLibrary = [];

function Book(title, author, pages, isRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
}

function addBookToLibrary(book) {
	myLibrary.push(book);
}

let book1 = new Book("1984", "George Orwell", 328, true);
let book2 = new Book("Pride and Prejudice", "Jane Austen", 279, false);
let book3 = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

let mainContainer = document.querySelector("#main");
let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let pagesInput = document.querySelector("#pages");
let isReadInput = document.querySelector("#is-read");
let addBtn = document.querySelector("#addBtn");


function renderBook(book) {
	let boxContainer = document.createElement("div");
	boxContainer.classList.add("box-container");

	let titleContainer = document.createElement("h1");
	titleContainer.classList.add("title-container");
	titleContainer.textContent = book.title;

	let authorContainer = document.createElement("p");
	authorContainer.classList.add("author-container");
	authorContainer.textContent = `by ${book.author}`;

	let pagesContainer = document.createElement("p");
	pagesContainer.classList.add("pages-container");
	pagesContainer.textContent = `${book.pages} pages`;

	let deleteBtn = document.createElement("button");
	deleteBtn.classList.add("delete-btn");
	deleteBtn.textContent = "x";

	deleteBtn.addEventListener("click", () => {
		mainContainer.removeChild(boxContainer);
		delete myLibrary[myLibrary.indexOf(book)];
	});

	let isReadContainer = document.createElement("button");
	isReadContainer.classList.add("is-read-container");

	if (book.isRead) {
		isReadContainer.textContent = "Read";
		isReadContainer.setAttribute("class", "read");
	} else {
		isReadContainer.textContent = "Not Read";
		isReadContainer.setAttribute("class", "not-read");
	};

	isReadContainer.addEventListener("click", () => {
		book.isRead = !book.isRead;
		if (book.isRead) {
				isReadContainer.textContent = "Read";
				isReadContainer.setAttribute("class", "read");
		} else {
				isReadContainer.textContent = "Not Read";
				isReadContainer.setAttribute("class", "not-read");
		}
	});

	boxContainer.appendChild(titleContainer);
	boxContainer.appendChild(authorContainer);
	boxContainer.appendChild(pagesContainer);
	boxContainer.appendChild(isReadContainer);
	boxContainer.appendChild(deleteBtn);
	mainContainer.appendChild(boxContainer);
};

function renderBooks() {
	mainContainer.innerHTML = "";

	myLibrary.forEach((book) => {
		renderBook(book);
	});
};
	
addBtn.addEventListener("click", () => {
	let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, isReadInput.checked);

	if(titleInput.value === "" || authorInput.value === "" || pagesInput.value === "") {
		return;
	} else {
		addBookToLibrary(newBook);
		renderBooks();
	}
});

renderBooks();

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
		dialog.close();
});

let dialog = document.querySelector("dialog");
let addBook = document.querySelector("#add-book");
let closeBtn = document.querySelector("#closeBtn");

addBook.addEventListener("click", () => {
	titleInput.value = "";
	authorInput.value = "";
	pagesInput.value = "";
	isReadInput.checked = false;
	dialog.showModal();
});

closeBtn.addEventListener("click", () => {
	dialog.close();
});
