(function () {
  try {
    var v = [window.innerWidth, window.innerHeight, window.outerWidth, window.screen.orientation && window.screen.orientation.type];
    console.log('%c[DROP]', 'background:#b03a2e;color:#fff;padding:1px 6px;border-radius:3px', 'fingerprint', 'NEGATIVE screen: innerWidth, outerWidth, orientation (not intercepted)', '\u2190 fpd-neg-screen-other.js');
  } catch (e) { console.log('[fpd] fpd-neg-screen-other failed:', e && e.message); }
})();
