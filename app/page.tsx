import {Hero,Benefits,HowItWorks,DashboardPreview,CTA} from "@/components/sections/Home";import {Pricing} from "@/components/pricing/Pricing";import {FAQAccordion} from "@/components/sections/FAQ";
import {Section} from "@/components/ui/Section";import {Button} from "@/components/ui/Button";import {meta} from "@/lib/seo";
export const metadata=meta("7Lol Host | حلول للاستضافة","حلول استضافة آمنة وسريعة لمواقعك، مع إدارة سهلة ودعم يساعدك في كل خطوة.","/");
export default function Home(){return <><Hero/><Benefits/>
<Section title="باقات بأسعار واضحة" tone="alt"><Pricing/><div className="mt-10"><Button href="/plans" variant="ghost">عرض جميع الباقات</Button></div></Section>
<HowItWorks/><DashboardPreview/><Section title="أسئلة شائعة" tone="alt"><FAQAccordion limit={5}/></Section><CTA/></>}
