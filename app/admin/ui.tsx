'use client';

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import './admin.css';

const sections = [
  'projects',
  'programs',
  'statistics',
  'partners',
  'goals',
  'gallery',
  'pages',
];

const labels: Record<string, string> = {
  projects: 'Projects',
  programs: 'Programs',
  statistics: 'Impact Statistics',
  partners: 'Partners',
  goals: 'Future Goals',
  gallery: 'Gallery',
  pages: 'Pages',
};

type Metric = {
  label: string;
  value: string;
  unit: string;
  district: string;
  talukas: string;
  bodies: string;
  silt: string;
  beneficiaries: string;
  land: string;
  storage: string;
  enabled: boolean;
  includeInTotal: boolean;
};

type Item = {
  _id?: string;
  year?: string | number;
  name?: string;
  title?: string;
  slug?: string;
  description?: string;
  shortDescription?: string;
  category?: string;
  status?: string;
  imageUrl?: string;
  image?: string;
  published?: boolean;
  metrics?: Metric[];
  [key: string]: any;
};

type FormState = {
  year: string;
  label: string;
  value: string;
  unit: string;
  district: string;
  talukas: string;
  bodies: string;
  silt: string;
  beneficiaries: string;
  land: string;
  storage: string;
  title: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  status: string;
  imageUrl: string;
  published: boolean;
};

const emptyForm: FormState = {
  year: '',
  label: '',
  value: '',
  unit: '',
  district: '',
  talukas: '',
  bodies: '',
  silt: '',
  beneficiaries: '',
  land: '',
  storage: '',
  title: '',
  name: '',
  slug: '',
  description: '',
  category: 'Program',
  status: 'active',
  imageUrl: '',
  published: true,
};

const performanceYears = [
  {
    year: 2026,
    district: '3',
    talukas: '8',
    bodies: '72',
    silt: '591271',
    beneficiaries: '857',
    land: '1425',
    storage: '>18',
  },
  {
    year: 2025,
    district: '7',
    talukas: '13',
    bodies: '101',
    silt: '1005452',
    beneficiaries: '1426',
    land: '1426',
    storage: '>35',
  },
  {
    year: 2024,
    district: '7',
    talukas: '16',
    bodies: '64',
    silt: '888324',
    beneficiaries: '1021',
    land: '1021',
    storage: '>30',
  },
  {
    year: 2023,
    district: '2',
    talukas: '12',
    bodies: '41',
    silt: '415666',
    beneficiaries: '527',
    land: '527',
    storage: '>14',
  },
];

const cumulativeImpact = {
  district: '11',
  talukas: '42',
  bodies: '278',
  land: '4400',
  silt: '2901713',
  storage: '>87',
};

