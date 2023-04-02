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

galleryList.addEventListener('click', selectPicture);

function selectPicture(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

    urlImage = event.target.closest('.gallery__link').href;
    // console.log(urlImage);

    // const instance = basicLightbox.create(`
    //     <img src="${urlImage}">

    // `);
    let lightbox = new SimpleLightbox('.gallery .gallery__link', { /* options */
        captionsData: "hello",
    });

    lightbox.on('show.simplelightbox', function () {
        // some usefull information

    });
}
