class Book {
	constructor(title, author, pages, isRead) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.isRead = isRead;
	};
};

document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();
});

//pre rendered books;

let book1 = new Book("1984", "George Orwell", 328, true);
let book2 = new Book("Pride and Prejudice", "Jane Austen", 279, false);
let book3 = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);

const addBookModule = (function(){
	const dialog = document.querySelector("dialog");
	const addBook = document.querySelector("#add-book");
	
	addBook.addEventListener("click", () => {
		dialogModule.titleInput.value = "";
		dialogModule.authorInput.value = "";
		dialogModule.pagesInput.value = "";
		dialogModule.isRead = false; 
		dialog.showModal();
	});
	
	return {
		dialog,
	};
})();

const dialogModule = (function() {
	const titleInput = document.querySelector("#title");
	const authorInput = document.querySelector("#author");
	const pagesInput = document.querySelector("#pages");
	const isReadInput = document.querySelector("#is-read");

	const addBtn = document.querySelector("#addBtn");
	const closeBtn = document.querySelector("#closeBtn");

	const createBook = function() {
		let newBook = new Book(titleInput.value, authorInput.value,pagesInput.value, isReadInput.checked);

		return newBook;
	};

	const addBookToLibrary = function(book) {
		renderModule.library.push(book);
	};

	addBtn.addEventListener("click", () => {
		addBookToLibrary(createBook());
		renderModule.renderBooks();
		addBookModule.dialog.close();
	});

	closeBtn.addEventListener("click", () => {
		addBookModule.dialog.close();
	});

	return {
		 addBookToLibrary, titleInput, authorInput, pagesInput, isReadInput,
	};
})();

const renderModule = (function() {
	const library = [];
	
	const mainContainer = document.querySelector("#main");

	const renderBook = function() {
		library.forEach((book) => {
			const bookContainer = document.createElement("div");
			const titleContainer = document.createElement("h1");
			const authorContainer = document.createElement("p");
			const pagesContainer = document.createElement("p");
			const isReadContainer = document.createElement("button");
			const deleteBtn = document.createElement("button");
			
			bookContainer.classList.add("book-container");
			titleContainer.classList.add("title-container");
			deleteBtn.classList.add("delete-btn");
			deleteBtn.textContent = "x";

			titleContainer.textContent = book.title;
			authorContainer.textContent = "by " + book.author;
			pagesContainer.textContent = book.pages + " pages";

			isReadContainer.addEventListener("click", () => {
				book.isRead = !book.isRead;
				renderBooks();
			});

			if(book.isRead === true) {
				isReadContainer.textContent = "Read";
				isReadContainer.classList.add("read");
			} else {
				isReadContainer.textContent = "Not Read";
				isReadContainer.classList.add("not-read");
			};

			bookContainer.appendChild(titleContainer);
			bookContainer.appendChild(authorContainer);
			bookContainer.appendChild(pagesContainer);
			bookContainer.appendChild(isReadContainer);

			bookContainer.appendChild(deleteBtn);

			deleteBtn.addEventListener("click", () => {
				delete library[library.indexOf(book)];
				renderBooks();
			});

			mainContainer.appendChild(bookContainer);
		});
	};

	const renderBooks = function() {
		mainContainer.innerHTML = "";
		renderBook();
	}

	return {
		library, renderBooks,
	};

})();

dialogModule.addBookToLibrary(book1);
dialogModule.addBookToLibrary(book2);
dialogModule.addBookToLibrary(book3);

renderModule.renderBooks();