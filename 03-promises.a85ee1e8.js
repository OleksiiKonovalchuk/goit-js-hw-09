function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var i=r("eWCmQ");const l={delay:document.querySelector("[name='delay']"),step:document.querySelector("[name='step']"),amount:document.querySelector("[name='amount']"),form:document.querySelector(".form")};function u(o,t){const n=Math.random()>.3;return new Promise(((e,r)=>{setTimeout((()=>{n?e({position:o,delay:t}):r({position:o,delay:t})}),t)})).then((({position:o,delay:t})=>(e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`),{position:o,delay:t}))).catch((({position:o,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}))}l.form.addEventListener("submit",(e=>{e.preventDefault(),((e,o,t)=>{let n=0;for(let r=1;r<=Number(t);r+=1)n=1===r?Number(e):n+=Number(o),u(r,n)})(l.delay.value,l.step.value,l.amount.value)}));
//# sourceMappingURL=03-promises.a85ee1e8.js.map
