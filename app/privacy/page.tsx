import {InfoPage} from "@/components/sections/Info";import {meta} from "@/lib/seo";
export const metadata=meta("سياسة الخصوصية","كيف نتعامل مع بياناتك.","/privacy");
export default function P(){return <InfoPage title="سياسة الخصوصية" sub="كيف نتعامل مع بياناتك." cta={false} items={[["مسودة","[Legal text] سيتم استبدال هذا النص بسياسة الخصوصية الرسمية."]]}/>}
