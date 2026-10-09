/* ===== 1) الأيقونات الاحترافية ===== */
(function(){
  var css=''
  +'.pi{display:inline-grid;place-items:center;width:62px;height:62px;border-radius:19px;background:linear-gradient(145deg,#4cc3ff,#0a84ff 55%,#1d57d6);box-shadow:0 12px 24px rgba(10,132,255,.38),inset 0 1px 0 rgba(255,255,255,.4);transition:transform .25s}'
  +'.pi svg{width:36px;height:36px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
  +'.has-pi{height:auto!important;line-height:1!important;margin-bottom:14px!important}'
  +'.b:hover .pi,.b:focus-visible .pi{transform:translateY(-3px) scale(1.07)}'
  +'@media (min-width:900px){.pi{width:72px;height:72px;border-radius:22px}.pi svg{width:42px;height:42px}}';
  var st=document.createElement('style');
  st.textContent=css;
  document.head.appendChild(st);

  var V='<svg viewBox="0 0 32 32" aria-hidden="true">';
  var ICONS={
    dna:V+'<path d="M10 3C10 10 22 10 22 16C22 22 10 22 10 29"/><path d="M22 3C22 10 10 10 10 16C10 22 22 22 22 29"/><path stroke-width="1.6" opacity=".85" d="M12 7H20M12 12.4H20M12 19.6H20M12 24.9H20"/></svg>',
    calc:V+'<rect x="7" y="3" width="18" height="26" rx="3.5"/><rect x="10" y="6.5" width="12" height="5" rx="1.2" fill="#fff" stroke="none"/><g fill="#fff" stroke="none"><circle cx="11" cy="16.5" r="1.4"/><circle cx="16" cy="16.5" r="1.4"/><circle cx="21" cy="16.5" r="1.4"/><circle cx="11" cy="21" r="1.4"/><circle cx="16" cy="21" r="1.4"/><circle cx="21" cy="21" r="1.4"/><circle cx="11" cy="25.2" r="1.4"/><circle cx="16" cy="25.2" r="1.4"/><circle cx="21" cy="25.2" r="1.4"/></g></svg>',
    gear:V+'<circle cx="16" cy="16" r="8" stroke-width="2.2"/><circle cx="16" cy="16" r="3" stroke-width="2"/><path stroke-width="3.2" d="M16 3.5V6.7M16 25.3V28.5M3.5 16H6.7M25.3 16H28.5M7.2 7.2L9.5 9.5M22.5 22.5L24.8 24.8M24.8 7.2L22.5 9.5M9.5 22.5L7.2 24.8"/></svg>',
    chart:V+'<g fill="#fff" stroke="none"><rect x="5" y="21" width="5" height="7" rx="1.2"/><rect x="13.5" y="17" width="5" height="11" rx="1.2"/><rect x="22" y="13" width="5" height="15" rx="1.2"/></g><path d="M5 15L12 10.5L17 12.5L26 4.5"/><path d="M21 4.5H26V9.5"/></svg>',
    pi:V+'<path stroke-width="2.4" d="M7 9.5H25M12.5 9.5C12.5 14.5 12 18.5 10 22.5M19.5 9.5V21C19.5 23 20.3 24 22.3 24"/></svg>',
    atom:V+'<circle cx="16" cy="16" r="2.6" fill="#fff" stroke="none"/><g stroke-width="1.8"><ellipse cx="16" cy="16" rx="13" ry="5.2"/><ellipse cx="16" cy="16" rx="13" ry="5.2" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="13" ry="5.2" transform="rotate(120 16 16)"/></g></svg>',
    hat:V+'<path d="M6 21A10 10 0 0 1 26 21"/><path stroke-width="1.8" d="M16 11V21M11 12.5V21M21 12.5V21"/><rect x="4" y="21" width="24" height="4.5" rx="2.2" fill="#fff" stroke="none"/></svg>'
  };
  function swap(sel,key){
    document.querySelectorAll(sel).forEach(function(s){
      s.innerHTML='<i class="pi" style="font-style:normal">'+ICONS[key]+'</i>';
      s.classList.add('has-pi');
    });
  }
  swap('.b[data-b="علوم تجريبية"] > span','dna');
  swap('.b[data-b="رياضيات"] > span','calc');
  swap('.b[data-b="تقني رياضي"] > span','gear');
  swap('.b[data-b="تسيير واقتصاد"] > span','chart');
  swap('.b[data-s="الرياضيات"] > span','pi');
  swap('.b[data-s="الفيزياء"] > span','atom');
  swap('.eng .ic','hat');
})();

