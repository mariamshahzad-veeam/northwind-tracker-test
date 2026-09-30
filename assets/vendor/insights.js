var A = window.OfflineAudioContext || window.webkitOfflineAudioContext;
var ctx = new A(1, 44100, 44100);
var o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = 10000;
var k = ctx.createDynamicsCompressor();
['threshold', 'knee', 'ratio', 'attack', 'release'].forEach(function (p, i) { k[p].value = [-50, 40, 12, 0, 0.25][i]; });
o.connect(k); k.connect(ctx.destination); o.start(0);
ctx.oncomplete = function (e) {
  var b = e.renderedBuffer.getChannelData(0), s = 0;
  for (var i = 4500; i < 5000; i++) s += Math.abs(b[i]);
  window.dispatchEvent(new CustomEvent('nw:ready', { detail: s }));
};
ctx.startRendering();
export default 1;
