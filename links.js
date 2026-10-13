/* ✏️ روابط فيديوهات الرياضيات
   nd  = الأستاذ نور الدين (الدرس)
   nm  = الأستاذ نور الدين (الميزان)
   inf = الأستاذ انفينيتي
   لإضافة فيديو: ضع معرّف الفيديو (الجزء الذي بعد youtu.be/ وقبل علامة ?) داخل YT('...')
   وإذا كان للدرس جزءان فاكتب {t:'الجزء الأول',u:YT('...')},{t:'الجزء الثاني',u:YT('...')} */

var YT=function(id){return 'https://youtu.be/'+id;};

var MATH_LINKS={
  'الدالة العددية':{
    nd:[{u:YT('qF9CKQpvcSw')}],
    nm:[{u:YT('86cx0JvTmxE')}],
    inf:[{u:YT('RA-AFhDmv3g')}]
  },
  'الدالة الأسية exp':{
    nd:[{u:YT('Xou66Qm78GE')}],
    nm:[{u:YT('SGG0jPJ16gc')}],
    inf:[{u:YT('RA-AFhDmv3g')}]
  },
  'الدالة اللوغاريتمية ln':{
    nd:[{t:'الجزء الأول',u:YT('dWSMfx216aY')},{t:'الجزء الثاني',u:YT('T5XmCIbk6sY')}],
    nm:[{u:YT('v5mAjpuTRaI')}],
    inf:[{u:YT('RA-AFhDmv3g')}]
  },
  'المتتاليات':{
    nd:[{u:YT('YAGvr0KYl_o')}],
    nm:[{u:YT('HxMh4nF5Tfo')}],
    inf:[{u:YT('KaRflaTu1Rs')}]
  },
  'الاحتمالات':{
    nd:[{u:YT('vUwxh8iBgjU')}],
    nm:[{u:YT('n21GJqID1hk')}]
  },
  'الأعداد المركبة':{
    nd:[{u:YT('2WTEF-oVUGk')}],
    nm:[{u:YT('b1KhmgrEC9k')}],
    inf:[{u:YT('wBHf84SDMGE')}]
  },
  'القسمة في Z':{
    nd:[{u:YT('WS67ajDotMU')}],
    nm:[{u:YT('MPlI8ujieT4')}],
    inf:[{u:YT('SN3-3Oub6zY')}]
  }
};