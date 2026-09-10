'use client';

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';

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

  const isEditing = Boolean(editingId);

  async function load(t: string) {
    setTab(t);
    setMsg('');
    setEditingId(null);
    setForm(emptyForm);
    setImagePreview('');

    if (t === 'dashboard') {
      setItems([]);
      return;
    }

    try {
      const r = await fetch(`/api/admin/content/${t}`, {
        cache: 'no-store',
      });
      setItems(r.ok ? await r.json() : []);
      if (!r.ok) setMsg('Unable to load content.');
    } catch {
      setItems([]);
      setMsg('Unable to connect to the server.');
    }
  }

  useEffect(() => {
    load('dashboard');
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
          {
            label: form.label,
            value: form.value,
            unit: form.unit,
            enabled: true,
            includeInTotal: true,
          },
        ],
        imageUrl: form.imageUrl || undefined,
      };
    }

    if (tab !== 'statistics' && form.imageUrl) {
      body.imageUrl = form.imageUrl;
    }

    if (tab === 'gallery') {
      body = {
        ...body,
        title: form.title || form.name,
        imageUrl: form.imageUrl,
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
          <b>PRERNA FOUNDATION · ADMIN</b>
          <button className="btn light" onClick={logout}>
            Log out
          </button>
        </div>
      </header>

      <div className="shell admin-layout">
        <aside className="admin-nav card">
          <b>Content management</b>

          <a onClick={() => load('dashboard')}>Dashboard</a>

          {sections.map((x) => (
            <a
              key={x}
              onClick={() => load(x)}
              style={{ cursor: 'pointer' }}
            >
              {labels[x]}
            </a>
          ))}

          <a href="/admin/contacts">Contact requests</a>
          <a href="/admin/donations">Donations</a>
        </aside>

        <section>
          {tab === 'dashboard' ? (
            <Dashboard />
          ) : (
            <>
              <span className="eyebrow">Content</span>
              <h1>{labels[tab]}</h1>

              <div className="card" style={{ marginBottom: 20 }}>
                <div className="editorHeading">
                  <div>
                    <h2>
                      {isEditing
                        ? `Edit ${labels[tab]?.replace(/s$/, '') || 'item'}`
                        : `Add ${labels[tab]?.replace(/s$/, '') || 'item'}`}
                    </h2>
                    {isEditing && (
                      <small>Editing existing content</small>
                    )}
                  </div>

                  {isEditing && (
                    <button
                      type="button"
                      className="btn light"
                      onClick={resetEditor}
                    >
                      Cancel edit
                    </button>
                  )}
                </div>

                <form className="form" onSubmit={add}>
                  {tab === 'statistics' ? (
                    <>
                      <label>
                        Year
                        <input
                          name="year"
                          required
                          value={form.year}
                          onChange={(e) => updateForm('year', e.target.value)}
                          placeholder="2026"
                        />
                      </label>

                      <label>
                        Metric label
                        <input
                          name="label"
                          required
                          value={form.label}
                          onChange={(e) => updateForm('label', e.target.value)}
                          placeholder="District Covered"
                        />
                      </label>

                      <label>
                        Value
                        <input
                          name="value"
                          required
                          value={form.value}
                          onChange={(e) => updateForm('value', e.target.value)}
                          placeholder="3"
                        />
                      </label>

                      <label>
                        Unit
                        <input
                          name="unit"
                          value={form.unit}
                          onChange={(e) => updateForm('unit', e.target.value)}
                          placeholder="m³, acres, crore liters, etc."
                        />
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
                          onChange={(e) =>
                            updateForm(
                              tab === 'projects' ? 'name' : 'title',
                              e.target.value,
                            )
                          }
                        />
                      </label>

                      {(tab === 'projects' || tab === 'programs') && (
                        <label>
                          Slug
                          <input
                            name="slug"
                            required
                            value={form.slug}
                            onChange={(e) =>
                              updateForm('slug', e.target.value)
                            }
                            placeholder="lowercase-with-dashes"
                          />
                        </label>
                      )}

                      <label>
                        Description
                        <input
                          name={
                            tab === 'projects'
                              ? 'shortDescription'
                              : 'description'
                          }
                          value={form.description}
                          onChange={(e) =>
                            updateForm('description', e.target.value)
                          }
                        />
                      </label>

                      {tab === 'programs' && (
                        <label>
                          Category
                          <select
                            name="category"
                            value={form.category}
                            onChange={(e) =>
                              updateForm('category', e.target.value)
                            }
                          >
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
                          <select
                            name="status"
                            value={form.status}
                            onChange={(e) =>
                              updateForm('status', e.target.value)
                            }
                          >
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
                    Image / Photo <em>optional</em>
                    <div className="imageUploadBox">
                      <div className="imageUploadRow">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="imageFileInput"
                        />

                        <input
                          name="imageUrl"
                          value={form.imageUrl}
                          onChange={(e) =>
                            updateForm('imageUrl', e.target.value)
                          }
                          placeholder="Paste image URL or upload from computer"
                        />
                      </div>

                      {(imagePreview || form.imageUrl) && (
                        <div className="imagePreviewBox">
                          <img
                            src={imagePreview || form.imageUrl}
                            alt="Selected preview"
                            className="imagePreview"
                          />

                          <button
                            type="button"
                            className="ghost imageRemove"
                            onClick={() => {
                              setImagePreview('');
                              updateForm('imageUrl', '');
                            }}
                          >
                            Remove Image
                          </button>
                        </div>
                      )}

                      <small className="imageHint">
                        Upload a photo or paste an image URL. Existing theme,
                        sections and content structure are unchanged.
                      </small>
                    </div>
                  </label>

                  <label className="checkboxRow">
                    <input
                      type="checkbox"
                      checked={form.published}
                      onChange={(e) =>
                        updateForm('published', e.target.checked)
                      }
                    />
                    Published / visible on website
                  </label>

                  <div className="formActions">
                    <button className="btn" type="submit">
                      {isEditing ? 'Update' : 'Save'}
                    </button>

                    {isEditing && (
                      <button
                        type="button"
                        className="btn light"
                        onClick={resetEditor}
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>

                {msg && <p className="adminMessage">{msg}</p>}
              </div>

              {tab === 'statistics' && <PerformanceReference />}

              <div className="card">
                <h2>Existing items</h2>

                {currentItems.length ? (
                  <div className="itemsList">
                    {currentItems.map((i) => (
                      <div className="adminItem" key={i._id}>
                        <div className="adminItemMain">
                          {(i.imageUrl || i.image) && (
                            <img
                              src={i.imageUrl || i.image}
                              alt={i.title || i.name || String(i.year || '')}
                              className="tableThumb"
                            />
                          )}

                          <div>
                            <b>{i.name || i.title || i.year}</b>

                            <small>
                              {i.slug ||
                                i.description ||
                                (i.metrics?.length
                                  ? `${i.metrics.length} metric(s)`
                                  : '')}
                            </small>

                            {i.year && (
                              <span className="itemMeta">
                                Year: {i.year}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="rowActions">
                          <button onClick={() => openEdit(i)}>Edit</button>
                          <button
                            className="danger"
                            onClick={() => remove(i)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No items yet.</p>
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
      <div className="editorHeading">
        <div>
          <span className="eyebrow">Verified project figures</span>
          <h2>Year-wise Performance</h2>
        </div>
      </div>

      <div className="performanceGrid">
        {performanceYears.map((item) => (
          <div className="performanceCard" key={item.year}>
            <div className="yearNumber">{item.year}</div>

            <div className="cardRows">
              <span>
                <b>{item.district}</b>
                District Covered
              </span>
              <span>
                <b>{item.talukas}</b>
                Talukas Covered
              </span>
              <span>
                <b>{item.bodies}</b>
                Water Bodies
              </span>
              <span>
                <b>{item.silt} m³</b>
                Silt Excavated
              </span>
              <span>
                <b>{item.beneficiaries}</b>
                Beneficiaries
              </span>
              <span>
                <b>{item.land} acres</b>
                Land Covered
              </span>
              <span>
                <b>{item.storage} crore liters</b>
                Water Storage
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="cumulativeBox">
        <span className="eyebrow">Cumulative Impact · 2023-2026</span>

        <div className="cumulativeGrid">
          <span>
            <b>{cumulativeImpact.district}</b>
            Total District Covered
          </span>
          <span>
            <b>{cumulativeImpact.talukas}</b>
            Total Talukas Covered
          </span>
          <span>
            <b>{cumulativeImpact.bodies}</b>
            Number Of Bodies
          </span>
          <span>
            <b>{cumulativeImpact.land} acres</b>
            Total Land Covered
          </span>
          <span>
            <b>{cumulativeImpact.silt} m³</b>
            Total Silt Excavated
          </span>
          <span>
            <b>{cumulativeImpact.storage} crore liters</b>
            Total Water Storage
          </span>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <>
      <span className="eyebrow">Overview</span>
      <h1>Welcome back</h1>

      <div className="admin-grid">
        {[
          ['Projects', 'Manage active work and project pages'],
          ['Programs', 'Publish programs and news'],
          ['Impact', 'Enter verified year-wise data'],
          ['Contacts', 'Reply to enquiries'],
          ['Donations', 'View secure payment records'],
          ['Settings', 'Configure live integrations'],
        ].map(([a, b]) => (
          <div className="card" key={a}>
            <h2>{a}</h2>
            <p>{b}</p>
          </div>
        ))}
      </div>

      <div className="notice" style={{ marginTop: 20 }}>
        Financial settings, SMTP and Razorpay credentials are only read from
        server environment variables and never shown here.
      </div>
    </>
  );
}


<style jsx>{`
  .editorHeading{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:18px;flex-wrap:wrap}
  .editorHeading h2{margin:4px 0 0}
  .formActions{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
  .adminMessage{margin-top:14px}
  .checkboxRow{display:flex!important;flex-direction:row!important;align-items:center;gap:8px}
  .checkboxRow input{width:auto!important}
  .imageUploadBox{display:flex;flex-direction:column;gap:10px}
  .imageUploadRow{display:grid;grid-template-columns:minmax(190px,260px) 1fr;gap:10px}
  .imageFileInput{width:100%;padding:10px;border:1px solid var(--line);border-radius:10px;background:rgba(255,255,255,.035);color:var(--text);font-size:12px}
  .imageFileInput::file-selector-button{margin-right:10px;padding:8px 10px;border:1px solid var(--line);border-radius:8px;background:rgba(255,255,255,.06);color:var(--text);cursor:pointer}
  .imagePreviewBox{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
  .imagePreview{width:150px;height:90px;object-fit:cover;border-radius:10px;border:1px solid var(--line);background:rgba(255,255,255,.04)}
  .imageRemove{font-size:11px}
  .imageHint{color:var(--muted);font-size:11px}
  .itemsList{display:flex;flex-direction:column;gap:10px}
  .adminItem{display:flex;align-items:center;justify-content:space-between;gap:15px;padding:12px 0;border-bottom:1px solid var(--line)}
  .adminItem:last-child{border-bottom:0}
  .adminItemMain{display:flex;align-items:center;gap:12px;min-width:0}
  .adminItemMain>div{display:flex;flex-direction:column;gap:3px;min-width:0}
  .adminItemMain small{color:var(--muted);overflow:hidden;text-overflow:ellipsis}
  .itemMeta{font-size:11px;color:var(--muted)}
  .tableThumb{width:58px;height:44px;object-fit:cover;border-radius:8px;border:1px solid var(--line);display:block;flex:none}
  .performanceReference{margin-bottom:20px}
  .performanceGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
  .performanceCard{border:1px solid var(--line);border-radius:14px;padding:16px}
  .yearNumber{font-size:25px;font-weight:800;margin-bottom:12px}
  .cardRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
  .cardRows span,.cumulativeGrid span{display:flex;flex-direction:column;gap:3px;font-size:11px;color:var(--muted)}
  .cardRows b,.cumulativeGrid b{font-size:15px;color:var(--text)}
  .cumulativeBox{margin-top:18px;padding-top:18px;border-top:1px solid var(--line)}
  .cumulativeGrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-top:12px}
  @media(max-width:760px){
    .imageUploadRow,.performanceGrid{grid-template-columns:1fr}
    .cumulativeGrid{grid-template-columns:repeat(2,minmax(0,1fr))}
  }
  @media(max-width:480px){
    .cumulativeGrid,.cardRows{grid-template-columns:1fr}
  }
`}</style>
