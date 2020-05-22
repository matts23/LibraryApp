let myLibrary = [];

const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const pagesInput = document.querySelector('#pages-input');
const isReadInput = document.querySelector('#yes');
const submitBook = document.querySelector('#submit-book');
const libraryContainer = document.querySelector('#library-container');


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read){
    const bookObj = new Book(title, author, pages, read);
    myLibrary.push(bookObj);
    renderLibrary(myLibrary);
}

 
submitBook.addEventListener('click', ()=>{
    let read = (isReadInput.checked) ? true : false;
    addBookToLibrary(titleInput.value,authorInput.value,pagesInput.value, read);
});

function renderLibrary(library){

    //clear rendered cards before rendering

    let first = libraryContainer.firstElementChild; 
        while (first) { 
            first.remove(); 
            first = libraryContainer.firstElementChild; 
        } 
    
    for(let i=0; i<library.length; i++){
        const card = document.createElement('div');
        card.setAttribute('data-index', i)
        card.classList.add('card');
        libraryContainer.appendChild(card);

        let title = document.createElement('h3');
        title.setAttribute('id', 'card-title');
        title.textContent = library[i].title;
        card.appendChild(title);

        let author = document.createElement('h4');
        author.setAttribute('id', 'card-author');
        author.textContent=library[i].author;
        card.appendChild(author);

        let pages = document.createElement('h5');
        pages.setAttribute('id', 'card-pages');
        pages.textContent=`Length: ${library[i].pages} pgs`;
        card.appendChild(pages);

        let deleteCard = document.createElement('button');
        deleteCard.setAttribute('id', 'card-delete');
        deleteCard.textContent = 'Delete';
        card.appendChild(deleteCard);

        let parentIndex = card.dataset.index;

        deleteCard.addEventListener('click', ()=>{
            myLibrary.splice(parentIndex,1);
            renderLibrary(myLibrary);
        })

       
        let haveRead = document.createElement('input');
        haveRead.setAttribute('type', 'checkbox');
        haveRead.setAttribute('id', 'haveRead');
       
        
        if(library[i].read){
            haveRead.setAttribute('checked','checked');
        }

        haveRead.addEventListener('click',()=>{
            return(haveRead.checked ? library[i].read=true : library[i].read=false);
        })

        card.appendChild(haveRead);

        let readLabel = document.createElement('label');
        readLabel.textContent = 'Read';
        readLabel.setAttribute('for','haveRead' );
        card.appendChild(readLabel);
    }
}

addBookToLibrary('Harry Potter', 'J.K Rowling', '700', true);
addBookToLibrary('Larry Shotter', 'J.K Bowling', '300', false);
addBookToLibrary('GOT', 'John Smith', '900', false);
addBookToLibrary('John Wick', 'Tom', '200', true);








