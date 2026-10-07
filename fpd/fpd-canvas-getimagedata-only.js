(function () {
  try {
    var c = document.createElement('canvas'); c.width = 120; c.height = 30;
    var x = c.getContext('2d'); x.font = '14px Arial'; x.fillText('Northwind fp gid', 4, 18);
    x.getImageData(0, 0, 40, 20);
    console.log('%c[DROP]', 'background:#b03a2e;color:#fff;padding:1px 6px;border-radius:3px', 'fingerprint', 'canvas_fingerprint (getImageData only, originfastly)', '\u2190 fpd-canvas-getimagedata-only.js');
  } catch (e) { console.log('[fpd] fpd-canvas-getimagedata-only failed:', e && e.message); }
})();
