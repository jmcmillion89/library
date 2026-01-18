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
        let id = book.id
        const newDiv = document.createElement('div');
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
        deleteBtn.textContent = "X"
        deleteBtn.addEventListener('click', () => {
          removeBook(id)
        })
        newDiv.appendChild(deleteBtn)
        libraryDiv.appendChild(newDiv)


    })
}


addBookToLibrary('test book 1', 'test author 1', 234, true)
addBookToLibrary('test book 2', 'test author 2', 334, false)
addBookToLibrary('test book 3', 'test author 3', 334, false)
addBookToLibrary('test book 4', 'test author 4', 334, true)
addBookToLibrary('test book 5', 'test author 5', 334, false)
addBookToLibrary('test book 6', 'test author 6', 334, false)

getLibrary()