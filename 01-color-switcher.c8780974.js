startBtn=document.querySelector("[data-start]"),stopBtn=document.querySelector("[data-stop]"),bodyEl=document.querySelector("body");let t=null;function e(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}startBtn.addEventListener("click",(function(){bodyEl.style.backgroundColor=e(),startBtn.disabled=!0,stopBtn.disabled=!1,t=setInterval((()=>{bodyEl.style.backgroundColor=e()}),1e3)})),stopBtn.addEventListener("click",(function(){clearInterval(t),startBtn.disabled=!1,stopBtn.disabled=!0}));
//# sourceMappingURL=01-color-switcher.c8780974.js.map
