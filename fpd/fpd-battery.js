(function () {
  try {
    if (navigator.getBattery) navigator.getBattery();
    console.log('%c[DROP]', 'background:#b03a2e;color:#fff;padding:1px 6px;border-radius:3px', 'fingerprint', 'battery_read (navigator.getBattery)', '\u2190 fpd-battery.js');
  } catch (e) { console.log('[fpd] fpd-battery failed:', e && e.message); }
})();
