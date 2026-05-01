import{a as y,S as h,i}from"./assets/vendor-DFyTZyhx.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function p(a,s,t){const n={key:"55607491-fd459ee64175eeb9e585f94df",q:`${a}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:s},{data:e}=await y.get("https://pixabay.com/api",{params:n});return e}const v=new h(".gallery-item a",{captionsData:"alt",captionDelay:250});function m(a){let s=a.map(t=>`  <li class="gallery-item">
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
      </li>`).join("");o.gallery.insertAdjacentHTML("beforeend",s)}function f(){v.refresh()}function L(){return o.loader.classList.add("is-active")}function g(){return o.loader.classList.remove("is-active")}function b(){return o.gallery.innerHTML=""}const o={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loaderMore:document.querySelector(".load-more-btn ")};let d=1,u=15,c="";o.form.addEventListener("submit",w);o.loaderMore.addEventListener("click",R);async function w(a){if(a.preventDefault(),o.loaderMore.classList.add("is-hidden"),c=o.input.value.trim(),!c){i.error({message:"input empty",position:"topRight"});return}L(),b();const s=await p(c,d,u);try{const{total:t,totalHits:n,hits:e}=s;if(t===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}n/u>1&&o.loaderMore.classList.remove("is-hidden"),m(e),f(),o.form.reset()}catch{i.error({message:"Error loud render",position:"topRight"})}finally{await g()}}async function R(){d++;try{const{totalHits:a,hits:s}=await p(c,d,u);a>1&&o.loaderMore.classList.remove("is-hidden"),m(s),f();const t=o.gallery.children[0].getBoundingClientRect().height;scrollBy({top:t*2,behavior:"smooth"})}catch{i.error({message:"Error loud render",position:"topRight"})}finally{g()}}
//# sourceMappingURL=index.js.map
