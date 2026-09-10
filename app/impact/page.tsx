import { Header, Footer } from '@/components/SiteChrome';
import { connectDB } from '@/lib/db';
import { Statistic } from '@/models';

type Metric = {
  label: string;
  value: string | number;
  unit?: string;
  enabled?: boolean;
};

type StatisticRow = {
  _id?: string;
  year: number;
  metrics?: Metric[];
};

const migratedYears: StatisticRow[] = [
  {
    year: 2026,
    metrics: [
      { label: 'District Covered', value: '3', enabled: true },
      { label: 'Talukas Covered', value: '8', enabled: true },
      { label: 'Number Of Water Bodies', value: '72', enabled: true },
      { label: 'Silt Excavated', value: '591271', unit: 'm³', enabled: true },
      { label: 'Beneficiaries', value: '857', enabled: true },
      { label: 'Land Covered', value: '1425', unit: 'acres', enabled: true },
      { label: 'Water Storage Capacity', value: '>18', unit: 'crore liters', enabled: true },
    ],
  },
  {
    year: 2025,
    metrics: [
      { label: 'District Covered', value: '7', enabled: true },
      { label: 'Talukas Covered', value: '13', enabled: true },
      { label: 'Number Of Water Bodies', value: '101', enabled: true },
      { label: 'Silt Excavated', value: '1005452', unit: 'm³', enabled: true },
      { label: 'Beneficiaries', value: '1426', enabled: true },
      { label: 'Land Covered', value: '1426', unit: 'acres', enabled: true },
      { label: 'Water Storage Capacity', value: '>35', unit: 'crore liters', enabled: true },
    ],
  },
  {
    year: 2024,
    metrics: [
      { label: 'District Covered', value: '7', enabled: true },
      { label: 'Talukas Covered', value: '16', enabled: true },
      { label: 'Number Of Water Bodies', value: '64', enabled: true },
      { label: 'Silt Excavated', value: '888324', unit: 'm³', enabled: true },
      { label: 'Beneficiaries', value: '1021', enabled: true },
      { label: 'Land Covered', value: '1021', unit: 'acres', enabled: true },
      { label: 'Water Storage Capacity', value: '>30', unit: 'crore liters', enabled: true },
    ],
  },
  {
    year: 2023,
    metrics: [
      { label: 'District Covered', value: '2', enabled: true },
      { label: 'Talukas Covered', value: '12', enabled: true },
      { label: 'Number Of Water Bodies', value: '41', enabled: true },
      { label: 'Silt Excavated', value: '415666', unit: 'm³', enabled: true },
      { label: 'Beneficiaries', value: '527', enabled: true },
      { label: 'Land Covered', value: '527', unit: 'acres', enabled: true },
      { label: 'Water Storage Capacity', value: '>14', unit: 'crore liters', enabled: true },
    ],
  },
];

const migratedCumulative = {
  period: '2023-2026',
  district: '11',
  talukas: '42',
  bodies: '278',
  land: '4400',
  silt: '2901713',
  storage: '>87',
};

function formatMetricValue(metric: Metric) {
  const value = String(metric.value ?? '').trim();
  const unit = String(metric.unit ?? '').trim();
  return unit ? `${value} ${unit}` : value;
}

function normalizeRows(rows: any[]): StatisticRow[] {
  return rows
    .map((row) => ({
      _id: row._id?.toString?.() ?? row._id,
      year: Number(row.year),
      metrics: Array.isArray(row.metrics) ? row.metrics : [],
    }))
    .filter((row) => Number.isFinite(row.year))
    .sort((a, b) => b.year - a.year);
}

export default async function Impact() {
  let rows: StatisticRow[] = [];

  try {
    await connectDB();

    const dbRows = await Statistic.find({ published: true })
      .sort({ year: -1 })
      .lean();

    rows = normalizeRows(dbRows);
  } catch {
    rows = [];
  }

  // If the database is empty, show the currently migrated verified figures
  // from the project material instead of leaving the public page blank.
  if (!rows.length) {
    rows = migratedYears;
  }

  const visibleRows = rows
    .map((row) => ({
      ...row,
      metrics: (row.metrics ?? []).filter((metric) => metric.enabled !== false),
    }))
    .filter((row) => row.metrics.length > 0);

  return (
    <>
      <Header />

      <main>
        <section className="page-hero">
          <div className="shell">
            <span className="eyebrow">Accountable impact</span>
            <h1>Impact at a glance</h1>
            <p>
              Year-wise verified figures and cumulative impact of the JAL-DHARA
              project.
            </p>
          </div>
        </section>

        <section className="shell section">
          {visibleRows.length ? (
            <>
              {visibleRows.map((s) => (
                <div
                  key={s._id ?? s.year}
                  className="card"
                  style={{ marginBottom: 20 }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 16,
                      marginBottom: 16,
                      flexWrap: 'wrap',
                    }}
                  >
                    <h2 style={{ margin: 0 }}>{s.year}</h2>
                    <span className="eyebrow">Year-wise performance</span>
                  </div>

                  <div className="stats-grid">
                    {s.metrics.map((m, index) => (
                      <div
                        className="stat"
                        key={`${s.year}-${m.label}-${index}`}
                      >
                        <b>{formatMetricValue(m)}</b>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="card" style={{ marginTop: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <span className="eyebrow">Cumulative impact</span>
                  <h2 style={{ marginTop: 6 }}>
                    Cumulative Impact ({migratedCumulative.period})
                  </h2>
                </div>

                <div className="stats-grid">
                  <div className="stat">
                    <b>{migratedCumulative.district}</b>
                    <span>Total District Covered</span>
                  </div>

                  <div className="stat">
                    <b>{migratedCumulative.talukas}</b>
                    <span>Total Talukas Covered</span>
                  </div>

                  <div className="stat">
                    <b>{migratedCumulative.bodies}</b>
                    <span>Number Of Bodies</span>
                  </div>

                  <div className="stat">
                    <b>{migratedCumulative.land} acres</b>
                    <span>Total Land Covered</span>
                  </div>

                  <div className="stat">
                    <b>{migratedCumulative.silt} m³</b>
                    <span>Total Silt Excavated</span>
                  </div>

                  <div className="stat">
                    <b>{migratedCumulative.storage} crore liters</b>
                    <span>Total Water Storage Capacity</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="notice">
              Year-wise impact will appear here once verified figures are
              entered by an administrator.
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
