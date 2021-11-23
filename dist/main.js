(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let l=performance.now();requestAnimationFrame((function n(a){let c=(a-l)/o;c>1&&(c=1);let s=e(c);t(s),c<1&&requestAnimationFrame(n)}))},t=({formId:e,someElem:t=[]})=>{const o=document.getElementById(e),l=o.querySelector("button"),n=document.createElement("div"),a="Ошибка...";try{if(!o)throw new Error("Форма была изменена или отсутствует!");l.addEventListener("click",(e=>{e.preventDefault(),"none"!==n.style.display||(n.style.display="block"),setTimeout((()=>{n.style.display="none"}),5e3),(()=>{const e=o.querySelectorAll("input"),l=new FormData(o),c={};var s;n.textContent="Загрузка...",n.style.color="black",o.append(n),l.forEach(((e,t)=>{c[t]=e})),window.location.toString().indexOf("balkony.html")>0&&t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?c[e.id]=t.textContent:"input"===e.type&&(c[e.id]=t.value)})),(e=>{let t=!0;return e.forEach((e=>{e.classList.contains("success")||(t=!1)})),t})(e)?(s=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((()=>{n.textContent="Спасибо! Наш менеджер с Вами свяжется",n.style.color="black",o.querySelector("input").classList.remove("success"),setTimeout((()=>{document.querySelector(".overlay").style.display="none",document.querySelector(".header-modal").style.display="none",document.querySelector(".services-modal").style.display="none"}),2e3),e.forEach((e=>{e.value=""}))})).catch((e=>{n.textContent=a,n.style.color="red"})):(n.textContent=a,n.style.color="red",alert("Пожалуйста, заполните все поля и проверьте правильность введенных данных:)"))})()}))}catch(e){console.log(e.message)}};(()=>{const t=document.querySelectorAll(".fancybox-skin"),o=document.querySelector(".header-modal"),l=document.querySelector(".services-modal"),n=document.querySelector(".overlay"),a=document.querySelector(".button"),c=document.querySelectorAll(".service-button");try{a.addEventListener("click",(()=>{o.style.display="block",n.style.display="block",e({duration:300,timing:e=>e,draw(e){o.style.opacity=e,n.style.opacity=e}})})),c.forEach((t=>{t.addEventListener("click",(()=>{l.style.display="block",n.style.display="block",e({duration:300,timing:e=>e,draw(e){l.style.opacity=e}})}))})),t.forEach((e=>{e.addEventListener("click",(e=>{e.target.classList.contains("header-modal__close")?(o.style.display="none",n.style.display="none"):e.target.classList.contains("services-modal__close")&&(l.style.display="none",n.style.display="none")}))}))}catch(e){console.log(e.message)}})(),(()=>{const t=document.querySelector(".smooth-scroll");document.addEventListener("scroll",(()=>{window.scrollY<200?(t.style.display="none",e({duration:1e3,timing:e=>e,draw(e){t.style.opacity=e}})):t.style.display="block"})),t.addEventListener("click",(e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}))})(),(e=>{const t=document.querySelectorAll(".count_1>span"),o=document.querySelectorAll(".count_2>span"),l=document.querySelectorAll(".count_3>span"),n=document.querySelectorAll(".count_4>span"),a=()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}},c=()=>{let e=a();t.forEach((t=>{t.textContent=("0"+e.days).slice(-2)})),o.forEach((t=>{t.textContent=("0"+e.hours).slice(-2)})),l.forEach((t=>{t.textContent=("0"+e.minutes).slice(-2)})),n.forEach((t=>{t.textContent=("0"+e.seconds).slice(-2)}))};setTimeout((()=>{let e=a();e.timeRemaining>0?c():0===e.timeRemaining&&clearTimeout(c)})),setInterval((()=>{let e=a();e.timeRemaining>0?c():0===e.timeRemaining&&clearInterval(c)}),1e3)})("26 november 2021"),window.location.toString().indexOf("balkony.html")>0&&(()=>{const e=document.getElementById("calc"),t=document.getElementById("calc-input"),o=document.getElementById("calc-type"),l=document.getElementById("calc-type-material"),n=document.getElementById("calc-total");setInterval((()=>{0===o.selectedIndex||0===l.selectedIndex?t.disabled=!0:t.disabled=!1}),100),e.addEventListener("input",(e=>{e.target!==o&&e.target!==l&&e.target!==t||((()=>{const e=+o.options[o.selectedIndex].value,a=+l.options[l.selectedIndex].value,c=t.value;let s=0;s=o.value&&l.value&&t.value?c*e*a:0,n.value=s})(),""===t.value?(o[0].disabled=!1,l[0].disabled=!1):(o[0].disabled=!0,l[0].disabled=!0))}))})(),(()=>{const e=document.getElementById("calc"),t=document.getElementById("calc-input");document.querySelectorAll("form").forEach((e=>{const t=e.querySelector("input[name=fio]"),o=e.querySelector("input[name=phone]"),l=e.querySelectorAll("input[type=hidden]");t.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^а-яa-z ]/gi,""),e.target.value.length>=2?(e.target.classList.add("success"),l.forEach((e=>{e.classList.add("success")}))):(e.target.classList.remove("success"),l.forEach((e=>{e.classList.remove("success")})))})),o.addEventListener("input",(e=>{e.preventDefault(),o.maxLength="16",e.target.value=e.target.value.replace(/[^0-9\+]/g,""),e.target.value.length>=11?e.target.classList.add("success"):e.target.classList.remove("success")}))})),window.location.toString().indexOf("balkony.html")>0&&e.addEventListener("input",(e=>{e.preventDefault(),t.type="text",t.value=t.value.replace(/\D+/,"")}))})(),t({formId:"form1",someElem:[{type:"input",id:"calc-total"}]}),t({formId:"form2",someElem:[{type:"input",id:"calc-total"}]}),t({formId:"form3",someElem:[{type:"input",id:"calc-total"}]}),t({formId:"form4",someElem:[{type:"input",id:"calc-total"}]}),t({formId:"form5",someElem:[{type:"input",id:"calc-total"}]}),t({formId:"form6",someElem:[{type:"input",id:"calc-total"}]}),t({formId:"form7",someElem:[{type:"input",id:"calc-total"}]})})();