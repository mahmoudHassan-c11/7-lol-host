// Single source of truth for pricing & specs. Edit here only.
export type Plan={id:string;name:string;desc:string;monthly:number;annual:number;popular?:boolean;features:string[]};
export const plans:Plan[]=[
{id:"basic",name:"الباقة الأساسية",desc:"مناسبة للمواقع الشخصية والمشاريع الصغيرة.",monthly:20,annual:180,features:["استضافة موقع","SSL مجاني","نسخ احتياطية حسب الباقة","دعم فني"]},
{id:"advanced",name:"الباقة المتقدمة",desc:"للمواقع التي تحتاج موارد وإدارة أكبر.",monthly:35,annual:315,popular:true,features:["كل مزايا الأساسية","موارد أكبر","حماية إضافية","أولوية في الدعم"]},
{id:"pro",name:"الباقة الاحترافية",desc:"للمشاريع والأعمال التي تتطلب متابعة أوسع.",monthly:55,annual:495,features:["كل مزايا المتقدمة","إدارة الموقع عن بُعد","نسخ احتياطية موسعة","متابعة مخصصة"]}];
export const savings=(p:Plan)=>p.monthly*12-p.annual;
export const specs:{label:string;values:string[]}[]=[
{label:"مساحة التخزين",values:["[Storage]","[Storage]","[Storage]"]},
{label:"النطاق الترددي",values:["[Bandwidth]","[Bandwidth]","[Bandwidth]"]},
{label:"عدد المواقع",values:["[Websites]","[Websites]","[Websites]"]},
{label:"SSL",values:["مجاني","مجاني","مجاني"]},
{label:"النسخ الاحتياطية",values:["حسب الباقة","حسب الباقة","حسب الباقة"]},
{label:"الحماية",values:["أساسية","متقدمة","متقدمة"]},
{label:"إدارة الموقع",values:["—","اختياري","مشمولة"]},
{label:"الدعم الفني",values:["قياسي","أولوية","أولوية"]}];
