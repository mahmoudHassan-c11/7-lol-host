"use client";
import {useState} from "react";import {Button} from "../ui/Button";
const F=[["name","الاسم","text"],["email","البريد الإلكتروني","email"],["phone","رقم الهاتف","tel"],["subject","الموضوع","text"]] as const;
export function ContactForm(){const [e,setE]=useState<Record<string,string>>({});const [ok,setOk]=useState(false);
function sub(ev:React.FormEvent<HTMLFormElement>){ev.preventDefault();const d=Object.fromEntries(new FormData(ev.currentTarget) as unknown as Iterable<[string,string]>);const r:Record<string,string>={};
if(d.name.trim().length<2)r.name="أدخل اسمك";if(!/^\S+@\S+\.\S+$/.test(d.email))r.email="أدخل بريدًا إلكترونيًا صحيحًا";
if(d.phone&&!/^[+\d\s-]{8,15}$/.test(d.phone))r.phone="رقم الهاتف غير صحيح";if(!d.subject.trim())r.subject="أدخل الموضوع";if(d.message.trim().length<10)r.message="اكتب رسالة لا تقل عن 10 أحرف";
setE(r);setOk(!Object.keys(r).length)} // TODO: connect backend
const cls="mt-1 w-full rounded-xl border border-line bg-surface px-4 py-3";
const Err=({k}:{k:string})=>e[k]?<p id={`${k}-e`} role="alert" className="mt-1 text-sm text-danger">{e[k]}</p>:null;
if(ok)return <div role="status" className="rounded-2xl bg-surface p-8 shadow-soft"><h2 className="text-xl font-bold text-success">تم استلام بياناتك</h2><p className="mt-2 text-ink2">سنتواصل معك قريبًا. (الإرسال الفعلي سيُفعّل لاحقًا.)</p></div>;
return <form onSubmit={sub} noValidate className="grid gap-4 rounded-2xl bg-surface p-6 shadow-soft md:grid-cols-2">
{F.map(([k,l,t])=><div key={k} className={k==="subject"?"md:col-span-2":""}><label htmlFor={k} className="font-medium">{l}</label><input id={k} name={k} type={t} aria-invalid={!!e[k]} aria-describedby={`${k}-e`} className={cls}/><Err k={k}/></div>)}
<div className="md:col-span-2"><label htmlFor="type" className="font-medium">نوع الخدمة</label><select id="type" name="type" className={cls}>{["استضافة","SSL","إدارة الموقع","دعم فني","أخرى"].map(o=><option key={o}>{o}</option>)}</select></div>
<div className="md:col-span-2"><label htmlFor="message" className="font-medium">الرسالة</label><textarea id="message" name="message" rows={5} aria-invalid={!!e.message} aria-describedby="message-e" className={cls}/><Err k="message"/></div>
<Button type="submit" className="md:col-span-2">إرسال</Button></form>}
