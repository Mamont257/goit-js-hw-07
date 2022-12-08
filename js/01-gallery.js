import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const div = document.querySelector(".gallery");
// console.log(div);

// const markup = galleryItems.reduce((acc, { preview, original, description }) => acc + `description`, '');


const markup = galleryItems.map(({ preview, original, description }) => 
`<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`).join('');
// console.log(markup);

div.insertAdjacentHTML('beforeend', markup);
div.addEventListener('click', onClick);


function onClick(evt) {
    if (!evt.target.classList.contains('gallery__image')) {
        return
    }
    const test = evt.target.dataset.source;

    console.log(test);


    console.log(evt.target.classList.contains('gallery__image'));
    console.log(evt.currentTarget);
}


// const urlOriginal = galleryItems.map(item => item.original);
// console.log(urlOriginal);






// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.