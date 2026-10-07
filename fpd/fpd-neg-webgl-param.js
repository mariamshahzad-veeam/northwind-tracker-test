(function () {
  try {
    var gl = document.createElement('canvas').getContext('webgl'); if (!gl) return;
    gl.getParameter(gl.VERSION); gl.getParameter(gl.MAX_TEXTURE_SIZE);
    console.log('%c[DROP]', 'background:#b03a2e;color:#fff;padding:1px 6px;border-radius:3px', 'fingerprint', 'NEGATIVE webgl: getParameter(VERSION, MAX_TEXTURE_SIZE), no UNMASKED', '\u2190 fpd-neg-webgl-param.js');
  } catch (e) { console.log('[fpd] fpd-neg-webgl-param failed:', e && e.message); }
})();
