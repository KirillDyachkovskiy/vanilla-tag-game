(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const p=(o,t)=>{const e=[];for(let r=0;r<o.length;r+=t)e.push(o.slice(r,r+t));return e},k=(o,t,e)=>{o.style.transform=`translate3D(${t*100}%, ${e*100}%, 0)`},I=(o,t)=>{for(let e=0;e<o.length;e++)for(let r=0;r<o[e].length;r++)t(o[e][r],{row:e,col:r},o)},m=(o,t)=>I(o,(e,{row:r,col:n})=>{k(t[e-1],r,n)}),b=(o,t)=>{for(let e=0;e<o.length;e++)for(let r=0;r<o[e].length;r++)if(o[e][r]===t)return{row:e,col:r};return{row:-1,col:-1}},g=(o,t)=>{var n;const e=[[-1,0],[1,0],[0,-1],[0,1]],r=[];for(let s=0;s<e.length;s++){const c=t.row+e[s][0],l=t.col+e[s][1],i=(n=o[c])==null?void 0:n[l];i!==void 0&&r.push([i,{row:c,col:l}])}return r},E=(o,t,e)=>{[o[t.row][t.col],o[e.row][e.col]]=[o[e.row][e.col],o[t.row][t.col]]},L=o=>o.flat(),P=o=>L(o).every((t,e,r)=>t>r[e-1]||e===0),w=o=>o[Math.floor(Math.random()*o.length)],a=document.querySelector(".field"),d=Array.from(document.querySelectorAll(".field__item")),h=document.querySelector(".shuffle"),M=100;function N(){if(d.length!==16)throw Error("\u0414\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C 16 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432");const o=d.map(c=>Number(c.innerHTML)),t=p(o,4);m(t,d);let e=b(t,16);const r=c=>{E(t,e,c),m(t,d),e=c,a&&(a.dataset.solved=String(P(t)))};a==null||a.addEventListener("click",c=>{const l=c.target.closest("button"),i=Number(l==null?void 0:l.innerHTML),f=g(t,e).find(([v])=>v===i);if(!f)return;const y=f[1];r(y)}),window.addEventListener("keydown",c=>{var i;const l={...e};switch(c.key){case"ArrowUp":l.col++;break;case"ArrowDown":l.col--;break;case"ArrowLeft":l.row++;break;case"ArrowRight":l.row--;break}((i=t[l.row])==null?void 0:i[l.col])!==void 0&&r(l)});let n=0,s;h==null||h.addEventListener("click",()=>{n=0,clearInterval(s);let c={col:-1,row:-1};s=setInterval(()=>{const l=g(t,e),i=w(l);let u=i[1];u.row===c.row&&u.col===c.col&&(u=w(l.filter(f=>f!==i))[1]),c=e,r(u),n++,n>M&&clearInterval(s)},60)})}N();
