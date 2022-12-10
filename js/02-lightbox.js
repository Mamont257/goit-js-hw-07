import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ul = document.querySelector('.gallery');
console.log(ul);


const markup = galleryItems.reduce((acc,{ preview, original, description }) => acc + 
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
 </a>`, '')

// console.log(markup);
ul.insertAdjacentHTML('beforeend', markup);
ul.addEventListener('click', onClick);

function onClick(evt) {
    if (!evt.target.classList.contains('gallery__image')) {
        return
    }
    // console.log(evt.target);

    const urlOriginal = evt.target.dataset;

    console.log(urlOriginal);

}

