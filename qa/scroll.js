(function(){
  var done=false;
  function mk(tag){
    try{localStorage.setItem('qa_'+tag+'_ls','1');}catch(e){}
    try{var r=indexedDB.open('qa_'+tag+'_idb',1);r.onupgradeneeded=function(){r.result.createObjectStore('s');};}catch(e){}
    try{caches.open('qa-'+tag+'-cache');}catch(e){}
  }
  window.addEventListener('scroll',function(){if(!done){done=true;mk('scroll');console.log('[QA] created after first scroll');}},{once:false,passive:true});
  document.addEventListener('click',function(){if(!window.__qaClick){window.__qaClick=1;mk('click');console.log('[QA] created after first click');}},true);
})();
