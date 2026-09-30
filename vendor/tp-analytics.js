(function () {
  var w = window, d = document;
  var r = indexedDB.open('tp_vendor_events', 1);
  r.onupgradeneeded = function () { r.result.createObjectStore('queue', { autoIncrement: true }); };
  r.onsuccess = function () { r.result.transaction('queue', 'readwrite').objectStore('queue').add({ t: Date.now(), u: location.href }); };
  caches.open('tp-vendor-cache-v1').then(function (c) { return c.put('v.json', new Response('{"v":1}')); });
  var c = d.createElement('canvas'); c.width = 220; c.height = 40;
  var x = c.getContext('2d');
  x.font = '15px Verdana'; x.fillStyle = '#a3c'; x.fillRect(10, 5, 80, 20);
  x.fillStyle = '#280'; x.fillText('vendor canvas ☁ quiz', 4, 24);
  var h = c.toDataURL();
  var s = [screen.width, screen.height, screen.colorDepth, w.devicePixelRatio];
  var hw = [navigator.hardwareConcurrency, navigator.deviceMemory];
})();
