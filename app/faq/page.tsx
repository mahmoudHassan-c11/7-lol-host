import {FAQAccordion} from "@/components/sections/FAQ";import {PageHero,Section} from "@/components/ui/Section";import {meta} from "@/lib/seo";
export const metadata=meta("الأسئلة الشائعة","إجابات عن أهم أسئلة الاستضافة والاشتراك والدعم.","/faq");
export default function P(){return <><PageHero title="الأسئلة الشائعة" sub="إجابات سريعة لأكثر ما يسأل عنه العملاء."/><Section><FAQAccordion/></Section></>}
