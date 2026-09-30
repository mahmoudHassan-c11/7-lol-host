import {ContactForm} from "@/components/sections/ContactForm";import {PageHero,Section} from "@/components/ui/Section";import {site} from "@/data/site";import {meta} from "@/lib/seo";
export const metadata=meta("تواصل معنا","تواصل مع فريق 7Lol Host للاستفسار عن الباقات والدعم.","/contact");
export default function P(){return <><PageHero title="تواصل معنا" sub="أرسل رسالتك وسنرد عليك."/><Section><div className="grid gap-8 md:grid-cols-3"><div className="md:col-span-2"><ContactForm/></div>
<ul className="space-y-3 text-ink2"><li>واتساب: {site.contact.whatsapp}</li><li>البريد: {site.contact.email}</li><li>الدعم: {site.contact.support}</li></ul></div></Section></>}
