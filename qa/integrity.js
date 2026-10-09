(function(){
  var bad=[];
  function chk(n,ok){if(!ok)bad.push(n);}
  try{
    var c=document.createElement('canvas');c.width=20;c.height=20;var x=c.getContext('2d');x.fillStyle='#f00';x.fillRect(0,0,10,10);
    chk('toDataURL',typeof c.toDataURL()==='string'&&c.toDataURL().indexOf('data:image/png')===0);
    var d=x.getImageData(0,0,2,2);chk('getImageData',d&&d.data&&d.data.length===16&&d.data[0]===255);
    chk('fonts.check',typeof document.fonts.check('12px Arial')==='boolean');
    chk('screen',typeof screen.width==='number'&&typeof screen.availHeight==='number'&&typeof devicePixelRatio==='number'&&screen.colorDepth>0);
    chk('hardware',typeof navigator.hardwareConcurrency==='number');
    var A=window.AudioContext||window.webkitAudioContext;if(A){var a=new A();chk('osc',a.createOscillator().frequency!==undefined);chk('analyser',a.createAnalyser().fftSize>0);chk('gain',a.createGain().gain!==undefined);a.close();}
    var g=document.createElement('canvas').getContext('webgl');if(g){var e=g.getExtension('WEBGL_debug_renderer_info');if(e){chk('webgl-unmasked',typeof g.getParameter(e.UNMASKED_VENDOR_WEBGL)==='string');}chk('webgl-param',g.getParameter(g.MAX_TEXTURE_SIZE)>0);}
    if(navigator.getBattery){navigator.getBattery().then(function(b){if(typeof b.level!=='number')localStorage.setItem('qa_integrity_battery_bad','1');});}
  }catch(err){bad.push('exception');}
  try{localStorage.setItem(bad.length?'qa_integrity_FAIL':'qa_integrity_OK',bad.join(','));}catch(e){}
  console.log('[QA] integrity',bad.length?'FAIL '+bad:'OK');
})();
