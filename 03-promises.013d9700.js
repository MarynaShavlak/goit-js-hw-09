!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequire7bc7=o);var i=o("h6c0i");i.Notify.init({width:"300px",position:"right-top",fontSize:"16px",timeout:5e3}),document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var n=function(e){var n={};return new FormData(e.currentTarget).forEach((function(e,t){n[t]=Number(e)})),n}(e),t=n.delay,o=n.step,c=n.amount,u=t;for(r=1;r<=c;r+=1)a(r,u).then((function(e){var n=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),u+=o}));var r=1;function a(e,n){return new Promise((function(t,o){var i=Math.random()>.3;setTimeout((function(){i?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}}();
//# sourceMappingURL=03-promises.013d9700.js.map
