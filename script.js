const myLibrary = [];
const libraryContainer = document.querySelector('.library')

function Book(id, title, author, read) {
  this.id = id
  this.title = title
  this.author = author
  this.read = read
}

function addBookToLibrary(title, author, read) {
  const id = crypto.randomUUID()
  myLibrary.push(new Book(id, title, author, read))
  libraryAdder()
}

function removeBook(id) {
  const index = myLibrary.findIndex(b => b.id === id)
  if (index !== -1) {
    myLibrary.splice(index, 1)
    libraryAdder()
  }}

let bookAdder = (book) => {
  const div = document.createElement('div');
  div.classList.add('card')

  const titleEl = document.createElement('div')
  titleEl.textContent = 'Title: ' + book.title

  const authorEl = document.createElement('div')
  authorEl.textContent = 'Author: ' + book.author

  const statusEl = document.createElement('div')
  statusEl.textContent = 'Status: ' + (book.read ? 'Read' : 'Unread')

  const select = document.createElement('select')
  const optUnread = document.createElement('option')
  optUnread.value = 'unread'
  optUnread.textContent = 'Unread'
  const optRead = document.createElement('option')
  optRead.value = 'read'
  optRead.textContent = 'Read'
  select.append(optUnread, optRead)
  select.value = book.read ? 'read' : 'unread'
  select.addEventListener('change', (e) => {
    book.read = e.target.value === 'read'
    libraryAdder()
  })

  const removeBtn = document.createElement('button')
  removeBtn.textContent = 'Remove'
  removeBtn.addEventListener('click', () => removeBook(book.id))

  div.appendChild(titleEl)
  div.appendChild(authorEl)
  div.appendChild(statusEl)
  div.appendChild(select)
  div.appendChild(removeBtn)

  libraryContainer.appendChild(div)
}


let libraryAdder = () => {
  libraryContainer.innerHTML = "";
  myLibrary.forEach((book) => {
    bookAdder(book)
  })
}

const bookDialog = document.getElementById('bookDialog')
const bookForm = document.getElementById('bookForm')
const addBookBtn = document.getElementById('addBook')
const cancelModalBtn = document.getElementById('cancelModal')

function openDialog() {
  bookDialog?.showModal()
}

function closeDialog() {
  bookDialog?.close()
  bookForm?.reset()
}

addBookBtn?.addEventListener('click', openDialog)
cancelModalBtn?.addEventListener('click', closeDialog)

bookDialog?.addEventListener('cancel', () => closeDialog())

bookForm?.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(bookForm)
  const title = formData.get('title')?.toString().trim()
  const author = formData.get('author')?.toString().trim()
  const read = formData.get('status') === 'read'
  if (title && author) {
    addBookToLibrary(title, author, read)
    closeDialog()
  }
})

addBookToLibrary('The Hobbit', "Tolkien", false)

libraryAdder()