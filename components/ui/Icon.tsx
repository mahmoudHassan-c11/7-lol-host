const P:Record<string,string>={
bolt:"M13 2L4 14h7l-1 8 9-12h-7z",shield:"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",lock:"M6 11h12v9H6zM8 11V8a4 4 0 018 0v3",
db:"M4 6c0-2 16-2 16 0s-16 2-16 0v12c0 2 16 2 16 0V6M4 12c0 2 16 2 16 0",cog:"M12 9a3 3 0 100 6 3 3 0 000-6zM19 12l2-1-2-4-2 1-2-1-1-2H9L8 7 6 8 4 7 2 11l2 1v2l-2 1 2 4 2-1 2 1 1 2h4l1-2 2-1 2 1 2-4-2-1z",
chat:"M4 5h16v11H9l-5 4z",globe:"M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",file:"M6 3h9l4 4v14H6zM14 3v5h5",check:"M4 12l5 5 11-11"};
export function Icon({n,s=22}:{n:string;s?:number}){return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d={P[n]}/></svg>}
