import jwt from 'jsonwebtoken';import {cookies} from 'next/headers';
const secret=()=>process.env.JWT_SECRET||'development-only-change-me';
export type Session={id:string;role:'super_admin'|'content_admin';email:string};
export function signSession(s:Session){return jwt.sign(s,secret(),{expiresIn:'8h'})}
export async function session():Promise<Session|null>{const t=(await cookies()).get('prerna_session')?.value;if(!t)return null;try{return jwt.verify(t,secret()) as Session}catch{return null}}
export async function requireAdmin(financial=false){const s=await session();if(!s||(financial&&s.role!=='super_admin'))throw new Error('UNAUTHORIZED');return s}
