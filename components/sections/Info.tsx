import {PageHero,Section} from "../ui/Section";import {CTA} from "./Home";
export function InfoPage({title,sub,items,cta=true}:{title:string;sub:string;items:string[][];cta?:boolean}){
return <><PageHero title={title} sub={sub}/><Section><div className="grid gap-6 md:grid-cols-2">{items.map(([t,d])=><article key={t} className="rounded-2xl border border-line bg-surface p-6"><h2 className="text-lg font-bold">{t}</h2><p className="mt-2 text-ink2">{d}</p></article>)}</div></Section>{cta&&<CTA/>}</>}
