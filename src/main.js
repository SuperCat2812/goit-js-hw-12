import iziToast from 'izitoast';
import { getImage } from './js/pixabay-api';
import {
  ImagesRender,
  offLouder,
  onImagesRenderClear,
  onImagesRenderLarge,
  onLouder,
} from './js/render-functions';

export const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('input[name="search-text"]'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loaderMore: document.querySelector('.load-more-btn '),
};

let page = 1;
let ipPages = 15;
let name = '';

refs.form.addEventListener('submit', onSearchFormImages);
refs.loaderMore.addEventListener('click', onLoaderMore);

async function onSearchFormImages(e) {
  e.preventDefault();
  refs.loaderMore.classList.add('is-hidden');
  name = refs.input.value.trim();
  if (!name) {
    iziToast.error({ message: 'input empty', position: 'topRight' });
    return;
  }
  onLouder();
  onImagesRenderClear();
  const imageData = await getImage(name, page, ipPages);
  try {
    const { total, totalHits, hits } = imageData;
    if (total === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      return;
    }
    if (totalHits / 15 > 1) {
      refs.loaderMore.classList.remove('is-hidden');
    }
    if (totalHits / 15 === page) {
      refs.loaderMore.classList.add('is-hidden');
      refs.loaderMore.removeEventListener('click', onLoaderMore);
    }
    const imagesCart = hits;

    ImagesRender(imagesCart);
    onImagesRenderLarge();
    refs.input.value = '';
  } catch (error) {
    iziToast.error({
      message: 'Error loud render',
      position: 'topRight',
    });
  } finally {
    await offLouder();
  }
}
async function onLoaderMore() {
  page++;

  name = refs.input.value.trim();
  const imageData = await getImage(name, page, ipPages);
  try {
    const elementHeight = refs.gallery.children[0].getBoundingClientRect().height;
    scrollBy({
      top: elementHeight * 2,
      behavior: 'smooth',
    });
    if (imageData.total === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      return;
    }
    if (imageData.totalHits > 1) {
      refs.loaderMore.classList.remove('is-hidden');
    }

    const imagesCart = imageData.hits;

    await ImagesRender(imagesCart);
    await onImagesRenderLarge();
  } catch (error) {
    iziToast.error({
      message: 'Error loud render',
      position: 'topRight',
    });
  } finally {
    offLouder();
  }
}
