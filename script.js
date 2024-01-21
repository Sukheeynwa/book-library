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
	authorContainer.textContent = book.author;

	let pagesContainer = document.createElement("p");
	pagesContainer.classList.add("pages-container");
	pagesContainer.textContent = book.pages;

	let isReadContainer = document.createElement("button");
	isReadContainer.classList.add("is-read-container");
	isReadContainer.textContent = book.isRead ? "Read" : "Not Read";

	boxContainer.appendChild(titleContainer);
	boxContainer.appendChild(authorContainer);
	boxContainer.appendChild(pagesContainer);
	boxContainer.appendChild(isReadContainer);
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

	addBookToLibrary(newBook);
	renderBooks();
});

renderBooks();
