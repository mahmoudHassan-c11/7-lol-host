import {InfoPage} from "@/components/sections/Info";import {meta} from "@/lib/seo";
export const metadata=meta("شهادة SSL","SSL مجاني ضمن الباقات التي تشمله لتأمين اتصال موقعك.","/ssl");
export default function P(){return <InfoPage title="شهادة SSL" sub="SSL مجاني ضمن الباقات التي تشمله لتأمين اتصال موقعك." cta={true} items={[["ما هو SSL؟","تشفير الاتصال بين الزائر وموقعك."],["مجاني","ضمن الباقات التي تشمله."]]}/>}
