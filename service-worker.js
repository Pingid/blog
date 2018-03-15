"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/blog/index.html","5be8ec91eb79111d9fe73e4ca96d5460"],["/blog/static/css/main.91d2c973.css","e2e8e3466154aba3e85c15c7ff8e9c8c"],["/blog/static/js/main.3e423bdd.js","027d7bbc9c9bc5d2eee480f7e4786183"],["/blog/static/media/ Gallery IV.5fa51ada.jpg","5fa51adad3ad5f8d0c0c7243a1d91a6e"],["/blog/static/media/ The crew of H.M.S. Hood unload cases at Portsmouth, July 1935.1b3c3531.jpg","1b3c353103648052ce063df51bc5b886"],["/blog/static/media/ Zheng Tianxin (Dr F. T. Cheng) and Mr F.St. G. Spendlove examining exhibits.31d50258.jpg","31d50258e473209c17dd7def1c947ac6"],["/blog/static/media/52_working_05.6118c3b6.jpg","6118c3b6411d9a7a00af63431643b450"],["/blog/static/media/52_working_08.f948b428.jpg","f948b42888694158561b0ccc2976f341"],["/blog/static/media/A Knife-grinder.8f119853.jpg","8f119853a39827fc964e6eda5b0dc884"],["/blog/static/media/A Manchu Bride.0bf6943f.jpg","0bf6943fa9624714971375fafdedbe91"],["/blog/static/media/A Mandarin official.c8be3487.jpg","c8be3487efbf785bef777fffbc83edaa"],["/blog/static/media/A Muslim Butcher.a892e28b.jpg","a892e28b269dc844d105e7dd4fd1ce94"],["/blog/static/media/A Travelling Chiropodist.2e9b9bd7.jpg","2e9b9bd760ad9f6d2bd659e26978f626"],["/blog/static/media/Amoy man and woman.715ff22c.jpg","715ff22c266148c103bd694ce04a2193"],["/blog/static/media/Boatman, Canton.006a3028.jpg","006a3028f2d47331138e6e8f73bd0b6b"],["/blog/static/media/Buddhist Sculpture in The Lecture Room.4ba77958.jpg","4ba77958d688dd7435dadca8f928e940"],["/blog/static/media/Duchamp_Fountaine.3af79cbf.jpg","3af79cbf7ff581615efc029dcb58551a"],["/blog/static/media/Early Ming Dynasty, Gallery VIII (Royal Academy of Arts, The International Exhibition of Chinese Art, 1935-36), 1935.f515bcca.jpg","f515bcca354945bd86ab740028d3cb51"],["/blog/static/media/Gallery 7.ef659433.jpg","ef65943376d40f492529222747a27536"],["/blog/static/media/Gallery I  03.841ff615.jpg","841ff615776a9a0ec159d16050ea0e4f"],["/blog/static/media/Gallery I 02.cf6283ac.jpg","cf6283ac591bd102767567faac128b98"],["/blog/static/media/Gallery I.24f5b179.jpg","24f5b1792f3fe0194424b9c3394beedc"],["/blog/static/media/Gallery II.a1859d22.jpg","a1859d226d3b813107546a0b7b8bc000"],["/blog/static/media/Hoisting a case from the deck of H.M.S. Suffolk at Portsmouth, July 1935.626376e4.jpg","626376e40db1e3146c7e0354ca5e9406"],["/blog/static/media/Installing the Amitabha Buddha in the Central Hall. .86a4e53b.jpg","86a4e53be919b2c972fbc7368b930eb3"],["/blog/static/media/MISSION SCHOOL, AMOY, CHINA.0122c661.jpg","0122c6614563387780d827c07efa7127"],["/blog/static/media/Manchu Bride in her wedding clothers.6a38aad9.jpg","6a38aad9cf196691a5461f7d9321d7b9"],["/blog/static/media/Manchu Bride, Peking, Penchilie province.f8131ae7.jpg","f8131ae7e4a94e25403cee0e1777c6f3"],["/blog/static/media/Manchu Ladies at Meal Table.a2f9d810.jpg","a2f9d810cdae150f42bc50e7e06e6d58"],["/blog/static/media/Mao Changxi.65b10dad.jpg","65b10dad7a9532d95742e1bcb379e8e3"],["/blog/static/media/Pailou at Dagao hall, Beijing.c77fa1bb.jpg","c77fa1bb721ec34a011e26182b89cfdd"],["/blog/static/media/Percival David, Exhibition Director_ Zheng Tianxin (Dr F.T. Cheng), Special Commissioner of the Chinese Government and Zhuang Shangyan (Chuang Shang-Yen) and Tang Xifen (Tang Hsi Fen), Secretaries accompanying objects..b516a4db.jpg","b516a4db2143e03b7b3b7d49f9304cae"],["/blog/static/media/Praya or des Voeux road, Hong Kong.40184c3a.jpg","40184c3a4601d1d303030af8d4bb4eb9"],["/blog/static/media/Siamese Buddhist Bonze.34463a08.jpg","34463a08897f8eb4dd7ddb3b433ead3b"],["/blog/static/media/Siamese Dancing Girls Lakhon.4fc23570.jpg","4fc23570cdace0e608aef0cdb6f42b54"],["/blog/static/media/Sir Percival David, Exhibition Committee Director and Tang Xifen (Tang Hsi Fen) Exhibition Secretary, examining exhibits.ff29c9f4.jpg","ff29c9f4ddac3304044eeccb5f843de2"],["/blog/static/media/Sir Walter Lamb and Zhuang Shangyan (Chuang Shang-yen) checking cases as they arrive at Burlington House.620eec2f.jpg","620eec2f60273aecc7e55b4d01a9b8a3"],["/blog/static/media/The Amitabha Buddha in the Central Hall- view from the Vestibule .6630e1ac.jpg","6630e1aca0f0ae7d8ec63cf763bfbd88"],["/blog/static/media/The Amitabha Buddha in the Central Hall.4676b9f8.jpg","4676b9f8d5af63b43cec7c43e6d98d78"],["/blog/static/media/Transfering cases from H.M.S. Suffolk to H.M.S. Hood at PortsmouthTransfering cases from H.M.S. Suffolk to H.M.S. Hood at Portsmouth.4ec6088b.jpg","4ec6088bfa61fcf10a47dd34f9c5522c"],["/blog/static/media/Unloading a case from H.M.S. Suffolk at Portsmouth.1c94702c.jpg","1c94702c7c977e723779c44995d88ee4"],["/blog/static/media/Unloading exhibits at the West Yard of Burlington House.ffd31aeb.jpg","ffd31aeb90ebe907f4ea1de7ceb66947"],["/blog/static/media/Unpacking exhibits from Japan.7a65a510.jpg","7a65a51076c204395da25f2818b7e5d4"],["/blog/static/media/War elephant of Siam.68dce0b2.jpg","68dce0b2f714667db3d99f184ffd46f3"],["/blog/static/media/_Magic Lantern_ Peep Show.9655776c.jpg","9655776c55da85d73a80c9099be8889d"],["/blog/static/media/a nightwatchman, Peking.178177fc.jpg","178177fc6f41dfde91e6037251e43213"],["/blog/static/media/dadanyduchreadymadewheel13.f5c651e3.jpg","f5c651e3acffecfb9c4a5b2ac9969e79"],["/blog/static/media/feed-light.96425eba.png","96425eba398ddf08af85606fa606c2b0"],["/blog/static/media/feed.ffeb54a4.png","ffeb54a40854475727396443824d8227"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/blog/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});