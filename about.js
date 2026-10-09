(function(){
  var mock=document.querySelector('.wrap > .mock');
  if(!mock||document.getElementById('about-card'))return;

  var css=''
  +'.ab{direction:rtl;text-align:right;max-width:420px;margin:22px auto 0;padding:26px 22px;border-radius:22px;color:#fff;position:relative;overflow:hidden;background:linear-gradient(120deg,#1e3fa8,#3a68d4,#2a55c4,#1e3fa8);background-size:300% 300%;animation:abbg 10s ease infinite;box-shadow:0 18px 40px rgba(30,63,168,.35)}'
  +'@keyframes abbg{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}'
  +'.ab::before,.ab::after{content:"";position:absolute;border-radius:50%;pointer-events:none}'
  +'.ab::before{width:200px;height:200px;left:-70px;bottom:-90px;background:rgba(255,255,255,.08);animation:abf 7s ease-in-out infinite}'
  +'.ab::after{width:120px;height:120px;right:-40px;top:-50px;background:rgba(255,169,10,.18);animation:abf 9s ease-in-out infinite reverse}'
  +'@keyframes abf{0%,100%{transform:translate(0,0)}50%{transform:translate(18px,-14px)}}'
  +'.ab>*:not(.ab-shine){position:relative;z-index:1}'
  +'.ab-shine{position:absolute;top:0;bottom:0;width:60px;left:-80px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent);transform:skewX(-20deg);animation:abs 6s ease-in-out 1.5s infinite;pointer-events:none}'
  +'@keyframes abs{0%{left:-80px}40%,100%{left:110%}}'
  +'.ab-tag{display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#ff7a1a,#e8590c);padding:6px 16px;border-radius:999px;font-weight:800;font-size:14px;box-shadow:0 8px 18px rgba(232,89,12,.4)}'
  +'.ab h2{font-size:22px;font-weight:800;margin:12px 0 14px;color:#fff}'
  +'.ab ul{list-style:none;padding:0;margin:0;display:grid;gap:12px}'
  +'.ab li{display:flex;gap:12px;align-items:flex-start;font-size:15px;line-height:1.7;color:rgba(255,255,255,.92);opacity:0;transform:translateY(14px);transition:opacity .6s ease,transform .6s ease}'
  +'.ab li i{flex:none;width:34px;height:34px;border-radius:10px;background:rgba(255,255,255,.14);display:grid;place-items:center;font-style:normal;font-size:17px}'
  +'.ab.in li{opacity:1;transform:none}'
  +'.ab.in li:nth-child(1){transition-delay:.1s}.ab.in li:nth-child(2){transition-delay:.35s}.ab.in li:nth-child(3){transition-delay:.6s}.ab.in li:nth-child(4){transition-delay:.85s}'
  +'@media (min-width:900px){.ab{max-width:780px;padding:36px 38px;margin-top:26px}.ab h2{font-size:28px}.ab li{font-size:17px}.ab ul{grid-template-columns:1fr 1fr;gap:18px 30px}}'
  +'@media (prefers-reduced-motion:reduce){.ab,.ab::before,.ab::after,.ab-shine{animation:none}.ab li{opacity:1;transform:none;transition:none}}';

  var st=document.createElement('style');
  st.textContent=css;
  document.head.appendChild(st);

  var d=document.createElement('section');
  d.id='about-card';
  d.className='ab';
  d.setAttribute('aria-label','عن أكاديمية مشكاة');
  d.innerHTML=''
  +'<span class="ab-shine"></span>'
  +'<span class="ab-tag">✍️ عن المنصة</span>'
  +'<h2>أكاديمية مشكاة</h2>'
  +'<ul>'
  +'<li><i>🎓</i><span>أكاديمية مشكاة منصة تعليمية عربية تساعدك على التفوق بخطوات واضحة ومنظمة.</span></li>'
  +'<li><i>📚</i><span>دروس مرتبة حسب شعبتك ومادتك، من الدرس الأول حتى يوم الامتحان.</span></li>'
  +'<li><i>🎥</i><span>شروحات مبسطة وفيديوهات تعيد مشاهدتها في أي وقت ومن أي جهاز.</span></li>'
  +'<li><i>💡</i><span>اسم «مشكاة» مأخوذ من المصباح الذي ينير الطريق، وهذا ما نريده لك في رحلتك الدراسية.</span></li>'
  +'</ul>';
  mock.after(d);

  function show(){d.classList.add('in');}
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){show();io.disconnect();}});
    },{threshold:.25});
    io.observe(d);
  }else{show();}
})();