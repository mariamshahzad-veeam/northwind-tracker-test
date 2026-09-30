(function () {
  var r = indexedDB.open('tp_chain_db', 1);
  r.onupgradeneeded = function () { r.result.createObjectStore('sessions', { keyPath: 'id' }); };
  r.onsuccess = function () { r.result.transaction('sessions', 'readwrite').objectStore('sessions').put({ id: 's1', t: Date.now() }); };
  caches.open('tp-chain-cache').then(function (c) { return c.put('c.json', new Response('{"c":1}')); });
  var g = document.createElement('canvas').getContext('webgl');
  if (g) {
    var e = g.getExtension('WEBGL_debug_renderer_info');
    if (e) { g.getParameter(e.UNMASKED_VENDOR_WEBGL); g.getParameter(e.UNMASKED_RENDERER_WEBGL); }
  }
})();
