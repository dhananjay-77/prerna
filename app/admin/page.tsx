import { redirect } from 'next/navigation';
import { session } from '@/lib/auth';
import AdminClient from './ui';

export default async function Admin() {
  if (!await session()) redirect('/admin/login');
  return <AdminClient />;
}
