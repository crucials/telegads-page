"use strict";(self.webpackChunktelegads=self.webpackChunktelegads||[]).push([[420],{420:function(e,t,n){n.r(t);var o=n(673);let c;const i=document.querySelector(".mobile-menu");function l(){c=window.setTimeout((()=>{document.querySelector(".menu-indicator")?.classList.remove("menu-indicator-visible")}),500)}const s=document.querySelector(".log-in-window"),a=document.querySelector(".log-in-backdrop");function r(){s.open=!0,a.classList.add("backdrop-visible")}function u(){s.open=!1,a.classList.remove("backdrop-visible")}function d(e){s.querySelectorAll(".account-form").forEach((t=>{const n=t;n.classList.contains(e)?n.classList.contains(e)&&(n.hidden=!1):n.hidden=!0}))}a.addEventListener("click",(e=>u())),document.querySelectorAll(".menu-item").forEach((e=>{e.addEventListener("mouseenter",(e=>function(e){window.clearTimeout(c);const t=document.querySelector(".menu-indicator"),n=e.target,o=n.querySelector("a")?.getAttribute("data-translatable");let i;i="aboutUsLink"==o?n.offsetLeft-30:"advantagesLink"==o?n.offsetLeft-5:"servicesLink"==o||"contactsLink"==o?n.offsetLeft-20:n.offsetLeft,t.classList.add("menu-indicator-visible"),t.style.left=`${i}px`}(e))),e.addEventListener("mouseleave",l)})),document.querySelectorAll(".mobile-menu-item").forEach((e=>{e.addEventListener("mouseenter",(e=>function(e){const t=document.querySelector(".mobile-menu-indicator"),n=e.target;n.querySelector("a")?.getAttribute("data-translatable"),t.style.display="block",t.style.top=`${n.offsetTop}px`}(e)))})),document.querySelectorAll(".language-select").forEach((e=>{e.addEventListener("change",(e=>function(e){const t=e.target.value;document.querySelectorAll("[data-translatable]").forEach((e=>{const n=e.getAttribute("data-translatable");if(n){const c=o.o.get(n).get(t);c&&(n.startsWith("title:")?e.title=c:e.textContent=c,localStorage.setItem("language",t),document.querySelectorAll(".language-select").forEach((e=>{e.value=t})))}}))}(e)))})),document.querySelectorAll(".log-in-button").forEach((e=>{e.addEventListener("click",r)})),document.querySelector(".close-window-button")?.addEventListener("click",u),document.getElementById("toAuthLink")?.addEventListener("click",(()=>d("log-in-form"))),document.getElementById("toRegLink")?.addEventListener("click",(()=>d("sign-up-form"))),document.querySelector(".open-menu-button")?.addEventListener("click",(function(){i?.classList.add("menu-opened")})),document.querySelector(".close-menu-button")?.addEventListener("click",(function(){i?.classList.remove("menu-opened")})),window.addEventListener("scroll",(e=>{const t=document.querySelector(".navigation");window.scrollY>=130?t.classList.add("navigation-sticky"):window.scrollY<100&&t.classList.remove("navigation-sticky")})),document.querySelector(".register-button")?.addEventListener("click",(e=>{d("sign-up-form"),r()}))}}]);