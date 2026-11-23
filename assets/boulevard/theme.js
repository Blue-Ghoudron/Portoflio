/* light/dark theme for the L'Boulevard pages: saved choice, else the system setting; runs in <head> so the page paints in the right theme */
(function(){
  var root=document.documentElement, KEY='lbv-theme', SITE='skm-theme';
  try{ root.dataset.theme=localStorage.getItem(KEY)||localStorage.getItem(SITE)||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'); }catch(e){}
  document.addEventListener('DOMContentLoaded',function(){
    var cur=document.querySelector('.pages a[aria-current="page"]');
    function keepIn(){ if(cur&&cur.scrollIntoView) cur.scrollIntoView({inline:'nearest',block:'nearest'}); }
    keepIn(); if(document.fonts&&document.fonts.ready) document.fonts.ready.then(keepIn);
    var b=document.getElementById('theme'); if(!b) return;
    function label(){ var l=root.dataset.theme==='light'; b.textContent=l?'Dark':'Light'; b.setAttribute('aria-label','Switch to '+(l?'dark':'light')+' theme'); }
    b.addEventListener('click',function(){ root.dataset.theme=root.dataset.theme==='light'?'dark':'light'; try{ localStorage.setItem(KEY,root.dataset.theme); localStorage.setItem(SITE,root.dataset.theme); }catch(e){} label(); });
    label();
    if(window.self!==window.top){
      var s=document.createElement('style'); s.textContent='.lbv-full{text-decoration:none;display:inline-flex;align-items:center;margin-left:0}@media (max-width:820px){.lbv-full{display:none}}'; document.head.appendChild(s);
      var f=document.createElement('a'); f.className='theme micro lbv-full'; f.href=location.href; f.target='_top'; f.textContent='Full ↗'; f.setAttribute('aria-label','Open exhibition full screen'); b.after(f);
    }
  });
})();
