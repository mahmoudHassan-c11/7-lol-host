import {InfoPage} from "@/components/sections/Info";import {meta} from "@/lib/seo";
export const metadata=meta("النسخ الاحتياطية","نسخ احتياطية لبيانات موقعك وفق الباقة المختارة.","/backup");
export default function P(){return <InfoPage title="النسخ الاحتياطية" sub="نسخ احتياطية لبيانات موقعك وفق الباقة المختارة." cta={true} items={[["لماذا النسخ الاحتياطي؟","لحماية عملك من فقدان البيانات."],["حسب الباقة","تختلف التفاصيل من باقة لأخرى."]]}/>}
