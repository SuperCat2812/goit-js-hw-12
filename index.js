import{a as h,S as v,i as n}from"./assets/vendor-DFyTZyhx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();async function d(i,r,e){const s={key:"55607491-fd459ee64175eeb9e585f94df",q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:e,page:r},{data:t}=await h.get("https://pixabay.com/api",{params:s});return t}const L=new v(".gallery-item a",{captionsData:"alt",captionDelay:250});async function u(i){let r=await i.map(e=>`  <li class="gallery-item">
  <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}"alt="${e.tags}"></a>
        <div class="info">
          <div class=content>
            <p class="name">Likes</p>
            <p>${e.likes}</p>
          </div class=content>
          <div class=content>
            <p class="name">Views</p>
            <p>${e.views}</p>
          </div>
          <div class=content>
            <p class="name">Comments</p>
            <p>${e.comments}</p>
          </div>
          <div class=content>
            <p class="name">Downloads</p>
            <p>${e.downloads}</p>
          </div>
        </div>
      </li>`).join("");o.gallery.insertAdjacentHTML("beforeend",r)}function m(){L.refresh()}function w(){return o.loader.classList.add("is-active")}function p(){return o.loader.classList.remove("is-active")}function b(){return o.gallery.innerHTML=""}const o={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loaderMore:document.querySelector(".load-more-btn ")};let l=1,f=15,g=0;o.form.addEventListener("submit",M);o.loaderMore.addEventListener("click",y);async function M(i){i.preventDefault(),o.loaderMore.classList.add("is-hidden");let r=o.input.value.trim();if(!r){n.error({message:"input empty",position:"topRight"});return}w(),b();const e=await d(r,l,f);try{if(e.total===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}e.totalHits/15>1&&o.loaderMore.classList.remove("is-hidden"),e.totalHits/15===l&&(o.loaderMore.classList.add("is-hidden"),o.loaderMore.removeEventListener("click",y));const s=e.hits;await u(s),await m(),g=o.gallery.children[0].getBoundingClientRect().height}catch{n.error({message:"Error loud render",position:"topRight"})}finally{await p()}}async function y(){l++;let i=o.input.value.trim();const r=await d(i,l,f);try{if(scrollBy({top:g*2,behavior:"smooth"}),r.total===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}r.totalHits>1&&o.loaderMore.classList.remove("is-hidden");const e=r.hits;await u(e),await m()}catch{n.error({message:"Error loud render",position:"topRight"})}finally{p()}}
//# sourceMappingURL=index.js.map
