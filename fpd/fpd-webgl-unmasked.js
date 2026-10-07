(function () {
  try {
    ['webgl', 'webgl2'].forEach(function (t) {
      var gl = document.createElement('canvas').getContext(t); if (!gl) return;
      var e = gl.getExtension('WEBGL_debug_renderer_info'); if (!e) return;
      gl.getParameter(e.UNMASKED_VENDOR_WEBGL); gl.getParameter(e.UNMASKED_RENDERER_WEBGL);
    });
    console.log('%c[DROP]', 'background:#b03a2e;color:#fff;padding:1px 6px;border-radius:3px', 'fingerprint', 'webgl_fingerprint (UNMASKED vendor/renderer, WebGL1 and WebGL2)', '\u2190 fpd-webgl-unmasked.js');
  } catch (e) { console.log('[fpd] fpd-webgl-unmasked failed:', e && e.message); }
})();
