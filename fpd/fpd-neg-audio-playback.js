(function () {
  try {
    var A = window.AudioContext || window.webkitAudioContext; var a = new A(); a.createGain(); a.createBufferSource();
    console.log('%c[DROP]', 'background:#b03a2e;color:#fff;padding:1px 6px;border-radius:3px', 'fingerprint', 'NEGATIVE audio: createGain and createBufferSource only', '\u2190 fpd-neg-audio-playback.js');
  } catch (e) { console.log('[fpd] fpd-neg-audio-playback failed:', e && e.message); }
})();
