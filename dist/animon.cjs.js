"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const t=new IntersectionObserver((function(e){e.forEach((e=>{let i=e.target,n=parseInt(i.getAttribute("data-delay"))||0,s=i.getAttribute("data-duration")||null,r=i.getAttribute("data-run-once");e.intersectionRatio>0?setTimeout((()=>{s&&(i.style.transitionDuration=`${s}, ${s}`),i.classList.add("is-visible"),null!==r&&t.unobserve(i)}),n):null===r&&(i.classList.remove("is-visible"),i.style.removeProperty("transition-duration"))}))}));exports.animon=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".animonItem";const i=document.querySelectorAll(e);"IntersectionObserver"in window?i.forEach((e=>{t.observe(e)})):i.forEach((t=>t.classList.add("is-visible")))};
