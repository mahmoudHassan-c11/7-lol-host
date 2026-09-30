import Link from "next/link";import {footerNav} from "@/data/navigation";import {site} from "@/data/site";
export function Footer(){return <footer className="bg-secondary text-on-dark"><div className="mx-auto max-w-6xl px-4 py-14">
<div className="grid gap-10 md:grid-cols-5"><div><p className="text-xl font-extrabold">7Lol <span className="text-accent">Host</span></p><p className="mt-2 text-sm opacity-70">{site.nameAr}</p>
<p className="mt-4 text-sm opacity-60">[Social media]</p></div>
{Object.entries(footerNav).map(([t,ls])=><div key={t}><h2 className="mb-3 font-bold">{t}</h2><ul className="space-y-2 text-sm opacity-75">{ls.map(([h,l])=><li key={l}><Link href={h} className="hover:text-accent">{l}</Link></li>)}</ul></div>)}</div>
<p className="mt-12 border-t border-on-dark/10 pt-6 text-sm opacity-60">© {new Date().getFullYear()} {site.name}. جميع الحقوق محفوظة.</p></div></footer>}
