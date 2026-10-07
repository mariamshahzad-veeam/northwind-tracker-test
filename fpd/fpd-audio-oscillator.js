(function () {
  try {
    var A = window.AudioContext || window.webkitAudioContext; var a = new A(); a.createOscillator();
    console.log('%c[DROP]', 'background:#b03a2e;color:#fff;padding:1px 6px;border-radius:3px', 'fingerprint', 'audio_fingerprint (AudioContext.createOscillator)', '\u2190 fpd-audio-oscillator.js');
  } catch (e) { console.log('[fpd] fpd-audio-oscillator failed:', e && e.message); }
})();
