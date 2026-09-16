import { redirect } from 'next/navigation';
import ContactsClient from '@/components/admin/ContactsClient';
import { session } from '@/lib/auth';

export default async function AdminContactsPage() {
  if (!(await session())) redirect('/admin/login');
  return <ContactsClient />;
}
