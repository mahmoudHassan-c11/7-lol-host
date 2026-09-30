"use client";
import {useState} from "react";import {faq} from "@/data/faq";
export function FAQAccordion({limit}:{limit?:number}){const [o,setO]=useState<number|null>(0);const items=faq.slice(0,limit);
const ld={"@context":"https://schema.org","@type":"FAQPage",mainEntity:items.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))};
return <div className="max-w-3xl space-y-3"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>
{items.map(([q,a],i)=><div key={q} className="rounded-xl border border-line bg-surface"><h3><button id={`q${i}`} aria-expanded={o===i} aria-controls={`a${i}`} onClick={()=>setO(o===i?null:i)} className="flex w-full items-center justify-between gap-4 p-5 text-right font-semibold">{q}
<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className={`shrink-0 transition-transform ${o===i?"rotate-180":""}`} aria-hidden><path d="M4 7l5 5 5-5"/></svg></button></h3>
<div id={`a${i}`} role="region" aria-labelledby={`q${i}`} className={`grid transition-[grid-template-rows] duration-300 ${o===i?"grid-rows-[1fr]":"grid-rows-[0fr]"}`}><p className="min-h-0 overflow-hidden px-5 text-ink2"><span className="block pb-5">{a}</span></p></div></div>)}</div>}
