(function () {
  try {
    var A = window.AudioContext || window.webkitAudioContext; var a = new A(); a.createAnalyser();
    console.log('%c[DROP]', 'background:#b03a2e;color:#fff;padding:1px 6px;border-radius:3px', 'fingerprint', 'audio_fingerprint (AudioContext.createAnalyser)', '\u2190 fpd-audio-analyser.js');
  } catch (e) { console.log('[fpd] fpd-audio-analyser failed:', e && e.message); }
})();
