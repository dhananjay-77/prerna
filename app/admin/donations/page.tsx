import { redirect } from 'next/navigation';
import DonationsClient from '@/components/admin/DonationsClient';
import { session } from '@/lib/auth';

export default async function AdminDonationsPage() {
  const currentSession = await session();
  if (!currentSession) redirect('/admin/login');
  if (currentSession.role !== 'super_admin') redirect('/admin');
  return <DonationsClient />;
}
