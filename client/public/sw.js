if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let t={};const r=e=>i(e,c),f={module:{uri:c},exports:t,require:r};a[c]=Promise.all(s.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"2b4cf6920b8b09ec3d7e6f5b3550f9a2"},{url:"/_next/static/chunks/318-c41a92ccb451a494.js",revision:"pjHba_x-w4_iLSTzbnyQg"},{url:"/_next/static/chunks/864-a4f265cffdf80d6d.js",revision:"pjHba_x-w4_iLSTzbnyQg"},{url:"/_next/static/chunks/app/_not-found-19a373206c905c60.js",revision:"pjHba_x-w4_iLSTzbnyQg"},{url:"/_next/static/chunks/app/layout-3c2aed7718a6acf6.js",revision:"pjHba_x-w4_iLSTzbnyQg"},{url:"/_next/static/chunks/app/page-7bf245aab7430c9c.js",revision:"pjHba_x-w4_iLSTzbnyQg"},{url:"/_next/static/chunks/fd9d1056-23f6e37ad1d1612c.js",revision:"pjHba_x-w4_iLSTzbnyQg"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"pjHba_x-w4_iLSTzbnyQg"},{url:"/_next/static/chunks/main-420935260a4b0d3a.js",revision:"pjHba_x-w4_iLSTzbnyQg"},{url:"/_next/static/chunks/main-app-fbfd6e6fd0814754.js",revision:"pjHba_x-w4_iLSTzbnyQg"},{url:"/_next/static/chunks/pages/_app-27277a117f49dcf1.js",revision:"pjHba_x-w4_iLSTzbnyQg"},{url:"/_next/static/chunks/pages/_error-91a5938854a6f402.js",revision:"pjHba_x-w4_iLSTzbnyQg"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-71c5651ef8095b2f.js",revision:"pjHba_x-w4_iLSTzbnyQg"},{url:"/_next/static/css/09968a22ebc60b61.css",revision:"09968a22ebc60b61"},{url:"/_next/static/css/6a22e46dbd91cb4a.css",revision:"6a22e46dbd91cb4a"},{url:"/_next/static/media/2b1dcaf5608ac1e9.woff2",revision:"3e51748b174215568a6d0027bd1bbae7"},{url:"/_next/static/media/5a24620d1e3bbbb5.p.woff2",revision:"201e28ea11365211a3bf02a3d8d2d5d9"},{url:"/_next/static/media/5bb4b4144e8b9bce.woff2",revision:"af717b5466b1e0fc755853f143ee4e4f"},{url:"/_next/static/media/a935621b036a2487.woff2",revision:"a6015920ce3d7d4e20c37fd56b3a7907"},{url:"/_next/static/media/a93afe4c0970e00f.woff2",revision:"b74a8c11139aa3db106954f48074f4a6"},{url:"/_next/static/media/b00d54d8fbdeaf9e.woff2",revision:"5d415416c64c5907b568ac56de7e0feb"},{url:"/_next/static/media/boberek.2be22cb0.png",revision:"8984417353ac3aae0d03fa923f0f9300"},{url:"/_next/static/media/c2b6b2943821d5a3.woff2",revision:"c505300b8739729c781fee9351a37cbd"},{url:"/_next/static/media/capibara.cb37c217.png",revision:"68ef12fd8836bf4f4751fd400ecb1354"},{url:"/_next/static/media/diplodok.0e6d01d4.png",revision:"499ccddd7de1408fcf35b81955a077e1"},{url:"/_next/static/media/dog.11b4f557.png",revision:"840513f26e46fbfeaf0159788b691e2f"},{url:"/_next/static/media/e7b2cc7b4ec099b6.woff2",revision:"8f8378693628ee52e1189fd36f67c3b3"},{url:"/_next/static/media/fb0e581cff487a7c.woff2",revision:"977d2d6219ceb953e6bf76170e148152"},{url:"/_next/static/media/frog.e5e120ab.png",revision:"85a64aea0898e12f52b7ba181ff9b426"},{url:"/_next/static/media/note.97a47008.png",revision:"246a4a30b388fcbf8588223cc0a49e0c"},{url:"/_next/static/media/pigeon_fly.440b8223.png",revision:"069a22cc21d199d80fe333ddacda2a8e"},{url:"/_next/static/media/pigeon_stand.eccaf97f.png",revision:"31fd645b3065fc9019fea43262dbcba1"},{url:"/_next/static/pjHba_x-w4_iLSTzbnyQg/_buildManifest.js",revision:"ae9eef61ecb4f32528f2e03fce5305d0"},{url:"/_next/static/pjHba_x-w4_iLSTzbnyQg/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/audio/beaver.mp3",revision:"130cf4b32368d2beef1456ce7938a6f2"},{url:"/audio/capybara.mp3",revision:"0c3c69071835e966a909f589e5463fd9"},{url:"/audio/click.wav",revision:"70019ecd9bd76fe2dc8c63d0fd97a708"},{url:"/audio/dinosaur.mp3",revision:"d3ea4fa5025e6c659134b80808960c37"},{url:"/audio/dog.mp3",revision:"59495cdf07684662669691eeb1a619f8"},{url:"/audio/frog.mp3",revision:"b482c2005b1719699cd02c754aae5bdc"},{url:"/audio/gameplay.mp3",revision:"3fc6de1210105d7797caa9bddf37fbc2"},{url:"/audio/hallelujah.mp3",revision:"9c6f2808c55dfcac620deaf86a94b569"},{url:"/audio/owl.mp3",revision:"7f2f9011139df673f6a253a9abc2e240"},{url:"/audio/paper.mp3",revision:"4835106eaf091e236bce9f9f824cef9a"},{url:"/characters/boberek.png",revision:"8984417353ac3aae0d03fa923f0f9300"},{url:"/characters/capibara.png",revision:"68ef12fd8836bf4f4751fd400ecb1354"},{url:"/characters/diplodok.png",revision:"499ccddd7de1408fcf35b81955a077e1"},{url:"/characters/dog.png",revision:"840513f26e46fbfeaf0159788b691e2f"},{url:"/characters/frog.png",revision:"85a64aea0898e12f52b7ba181ff9b426"},{url:"/characters/note.png",revision:"246a4a30b388fcbf8588223cc0a49e0c"},{url:"/characters/pigeon_fly.png",revision:"069a22cc21d199d80fe333ddacda2a8e"},{url:"/characters/pigeon_stand.png",revision:"31fd645b3065fc9019fea43262dbcba1"},{url:"/manifest.json",revision:"16ab7bb75e2f369cefce7f2ba69efd9f"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/ramka.png",revision:"83288732aa7789e7c26ae209668e5ca7"},{url:"/room.png",revision:"b2ba3bb04ee3b458fff45921907c167d"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
