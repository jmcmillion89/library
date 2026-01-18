const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID()
}

const fillerBookOne = new Book('A Book', 'Someone', 123, true)

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook)
}

function getLibrary() {
    myLibrary.forEach((book) => {
        const libraryDiv = document.querySelector('.library');
        const newDiv = document.createElement('div');
        const titleHeader = document.createElement('h3');
        const titleText = document.createElement('p')
        const authorHeader = document.createElement('h3');
        const authorText = document.createElement('p')
        const pagesHeader = document.createElement('h3');
        const pagesText = document.createElement('p')
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
        libraryDiv.appendChild(newDiv)


    })
}


addBookToLibrary('test book 1', 'test author 1', 234, true)
addBookToLibrary('test book 2', 'test author 2', 334, false)
getLibrary()