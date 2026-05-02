import{a as y,S as v,i as a}from"./assets/vendor-DFyTZyhx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();async function f(s,r,t){{const i={key:"55607491-fd459ee64175eeb9e585f94df",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:r},{data:e}=await y.get("https://pixabay.com/api",{params:i});return e}}const L=new v(".gallery-item a",{captionsData:"alt",captionDelay:250});function m(s){let r=s.map(t=>`  <li class="gallery-item">
  <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}"alt="${t.tags}"></a>
        <div class="info">
          <div class="content">
            <p class="name">Likes</p>
            <p>${t.likes}</p>
          </div>
          <div class="content">
            <p class="name">Views</p>
            <p>${t.views}</p>
          </div>
          <div class="content">
            <p class="name">Comments</p>
            <p>${t.comments}</p>
          </div>
          <div class="content">
            <p class="name">Downloads</p>
            <p>${t.downloads}</p>
          </div>
        </div>
      </li>`).join("");n.gallery.insertAdjacentHTML("beforeend",r),b()}function b(){L.refresh()}function w(){return n.loader.classList.add("is-active")}function g(){return n.loader.classList.remove("is-active")}function R(){return n.gallery.innerHTML=""}function h(){return n.loadMoreBtn.classList.remove("is-hidden")}function d(){return n.loadMoreBtn.classList.add("is-hidden")}const n={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn ")};let c=1,u=15,l="";n.form.addEventListener("submit",M);n.loadMoreBtn.addEventListener("click",S);async function M(s){if(s.preventDefault(),l=n.input.value.trim(),!l){a.error({message:"input empty",position:"topRight"});return}c=1,d(),w(),R();try{const{total:r,totalHits:t,hits:i}=await f(l,c,u);if(r===0){d(),a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}t/u>1&&h(),m(i),n.form.reset()}catch{a.error({message:"Error loud render",position:"topRight"})}finally{await g()}}async function S(){c++;try{d();const{totalHits:s,hits:r}=await f(l,c,u);s>1&&h(),s/u<=c&&(d(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),m(r);const t=n.gallery.children[0].getBoundingClientRect().height;scrollBy({top:t*2,behavior:"smooth"})}catch{a.error({message:"Error loud render",position:"topRight"})}finally{g()}}
//# sourceMappingURL=index.js.map
