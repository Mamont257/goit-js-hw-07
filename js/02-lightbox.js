import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const ul = document.querySelector('.gallery');

const markup = galleryItems.reduce((acc,{ preview, original, description }) => acc + 
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" title="${description}" />
 </a>`, '')

ul.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', { captionDelay: 250, overlayOpacity: 0.5 });





// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. 
// Використовуй готовий код з першого завдання.
// 2. Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на 
// два файли: simple - lightbox.min.js і simple - lightbox.min.css.
// 3. Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. 
// Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// 4. Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. 
// Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.