/* ===== 2) بطاقة عن المنصة (سماوي + ذهبي) ===== */
(function(){
  var mock=document.querySelector('.wrap > .mock');
  if(!mock||document.getElementById('about-card'))return;

  /* ألوان البطاقة: غيّرها من هنا فقط */
  var C1='#0a7ba0',C2='#0f9bbd',C3='#0b8cae',GOLD1='#ffc233',GOLD2='#ff9f1c',GOLDINK='#4a3000',GLOW='rgba(6,120,150,.38)';

  var css=''
  +'.ab{direction:rtl;text-align:right;max-width:420px;margin:22px auto 0;padding:26px 22px;border-radius:22px;color:#fff;position:relative;overflow:hidden;background:linear-gradient(120deg,'+C1+','+C2+','+C3+','+C1+');background-size:300% 300%;animation:abbg 10s ease infinite;box-shadow:0 18px 40px '+GLOW+'}'
  +'@keyframes abbg{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}'
  +'.ab::before,.ab::after{content:"";position:absolute;border-radius:50%;pointer-events:none}'
  +'.ab::before{width:200px;height:200px;left:-70px;bottom:-90px;background:rgba(255,255,255,.12);animation:abf 7s ease-in-out infinite}'
  +'.ab::after{width:120px;height:120px;right:-40px;top:-50px;background:rgba(255,194,51,.3);animation:abf 9s ease-in-out infinite reverse}'
  +'@keyframes abf{0%,100%{transform:translate(0,0)}50%{transform:translate(18px,-14px)}}'
  +'.ab>*:not(.ab-shine){position:relative;z-index:1}'
  +'.ab-shine{position:absolute;top:0;bottom:0;width:60px;left:-80px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.28),transparent);transform:skewX(-20deg);animation:abs 6s ease-in-out 1.5s infinite;pointer-events:none}'
  +'@keyframes abs{0%{left:-80px}40%,100%{left:110%}}'
  +'.ab-tag{display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,'+GOLD1+','+GOLD2+');color:'+GOLDINK+';padding:6px 16px;border-radius:999px;font-weight:800;font-size:14px;box-shadow:0 8px 18px rgba(255,159,28,.4)}'
  +'.ab h2{font-size:22px;font-weight:800;margin:12px 0 14px;color:#fff;text-shadow:0 2px 4px rgba(0,60,80,.2)}'
  +'.ab ul{list-style:none;padding:0;margin:0;display:grid;gap:12px}'
  +'.ab li{display:flex;gap:12px;align-items:flex-start;font-size:15px;line-height:1.7;font-weight:500;color:#fff;text-shadow:0 1px 2px rgba(0,60,80,.25);opacity:0;transform:translateY(14px);transition:opacity .6s ease,transform .6s ease}'
  +'.ab li i{flex:none;width:34px;height:34px;border-radius:10px;background:rgba(255,255,255,.25);display:grid;place-items:center;font-style:normal;font-size:17px;text-shadow:none}'
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
  +'<span class="ab-tag">✨ عن المنصة</span>'
  +'<h2>أكاديمية مشكاة</h2>'
  +'<ul>'
  +'<li><i>🎓</i><span>أكاديمية مشكاة منصة تعليمية عربية تساعدك على التفوق بخطوات واضحة ومنظمة.</span></li>'
  +'<li><i>📚</i><span>دروس وتمارين مرتبة حسب شعبتك ومادتك، من الدرس الأول حتى يوم الامتحان.</span></li>'
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