if(!self.define){let e,s={};const i=(i,d)=>(i=new URL(i+".js",d).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(d,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const t=e=>i(e,r),f={module:{uri:r},exports:c,require:t};s[r]=Promise.all(d.map((e=>f[e]||t(e)))).then((e=>(n(...e),c)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-B2eDRGpx.js",revision:"8fe11120a001617e1b4e667910bf5c09"},{url:"assets/index-BRtSednW.js",revision:"137433f11fb59ebe7a1a7e9837ead6d1"},{url:"assets/index-C3ImnMA-.js",revision:"1505c7d7e9f1890e49cd18e6e2f33237"},{url:"assets/index-CRYkmRB5.js",revision:"141c37509a13ce4e31d83fcd1ce47716"},{url:"assets/index-D66A2iB-.js",revision:"e90dec14fe31cbaea0c658a7d54a2165"},{url:"assets/index-DDdt33n-.js",revision:"66bb5696cacf7574c91b4eb015bfbd59"},{url:"assets/index-DGpCa3rK.js",revision:"55750ac7bb133dd0d30aa5710d8af41e"},{url:"assets/index-o5PHD_Mk.css",revision:"7fc3ccb1c6324b39f4d1f44f1d4a7cc0"},{url:"assets/index-sb_lfXnJ.js",revision:"d7bae53b2b7e962cf3431ff07e95cd7a"},{url:"assets/user-3-CVuZ4EQJ.js",revision:"d95f2efebaf0d6b59490f5ddfcb9f638"},{url:"assets/vitalswap-logo2-D0-XlAVd.js",revision:"831f58d5d096b0683578c3ac4e0a7413"},{url:"index.html",revision:"05064882e22e0caf52b2e3f42071ecd9"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"920adfbf2b750a9f0b66648704440c8d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
