if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const o=e=>c(e,s),a={module:{uri:s},exports:d,require:o};i[s]=Promise.all(n.map((e=>a[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"assets/index-AydG4Cmu.css",revision:null},{url:"assets/index-BZfKIrTd.js",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"images/test.png",revision:"12e5cbbb63024460755560bb7e03f0a4"},{url:"index.html",revision:"ce3a795f4433bf6fdb4ce6e88cbd24eb"},{url:"masked-icon.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"pwa-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"pwa-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"registerSW.js",revision:"079ec3eb51974c934125a2a217134007"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"apple-touch-icon.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"masked-icon.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"pwa-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"pwa-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"manifest.webmanifest",revision:"a42eb92e65547403ade19dbdb1c156d0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
