import {InfoPage} from "@/components/sections/Info";import {meta} from "@/lib/seo";
export const metadata=meta("سياسة الاستخدام","القواعد المقبولة لاستخدام الخدمة.","/acceptable-use");
export default function P(){return <InfoPage title="سياسة الاستخدام" sub="القواعد المقبولة لاستخدام الخدمة." cta={false} items={[["مسودة","[Legal text] سيتم استبدال هذا النص بسياسة الاستخدام الرسمية."]]}/>}
