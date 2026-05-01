import{a as h,S as v,i as n}from"./assets/vendor-DFyTZyhx.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();async function u(s,o,t){const i={key:"55607491-fd459ee64175eeb9e585f94df",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:o},{data:e}=await h.get("https://pixabay.com/api",{params:i});return e}const L=new v(".gallery-item a",{captionsData:"alt",captionDelay:250});function m(s){let o=s.map(t=>`  <li class="gallery-item">
  <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}"alt="${t.tags}"></a>
        <div class="info">
          <div class=content>
            <p class="name">Likes</p>
            <p>${t.likes}</p>
          </div class=content>
          <div class=content>
            <p class="name">Views</p>
            <p>${t.views}</p>
          </div>
          <div class=content>
            <p class="name">Comments</p>
            <p>${t.comments}</p>
          </div>
          <div class=content>
            <p class="name">Downloads</p>
            <p>${t.downloads}</p>
          </div>
        </div>
      </li>`).join("");r.gallery.insertAdjacentHTML("beforeend",o)}function p(){L.refresh()}function w(){return r.loader.classList.add("is-active")}function f(){return r.loader.classList.remove("is-active")}function b(){return r.gallery.innerHTML=""}const r={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loaderMore:document.querySelector(".load-more-btn ")};let l=1,g=15,c="";r.form.addEventListener("submit",M);r.loaderMore.addEventListener("click",y);async function M(s){if(s.preventDefault(),r.loaderMore.classList.add("is-hidden"),c=r.input.value.trim(),!c){n.error({message:"input empty",position:"topRight"});return}w(),b();const o=await u(c,l,g);try{const{total:t,totalHits:i,hits:e}=o;if(t===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}i/15>1&&r.loaderMore.classList.remove("is-hidden"),i/15===l&&(r.loaderMore.classList.add("is-hidden"),r.loaderMore.removeEventListener("click",y)),m(e),p(),r.form.reset()}catch{n.error({message:"Error loud render",position:"topRight"})}finally{await f()}}async function y(){l++;const s=await u(c,l,g);try{const o=r.gallery.children[0].getBoundingClientRect().height;if(scrollBy({top:o*2,behavior:"smooth"}),s.total===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}s.totalHits>1&&r.loaderMore.classList.remove("is-hidden");const t=s.hits;await m(t),await p()}catch{n.error({message:"Error loud render",position:"topRight"})}finally{f()}}
//# sourceMappingURL=index.js.map
