import {site} from "@/data/site";
export default function sitemap(){return["","plans","servers","services","about","faq","contact","terms","privacy","acceptable-use","security","backup","ssl"].map(p=>({url:`${site.url}/${p}`,lastModified:new Date()}))}
