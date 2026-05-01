import{a as h,S as v,i as c}from"./assets/vendor-DFyTZyhx.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();async function p(i,a,t){const s={key:"55607491-fd459ee64175eeb9e585f94df",q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:a},{data:e}=await h.get("https://pixabay.com/api",{params:s});return e}const L=new v(".gallery-item a",{captionsData:"alt",captionDelay:250});function f(i){let a=i.map(t=>`  <li class="gallery-item">
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
      </li>`).join("");r.gallery.insertAdjacentHTML("beforeend",a)}function g(){L.refresh()}function w(){return r.loader.classList.add("is-active")}function y(){return r.loader.classList.remove("is-active")}function M(){return r.gallery.innerHTML=""}const r={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loaderMore:document.querySelector(".load-more-btn ")};let n=1,l=15,d="";r.form.addEventListener("submit",b);r.loaderMore.addEventListener("click",u);async function b(i){if(i.preventDefault(),r.loaderMore.classList.add("is-hidden"),d=r.input.value.trim(),!d){c.error({message:"input empty",position:"topRight"});return}w(),M();const a=await p(d,n,l);try{const{total:t,totalHits:s,hits:e}=a;if(t===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}s/l>1&&r.loaderMore.classList.remove("is-hidden"),s/l===n&&(r.loaderMore.classList.add("is-hidden"),r.loaderMore.removeEventListener("click",u)),f(e),g(),r.form.reset()}catch{c.error({message:"Error loud render",position:"topRight"})}finally{await y()}}async function u(){n++;const i=await p(d,n,l);try{const{total:a,totalHits:t,hits:s}=i,e=r.gallery.children[0].getBoundingClientRect().height;scrollBy({top:e*2,behavior:"smooth"}),t>1&&r.loaderMore.classList.remove("is-hidden"),t/l===n&&(r.loaderMore.classList.add("is-hidden"),r.loaderMore.removeEventListener("click",u)),await f(s),await g()}catch{c.error({message:"Error loud render",position:"topRight"})}finally{y()}}
//# sourceMappingURL=index.js.map
