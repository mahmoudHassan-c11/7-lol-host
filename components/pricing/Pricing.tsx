"use client";
import {useState} from "react";import {plans,savings,specs} from "@/data/plans";import {site} from "@/data/site";import {Button} from "../ui/Button";
export function Pricing({compare=false}:{compare?:boolean}){const [y,setY]=useState(false);
return <div>
<div role="group" aria-label="مدة الاشتراك" className="mb-10 inline-flex rounded-full border border-line bg-surface p-1">
{[["شهري",false],["سنوي",true]].map(([l,v])=><button key={String(l)} aria-pressed={y===v} onClick={()=>setY(v as boolean)} className={`rounded-full px-6 py-2 font-semibold transition-colors ${y===v?"bg-primary text-on-dark":"text-ink2"}`}>{l}</button>)}</div>
<div className="grid gap-6 md:grid-cols-3">{plans.map(p=><article key={p.id} className={`relative flex flex-col rounded-2xl bg-surface p-7 transition hover:shadow-soft ${p.popular?"border-2 border-primary shadow-soft md:-translate-y-3":"border border-line"}`}>
{p.popular&&<span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-on-dark">الأكثر طلبًا</span>}
<h3 className="text-xl font-bold">{p.name}</h3><p className="mt-1 min-h-12 text-sm text-ink2">{p.desc}</p>
<div key={String(y)} className="rise mt-5"><span className="text-4xl font-extrabold">{y?p.annual:p.monthly}</span> <span className="text-ink2">{site.currency} / {y?"سنويًا":"شهريًا"}</span>
<p className="mt-1 h-6 text-sm font-semibold text-success">{y?`وفر ${savings(p)} ${site.currency} سنويًا`:""}</p></div>
<ul className="my-5 space-y-2 text-sm">{p.features.map(f=><li key={f} className="flex gap-2"><svg width="18" height="18" fill="none" stroke="var(--c-success)" strokeWidth="2.5" aria-hidden><path d="M3 9l4 4 8-8"/></svg>{f}</li>)}</ul>
<Button href="/contact" variant={p.popular?"primary":"ghost"} className="mt-auto w-full">ابدأ الآن</Button></article>)}</div>
{compare&&<div className="mt-16 overflow-x-auto rounded-2xl border border-line bg-surface"><table className="w-full min-w-[640px] text-right text-sm"><caption className="sr-only">مقارنة الباقات</caption>
<thead className="bg-surface2"><tr><th scope="col" className="p-4">الميزة</th>{plans.map(p=><th scope="col" key={p.id} className="p-4">{p.name}</th>)}</tr></thead>
<tbody>{specs.map(s=><tr key={s.label} className="border-t border-line"><th scope="row" className="p-4 font-medium">{s.label}</th>{s.values.map((v,i)=><td key={i} className="p-4 text-ink2">{v}</td>)}</tr>)}</tbody></table></div>}</div>}
