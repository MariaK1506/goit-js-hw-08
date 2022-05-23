// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const refs = {
  galleryList: document.querySelector('.gallery'),
};

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
  <li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>
 `;
    })
    .join('');
}

refs.galleryList.innerHTML = createGalleryMarkup(galleryItems);

console.log(galleryItems);

const options = {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
};

const lightbox = new SimpleLightbox('.gallery a', options);
