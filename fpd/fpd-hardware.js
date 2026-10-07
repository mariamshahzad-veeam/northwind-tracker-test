(function () {
  try {
    var v = [navigator.hardwareConcurrency, navigator.deviceMemory];
    console.log('%c[DROP]', 'background:#b03a2e;color:#fff;padding:1px 6px;border-radius:3px', 'fingerprint', 'hardware_read (hardwareConcurrency, deviceMemory)', '\u2190 fpd-hardware.js');
  } catch (e) { console.log('[fpd] fpd-hardware failed:', e && e.message); }
})();
