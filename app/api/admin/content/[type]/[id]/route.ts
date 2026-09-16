import { NextResponse } from 'next/server';
import { AuthError, requireAdmin } from '@/lib/auth';
import { connectDB } from '@/lib/db';
import { Collection, Page, Program, Project, Statistic } from '@/models';

const models = { projects: Project, programs: Program, statistics: Statistic, partners: Collection, goals: Collection, gallery: Collection, pages: Page };
type ContentType = keyof typeof models;
const isObjectId = (value: string) => /^[a-f\d]{24}$/i.test(value);

function modelFor(type: string) {
  const model = models[type as ContentType];
  if (!model) throw new Error('Unknown content type');
  return model;
}

function errorResponse(error: unknown, action: string) {
  if (error instanceof AuthError) return NextResponse.json({ error: error.status === 403 ? 'Forbidden' : 'Unauthorized' }, { status: error.status });
  if (error instanceof Error && error.message === 'Unknown content type') return NextResponse.json({ error: 'Unknown content type' }, { status: 404 });
  console.error(`Admin content ${action} failed.`, error instanceof Error ? error.message : 'Unknown error');
  return NextResponse.json({ error: `Unable to ${action}` }, { status: 500 });
}

export async function PUT(request: Request, { params }: { params: Promise<{ type: string; id: string }> }) {
  try {
    await requireAdmin();
    const { type, id } = await params;
    if (!isObjectId(id)) return NextResponse.json({ error: 'Invalid content ID' }, { status: 400 });
    const body: Record<string, unknown> = await request.json();
    if (type === 'projects' && typeof body.imageUrl === 'string' && !body.image) body.image = body.imageUrl;
    delete body.imageUrl;
    await connectDB();
    const item = await modelFor(type).findByIdAndUpdate(id, body, { new: true, runValidators: true });
    if (!item) return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    return NextResponse.json(item);
  } catch (error) {
    if (error instanceof SyntaxError) return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    return errorResponse(error, 'update content');
  }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ type: string; id: string }> }) {
  try {
    await requireAdmin();
    const { type, id } = await params;
    if (!isObjectId(id)) return NextResponse.json({ error: 'Invalid content ID' }, { status: 400 });
    await connectDB();
    const item = await modelFor(type).findByIdAndDelete(id);
    if (!item) return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (error) {
    return errorResponse(error, 'delete content');
  }
}
