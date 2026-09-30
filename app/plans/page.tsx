import {Pricing} from "@/components/pricing/Pricing";import {PageHero,Section} from "@/components/ui/Section";import {meta} from "@/lib/seo";
export const metadata=meta("الباقات","اختر باقة الاستضافة المناسبة لموقعك بأسعار واضحة شهريًا أو سنويًا.","/plans");
export default function P(){return <><PageHero title="باقات الاستضافة" sub="أسعار واضحة، اشتراك شهري أو سنوي."/><Section><Pricing compare/></Section></>}
