/* ✏️ روابط فيديوهات مادة العلوم
   لكل درس أربعة مفاتيح:
   kz = الأستاذة كتفي شريف زينة ، mz = سلسلة الميزان ، ay = الأستاذ أيوب ، sh = الأستاذ شاوش
   لإضافة فيديو: ضع معرّف الفيديو (الجزء بعد youtu.be/ وقبل علامة ?) داخل SY('...')
   وإذا كان للدرس جزءان فاكتب {t:'اسم الجزء الأول',u:SY('...')},{t:'اسم الجزء الثاني',u:SY('...')} */

var SY=function(id){return 'https://youtu.be/'+id;};

var SCI_LINKS={

  'تركيب البروتين':{
    ay:[{u:SY('yvsHVQUF4Tk')}],
    sh:[{u:SY('6c1pdYWb5qk')}],
    kz:[{u:SY('F9UQt5vMLqU')}],
    mz:[{u:SY('ZDvHfExAU9c')}]
  },

  'العلاقة بين البنية والوظيفة':{
    sh:[{u:SY('bkxJteKmID4')}],
    kz:[{u:SY('ckaSIdgkaFs')}],
    ay:[{u:SY('1tFiEnhSvpc')}],
    mz:[{u:SY('nY_ZPG6UU1I')}]
  },

  'دور البروتينات في التحفيز الإنزيمي':{
    ay:[{u:SY('3KjRoZxTk9w')}],
    sh:[{u:SY('agS-u8GWOgQ')}],
    kz:[{u:SY('qVJr3v574sw')}],
    mz:[{u:SY('zNCkSqS7-zc')}]
  },

  'المناعة':{
    sh:[{u:SY('mQ54MHis_qg')}],
    ay:[{t:'الذات واللاذات',u:SY('KCR5icYu49Q')},{t:'مناعة خلطية وخلوية',u:SY('vdkwxOfS_-s')}],
    kz:[{t:'الذات واللاذات',u:SY('iGZLKZCSqvw')},{t:'مناعة خلطية وخلوية',u:SY('Y9cMOV3m-hs')}],
    mz:[{u:SY('uhCxizRb5KE')}]
  },

  'الاتصال العصبي':{
    kz:[{u:SY('ryhQxAx1Coo')}],
    ay:[{u:SY('JsxGpuwWGHc')}],
    sh:[{u:SY('m0q5NgC_Xas')}],
    mz:[{u:SY('k-8z70iRfis')}]
  },

  'التركيب الضوئي':{
    sh:[{u:SY('KjrVgP8N5Ws')}],
    ay:[{u:SY('sZ1ee8Ggxeo')}],
    kz:[{u:SY('Z5GozU5o19k')}],
    mz:[{u:SY('tlGild7kspA')}]
  },

  'التنفس':{
    sh:[{u:SY('IVQQIInZ3XE')}],
    kz:[{u:SY('2WBEjwyJA-0')}],
    mz:[{u:SY('J_7NkvSEnh8')}],
    ay:[{u:SY('Gaqcfqg0hvo')}]
  }

};