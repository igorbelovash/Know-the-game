import{a as h,i as m,S as $,N as q,P as x,A as D}from"./assets/vendor-Cw1AT9GS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const H="https://deserts-store.b.goit.study/api",B=h.create({baseURL:H});async function I(){const{data:e}=await B.get("/categories");return e}async function N({page:e=1,limit:t=8,category:s=""}={}){const a={page:e,limit:t};s&&(a.category=s);const{data:r}=await B.get("/desserts",{params:a});return r}let i={page:1,category:"",total:0,loading:!1};const P=8,o={grid:document.querySelector(".js-dessert-grid"),loader:document.querySelector(".js-dessert-loader"),loadMore:document.querySelector(".js-load-more"),categories:document.querySelector(".js-categories"),customSelect:document.querySelector(".js-custom-select")};var k;const u=(k=o.customSelect)==null?void 0:k.querySelector(".custom-select__trigger");var E;const c=(E=o.customSelect)==null?void 0:E.querySelector(".custom-select__dropdown");var M;const _=(M=o.customSelect)==null?void 0:M.querySelector(".custom-select__label");function d(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function w(e){var t;(t=o.customSelect)==null||t.classList.toggle("open",e),u==null||u.setAttribute("aria-expanded",String(e))}function T(e){var s;(s=o.categories)==null||s.querySelectorAll(".dessert-list__cat-btn").forEach(a=>{a.classList.toggle("is-active",(a.dataset.cat||"")===e)}),c==null||c.querySelectorAll(".custom-select__option").forEach(a=>{a.classList.toggle("is-active",(a.dataset.cat||"")===e)});const t=c==null?void 0:c.querySelector(`.custom-select__option[data-cat="${e}"]`);_&&t&&(_.textContent=t.textContent.trim())}function F(e){var t;return`
    <li class="dessert-card" data-id="${e._id}">
      <div class="dessert-card__img-wrap">
        <img class="dessert-card__img" src="${d(e.image)}" alt="${d(e.name)}" loading="lazy">
      </div>
      <div class="dessert-card__body">
        <p class="dessert-card__category">${d(((t=e.category)==null?void 0:t.name)||"No category")}</p>
        <h3 class="dessert-card__name">${d(e.name)}</h3>
        <div class="dessert-card__description">
          <span>${d(e.description)}</span>
        </div>
        <div class="dessert-card__footer">
          <span class="dessert-card__price">${Number(e.price).toFixed(0)} грн</span>
          <button type="button" class="dessert-card__btn" aria-label="Відкрити ${d(e.name)}">
            <svg width="20" height="20">
              <use href="/img/sprite.svg#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `}function G(e){c&&(c.innerHTML=['<li class="custom-select__option is-active" data-cat="">Всі десерти</li>',...e.map(t=>`<li class="custom-select__option" data-cat="${t._id}">${d(t.name)}</li>`)].join(""))}function R(e){o.categories&&(o.categories.innerHTML=[`<li>
      <button class="dessert-list__cat-btn is-active" data-cat="">
        Всі десерти
      </button>
    </li>`,...e.map(t=>`
      <li>
        <button class="dessert-list__cat-btn" data-cat="${t._id}">
          ${d(t.name)}
        </button>
      </li>
    `)].join(""))}const L={showLoader(){var e;(e=o.loader)==null||e.removeAttribute("hidden")},hideLoader(){var e;(e=o.loader)==null||e.setAttribute("hidden","")},toggleLoadMore(){o.loadMore&&(o.loadMore.hidden=i.page*P>=i.total)}};async function y(e=!1){var t;if(!i.loading)try{i.loading=!0,e&&(i.page=1,o.grid&&(o.grid.innerHTML="")),L.showLoader(),o.loadMore&&(o.loadMore.hidden=!0);const s=await N({page:i.page,limit:P,category:i.category});i.total=s.totalItems??s.length??0;const a=Array.isArray(s.desserts)?s.desserts:Array.isArray(s)?s:[];(t=o.grid)==null||t.insertAdjacentHTML("beforeend",a.map(F).join("")),L.toggleLoadMore()}catch(s){console.error("[loadDesserts]",s),m.error({title:"Error",message:"Failed to load desserts"})}finally{i.loading=!1,L.hideLoader()}}async function U(){try{const e=await I();G(e),R(e)}catch(e){console.error("[loadCategories]",e),m.error({title:"Error",message:"Failed to load categories"})}}u==null||u.addEventListener("click",()=>{var t;const e=(t=o.customSelect)==null?void 0:t.classList.contains("open");w(!e)});c==null||c.addEventListener("click",e=>{const t=e.target.closest(".custom-select__option");t&&(i.category=t.dataset.cat||"",i.page=1,T(i.category),y(!0),w(!1))});document.addEventListener("click",e=>{var t;(t=o.customSelect)!=null&&t.contains(e.target)||w(!1)});var C;(C=o.categories)==null||C.addEventListener("click",e=>{const t=e.target.closest(".dessert-list__cat-btn");t&&(i.category=t.dataset.cat||"",i.page=1,T(i.category),y(!0))});var A;(A=o.loadMore)==null||A.addEventListener("click",()=>{i.page+=1,y()});(async function(){await U(),await y(!0)})();const b=document.getElementById("burgerBtn"),V=document.getElementById("closeBtn"),p=document.getElementById("mobileMenu"),Z=document.querySelectorAll(".mobile-link");b.addEventListener("click",()=>{p.classList.add("open"),document.body.classList.add("menu-open"),b.setAttribute("aria-expanded","true"),p.setAttribute("aria-hidden","false")});function v(){p.classList.remove("open"),document.body.classList.remove("menu-open"),b.setAttribute("aria-expanded","false"),p.setAttribute("aria-hidden","true")}V.addEventListener("click",v);Z.forEach(e=>{e.addEventListener("click",v)});document.addEventListener("keydown",e=>{e.key==="Escape"&&p.classList.contains("open")&&v()});const z=document.querySelector(".contact-us-gallery");document.querySelector(".contact-us-gallery-list");const O=window.matchMedia("(min-width: 768px)");let S,f=!1;function j(){O.matches?f||(f=!0,S=new $(z,{modules:[q,x],watchSlidesProgress:!0,breakpoints:{768:{slidesPerView:2,spaceBetween:24,pagination:{el:".about-us-pagination",clickable:!0},navigation:{nextEl:".about-us-slide-btn.button-next",prevEl:".about-us-slide-btn.button-prev"}}}})):f&&(S.destroy(),f=!1)}j();O.addEventListener("change",j);document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("year");e&&(e.textContent=new Date().getFullYear())});const K=document.querySelector(".faq-accordion");new D(K,{elementClass:"faq-item",triggerClass:"faq-trigger",panelClass:"faq-panel",showMultiple:!1,ariaEnabled:!0});const Q=document.querySelector(".modal-form");Q.addEventListener("submit",J);let Y=null;async function J(e){e.preventDefault();const{username:t,phone:s,textComment:a}=e.target.elements,r={name:t.value.trim(),phone:s.value.trim(),dessertId:Y,comment:a.value.trim()};try{const l=(await h.post("https://deserts-store.b.goit.study/api/orders",r)).data;console.log(l),m.success({title:`${l.name}`,message:`Ви замовили ${l.dessertName}, номер вашого замовлення ${l.orderNum}`,position:"topRight"}),e.target.reset()}catch(n){m.error({title:"Помилка",message:`${n}`,position:"topRight"})}}const W="https://deserts-store.b.goit.study/api/",X="feedbacks",ee=document.querySelector(".feedback-swiper"),g=document.getElementById("feedbacks-container");function te(e){let t="";for(let s=1;s<=5;s++)e>=s?t+=`
        <svg class="star full" width="20" height="20" viewBox="0 0 24 24" fill="#080C0C" stroke="#080C0C" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>`:e>s-1&&e<s?t+=`
        <svg class="star half" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="halfGrad-${s}">
              <stop offset="50%" stop-color="#080C0C"/>
              <stop offset="50%" stop-color="transparent"/>
            </linearGradient>
          </defs>
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" 
                fill="url(#halfGrad-${s})" stroke="#080C0C" stroke-width="2" stroke-linejoin="round"/>
        </svg>`:t+=`
        <svg class="star empty" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#080C0C" stroke-width="2" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>`;return`<div class="star-rating theme-default-star">${t}</div>`}function se(e){if(!g)return;g.innerHTML="";let t="";e.forEach(s=>{const a=te(s.rate);t+=`
      <li class="swiper-slide">
        <div class="feedback-card">
          <div class="rating-wrapper">
            ${a}
          </div>
          <p class="feedback-text">"${s.description}"</p>
          <div class="feedback-author">${s.author}</div>
        </div>
      </li>
    `}),g.innerHTML=t}async function re(){if(!g)return;const e=document.querySelector(".feedback-loader");try{const{data:t}=await h(`${W}${X}`,{params:{limit:10,page:1}}),s=Array.isArray(t)?t:t.results||t.feedbacks;if(!Array.isArray(s))throw new Error("Невірний формат даних");const a=s.filter(({rate:r,description:n,author:l})=>r!==void 0&&n&&l);if(a.length===0){console.warn("Немає валідних відгуків для відображення"),e&&(e.innerHTML="<p>Відгуків поки немає</p>");return}se(a),g.classList.add("swiper-wrapper"),e&&(e.style.display="none"),ae()}catch(t){if(console.error("Помилка завантаження відгуків:",t),e){e.innerHTML='<p style="color: #080c0c;">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>';const s=e.querySelector(".spinner");s&&(s.style.display="none")}}}function ae(){new $(ee,{modules:[q,x],watchSlidesProgress:!0,slidesPerView:1,spaceBetween:20,grabCursor:!0,loop:!0,pagination:{el:".feedback-pagination",clickable:!0,dynamicBullets:!0,renderBullet:function(e,t){return`<span class="${t}"></span>`}},navigation:{nextEl:".feedback-slide-btn.button-next",prevEl:".feedback-slide-btn.button-prev"},breakpoints:{768:{slidesPerView:3,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}re();
//# sourceMappingURL=index.js.map
