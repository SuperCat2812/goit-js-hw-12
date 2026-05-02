import iziToast from 'izitoast';
import { getImage } from './js/pixabay-api';
import {
  ImagesRender,
  offLouder,
  offLouderMore,
  onImagesRenderClear,
  onLouder,
  onLouderMore,
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
  refs.loaderMore.addEventListener('click', onLoaderMore);
  name = refs.input.value.trim();
  if (!name) {
    iziToast.error({ message: 'input empty', position: 'topRight' });
    return;
  }
  onLouder();
  onImagesRenderClear();
  try {
    page = 1;
    const { total, totalHits, hits } = await getImage(name, page, ipPages);
    if (total === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      return;
    }
    if (totalHits / ipPages > 1) {
      onLouderMore();
    }
    if (totalHits / ipPages <= page) {
      offLouderMore();
      refs.loaderMore.removeEventListener('click', onLoaderMore);
      iziToast.info({
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
    }
    const imagesCart = hits;

    ImagesRender(imagesCart);

    refs.form.reset();
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
  refs.loaderMore.addEventListener('click', onLoaderMore);
  try {
    const { totalHits, hits } = await getImage(name, page, ipPages);

    if (totalHits > 1) {
      onLouderMore();
    }
    if (totalHits / ipPages <= page) {
      offLouderMore();
      refs.loaderMore.removeEventListener('click', onLoaderMore);
      iziToast.info({
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
    }

    ImagesRender(hits);

    const elementHeight = refs.gallery.children[0].getBoundingClientRect().height;
    scrollBy({
      top: elementHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      message: 'Error loud render',
      position: 'topRight',
    });
  } finally {
    offLouder();
  }
}
