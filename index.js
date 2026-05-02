import{a as y,S as h,i as l}from"./assets/vendor-DFyTZyhx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();async function f(s,r,t){{const a={key:"55607491-fd459ee64175eeb9e585f94df",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:r},{data:e}=await y.get("https://pixabay.com/api",{params:a});return e}}const v=new h(".gallery-item a",{captionsData:"alt",captionDelay:250});function m(s){let r=s.map(t=>`  <li class="gallery-item">
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
      </li>`).join("");n.gallery.insertAdjacentHTML("beforeend",r),L()}function L(){v.refresh()}function b(){return n.loader.classList.add("is-active")}function w(){return n.loader.classList.remove("is-active")}function M(){return n.gallery.innerHTML=""}function g(){return n.loadMoreBtn.classList.remove("is-hidden")}function p(){return n.loadMoreBtn.classList.add("is-hidden")}const n={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn ")};let i=1,d=15,c="";n.form.addEventListener("submit",R);n.loadMoreBtn.addEventListener("click",S);async function R(s){if(s.preventDefault(),c=n.input.value.trim(),!c){l.error({message:"input empty",position:"topRight"});return}b(),M();try{i=1;const{total:r,totalHits:t,hits:a}=await f(c,i,d);if(r===0){p(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}t/d>1&&g(),m(a),n.form.reset()}finally{await w()}}async function S(){i++;try{p();const{totalHits:s,hits:r}=await f(c,i,d);s>1&&g(),s/d<=i&&(p(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),m(r);const t=n.gallery.children[0].getBoundingClientRect().height;scrollBy({top:t*2,behavior:"smooth"})}catch{l.error({message:"Error loud render",position:"topRight"})}}
//# sourceMappingURL=index.js.map
