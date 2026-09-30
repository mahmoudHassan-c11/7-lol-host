"use client";
import Link from "next/link";import {usePathname} from "next/navigation";import {useEffect,useState} from "react";
import {nav} from "@/data/navigation";import {Button} from "../ui/Button";
export function Header(){const p=usePathname();const [open,setOpen]=useState(false);const [s,setS]=useState(false);
useEffect(()=>{const f=()=>setS(scrollY>8);f();addEventListener("scroll",f,{passive:true});return()=>removeEventListener("scroll",f)},[]);
useEffect(()=>setOpen(false),[p]);
return <header className={`sticky top-0 z-40 transition-all ${s?"bg-surface/95 shadow-soft backdrop-blur":"bg-bg"}`}>
<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
<Link href="/" className="text-xl font-extrabold text-secondary" aria-label="7Lol Host">7Lol <span className="text-primary">Host</span></Link>
<nav aria-label="التنقل الرئيسي" className="hidden items-center gap-5 text-sm lg:flex">{nav.map(([h,l])=><Link key={h} href={h} aria-current={p===h?"page":undefined} className={p===h?"font-bold text-primary":"text-ink2 hover:text-primary"}>{l}</Link>)}</nav>
<div className="hidden items-center gap-3 lg:flex"><span className="text-sm text-muted" title="قريبًا">تسجيل الدخول</span><Button href="/plans" className="!py-2">ابدأ الآن</Button></div>
<button className="rounded-lg p-2 lg:hidden" aria-label="القائمة" aria-expanded={open} aria-controls="mm" onClick={()=>setOpen(!open)}>
<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open?"M6 6l12 12M18 6L6 18":"M4 7h16M4 12h16M4 17h16"}/></svg></button></div>
<div id="mm" className={`grid overflow-hidden bg-surface transition-[grid-template-rows] duration-300 lg:hidden ${open?"grid-rows-[1fr] border-t border-line":"grid-rows-[0fr]"}`}><div className="min-h-0"><nav className="flex flex-col p-4">
{nav.map(([h,l])=><Link key={h} href={h} tabIndex={open?0:-1} className={`rounded-lg px-3 py-3 ${p===h?"bg-surface2 font-bold text-primary":""}`}>{l}</Link>)}
<Button href="/plans" className="mt-3">ابدأ الآن</Button></nav></div></div></header>}
