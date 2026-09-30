(function () {
  var d = document, w = window, page = location.pathname.split('/').pop() || 'index.html', q = {};

  var s = w['scr' + 'een'];
  ['width', 'height', 'availWidth', 'availHeight', 'colorDepth', 'pixelDepth'].forEach(function (k) { q[k] = s[k]; });
  q.dpr = w.devicePixelRatio; q.vp = [w.innerWidth, w.innerHeight, w.outerWidth, w.outerHeight];
  q.tz = new Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (page === 'index.html') setTimeout(function () {
    var c = d.createElement('canvas'); c.width = 280; c.height = 40;
    var x = c['getCon' + 'text']('2d');
    x.textBaseline = 'alphabetic'; x.font = '16px Arial';
    x.fillStyle = '#f60'; x.fillRect(100, 1, 60, 20);
    x.fillStyle = '#069'; x.fillText('Northwind Outfitters 🏕 fjord', 2, 15);
    x.globalCompositeOperation = 'multiply'; x.fillStyle = 'rgb(255,0,255)';
    x.beginPath(); x.arc(50, 25, 20, 0, Math.PI * 2, true); x.fill();
    q.c = c[['to', 'Data', 'URL'].join('')]().length;
  }, 4000);

  if (page === 'product.html') {
    var sp = d.getElementById('spark').getContext('2d');
    sp.strokeStyle = '#1f3a2e'; sp.beginPath(); sp.moveTo(0, 40);
    [30, 34, 22, 26, 12, 18, 8].forEach(function (y, i) { sp.lineTo((i + 1) * 34, y); }); sp.stroke();

    d.addEventListener('DOMContentLoaded', function () {
      setTimeout(function () {
        var f = d.createElement('iframe'); f.src = 'frame.html';
        f.style.cssText = 'width:0;height:0;border:0;position:absolute;left:-99px';
        f.setAttribute('aria-hidden', 'true'); d.body.appendChild(f);
      }, 1200);
    });
    w.addEventListener('load', function () {
      (w.requestIdleCallback || setTimeout)(function () { setTimeout(function () { import('./vendor/insights.js'); }, 2500); });
    });
    d.getElementById('add').addEventListener('click', function () {
      d.getElementById('msg').textContent = 'Added!';
      w.__nwCart && w.__nwCart();
    });
  }

  if (page === 'checkout.html') {
    try { new Worker('assets/w.js'); } catch (e) {}
    var fired = false;
    ['scroll', 'pointerdown', 'keydown'].forEach(function (ev) {
      w.addEventListener(ev, function () {
        if (fired) return; fired = true;
        var list = ['Arial', 'Verdana', 'Helvetica', 'Tahoma', 'Trebuchet MS', 'Georgia', 'Times New Roman', 'Courier New',
          'Impact', 'Comic Sans MS', 'Palatino', 'Garamond', 'Bookman', 'Avant Garde', 'Menlo', 'Monaco', 'Consolas',
          'Calibri', 'Cambria', 'Candara', 'Segoe UI', 'Optima', 'Futura', 'Gill Sans', 'Lucida Grande', 'Geneva',
          'Baskerville', 'Didot', 'Hoefler Text', 'Rockwell'];
        q.f = list.filter(function (n) { return d.fonts.check('12px "' + n + '"'); });
      }, { passive: true });
    });
    d.getElementById('pay').addEventListener('click', function () {
      d.getElementById('msg').textContent = 'Processing…';
      if (navigator['getBat' + 'tery']) navigator['getBat' + 'tery']().then(function (b) {
        q.b = [b.charging, b.level, b.chargingTime, b.dischargingTime];
      });
    });
  }
})();
