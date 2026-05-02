import{a as v,S as L,i as a}from"./assets/vendor-DFyTZyhx.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();async function p(s,o,t){{const i={key:"55607491-fd459ee64175eeb9e585f94df",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:o},{data:e}=await v.get("https://pixabay.com/api",{params:i});return e}}const M=new L(".gallery-item a",{captionsData:"alt",captionDelay:250});function m(s){let o=s.map(t=>`  <li class="gallery-item">
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
      </li>`).join("");r.gallery.insertAdjacentHTML("beforeend",o),b()}function b(){M.refresh()}function R(){return r.loader.classList.add("is-active")}function g(){return r.loader.classList.remove("is-active")}function w(){return r.gallery.innerHTML=""}function h(){return r.loaderMore.classList.remove("is-hidden")}function y(){return r.loaderMore.classList.add("is-hidden")}const r={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loaderMore:document.querySelector(".load-more-btn ")};let c=1,l=15,u="";r.form.addEventListener("submit",S);r.loaderMore.addEventListener("click",d);async function S(s){if(s.preventDefault(),r.loaderMore.addEventListener("click",d),u=r.input.value.trim(),!u){a.error({message:"input empty",position:"topRight"});return}R(),w();try{c=1;const{total:o,totalHits:t,hits:i}=await p(u,c,l);if(o===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}t/l>1&&h(),t/l<=c&&(y(),r.loaderMore.removeEventListener("click",d),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),m(i),r.form.reset()}catch{a.error({message:"Error loud render",position:"topRight"})}finally{await g()}}async function d(){c++,r.loaderMore.addEventListener("click",d);try{const{totalHits:s,hits:o}=await p(u,c,l);s>1&&h(),s/l<=c&&(y(),r.loaderMore.removeEventListener("click",d),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),m(o);const t=r.gallery.children[0].getBoundingClientRect().height;scrollBy({top:t*2,behavior:"smooth"})}catch{a.error({message:"Error loud render",position:"topRight"})}finally{g()}}
//# sourceMappingURL=index.js.map
