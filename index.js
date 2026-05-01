import{a as y,S as v,i as n}from"./assets/vendor-DFyTZyhx.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();async function p(i,s,t){const a={key:"55607491-fd459ee64175eeb9e585f94df",q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:s},{data:e}=await y.get("https://pixabay.com/api",{params:a});return e}const L=new v(".gallery-item a",{captionsData:"alt",captionDelay:250});function f(i){let s=i.map(t=>`  <li class="gallery-item">
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
      </li>`).join("");r.gallery.insertAdjacentHTML("beforeend",s)}function g(){L.refresh()}function b(){return r.loader.classList.add("is-active")}function h(){return r.loader.classList.remove("is-active")}function w(){return r.gallery.innerHTML=""}const r={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loaderMore:document.querySelector(".load-more-btn ")};let c=1,l=15,d="";r.form.addEventListener("submit",M);r.loaderMore.addEventListener("click",m);async function M(i){if(i.preventDefault(),r.loaderMore.classList.add("is-hidden"),d=r.input.value.trim(),!d){n.error({message:"input empty",position:"topRight"});return}b(),w();const s=await p(d,c,l);try{const{total:t,totalHits:a,hits:e}=s;if(t===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}a/l>1&&r.loaderMore.classList.remove("is-hidden"),a*l>=c&&(r.loaderMore.classList.add("is-hidden"),r.loaderMore.removeEventListener("click",m),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),f(e),g(),r.form.reset()}catch{n.error({message:"Error loud render",position:"topRight"})}finally{await h()}}async function m(){c++;const i=await p(d,c,l);try{const{total:s,totalHits:t,hits:a}=i,e=r.gallery.children[0].getBoundingClientRect().height;scrollBy({top:e*2,behavior:"smooth"}),t>1&&r.loaderMore.classList.remove("is-hidden"),t*l>=c&&(r.loaderMore.classList.add("is-hidden"),r.loaderMore.removeEventListener("click",m),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),await f(a),await g()}catch{n.error({message:"Error loud render",position:"topRight"})}finally{h()}}
//# sourceMappingURL=index.js.map
