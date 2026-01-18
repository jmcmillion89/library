let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID()
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook)
  getLibrary()
}

function updateRead(index) {
  if (myLibrary[index].read === true) {
    myLibrary[index].read = false;
  }
  else {
    myLibrary[index].read = true;
  }
}

function removeBook(id) {
  let newLibrary = myLibrary.filter((book) => book.id !== id)
  myLibrary = newLibrary
  getLibrary()
}

function getLibrary() {
    const libraryDiv = document.querySelector('.library');
    libraryDiv.textContent = '';
    myLibrary.forEach((book, index) => {
        const newDiv = document.createElement('div');
        const btnDiv = document.createElement('div')
        const titleHeader = document.createElement('h3');
        const titleText = document.createElement('p')
        const authorHeader = document.createElement('h3');
        const authorText = document.createElement('p')
        const pagesHeader = document.createElement('h3');
        const pagesText = document.createElement('p')
        const readHeader = document.createElement('h3');
        const readCheckBox = document.createElement('input')
        const deleteBtn = document.createElement('button')
        newDiv.classList = 'card'
        titleHeader.textContent = 'Title: '
        newDiv.appendChild(titleHeader)
        titleText.textContent = `${book.title}`
        newDiv.appendChild(titleText)
        authorHeader.textContent = 'Author: '
        newDiv.appendChild(authorHeader)
        authorText.textContent = `${book.author}`
        newDiv.appendChild(authorText)
        pagesHeader.textContent = 'Pages: '
        newDiv.appendChild(pagesHeader)
        pagesText.textContent = `${book.pages}`
        newDiv.appendChild(pagesText)
        readHeader.textContent = 'Read? '
        newDiv.appendChild(readHeader)
        readCheckBox.setAttribute('type', 'checkbox')
        readCheckBox.checked = book.read
        readCheckBox.addEventListener('click', () => {
          updateRead(index)
        })
        newDiv.appendChild(readCheckBox)
        btnDiv.classList = 'card-button'
        deleteBtn.textContent = "X"
        deleteBtn.addEventListener('click', () => {
          removeBook(book.id)
        })
        btnDiv.appendChild(deleteBtn)
        newDiv.appendChild(btnDiv)
        libraryDiv.appendChild(newDiv)
    })
}


addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 323, false)
addBookToLibrary('1984', 'George Orwell', 328, true)
addBookToLibrary('The Lord of the Rings', 'J.R.R. Tolkien', 1216, true)
addBookToLibrary('The Lion, the Witch and the Wardrobe', 'C.S. Lewis', 206, true)

getLibrary()