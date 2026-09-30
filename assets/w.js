var h = { cores: self.navigator.hardwareConcurrency, mem: self.navigator['device' + 'Memory'], plat: self.navigator.platform, lang: self.navigator.languages };
try {
  var oc = new OffscreenCanvas(200, 30), x = oc.getContext('2d');
  x.font = '14px Arial'; x.fillStyle = '#c33'; x.fillRect(0, 0, 60, 30); x.fillStyle = '#39c';
  x.fillText('Northwind ☃ cwm fjord', 4, 20);
  oc.convertToBlob().then(function (b) { h.blob = b.size; });
} catch (e) {}
var r = indexedDB.open('nw_worker_cache', 3);
r.onupgradeneeded = function () { r.result.createObjectStore('hw', { keyPath: 'k' }); };
r.onsuccess = function () { r.result.transaction('hw', 'readwrite').objectStore('hw').put({ k: 'profile', v: h, t: Date.now() }); };
