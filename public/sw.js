if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>i(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/-8Y9DvQ83iIv0zyiUbU6j/_buildManifest.js",revision:"c672cbb2b1ef32f124cb5a25742afffb"},{url:"/_next/static/-8Y9DvQ83iIv0zyiUbU6j/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/202.5f063e691e3f318b.js",revision:"5f063e691e3f318b"},{url:"/_next/static/chunks/238.29b1ba965a8b2622.js",revision:"29b1ba965a8b2622"},{url:"/_next/static/chunks/271-fce4156981d29e7a.js",revision:"-8Y9DvQ83iIv0zyiUbU6j"},{url:"/_next/static/chunks/33.04525aa4399a4a7d.js",revision:"04525aa4399a4a7d"},{url:"/_next/static/chunks/452-0d52281fd810a6cd.js",revision:"-8Y9DvQ83iIv0zyiUbU6j"},{url:"/_next/static/chunks/461.9da6bfa437c6852d.js",revision:"9da6bfa437c6852d"},{url:"/_next/static/chunks/478.cad316b6e8fef6e4.js",revision:"cad316b6e8fef6e4"},{url:"/_next/static/chunks/486-b23b15f1d832bdcc.js",revision:"-8Y9DvQ83iIv0zyiUbU6j"},{url:"/_next/static/chunks/528.814a8b62c6603fa7.js",revision:"814a8b62c6603fa7"},{url:"/_next/static/chunks/591-07b3798d030f3e44.js",revision:"-8Y9DvQ83iIv0zyiUbU6j"},{url:"/_next/static/chunks/610.8420a982b1c0e083.js",revision:"8420a982b1c0e083"},{url:"/_next/static/chunks/805-f496aa1594564c09.js",revision:"-8Y9DvQ83iIv0zyiUbU6j"},{url:"/_next/static/chunks/909.33e67908bf97ac18.js",revision:"33e67908bf97ac18"},{url:"/_next/static/chunks/988.ab2582e272e3326a.js",revision:"ab2582e272e3326a"},{url:"/_next/static/chunks/app/(auth)/confirm/page-829a99b94139cf7e.js",revision:"-8Y9DvQ83iIv0zyiUbU6j"},{url:"/_next/static/chunks/app/(auth)/layout-b8fa7d355c3a4a10.js",revision:"-8Y9DvQ83iIv0zyiUbU6j"},{url:"/_next/static/chunks/app/(auth)/reset-password/page-b0468f5835feec16.js",revision:"-8Y9DvQ83iIv0zyiUbU6j"},{url:"/_next/static/chunks/app/(auth)/sign-in/page-8acd8c754d24d838.js",revision:"-8Y9DvQ83iIv0zyiUbU6j"},{url:"/_next/static/chunks/app/(auth)/sign-up/page-ef192552fd44da7c.js",revision:"-8Y9DvQ83iIv0zyiUbU6j"},{url:"/_next/static/chunks/app/(main)/layout-0bde4e51f83e212c.js",revision:"-8Y9DvQ83iIv0zyiUbU6j"},{url:"/_next/static/chunks/app/(main)/page-8a7ea820200e7954.js",revision:"-8Y9DvQ83iIv0zyiUbU6j"},{url:"/_next/static/chunks/app/layout-aec54b8f15007973.js",revision:"-8Y9DvQ83iIv0zyiUbU6j"},{url:"/_next/static/chunks/main-app-4f9e1b18c675b0a4.js",revision:"-8Y9DvQ83iIv0zyiUbU6j"},{url:"/_next/static/chunks/main-c90e7979782e1c57.js",revision:"-8Y9DvQ83iIv0zyiUbU6j"},{url:"/_next/static/chunks/pages/_app-4dbef4ff05023091.js",revision:"-8Y9DvQ83iIv0zyiUbU6j"},{url:"/_next/static/chunks/pages/_error-4b6dfdecf01bca10.js",revision:"-8Y9DvQ83iIv0zyiUbU6j"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-df17f81b742490f6.js",revision:"-8Y9DvQ83iIv0zyiUbU6j"},{url:"/_next/static/css/0409b057fffac9d9.css",revision:"0409b057fffac9d9"},{url:"/_next/static/css/10f4cf1b3a5bcee9.css",revision:"10f4cf1b3a5bcee9"},{url:"/_next/static/css/31d083ed5a801da1.css",revision:"31d083ed5a801da1"},{url:"/_next/static/css/641e4dd82e5eee7a.css",revision:"641e4dd82e5eee7a"},{url:"/_next/static/css/64d93066fb100e27.css",revision:"64d93066fb100e27"},{url:"/_next/static/css/8cc57d60e4b774e5.css",revision:"8cc57d60e4b774e5"},{url:"/_next/static/css/9f954c3e76259d87.css",revision:"9f954c3e76259d87"},{url:"/_next/static/css/e2fba87f34cc11f9.css",revision:"e2fba87f34cc11f9"},{url:"/_next/static/css/e425ac12eba6459c.css",revision:"e425ac12eba6459c"},{url:"/_next/static/css/e61a5f92e6c9191c.css",revision:"e61a5f92e6c9191c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:s})=>{if(!e)return!1;const i=s.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e,sameOrigin:s})=>!!s&&!e.pathname.startsWith("/api/")),new e.NetworkFirst({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
