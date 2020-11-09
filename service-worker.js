"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["./index.html","2a7ff6001a2bd0078831d840056ba0fa"],["./static/css/main.c4b22dc6.css","4eedf301e6ad6d5238b983a01b6fe0d1"],["./static/media/MaterialIcons-Regular.0509ab09.woff2","0509ab09c1b0d2200a4135803c91d6ce"],["./static/media/MaterialIcons-Regular.29b882f0.woff","29b882f018fa6fe75fd338aaae6235b8"],["./static/media/MaterialIcons-Regular.96c47680.eot","96c476804d7a788cc1c05351b287ee41"],["./static/media/MaterialIcons-Regular.da4ea5cd.ttf","da4ea5cdfca6b3baab285741f5ccb59f"],["./static/media/roboto-latin-100.5cb7edfc.woff","5cb7edfceb233100075dc9a1e12e8da3"],["./static/media/roboto-latin-100.7370c367.woff2","7370c3679472e9560965ff48a4399d0b"],["./static/media/roboto-latin-100italic.f8b1df51.woff2","f8b1df51ba843179fa1cc9b53d58127a"],["./static/media/roboto-latin-100italic.f9e8e590.woff","f9e8e590b4e0f1ff83469bb2a55b8488"],["./static/media/roboto-latin-300.b00849e0.woff","b00849e00f4c2331cddd8ffb44a6720b"],["./static/media/roboto-latin-300.ef7c6637.woff2","ef7c6637c68f269a882e73bcb57a7f6a"],["./static/media/roboto-latin-300italic.14286f3b.woff2","14286f3ba79c6627433572dfa925202e"],["./static/media/roboto-latin-300italic.4df32891.woff","4df32891a5f2f98a363314f595482e08"],["./static/media/roboto-latin-400.479970ff.woff2","479970ffb74f2117317f9d24d9e317fe"],["./static/media/roboto-latin-400.60fa3c06.woff","60fa3c0614b8fb2f394fa29944c21540"],["./static/media/roboto-latin-400italic.51521a2a.woff2","51521a2a8da71e50d871ac6fd2187e87"],["./static/media/roboto-latin-400italic.fe65b833.woff","fe65b8335ee19dd944289f9ed3178c78"],["./static/media/roboto-latin-500.020c97dc.woff2","020c97dc8e0463259c2f9df929bb0c69"],["./static/media/roboto-latin-500.87284894.woff","87284894879f5b1c229cb49c8ff6decc"],["./static/media/roboto-latin-500italic.288ad9c6.woff","288ad9c6e8b43cf02443a1f499bdf67e"],["./static/media/roboto-latin-500italic.db4a2a23.woff2","db4a2a231f52e497c0191e8966b0ee58"],["./static/media/roboto-latin-700.2735a3a6.woff2","2735a3a69b509faf3577afd25bdf552e"],["./static/media/roboto-latin-700.adcde98f.woff","adcde98f1d584de52060ad7b16373da3"],["./static/media/roboto-latin-700italic.81f57861.woff","81f57861ed4ac74741f5671e1dff2fd9"],["./static/media/roboto-latin-700italic.da0e7178.woff2","da0e717829e033a69dec97f1e155ae42"],["./static/media/roboto-latin-900.9b3766ef.woff2","9b3766ef4a402ad3fdeef7501a456512"],["./static/media/roboto-latin-900.bb1e4dc6.woff","bb1e4dc6333675d11ada2e857e7f95d7"],["./static/media/roboto-latin-900italic.28f91510.woff","28f9151055c950874d2c6803a39b425b"],["./static/media/roboto-latin-900italic.ebf6d164.woff2","ebf6d1640ccddb99fb49f73c052c55a8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),i.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),i=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),t=urlsToCacheKeys.has(a));var i="./index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(i,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});