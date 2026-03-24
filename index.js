const container = document.querySelector(".container");
const addBtn = document.querySelector(".addBtn");
const myDialog = document.getElementById("add-dialog");
const addBookBtn = myDialog.querySelector(".add");
const titleInput = myDialog.querySelector(".titleInput");
const authorInput = myDialog.querySelector(".authorInput");
const pagesInput = myDialog.querySelector(".pagesInput");
let bookArray = [];

// container.appendChild(removeBtn)

function Book(title, author, pages) {
  ((this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.isRead = false));
}

function addBookToLibrary(title, author, pages) {
  let newBook = new Book(title, author, pages);
  newBook.id = crypto.randomUUID();
  bookArray.push(newBook);
}

function displayBooks() {
  bookArray.forEach((b) => {
    let bookCover = document.createElement("div");
    bookCover.classList.add("book");
    bookCover.textContent = b.title;
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.textContent = "Remove Book";
    removeBtn.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
    bookCover.appendChild(removeBtn);
    const isReadBtn = document.createElement("button");
    isReadBtn.textContent = "Read";
    isReadBtn.classList.add("isReadBtn");
    isReadBtn.addEventListener("click", (e) => {
      b.isRead ? (b.isRead = false) : (b.isRead = true);
      if (b.isRead) isReadBtn.style.color = "white";
      if (!b.isRead) isReadBtn.style.color = "#353535";
    });
    bookCover.appendChild(isReadBtn);
    container.appendChild(bookCover);
  });
}

addBtn.addEventListener("click", (e) => {
  //  WOULD OPED DIALOG FROM HERE
  // myDialog.showModal();
});

addBookBtn.addEventListener("click", (e) => {
  if (titleInput.value && authorInput.value && pagesInput.value) {
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value);
    let bookCover = document.createElement("div");
    bookCover.classList.add("book");
    bookCover.textContent = titleInput.value;
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.textContent = "Remove Book";
    removeBtn.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
    const isReadBtn = document.createElement("button");
    isReadBtn.textContent = "Read";
    isReadBtn.classList.add("isReadBtn");
    isReadBtn.addEventListener("click", (e) => {
      b.isRead ? (b.isRead = false) : (b.isRead = true);
      if (b.isRead) isReadBtn.style.color = "white";
      if (!b.isRead) isReadBtn.style.color = "#353535";
    });
    bookCover.appendChild(isReadBtn);
    bookCover.appendChild(removeBtn);
    container.appendChild(bookCover);
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    myDialog.close();
  } else {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    alert("All fields must be filled");
  }
});

addBookToLibrary("Harry Potter", "J.K Rowling", 974);
addBookToLibrary("The Lord of The Rings", "J.J.K Tolkin", 1332);
addBookToLibrary("Mortal Instruments", "Cassandra Clare", 682);
addBookToLibrary("His Dark Materials", "Philip Pullman", 826);

displayBooks();
