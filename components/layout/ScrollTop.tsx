"use client";import {useEffect,useState} from "react";
export function ScrollTop(){const [v,s]=useState(false);useEffect(()=>{const f=()=>s(scrollY>600);addEventListener("scroll",f,{passive:true});return()=>removeEventListener("scroll",f)},[]);
return v?<button aria-label="العودة للأعلى" onClick={()=>scrollTo({top:0})} className="fixed bottom-5 left-5 z-40 rounded-full bg-primary p-3 text-on-dark shadow-soft"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 16V4M4 10l6-6 6 6"/></svg></button>:null}
