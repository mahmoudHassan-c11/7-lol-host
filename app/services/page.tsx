import {InfoPage} from "@/components/sections/Info";import {services} from "@/data/services";import {meta} from "@/lib/seo";
export const metadata=meta("الخدمات","استضافة وSSL وحماية ونسخ احتياطية وإدارة موقع ودعم فني.","/services");
export default function P(){return <InfoPage title="الخدمات" sub="كل ما تحتاجه لتشغيل موقعك وإدارته." items={services}/>}
