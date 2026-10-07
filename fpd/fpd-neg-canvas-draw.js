(function () {
  try {
    var c = document.createElement('canvas'); c.width = 120; c.height = 30;
    var x = c.getContext('2d'); x.font = '14px Arial'; x.fillRect(2, 2, 20, 10); x.fillText('draw only', 4, 18); x.measureText('draw only');
    console.log('%c[DROP]', 'background:#b03a2e;color:#fff;padding:1px 6px;border-radius:3px', 'fingerprint', 'NEGATIVE canvas: draw and measureText only, no readback', '\u2190 fpd-neg-canvas-draw.js');
  } catch (e) { console.log('[fpd] fpd-neg-canvas-draw failed:', e && e.message); }
})();
