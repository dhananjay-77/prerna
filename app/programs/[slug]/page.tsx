import {notFound} from 'next/navigation';
import {Header,Footer} from '@/components/SiteChrome';
import {connectDB} from '@/lib/db';
import {Program as ProgramModel} from '@/models';
export default async function ProgramPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 try{await connectDB();const p:any=await ProgramModel.findOne({slug,published:true}).lean();if(!p)notFound();return <><Header/><main><section className="page-hero"><div className="shell"><span className="eyebrow">{p.category}</span><h1>{p.title}</h1></div></section><article className="shell section prose"><p>{p.content}</p>{p.driveUrl&&<p><a className="btn" href={p.driveUrl} target="_blank">Open related Google Drive file</a></p>}</article></main><Footer/></>}catch{notFound()}
}
