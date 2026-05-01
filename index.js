import{a as l,S as u,i as c}from"./assets/vendor-9JG-xWWr.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function d(n){return l.get(`https://pixabay.com/api/?key=55607491-fd459ee64175eeb9e585f94df&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>o.data)}const f=new u(".gallery-item a",{captionsData:"alt",captionDelay:250});function p(n){let o=n.map(t=>`  <li class="gallery-item">
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
      </li>`).join("");s.gallery.insertAdjacentHTML("beforeend",o)}function m(){f.refresh()}function g(){return s.loader.classList.add("is-active")}function y(){return s.loader.classList.remove("is-active")}function h(){return s.gallery.innerHTML=""}const s={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};s.form.addEventListener("submit",v);function v(n){n.preventDefault();let o=s.input.value.trim();if(!o){c.error({message:"input empty",position:"topRight"});return}g(),h(),d(o).then(t=>{if(t.total===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const i=t.hits;p(i),m()}).finally(()=>y())}
//# sourceMappingURL=index.js.map
