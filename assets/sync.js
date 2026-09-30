(function () {
  function open(name, ver, stores, fn) {
    var r = indexedDB.open(name, ver);
    r.onupgradeneeded = function () { stores.forEach(function (s) { r.result.createObjectStore(s[0], s[1]); }); };
    r.onsuccess = function () { fn(r.result); };
  }
  open('localforage', 2, [['keyvaluepairs', {}]], function (db) {
    db.transaction('keyvaluepairs', 'readwrite').objectStore('keyvaluepairs').put('ok', 'session_probe');
  });
  open('firebaseLocalStorageDb', 1, [['firebaseLocalStorage', { keyPath: 'fbase_key' }]], function (db) {
    db.transaction('firebaseLocalStorage', 'readwrite').objectStore('firebaseLocalStorage').put({ fbase_key: 'firebase:host', value: 'nw' });
  });
  setTimeout(function () {
    open('nw_visitor_profile', 1, [['identity', { keyPath: 'id' }], ['events', { autoIncrement: true }]], function (db) {
      var t = db.transaction(['identity', 'events'], 'readwrite');
      t.objectStore('identity').put({ id: 'v', uid: 'nw-' + Math.random().toString(36).slice(2) });
      t.objectStore('events').add({ u: location.href, t: Date.now() });
    });
  }, 1500);
  if ('caches' in window) caches.open('nw-config-v1').then(function (c) { c.put('cfg.json', new Response('{"seg":["outdoor"]}')); });

  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');

  window.__nwCart = function () {
    open('cart_state', 1, [['items', { keyPath: 'sku' }]], function (db) {
      db.transaction('items', 'readwrite').objectStore('items').put({ sku: 'TJ-129', qty: 1 });
    });
    caches.open('nw-cart-snapshot').then(function (c) { c.put('cart.json', new Response('{"sku":"TJ-129","qty":1}')); });
  };
})();
