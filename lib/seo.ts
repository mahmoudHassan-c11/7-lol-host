import type {Metadata} from "next";import {site} from "@/data/site";
export const meta=(title:string,description:string,path:string):Metadata=>({title,description,alternates:{canonical:path},
openGraph:{title,description,url:path,siteName:site.name,locale:"ar_SA",type:"website"},twitter:{card:"summary_large_image",title,description}});
