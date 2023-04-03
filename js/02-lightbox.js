import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

// My code
const galleryList = document.querySelector('.gallery');
let urlImage = '';
const markup = galleryItems.map(
    ({ description, preview, original }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
).join('');
galleryList.insertAdjacentHTML('afterbegin', markup);

let lightbox = new SimpleLightbox('.gallery__item .gallery__link', {
    /* options */
    captionsData: 'alt',
    captionDelay: 250,
});
