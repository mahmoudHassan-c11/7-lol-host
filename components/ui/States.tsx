import {Button} from "./Button";
const S=({t,d,a}:{t:string;d?:string;a?:React.ReactNode})=><div role="status" className="rounded-2xl border border-dashed border-line p-10 text-center"><h3 className="font-bold">{t}</h3>{d&&<p className="mt-2 text-ink2">{d}</p>}<div className="mt-4">{a}</div></div>;
export const EmptyState=(p:{title:string;text?:string})=><S t={p.title} d={p.text}/>;
export const ErrorState=({retry}:{retry?:()=>void})=><S t="حدث خطأ" d="تعذر تحميل المحتوى. حاول مرة أخرى." a={retry&&<Button onClick={retry}>إعادة المحاولة</Button>}/>;
export const LoadingState=()=><div role="status" aria-busy className="p-10 text-center text-muted">جارٍ التحميل…</div>;
export const ComingSoon=({title}:{title:string})=><S t={title} d="هذه الميزة قادمة قريبًا."/>;
