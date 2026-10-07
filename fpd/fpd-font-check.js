(function () {
  try {
    ['Arial', 'Courier New', 'Georgia', 'Verdana', 'Comic Sans MS'].forEach(function (f) { document.fonts.check('12px "' + f + '"'); });
    console.log('%c[DROP]', 'background:#b03a2e;color:#fff;padding:1px 6px;border-radius:3px', 'fingerprint', 'font_enumeration (FontFaceSet.check)', '\u2190 fpd-font-check.js');
  } catch (e) { console.log('[fpd] fpd-font-check failed:', e && e.message); }
})();
