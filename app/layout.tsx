import type {Metadata} from "next";import {IBM_Plex_Sans_Arabic} from "next/font/google";import "./globals.css";
import {Header} from "@/components/layout/Header";import {Footer} from "@/components/layout/Footer";import {ScrollTop} from "@/components/layout/ScrollTop";import {site} from "@/data/site";
const f=IBM_Plex_Sans_Arabic({subsets:["arabic","latin"],weight:["400","500","700"],variable:"--font-plex",display:"swap"});
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:`${site.name} | ${site.nameAr}`,template:`%s | ${site.name}`},description:site.description,openGraph:{locale:"ar_SA",siteName:site.name}};
export default function L({children}:{children:React.ReactNode}){
const ld={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:site.name,alternateName:site.nameAr,url:site.url},{"@type":"WebSite",name:site.name,url:site.url,inLanguage:"ar"}]};
return <html lang="ar" dir="rtl" className={f.variable}><body className="font-sans antialiased">
<a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:right-2 focus:top-2 focus:z-50 focus:bg-surface focus:p-3">تخطي إلى المحتوى</a>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>
<Header/><main id="main">{children}</main><Footer/><ScrollTop/></body></html>}
