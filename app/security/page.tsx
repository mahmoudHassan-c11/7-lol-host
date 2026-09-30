import {InfoPage} from "@/components/sections/Info";import {meta} from "@/lib/seo";
export const metadata=meta("الحماية","إجراءات تساعد على حماية موقعك من التهديدات الشائعة.","/security");
export default function P(){return <InfoPage title="الحماية" sub="إجراءات تساعد على حماية موقعك من التهديدات الشائعة." cta={true} items={[["SSL","تأمين اتصال الزوار بموقعك."],["مراقبة أمنية","متابعة للكشف عن النشاط المشبوه."],["الحماية من الهجمات الشائعة","إجراءات تقلل المخاطر، دون ادعاء حماية مطلقة."],["نسخ احتياطية","استعادة بياناتك عند الحاجة."]]}/>}
