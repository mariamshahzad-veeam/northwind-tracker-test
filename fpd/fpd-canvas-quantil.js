(function () {
  try {
    var c = document.createElement('canvas'); c.width = 120; c.height = 30;
    var x = c.getContext('2d'); x.font = '14px Arial'; x.fillText('Northwind fp 3', 4, 18);
    c.toDataURL();
    console.log('%c[DROP]', 'background:#b03a2e;color:#fff;padding:1px 6px;border-radius:3px', 'fingerprint', 'canvas_fingerprint (toDataURL, second provider)', '\u2190 fpd-canvas-quantil.js');
  } catch (e) { console.log('[fpd] fpd-canvas-quantil failed:', e && e.message); }
})();
