// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => (
    `<li><a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a></li>`
    )
  )
  .join(" ");

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

gallery.addEventListener("click", onGalleryElemClick);

let lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});

function onGalleryElemClick(e) {
    e.preventDefault();
}