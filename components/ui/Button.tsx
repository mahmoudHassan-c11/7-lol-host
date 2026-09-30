import Link from "next/link";
const v={primary:"bg-primary text-on-dark hover:bg-primary-dark",ghost:"border border-line bg-surface text-ink hover:border-primary hover:text-primary",dark:"bg-secondary text-on-dark hover:opacity-90"};
export function Button({href,variant="primary",children,className="",...r}:{href?:string;variant?:keyof typeof v;children:React.ReactNode;className?:string}&React.ButtonHTMLAttributes<HTMLButtonElement>){
const c=`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-colors ${v[variant]} ${className}`;
return href?<Link href={href} className={c}>{children}</Link>:<button className={c} {...r}>{children}</button>}
