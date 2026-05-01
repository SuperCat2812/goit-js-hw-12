import{a as h,S as v,i as n}from"./assets/vendor-DFyTZyhx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();async function u(i,r,t){const s={key:"55607491-fd459ee64175eeb9e585f94df",q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:r},{data:e}=await h.get("https://pixabay.com/api",{params:s});return e}const L=new v(".gallery-item a",{captionsData:"alt",captionDelay:250});async function m(i){let r=await i.map(t=>`  <li class="gallery-item">
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
      </li>`).join("");o.gallery.insertAdjacentHTML("beforeend",r)}function p(){L.refresh()}function w(){return o.loader.classList.add("is-active")}function f(){return o.loader.classList.remove("is-active")}function b(){return o.gallery.innerHTML=""}const o={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loaderMore:document.querySelector(".load-more-btn ")};let c=1,g=15,d=0;o.form.addEventListener("submit",M);o.loaderMore.addEventListener("click",y);async function M(i){i.preventDefault(),o.loaderMore.classList.add("is-hidden");let r=o.input.value.trim();if(!r){n.error({message:"input empty",position:"topRight"});return}w(),b();const t=await u(r,c,g);try{const{total:s,totalHits:e,hits:a}=t;if(s===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}e/15>1&&o.loaderMore.classList.remove("is-hidden"),e/15===c&&(o.loaderMore.classList.add("is-hidden"),o.loaderMore.removeEventListener("click",y)),await m(a),await p(),d=o.gallery.children[0].getBoundingClientRect().height}catch{n.error({message:"Error loud render",position:"topRight"})}finally{await f()}}async function y(){c++,console.log(d);let i=o.input.value.trim();const r=await u(i,c,g);try{if(scrollBy({top:d*2,behavior:"smooth"}),r.total===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}r.totalHits>1&&o.loaderMore.classList.remove("is-hidden");const t=r.hits;await m(t),await p()}catch{n.error({message:"Error loud render",position:"topRight"})}finally{f()}}
//# sourceMappingURL=index.js.map
