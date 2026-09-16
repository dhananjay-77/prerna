import { NextResponse } from 'next/server';
import { AuthError, requireAdmin } from '@/lib/auth';
import { connectDB } from '@/lib/db';
import { Collection, Page, Program, Project, Statistic } from '@/models';

const models = { projects: Project, programs: Program, statistics: Statistic, partners: Collection, goals: Collection, gallery: Collection, pages: Page };
type ContentType = keyof typeof models;

function modelFor(type: string) {
  const model = models[type as ContentType];
  if (!model) throw new Error('Unknown content type');
  return model;
}

function collectionQuery(type: string) {
  return type === 'partners' ? { type: 'partner' } : type === 'goals' ? { type: 'goal' } : type === 'gallery' ? { type: 'gallery' } : {};
}

function errorResponse(error: unknown, action: string) {
  if (error instanceof AuthError) return NextResponse.json({ error: error.status === 403 ? 'Forbidden' : 'Unauthorized' }, { status: error.status });
  if (error instanceof Error && error.message === 'Unknown content type') return NextResponse.json({ error: 'Unknown content type' }, { status: 404 });
  console.error(`Admin content ${action} failed.`, error instanceof Error ? error.message : 'Unknown error');
  return NextResponse.json({ error: `Unable to ${action}` }, { status: 500 });
}

export async function GET(_: Request, { params }: { params: Promise<{ type: string }> }) {
  try {
    await requireAdmin();
    const { type } = await params;
    await connectDB();
    return NextResponse.json(await modelFor(type).find(collectionQuery(type)).sort('-createdAt').lean());
  } catch (error) {
    return errorResponse(error, 'load content');
  }
}

export async function POST(request: Request, { params }: { params: Promise<{ type: string }> }) {
  try {
    await requireAdmin();
    const { type } = await params;
    const body: Record<string, unknown> = await request.json();
    if (type === 'projects' && typeof body.imageUrl === 'string' && !body.image) body.image = body.imageUrl;
    delete body.imageUrl;
    if (type === 'partners' || type === 'goals' || type === 'gallery') body.type = collectionQuery(type).type;
    await connectDB();
    return NextResponse.json(await modelFor(type).create(body), { status: 201 });
  } catch (error) {
    if (error instanceof SyntaxError) return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    return errorResponse(error, 'save content');
  }
}
