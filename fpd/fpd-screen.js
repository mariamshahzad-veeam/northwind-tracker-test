(function () {
  try {
    var s = window.screen; var v = [s.width, s.height, s.availWidth, s.availHeight, s.colorDepth, s.pixelDepth, window.devicePixelRatio];
    console.log('%c[DROP]', 'background:#b03a2e;color:#fff;padding:1px 6px;border-radius:3px', 'fingerprint', 'screen_read (width, height, availWidth, availHeight, colorDepth, pixelDepth, devicePixelRatio)', '\u2190 fpd-screen.js');
  } catch (e) { console.log('[fpd] fpd-screen failed:', e && e.message); }
})();
