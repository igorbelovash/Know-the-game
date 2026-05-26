import{a as L,S as P,P as T,N as I,i as p,A as re}from"./assets/vendor-BuOEm_2k.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const $=document.getElementById("burgerBtn"),oe=document.getElementById("closeBtn"),h=document.getElementById("mobileMenu"),ne=document.querySelectorAll(".mobile-link");$.addEventListener("click",()=>{h.classList.add("open"),document.body.classList.add("menu-open"),$.setAttribute("aria-expanded","true"),h.setAttribute("aria-hidden","false")});function D(){h.classList.remove("open"),document.body.classList.remove("menu-open"),$.setAttribute("aria-expanded","false"),h.setAttribute("aria-hidden","true")}oe.addEventListener("click",D);ne.forEach(e=>{e.addEventListener("click",D)});document.addEventListener("keydown",e=>{e.key==="Escape"&&h.classList.contains("open")&&D()});function ae(e,t={}){if(!Array.isArray(e))return"";const{slide:s=!1}=t,o=s?"product-card swiper-slide":"product-card";return e.map(({image:r,category:{name:n},name:a,description:_,price:se})=>`<li class="${o}">
          <div class="product-img-thumb">
            <img class="product-img" src="${r}" alt="${a}"/>
          </div>
          <p class="product-category">${n}</p>
          <h4 class="product-name">${a}</h4>
          <p class="product-description">${_}</p>
          <div class="product-card-bottom">
            <p class="product-price">${se} грн</p>
            <button class="product-card-btn" type="button" aria-label="Open product details">
              <svg class="product-card-svg" width="24" height="24">
                <use href="/img/sprite.svg#icon-arrow_outward">
                </use>
              </svg>
            </button>
          </div>
        </li>`).join("")}const ie="https://deserts-store.b.goit.study/api/",ce="desserts",m=document.querySelector(".popular-products-section"),b=document.querySelector(".popular-products-list");function O(e){p.warning({title:"Увага",message:e,position:"topRight"})}function le(e){p.error({title:"Помилка",message:e,position:"topRight"})}function de(){m.classList.remove("is-hidden"),m.classList.add("is-loading"),b.innerHTML=""}function ue(){m.classList.remove("is-hidden","is-loading")}function k(){m.classList.add("is-hidden"),m.classList.remove("is-loading"),b.innerHTML=""}async function pe(){if(!(!m||!b)){de();try{const{data:e}=await L(`${ie}${ce}`,{params:{type:"popular"}});if(!Array.isArray(e.desserts))throw new Error("Невірний формат даних з API");if(e.desserts.length<3){k(),O("Мало популярних товарів для відображення");return}const t=e.desserts.filter(({image:s,category:o,name:r,description:n,price:a})=>s&&(o==null?void 0:o.name)&&r&&n&&a!==void 0&&a!==null&&a!=="");if(t.length<3){k(),O("Неможливо відобразити популярні товари через неповні дані");return}b.innerHTML=ae(t,{slide:!0}),ue(),me()}catch(e){k(),le(e.message||"Помилка завантаження популярних товарів")}}}pe();function me(){new P(".popular-products-swiper",{modules:[T,I],slidesPerView:1,spaceBetween:24,watchOverflow:!0,pagination:{el:".popular-products-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".popular-btn-next",prevEl:".popular-btn-prev",disabledClass:"popular-btn-disabled"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:24}}})}const ge="https://deserts-store.b.goit.study/api",K=L.create({baseURL:ge});async function fe(){const{data:e}=await K.get("/categories");return e}async function ye({page:e=1,limit:t=8,category:s=""}={}){const o={page:e,limit:t};s&&(o.category=s);const{data:r}=await K.get("/desserts",{params:o});return r}let c={page:1,category:"",total:0,loading:!1};const Q=8,i={grid:document.querySelector(".js-dessert-grid"),loader:document.querySelector(".js-dessert-loader"),loadMore:document.querySelector(".js-load-more"),categories:document.querySelector(".js-categories"),customSelect:document.querySelector(".js-custom-select")};var V;const u=(V=i.customSelect)==null?void 0:V.querySelector(".custom-select__trigger");var G;const l=(G=i.customSelect)==null?void 0:G.querySelector(".custom-select__dropdown");var U;const j=(U=i.customSelect)==null?void 0:U.querySelector(".custom-select__label");function d(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function H(e){var t;(t=i.customSelect)==null||t.classList.toggle("open",e),u==null||u.setAttribute("aria-expanded",String(e))}function W(e){var s;(s=i.categories)==null||s.querySelectorAll(".dessert-list__cat-btn").forEach(o=>{o.classList.toggle("is-active",(o.dataset.cat||"")===e)}),l==null||l.querySelectorAll(".custom-select__option").forEach(o=>{o.classList.toggle("is-active",(o.dataset.cat||"")===e)});const t=l==null?void 0:l.querySelector(`.custom-select__option[data-cat="${e}"]`);j&&t&&(j.textContent=t.textContent.trim())}function he(e){var t;return`
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
  `}function Le(e){l&&(l.innerHTML=['<li class="custom-select__option is-active" data-cat="">Всі десерти</li>',...e.map(t=>`<li class="custom-select__option" data-cat="${t._id}">${d(t.name)}</li>`)].join(""))}function ve(e){i.categories&&(i.categories.innerHTML=[`<li>
      <button class="dessert-list__cat-btn is-active" data-cat="">
        Всі десерти
      </button>
    </li>`,...e.map(t=>`
      <li>
        <button class="dessert-list__cat-btn" data-cat="${t._id}">
          ${d(t.name)}
        </button>
      </li>
    `)].join(""))}const C={showLoader(){var e;(e=i.loader)==null||e.removeAttribute("hidden")},hideLoader(){var e;(e=i.loader)==null||e.setAttribute("hidden","")},toggleLoadMore(){i.loadMore&&(i.loadMore.hidden=c.page*Q>=c.total)}};async function E(e=!1){var t;if(!c.loading)try{c.loading=!0,e&&(c.page=1,i.grid&&(i.grid.innerHTML="")),C.showLoader(),i.loadMore&&(i.loadMore.hidden=!0);const s=await ye({page:c.page,limit:Q,category:c.category});c.total=s.totalItems??s.length??0;const o=Array.isArray(s.desserts)?s.desserts:Array.isArray(s)?s:[];(t=i.grid)==null||t.insertAdjacentHTML("beforeend",o.map(he).join("")),C.toggleLoadMore()}catch(s){console.error("[loadDesserts]",s),p.error({title:"Error",message:"Failed to load desserts"})}finally{c.loading=!1,C.hideLoader()}}async function we(){try{const e=await fe();Le(e),ve(e)}catch(e){console.error("[loadCategories]",e),p.error({title:"Error",message:"Failed to load categories"})}}u==null||u.addEventListener("click",()=>{var t;const e=(t=i.customSelect)==null?void 0:t.classList.contains("open");H(!e)});l==null||l.addEventListener("click",e=>{const t=e.target.closest(".custom-select__option");t&&(c.category=t.dataset.cat||"",c.page=1,W(c.category),E(!0),H(!1))});document.addEventListener("click",e=>{var t;(t=i.customSelect)!=null&&t.contains(e.target)||H(!1)});var Z;(Z=i.categories)==null||Z.addEventListener("click",e=>{const t=e.target.closest(".dessert-list__cat-btn");t&&(c.category=t.dataset.cat||"",c.page=1,W(c.category),E(!0))});var z;(z=i.loadMore)==null||z.addEventListener("click",()=>{c.page+=1,E()});(async function(){await we(),await E(!0)})();const be=document.querySelector(".contact-us-gallery");document.querySelector(".contact-us-gallery-list");const Y=window.matchMedia("(min-width: 768px)");let N,w=!1;function J(){Y.matches?w||(w=!0,N=new P(be,{modules:[I,T],watchSlidesProgress:!0,breakpoints:{768:{slidesPerView:2,spaceBetween:24,pagination:{el:".about-us-pagination",clickable:!0},navigation:{nextEl:".about-us-slide-btn.button-next",prevEl:".about-us-slide-btn.button-prev"}}}})):w&&(N.destroy(),w=!1)}J();Y.addEventListener("change",J);const Se="https://deserts-store.b.goit.study/api/",Ee="feedbacks",_e=document.querySelector(".feedback-swiper"),g=document.getElementById("feedbacks-container");function ke(e){let t="";for(let s=1;s<=5;s++)e>=s?t+=`
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
        </svg>`;return`<div class="star-rating theme-default-star">${t}</div>`}function Ce(e){if(!g)return;g.innerHTML="";let t="";e.forEach(s=>{const o=ke(s.rate);t+=`
      <li class="swiper-slide">
        <div class="feedback-card">
          <div class="rating-wrapper">
            ${o}
          </div>
          <p class="feedback-text">"${s.description}"</p>
          <div class="feedback-author">${s.author}</div>
        </div>
      </li>
    `}),g.innerHTML=t}async function $e(){if(!g)return;const e=document.querySelector(".feedback-loader");try{const{data:t}=await L(`${Se}${Ee}`,{params:{limit:10,page:1}}),s=Array.isArray(t)?t:t.results||t.feedbacks;if(!Array.isArray(s))throw new Error("Невірний формат даних");const o=s.filter(({rate:r,description:n,author:a})=>r!==void 0&&n&&a);if(o.length===0){console.warn("Немає валідних відгуків для відображення"),e&&(e.innerHTML="<p>Відгуків поки немає</p>");return}Ce(o),g.classList.add("swiper-wrapper"),e&&(e.style.display="none"),Me()}catch(t){if(console.error("Помилка завантаження відгуків:",t),e){e.innerHTML='<p style="color: #080c0c;">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>';const s=e.querySelector(".spinner");s&&(s.style.display="none")}}}function Me(){new P(_e,{modules:[I,T],watchSlidesProgress:!0,slidesPerView:1,spaceBetween:20,grabCursor:!0,loop:!0,pagination:{el:".feedback-pagination",clickable:!0,dynamicBullets:!0,renderBullet:function(e,t){return`<span class="${t}"></span>`}},navigation:{nextEl:".feedback-slide-btn.button-next",prevEl:".feedback-slide-btn.button-prev"},breakpoints:{768:{slidesPerView:3,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}$e();const qe=document.querySelector(".faq-accordion");new re(qe,{elementClass:"faq-item",triggerClass:"faq-trigger",panelClass:"faq-panel",showMultiple:!1,ariaEnabled:!0});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("year");e&&(e.textContent=new Date().getFullYear())});const Ae=document.querySelector(".modal-form");Ae.addEventListener("submit",Be);let xe=null;async function Be(e){e.preventDefault();const{username:t,phone:s,textComment:o}=e.target.elements,r={name:t.value.trim(),phone:s.value.trim(),dessertId:xe,comment:o.value.trim()};try{const a=(await L.post("https://deserts-store.b.goit.study/api/orders",r)).data;console.log(a),p.success({title:`${a.name}`,message:`Ви замовили ${a.dessertName}, номер вашого замовлення ${a.orderNum}`,position:"topRight"}),e.target.reset()}catch(n){p.error({title:"Помилка",message:`${n}`,position:"topRight"})}}let f=null;const F=document.querySelector(".js-dessert-grid"),S=document.querySelector(".overlay-details"),X=document.querySelector(".modal-details-close"),y=document.querySelector(".modal-img"),M=document.querySelector(".modal-details-title"),q=document.querySelector(".modal-price"),A=document.querySelector(".modal-rating"),x=document.querySelector(".modal-description"),B=document.querySelector(".modal-ingredients");function Pe(e){const t=Number(e)||5,s=5,o=Math.floor(t),r=t%1>=.25&&t%1<.75,n=t%1>=.75?1:0,a=o+n,_=s-a-(r?1:0);return"★".repeat(a)+(r?"⯪":"")+"☆".repeat(_)}async function Te(e){const t=e.target.closest(".product-card-btn");if(!t)return;const{id:s}=t.dataset;f=s;try{const r=(await L.get(`https://your-api.com/desserts/${s}`)).data;y.src=r.image,y.alt=r.name,M.textContent=r.name,q.textContent=`${r.price} грн`,x.textContent=r.description,A.textContent=Pe(r.rating),B.innerHTML=`<strong>Склад:</strong> ${r.ingredients}`,Ie()}catch(o){console.error("Failed to load dessert:",o)}}function Ie(){S.classList.add("is-open"),document.body.style.overflow="hidden",X.addEventListener("click",v),S.addEventListener("click",ee),window.addEventListener("keydown",te)}function v(){S.classList.remove("is-open"),document.body.style.overflow="",X.removeEventListener("click",v),S.removeEventListener("click",ee),window.removeEventListener("keydown",te),De(),f=null}function ee(e){e.target===e.currentTarget&&v()}function te(e){e.code==="Escape"&&v()}F&&F.addEventListener("click",Te);const R=document.querySelector(".js-open-order-btn");R&&R.addEventListener("click",()=>{if(!f)return;const e=new CustomEvent("open-order",{detail:{dessertId:f}});document.dispatchEvent(e),console.log(`Подія 'open-order' відправлена з ID: ${f}`),v()});function De(){y&&(y.removeAttribute("src"),y.alt=""),M&&(M.textContent=""),q&&(q.textContent=""),x&&(x.textContent=""),A&&(A.textContent=""),B&&(B.innerHTML="")}
//# sourceMappingURL=index.js.map
