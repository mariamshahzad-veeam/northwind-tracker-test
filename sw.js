var SCOPE = self.registration.scope;
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open('workbox-precache-v2-' + SCOPE).then(function (c) { return c.addAll(['index.html', 'style.css']); }));
  self.skipWaiting();
});
self.addEventListener('activate', function (e) {
  e.waitUntil(self.clients.claim().then(function () {
    var r = indexedDB.open('nw_sw_state', 1);
    r.onupgradeneeded = function () { r.result.createObjectStore('meta'); };
    r.onsuccess = function () { r.result.transaction('meta', 'readwrite').objectStore('meta').put(Date.now(), 'activated'); };
  }));
});
self.addEventListener('fetch', function (e) {
  if (/\.(css|js)$/.test(new URL(e.request.url).pathname)) {
    e.respondWith(fetch(e.request).then(function (res) {
      var cp = res.clone(); caches.open('nw-runtime-assets').then(function (c) { c.put(e.request, cp); }); return res;
    }));
  }
});
