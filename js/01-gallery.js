import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// My code
const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(
    ({ description, preview, original }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href = "${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
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

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}">
    `);

    instance.show(() => console.log('lightbox now visible'));
    document.addEventListener('keydown', pressEsc);
    function pressEsc(event) {
        if (event.key === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', pressEsc);
        }
    }
}
