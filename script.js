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

for (let i = 0; i < myLibrary.length; i ++) {
	let boxContainer = document.createElement("div");
	mainContainer.appendChild(boxContainer);
	boxContainer.classList.add("box-container")

	let titleContainer = document.createElement("h1");
	boxContainer.appendChild(titleContainer);
	titleContainer.classList.add("title-container")

	let authorContainer = document.createElement("p");
	boxContainer.appendChild(authorContainer);
	authorContainer.classList.add("author-container")

	let pagesContainer = document.createElement("p");
	boxContainer.appendChild(pagesContainer);
	pagesContainer.classList.add("pages-container")

	let isReadContainer = document.createElement("p");
	boxContainer.appendChild(isReadContainer);
	isReadContainer.classList.add("is-read-container")

	titleContainer.append(myLibrary[i].title); 
	authorContainer.append(myLibrary[i].author);
	pagesContainer.append(myLibrary[i].pages);
	isReadContainer.append(myLibrary[i].isRead);
}

addBtn.addEventListener("click", () => {
	let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, isReadInput.value);
	addBookToLibrary(newBook);

	let boxContainer = document.createElement("div");
	mainContainer.appendChild(boxContainer);
	boxContainer.classList.add("box-container")

	let titleContainer = document.createElement("h1");
	boxContainer.appendChild(titleContainer);
	titleContainer.classList.add("title-container")

	let authorContainer = document.createElement("p");
	boxContainer.appendChild(authorContainer);
	authorContainer.classList.add("author-container")

	let pagesContainer = document.createElement("p");
	boxContainer.appendChild(pagesContainer);
	pagesContainer.classList.add("pages-container")

	let isReadContainer = document.createElement("p");
	boxContainer.appendChild(isReadContainer);
	isReadContainer.classList.add("is-read-container")

	titleContainer.append(titleInput.value); 
	authorContainer.append(authorInput.value);
	pagesContainer.append(pagesInput.value);
	isReadContainer.append(isReadInput.value);
});
