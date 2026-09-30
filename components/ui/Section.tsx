export function Section({title,sub,children,tone,id}:{title?:string;sub?:string;children:React.ReactNode;tone?:"alt";id?:string}){
return <section id={id} className={tone?"bg-surface2":""}><div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
{title&&<div className="mb-12 max-w-2xl"><h2 className="text-2xl font-bold md:text-4xl">{title}</h2>{sub&&<p className="mt-3 text-ink2">{sub}</p>}</div>}{children}</div></section>}
export function PageHero({title,sub}:{title:string;sub:string}){return <div className="hero-bg text-on-dark"><div className="mx-auto max-w-6xl px-4 py-14 md:py-20"><h1 className="text-3xl font-bold md:text-5xl">{title}</h1><p className="mt-4 max-w-2xl opacity-80">{sub}</p></div></div>}
