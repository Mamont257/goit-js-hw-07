import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const div = document.querySelector(".gallery");

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

div.insertAdjacentHTML('beforeend', markup);
div.addEventListener('click', onClick);

function onClick(evt) {
    if (!evt.target.classList.contains('gallery__image')) {
        return
    }
  evt.preventDefault();
  const urlOriginal = evt.target.dataset.source;
  
  const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${urlOriginal}">
	`)

  instance.show();

  div.addEventListener('keydown', onKey);
  function onKey(evt) {
    if (evt.key === 'Escape') {
      instance.close();
    }
  }
}





// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// 2. Реалізація делегування на div.gallery і отримання url великого зображення.
// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і 
// додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.