export default function AdminClient() {
  const [tab, setTab] = useState('dashboard');
  const [items, setItems] = useState<Item[]>([]);
  const [msg, setMsg] = useState('');
  const [form, setForm] = useState<FormState>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [dashboardStats, setDashboardStats] = useState({ projects: 0, programs: 0, partners: 0, gallery: 0 });

  const isEditing = Boolean(editingId);

  async function load(t: string) {
    setTab(t);
    setMsg('');
    setEditingId(null);
    setForm(emptyForm);
    setImagePreview('');

    if (t === 'dashboard') {
      setItems([]);
      try {
        setLoading(true);
        const results = await Promise.all(
          ['projects', 'programs', 'partners', 'gallery'].map(async (key) => {
            const response = await fetch(`/api/admin/content/${key}`, { cache: 'no-store' });
            const data = response.ok ? await response.json() : [];
            return [key, Array.isArray(data) ? data.length : 0] as const;
          })
        );
        setDashboardStats(Object.fromEntries(results) as typeof dashboardStats);
      } catch {
        setDashboardStats({ projects: 0, programs: 0, partners: 0, gallery: 0 });
      } finally {
        setLoading(false);
      }
      return;
    }

    try {
      setLoading(true);
      const r = await fetch(`/api/admin/content/${t}`, {
        cache: 'no-store',
      });
      setItems(r.ok ? await r.json() : []);
      if (!r.ok) setMsg('Unable to load content.');
    } catch {
      setItems([]);
      setMsg('Unable to connect to the server.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load('dashboard');
    const handler = (event: Event) => {
      const key = (event as CustomEvent<string>).detail;
      if (key) load(key);
    };
    window.addEventListener('admin-tab', handler);
    return () => window.removeEventListener('admin-tab', handler);
  }, []);

  function updateForm(key: keyof FormState, value: string | boolean) {
    setForm((previous) => ({ ...previous, [key]: value }));
  }

  function resetEditor() {
    setEditingId(null);
    setForm(emptyForm);
    setImagePreview('');
  }

  function handleImageUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setMsg('Please select a valid image file.');
      event.target.value = '';
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      if (!result) {
        setMsg('Unable to read the selected image.');
        return;
      }

      setImagePreview(result);
      updateForm('imageUrl', result);
      setMsg('Image selected. Click Save to store it.');
    };

    reader.onerror = () => setMsg('Unable to read the selected image.');
    reader.readAsDataURL(file);
  }

  function openEdit(item: Item) {
    const id = item._id?.toString();
    if (!id) return;

    setEditingId(id);
    setForm({
      ...emptyForm,
      year: item.year !== undefined ? String(item.year) : '',
      label: item.metrics?.[0]?.label ?? '',
      value: item.metrics?.[0]?.value ?? '',
      unit: item.metrics?.[0]?.unit ?? '',
      district: item.metrics?.find((m) => m.label === 'District Covered')?.value ?? '',
      talukas: item.metrics?.find((m) => m.label === 'Talukas Covered')?.value ?? '',
      bodies: item.metrics?.find((m) => m.label === 'Number Of Water Bodies')?.value ?? '',
      silt: item.metrics?.find((m) => m.label === 'Silt Excavated')?.value ?? '',
      beneficiaries: item.metrics?.find((m) => m.label === 'Beneficiaries')?.value ?? '',
      land: item.metrics?.find((m) => m.label === 'Land Covered')?.value ?? '',
      storage: item.metrics?.find((m) => m.label === 'Water Storage Capacity')?.value ?? '',
      title: item.title ?? '',
      name: item.name ?? '',
      slug: item.slug ?? '',
      description: item.description ?? item.shortDescription ?? '',
      category: item.category ?? 'Program',
      status: item.status ?? 'active',
      imageUrl: item.imageUrl ?? item.image ?? '',
      published: item.published !== false,
    });
    setImagePreview(item.imageUrl ?? item.image ?? '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function add(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg('');

    const raw = Object.fromEntries(new FormData(e.currentTarget));

    let body: Record<string, any> = {
      ...raw,
      published: form.published,
    };

    if (tab === 'statistics') {
      body = {
        ...body,
        year: form.year,
        metrics: [
          { label: 'District Covered', value: form.district, unit: '', enabled: true, includeInTotal: true },
          { label: 'Talukas Covered', value: form.talukas, unit: '', enabled: true, includeInTotal: true },
          { label: 'Number Of Water Bodies', value: form.bodies, unit: '', enabled: true, includeInTotal: true },
          { label: 'Silt Excavated', value: form.silt, unit: 'm³', enabled: true, includeInTotal: true },
          { label: 'Beneficiaries', value: form.beneficiaries, unit: '', enabled: true, includeInTotal: true },
          { label: 'Land Covered', value: form.land, unit: 'acres', enabled: true, includeInTotal: true },
          { label: 'Water Storage Capacity', value: form.storage, unit: 'crore liters', enabled: true, includeInTotal: true },
        ],
        imageUrl: form.imageUrl || undefined,
      };
    }

    if (tab !== 'statistics' && tab !== 'gallery' && form.imageUrl) {
      body.image = form.imageUrl;
    }

    if (tab === 'gallery') {
      body = {
        ...body,
        title: form.title || form.name,
        image: form.imageUrl,
        published: form.published,
      };
    }

    try {
      const endpoint = `/api/admin/content/${tab}${editingId ? `/${editingId}` : ''}`;
      const r = await fetch(endpoint, {
        method: editingId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      setMsg(
        r.ok
          ? editingId
            ? 'Updated successfully.'
            : 'Saved successfully.'
          : 'Unable to save. Check required fields and database connection.',
      );

      if (r.ok) {
        resetEditor();
        await load(tab);
      }
    } catch {
      setMsg('Unable to connect to the server.');
    }
  }

  async function remove(item: Item) {
    if (!item._id) return;

    const confirmed = window.confirm(
      `Delete ${item.name || item.title || item.year || 'this item'}?`,
    );
    if (!confirmed) return;

    try {
      const r = await fetch(
        `/api/admin/content/${tab}/${item._id}`,
        { method: 'DELETE' },
      );

      setMsg(r.ok ? 'Deleted successfully.' : 'Unable to delete item.');

      if (r.ok) await load(tab);
    } catch {
      setMsg('Unable to connect to the server.');
    }
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    location.href = '/admin/login';
  }

  const currentItems = useMemo(() => items, [items]);

  return (
    <main className="admin">
      <header className="admin-head">
        <div className="shell nav">
          <div className="brandBlock">
            <div className="brandMark">PF</div>
            <div>
              <b>PRERNA FOUNDATION</b>
              <span>Content Management</span>
            </div>
          </div>
          <div className="headActions">
            <a className="siteBtn" href="/" target="_blank" rel="noreferrer">
              View Website ↗
            </a>
            <button className="btn light" onClick={logout}>Log out</button>
          </div>
        </div>
      </header>

      <div className="shell admin-layout">
        <aside className="admin-nav card">
          <div className="navTitle">
            <span>ADMIN PANEL</span>
            <small>Manage your website</small>
          </div>

          <nav>
            <button className={tab === 'dashboard' ? 'navItem active' : 'navItem'} onClick={() => load('dashboard')}>
              <span>⌂</span><span>Dashboard</span>
            </button>

            {sections.map((x) => (
              <button
                key={x}
                className={tab === x ? 'navItem active' : 'navItem'}
                onClick={() => load(x)}
              >
                <span>
                  {x === 'projects' ? '▣' :
                   x === 'programs' ? '◈' :
                   x === 'statistics' ? '↗' :
                   x === 'partners' ? '♧' :
                   x === 'goals' ? '◎' :
                   x === 'gallery' ? '▧' : '▤'}
                </span>
                <span>{labels[x]}</span>
              </button>
            ))}

            <div className="navDivider" />

            <a className="navItem linkItem" href="/admin/contacts">
              <span>✉</span><span>Contact requests</span>
            </a>
            <a className="navItem linkItem" href="/admin/donations">
              <span>₹</span><span>Donations</span>
            </a>
          </nav>

          <div className="adminTip">
            <b>Tip</b>
            <span>Keep content updated and published so visitors always see the latest information.</span>
          </div>
        </aside>

        <section className="admin-main">
          {tab === 'dashboard' ? (
            <Dashboard stats={dashboardStats} onNavigate={load} />
          ) : (
            <>
              <div className="pageTop">
                <div>
                  <span className="eyebrow">Content management</span>
                  <h1>{labels[tab]}</h1>
                  <p>Manage and publish {labels[tab].toLowerCase()} from one place.</p>
                </div>
                {isEditing && (
                  <button type="button" className="btn light" onClick={resetEditor}>
                    ← Cancel editing
                  </button>
                )}
              </div>

              <div className="card editorCard">
                <div className="editorHeading">
                  <div>
                    <span className="sectionKicker">{isEditing ? 'EDIT MODE' : 'CREATE NEW'}</span>
                    <h2>{isEditing ? `Edit ${labels[tab]?.replace(/s$/, '') || 'item'}` : `Add ${labels[tab]?.replace(/s$/, '') || 'item'}`}</h2>
                    <small>{isEditing ? 'Update the existing content below.' : 'Fill in the details and click Save when ready.'}</small>
                  </div>
                  {msg && <span className="inlineStatus">{msg}</span>}
                </div>

                <form className="form" onSubmit={add}>
                  {tab === 'statistics' ? (
                    <>
                      <label>
                        Year
                        <input name="year" required value={form.year} onChange={(e) => updateForm('year', e.target.value)} placeholder="2026" />
                      </label>
                      <div className="statsFormIntro">
                        Enter all verified figures for one year. After saving, the same year will appear as one complete 7-metric performance card on the Impact page.
                      </div>
                      <label>
                        District Covered
                        <input name="district" required value={form.district} onChange={(e) => updateForm('district', e.target.value)} placeholder="3" inputMode="numeric" />
                      </label>
                      <label>
                        Talukas Covered
                        <input name="talukas" required value={form.talukas} onChange={(e) => updateForm('talukas', e.target.value)} placeholder="8" inputMode="numeric" />
                      </label>
                      <label>
                        Water Bodies
                        <input name="bodies" required value={form.bodies} onChange={(e) => updateForm('bodies', e.target.value)} placeholder="72" inputMode="numeric" />
                      </label>
                      <label>
                        Silt Excavated (m³)
                        <input name="silt" required value={form.silt} onChange={(e) => updateForm('silt', e.target.value)} placeholder="591271" inputMode="decimal" />
                      </label>
                      <label>
                        Beneficiaries
                        <input name="beneficiaries" required value={form.beneficiaries} onChange={(e) => updateForm('beneficiaries', e.target.value)} placeholder="857" inputMode="numeric" />
                      </label>
                      <label>
                        Land Covered (acres)
                        <input name="land" required value={form.land} onChange={(e) => updateForm('land', e.target.value)} placeholder="1425" inputMode="decimal" />
                      </label>
                      <label>
                        Water Storage (crore liters)
                        <input name="storage" required value={form.storage} onChange={(e) => updateForm('storage', e.target.value)} placeholder=">18" />
                      </label>
                    </>
                  ) : (
                    <>
                      <label>
                        Title / name
                        <input
                          name={tab === 'projects' ? 'name' : 'title'}
                          required={tab !== 'gallery'}
                          value={tab === 'projects' ? form.name : form.title}
                          onChange={(e) => updateForm(tab === 'projects' ? 'name' : 'title', e.target.value)}
                          placeholder={tab === 'projects' ? 'Project name' : 'Title'}
                        />
                      </label>

                      {(tab === 'projects' || tab === 'programs') && (
                        <label>
                          Slug
                          <input name="slug" required value={form.slug} onChange={(e) => updateForm('slug', e.target.value)} placeholder="lowercase-with-dashes" />
                        </label>
                      )}

                      <label className="wide">
                        Description
                        <textarea
                          name={tab === 'projects' ? 'shortDescription' : 'description'}
                          value={form.description}
                          onChange={(e) => updateForm('description', e.target.value)}
                          placeholder="Write a clear, concise description..."
                          rows={4}
                        />
                      </label>

                      {tab === 'programs' && (
                        <label>
                          Category
                          <select name="category" value={form.category} onChange={(e) => updateForm('category', e.target.value)}>
                            <option>Program</option>
                            <option>Event</option>
                            <option>News</option>
                            <option>Activity</option>
                          </select>
                        </label>
                      )}

                      {tab === 'projects' && (
                        <label>
                          Status
                          <select name="status" value={form.status} onChange={(e) => updateForm('status', e.target.value)}>
                            <option>active</option>
                            <option>completed</option>
                            <option>upcoming</option>
                            <option>on_hold</option>
                          </select>
                        </label>
                      )}
                    </>
                  )}

                  <label className="wide">
                    <div className="labelRow">
                      <span>Image / Photo</span><em>Optional</em>
                    </div>
                    <div className="imageUploadBox">
                      <div className="dropArea">
                        <div className="uploadIcon">↑</div>
                        <div>
                          <b>Upload a photo</b>
                          <small>JPG, PNG, WEBP or paste an image URL</small>
                        </div>
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="imageFileInput" />
                      </div>

                      <input
                        name="imageUrl"
                        value={form.imageUrl}
                        onChange={(e) => updateForm('imageUrl', e.target.value)}
                        placeholder="Or paste image URL here"
                      />

                      {(imagePreview || form.imageUrl) && (
                        <div className="imagePreviewBox">
                          <img src={imagePreview || form.imageUrl} alt="Selected preview" className="imagePreview" />
                          <div>
                            <b>Photo selected</b>
                            <small>It will be saved with this content when you click Save.</small>
                            <button
                              type="button"
                              className="ghost imageRemove"
                              onClick={() => { setImagePreview(''); updateForm('imageUrl', ''); }}
                            >
                              Remove image
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </label>

                  <label className="checkboxRow">
                    <input type="checkbox" checked={form.published} onChange={(e) => updateForm('published', e.target.checked)} />
                    <span>
                      <b>Published / visible on website</b>
                      <small>Turn this off if you want to keep the content as a draft.</small>
                    </span>
                  </label>

                  <div className="formActions">
                    <button className="btn saveBtn" type="submit" disabled={loading}>{loading ? 'Saving…' : isEditing ? 'Save Changes' : 'Save & Publish'}</button>
                    {isEditing && <button type="button" className="btn light" onClick={resetEditor}>Cancel</button>}
                  </div>
                </form>

                {msg && <p className="adminMessage">{msg}</p>}
              </div>

              {tab === 'statistics' && <PerformanceReference />}

              <div className="card existingCard">
                <div className="listHeading">
                  <div>
                    <span className="sectionKicker">CONTENT LIBRARY</span>
                    <h2>Existing {labels[tab]}</h2>
                  </div>
                  <span className="countBadge">{currentItems.length} item{currentItems.length === 1 ? '' : 's'}</span>
                </div>

                {currentItems.length ? (
                  <div className="itemsList">
                    {currentItems.map((i) => (
                      <div className="adminItem" key={i._id}>
                        <div className="adminItemMain">
                          {(i.imageUrl || i.image) ? (
                            <img src={i.imageUrl || i.image} alt={i.title || i.name || String(i.year || '')} className="tableThumb" />
                          ) : (
                            <div className="tableThumb emptyThumb">IMG</div>
                          )}
                          <div className="itemInfo">
                            <b>{i.name || i.title || i.year}</b>
                            <small>{i.slug || i.description || (i.metrics?.length ? `${i.metrics.length} metric(s)` : 'No additional details')}</small>
                            {i.year && <span className="itemMeta">Year: {i.year}</span>}
                          </div>
                        </div>
                        <div className="rowActions">
                          <button onClick={() => openEdit(i)}>Edit</button>
                          <button className="danger" onClick={() => remove(i)}>Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="emptyState">
                    <div>○</div>
                    <b>No items yet</b>
                    <span>Create your first {labels[tab].toLowerCase()} using the form above.</span>
                  </div>
                )}
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}


function PerformanceReference() {
  return (
    <div className="card performanceReference">
      <div className="listHeading"><div><span className="sectionKicker">VERIFIED PROJECT FIGURES</span><h2>Year-wise Performance</h2></div></div>
      <div className="performanceGrid">
        {performanceYears.map((item) => <div className="performanceCard" key={item.year}><div className="yearNumber">{item.year}</div><div className="cardRows">
          <span><b>{item.district}</b>District Covered</span><span><b>{item.talukas}</b>Talukas Covered</span><span><b>{item.bodies}</b>Water Bodies</span><span><b>{item.silt} m³</b>Silt Excavated</span><span><b>{item.beneficiaries}</b>Beneficiaries</span><span><b>{item.land} acres</b>Land Covered</span><span><b>{item.storage} crore liters</b>Water Storage</span>
        </div></div>)}
      </div>
      <div className="cumulativeBox"><span className="sectionKicker">CUMULATIVE IMPACT · 2023–2026</span><div className="cumulativeGrid">
        <span><b>{cumulativeImpact.district}</b>Total Districts</span><span><b>{cumulativeImpact.talukas}</b>Total Talukas</span><span><b>{cumulativeImpact.bodies}</b>Water Bodies</span><span><b>{cumulativeImpact.land} acres</b>Land Covered</span><span><b>{cumulativeImpact.silt} m³</b>Silt Excavated</span><span><b>{cumulativeImpact.storage} crore L</b>Water Storage</span>
      </div></div>
    </div>
  );
}

function Dashboard({
  stats,
  onNavigate,
}: {
  stats: { projects: number; programs: number; partners: number; gallery: number };
  onNavigate: (key: string) => void;
}) {
  const cards = [
    ['Projects', 'Manage projects and photos.', 'projects', '▣'],
    ['Programs', 'Publish programs, events and news.', 'programs', '◈'],
    ['Impact Statistics', 'Maintain verified figures.', 'statistics', '↗'],
    ['Partners', 'Manage partner information.', 'partners', '♧'],
    ['Future Goals', 'Update website goals.', 'goals', '◎'],
    ['Gallery', 'Add and manage campaign photos.', 'gallery', '▧'],
  ];

  const totalContent = stats.projects + stats.programs + stats.partners + stats.gallery;

  return (
    <>
      <div className="dashboardHero">
        <div>
          <span className="eyebrow">PRERNA FOUNDATION · ADMIN</span>
          <h1>Good to see you.</h1>
          <p>Everything you need to manage the foundation website, in one place.</p>
        </div>
        <button type="button" className="primaryDashBtn" onClick={() => onNavigate('projects')}>
          <span>＋</span> Add project
        </button>
      </div>

      <div className="kpiGrid">
        <div className="kpiCard">
          <div className="kpiIcon">▣</div>
          <div><small>Total projects</small><strong>{stats.projects}</strong><span>Published content</span></div>
        </div>
        <div className="kpiCard">
          <div className="kpiIcon">◈</div>
          <div><small>Programs & news</small><strong>{stats.programs}</strong><span>Activities & updates</span></div>
        </div>
        <div className="kpiCard">
          <div className="kpiIcon">♧</div>
          <div><small>Partners</small><strong>{stats.partners}</strong><span>Collaborations</span></div>
        </div>
        <div className="kpiCard">
          <div className="kpiIcon">▧</div>
          <div><small>Gallery photos</small><strong>{stats.gallery}</strong><span>Visual stories</span></div>
        </div>
      </div>

      <div className="dashboardSplit">
        <div className="dashboardPanel card">
          <div className="panelHead">
            <div><span className="sectionKicker">CONTENT OVERVIEW</span><h2>Website content</h2></div>
            <span className="livePill"><i /> Live</span>
          </div>
          <div className="overviewRows">
            {[
              ['Projects', stats.projects, 'projects', '▣'],
              ['Programs', stats.programs, 'programs', '◈'],
              ['Partners', stats.partners, 'partners', '♧'],
              ['Gallery', stats.gallery, 'gallery', '▧'],
            ].map(([name, count, key, icon]) => (
              <button type="button" className="overviewRow" key={String(key)} onClick={() => onNavigate(String(key))}>
                <span className="miniIcon">{icon}</span>
                <span className="overviewName"><b>{name}</b><small>Manage {String(name).toLowerCase()}</small></span>
                <strong>{count}</strong>
                <span className="rowArrow">→</span>
              </button>
            ))}
          </div>
        </div>

        <div className="dashboardPanel card">
          <div className="panelHead">
            <div><span className="sectionKicker">IMPACT TREND</span><h2>Water bodies by year</h2></div>
            <span className="chartUnit">Count</span>
          </div>
          <div className="miniChart">
            {performanceYears.slice().reverse().map((item) => {
              const height = Math.max(18, Math.round((Number(item.bodies) / 101) * 100));
              return (
                <div className="barGroup" key={item.year}>
                  <div className="barValue">{item.bodies}</div>
                  <div className="barTrack"><div className="barFill" style={{ height: `${height}%` }} /></div>
                  <small>{item.year}</small>
                </div>
              );
            })}
          </div>
          <div className="chartFoot"><span>2023</span><b>278 cumulative water bodies</b><span>2026</span></div>
        </div>
      </div>

      <div className="dashboardCharts">
        <div className="dashboardPanel card chartCard">
          <div className="panelHead"><div><span className="sectionKicker">WATER CONSERVATION</span><h2>Water bodies</h2></div><span className="chartUnit">2023–2026</span></div>
          <div className="chartMetric"><strong>278</strong><span>cumulative</span></div>
          <div className="chartBars">
            {performanceYears.slice().reverse().map((item) => {
              const height = Math.max(10, Math.round((Number(item.bodies) / 101) * 100));
              return <div className="barGroup" key={item.year}><div className="barValue">{item.bodies}</div><div className="barTrack"><div className="barFill" style={{height:`${height}%`}} /></div><small>{item.year}</small></div>;
            })}
          </div>
        </div>

        <div className="dashboardPanel card chartCard">
          <div className="panelHead"><div><span className="sectionKicker">COMMUNITY IMPACT</span><h2>Beneficiaries</h2></div><span className="chartUnit">People</span></div>
          <div className="chartMetric"><strong>3,831</strong><span>2023–2026</span></div>
          <div className="chartBars">
            {performanceYears.slice().reverse().map((item) => {
              const height = Math.max(10, Math.round((Number(item.beneficiaries) / 1426) * 100));
              return <div className="barGroup" key={item.year}><div className="barValue">{item.beneficiaries}</div><div className="barTrack"><div className="barFill" style={{height:`${height}%`}} /></div><small>{item.year}</small></div>;
            })}
          </div>
        </div>

        <div className="dashboardPanel card chartCard">
          <div className="panelHead"><div><span className="sectionKicker">RESTORATION WORK</span><h2>Silt excavated</h2></div><span className="chartUnit">m³</span></div>
          <div className="chartMetric"><strong>2.90M</strong><span>cumulative</span></div>
          <div className="chartBars">
            {performanceYears.slice().reverse().map((item) => {
              const height = Math.max(10, Math.round((Number(item.silt) / 1005452) * 100));
              return <div className="barGroup" key={item.year}><div className="barValue">{(Number(item.silt)/1000).toFixed(0)}K</div><div className="barTrack"><div className="barFill" style={{height:`${height}%`}} /></div><small>{item.year}</small></div>;
            })}
          </div>
        </div>
      </div>

      <div className="dashboardSummary">
        <div className="summaryCard"><b>11</b><span>Districts covered</span></div>
        <div className="summaryCard"><b>42</b><span>Talukas covered</span></div>
        <div className="summaryCard"><b>4,400</b><span>Acres covered</span></div>
        <div className="summaryCard"><b>&gt;87 Cr</b><span>Water storage created</span></div>
        <div className="summaryCard"><b>278</b><span>Water bodies restored</span></div>
        <div className="summaryCard"><b>2.90M m³</b><span>Silt excavated</span></div>
      </div>

      <div className="quickSection">
        <div className="panelHead">
          <div><span className="sectionKicker">QUICK ACCESS</span><h2>Manage content</h2></div>
          <span className="contentCount">{totalContent} records</span>
        </div>
        <div className="dashboardGrid">
          {cards.map(([title, description, key, icon]) => (
            <button type="button" className="dashboardCard card" key={key} onClick={() => onNavigate(key)}>
              <span className="dashboardIcon">{icon}</span>
              <div><b>{title}</b><span>{description}</span></div>
              <strong>→</strong>
            </button>
          ))}
        </div>
      </div>

      <div className="dashboardNotice">
        <span className="noticeIcon">✓</span>
        <div><b>Content management is ready</b><span>Your existing authentication, API endpoints and MongoDB structure are unchanged.</span></div>
      </div>
    </>
  );
}
