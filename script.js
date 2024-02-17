const myLibrary = [];

const deleteButtons = document.querySelectorAll('.delete')

// constructor for book
class book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new book(title, author, pages, read));
  div()
}

const displayBook = () => {
  myLibrary.forEach((book) => console.log(book))
}

let arr = 0;

//creates the divs when book is added

const div = () => {
    const div = document.createElement('div');
    const cards = document.querySelector('.cards');
    const titleHeader = document.createElement('h3');
    const titleText =  document.createElement('p');
    const authorHeader = document.createElement('h3');
    const authorText =  document.createElement('p');
    const pageHeader = document.createElement('h3');
    const pageText =  document.createElement('p');
    const readHeader = document.createElement('h3');
    const readText =  document.createElement('p');
    const readButton = document.createElement('button')
    const deleteButton = document.createElement('button')

    for (arr; arr < myLibrary.length; arr++) {
        titleHeader.textContent = 'Title:'
        div.appendChild(titleHeader)
        titleText.textContent = `${myLibrary[arr].title}`
        div.appendChild(titleText)
        authorHeader.textContent = 'Author:'
        div.appendChild(authorHeader)
        authorText.textContent = `${myLibrary[arr].author}`
        div.appendChild(authorText)
        pageHeader.textContent = 'Pages:'
        div.appendChild(pageHeader)
        pageText.textContent = `${myLibrary[arr].pages}`
        div.appendChild(pageText)
        readHeader.textContent = 'Read?'
        div.appendChild(readHeader)
        readText.textContent = `${myLibrary[arr].read}`
        div.appendChild(readText)
        readButton.textContent = 'Read';
        readButton.classList.add('read')
        div.appendChild(readButton)
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete')
        div.appendChild(deleteButton)


        div.classList.add(`card${[arr]}`);
        cards.appendChild(div);
      }
    }

// delete function for div button 
document.addEventListener('click', function(e){
  if(e.target.classList=='delete') {
    e.target.parentElement.remove()
  }
})


// read function for div button
document.addEventListener('click', function(e){
  const pageText =  document.createElement('p');
  if(e.target.classList=='read') {
    e.target.parentElement.children[7].textContent = 'Yes'
  }
})



const dialog = document.querySelector('dialog');
const showButton = document.querySelector('#show-button')
const closeButton = document.querySelector('#close-button')

// opens modal to add book

showButton.addEventListener('click', () => {
  dialog.showModal();
});


// adds book to library and closes modal
closeButton.addEventListener('click', () => {
  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const pages = document.querySelector('#pages').value
  let readValue = ''
    if (document.querySelector('#Yes').checked) {
      readValue = 'Yes'
    }
    else if (document.querySelector('#No').checked) {
      readValue = 'No'
    }
  addBookToLibrary(title, author, pages, readValue)
  dialog.close();
});

