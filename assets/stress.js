/* QA stress fixtures for tracker scanner (IndexedDB / Cache Storage).
   Creates storage with markup-like names and very large metadata on page load.
   Names are only used as storage identifiers; nothing here writes them into the DOM. */
(function () {
  var MARKUP_DB = '<img src=x onerror=alert(1)>';
  var MARKUP_STORE = '<script>alert(2)</script>';

  function openDb(name, upgrade, done) {
    var r = indexedDB.open(name, 1);
    r.onupgradeneeded = function () { upgrade(r.result); };
    r.onsuccess = function () { if (done) done(r.result); };
    r.onerror = function () { console.log('stress idb error', name, r.error); };
  }

  // A) markup in database, object store and index names
  openDb(MARKUP_DB, function (db) {
    var s = db.createObjectStore(MARKUP_STORE, { keyPath: 'id' });
    try { s.createIndex('"><iframe src=javascript:alert(4)>', 'id'); } catch (e) {}
    try { s.createIndex("'-alert(5)-'", 'name'); } catch (e) {}
    try { s.createIndex('<svg/onload=alert(3)>', 'name'); } catch (e) {}
    db.createObjectStore('&lt;b&gt;amp&amp;"quoted"', { autoIncrement: true });
    db.createObjectStore('{{7*7}} ${7*7} Ünïcödé 数据 🙂', { autoIncrement: true });
  });

  // B) very large metadata: one store with 400 long index names and a 100-field key path
  openDb('nw_big_meta', function (db) {
    var kp = [], i, pad = new Array(60).join('k');
    for (i = 0; i < 100; i++) kp.push('field_' + i + '_' + pad);
    var s = db.createObjectStore('big_store', { keyPath: kp });
    var longName = new Array(150).join('x');
    for (i = 0; i < 400; i++) s.createIndex('idx_' + i + '_' + longName, 'field_' + (i % 100) + '_' + pad);
  });

  // C) many object stores in one database (one tracker row per store)
  openDb('nw_many_stores', function (db) {
    for (var i = 0; i < 150; i++) db.createObjectStore('store_' + (1000 + i), { autoIncrement: true });
  });

  if (!('caches' in window)) return;

  // D) cache with a large entry count
  caches.open('nw_cache_big').then(function (c) {
    var chunk = function (from, to) {
      var ps = [];
      for (var i = from; i < to; i++) ps.push(c.put('/e/' + i, new Response('x')));
      return Promise.all(ps);
    };
    return chunk(0, 1000).then(function () { return chunk(1000, 2000); }).then(function () { return chunk(2000, 3000); });
  });

  // E) caches with markup in their names, and many small caches
  ['<img src=x onerror=alert(6)>', '"><svg onload=alert(7)>', '<b>bold</b> &amp; "q"'].forEach(function (n) {
    caches.open(n).then(function (c) { c.put('/m', new Response('m')); });
  });
  for (var j = 0; j < 60; j++) {
    (function (k) { caches.open('nw_cache_n_' + (100 + k)).then(function (c) { c.put('/s', new Response('s')); }); })(j);
  }
})();
