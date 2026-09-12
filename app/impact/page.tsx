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

const metricIcons: Record<string, string> = {
  'District Covered': '01',
  'Talukas Covered': '02',
  'Number Of Water Bodies': '03',
  'Silt Excavated': '04',
  Beneficiaries: '05',
  'Land Covered': '06',
  'Water Storage Capacity': '07',
};

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

      <main className="impact-page">
        <section className="impact-hero">
          <div className="impact-hero-glow" />
          <div className="shell impact-hero-inner">
            <div className="impact-hero-copy">
              <span className="impact-kicker">
                <span className="impact-kicker-dot" />
                Accountable impact
              </span>

              <h1>
                Impact
                <br />
                <span>at a glance.</span>
              </h1>

              <p>
                Year-wise verified figures and cumulative impact of the
                JAL-DHARA project.
              </p>

              <div className="impact-hero-line">
                <span />
                <small>2023 — 2026</small>
              </div>
            </div>

            <div className="impact-hero-mark" aria-hidden="true">
              <div className="impact-mark-ring impact-mark-ring-one" />
              <div className="impact-mark-ring impact-mark-ring-two" />
              <div className="impact-mark-center">
                <strong>J</strong>
                <span>JAL-DHARA</span>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-intro shell">
          <div>
            <span className="impact-section-label">YEAR-WISE PERFORMANCE</span>
            <h2>Measured work.<br />Visible change.</h2>
          </div>
          <p>
            Every figure below represents the documented reach and work
            delivered through the project across districts, talukas,
            water bodies and beneficiary communities.
          </p>
        </section>

        <section className="impact-analytics shell">
          <div className="impact-analytics-heading">
            <div>
              <span className="impact-section-label">DATA VISUALIZATION</span>
              <h2>Impact in motion.</h2>
              <p>Year-wise comparison of the key JAL-DHARA project indicators.</p>
            </div>
            <div className="impact-chart-legend">
              <span><i /> Water bodies</span>
              <span><i /> Beneficiaries</span>
            </div>
          </div>

          <div className="impact-chart-card">
            <div className="impact-chart-title">
              <span>Annual performance</span>
              <strong>2023 — 2026</strong>
            </div>
            <div className="impact-bar-chart" aria-label="Year-wise water bodies and beneficiaries">
              {visibleRows
                .slice()
                .sort((a, b) => a.year - b.year)
                .map((row) => {
                  const bodies = Number(
                    row.metrics?.find((m) => m.label === 'Number Of Water Bodies')?.value ?? 0
                  );
                  const beneficiaries = Number(
                    row.metrics?.find((m) => m.label === 'Beneficiaries')?.value ?? 0
                  );
                  const max = 1500;
                  const bodyHeight = Math.max(8, (bodies / max) * 100);
                  const beneficiaryHeight = Math.max(8, (beneficiaries / max) * 100);

                  return (
                    <div className="impact-bar-group" key={row.year}>
                      <div className="impact-bars">
                        <div className="impact-bar impact-bar-bodies" style={{ height: `${bodyHeight}%` }}>
                          <b>{bodies}</b>
                        </div>
                        <div
                          className="impact-bar impact-bar-beneficiaries"
                          style={{ height: `${beneficiaryHeight}%` }}
                        >
                          <b>{beneficiaries}</b>
                        </div>
                      </div>
                      <span>{row.year}</span>
                    </div>
                  );
                })}
            </div>
            <div className="impact-chart-scale">
              <span>0</span>
              <span>500</span>
              <span>1,000</span>
              <span>1,500</span>
            </div>
          </div>
        </section>

        <section className="impact-trend shell">
          <div className="impact-trend-copy">
            <span className="impact-section-label">TREND SNAPSHOT</span>
            <h2>More reach,<br /><span>more impact.</span></h2>
            <p>
              The figures make the scale of yearly work easier to compare,
              while the detailed cards below preserve every verified metric.
            </p>
          </div>

          <div className="impact-mini-bars">
            {visibleRows
              .slice()
              .sort((a, b) => a.year - b.year)
              .map((row) => {
                const silt = Number(
                  row.metrics?.find((m) => m.label === 'Silt Excavated')?.value ?? 0
                );
                const maxSilt = 1100000;
                return (
                  <div className="impact-mini-row" key={row.year}>
                    <strong>{row.year}</strong>
                    <div className="impact-mini-track">
                      <span style={{ width: `${Math.min(100, (silt / maxSilt) * 100)}%` }} />
                    </div>
                    <b>{silt.toLocaleString('en-IN')} m³</b>
                  </div>
                );
              })}
          </div>
        </section>

        <section className="impact-years shell">
          {visibleRows.length ? (
            visibleRows.map((s, yearIndex) => (
              <article
                key={s._id ?? s.year}
                className={`impact-year-card ${
                  yearIndex === 0 ? 'is-current' : ''
                }`}
              >
                <div className="impact-year-heading">
                  <div className="impact-year-number">
                    <span>YEAR</span>
                    <strong>{s.year}</strong>
                  </div>

                  <div className="impact-year-meta">
                    <span className="impact-status-dot" />
                    <span>Verified performance</span>
                  </div>
                </div>

                <div className="impact-metrics">
                  {s.metrics.map((m, index) => (
                    <div
                      className="impact-metric"
                      key={`${s.year}-${m.label}-${index}`}
                    >
                      <div className="impact-metric-top">
                        <span className="impact-metric-index">
                          {metricIcons[m.label] ?? String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="impact-metric-arrow">↗</span>
                      </div>

                      <strong>{formatMetricValue(m)}</strong>
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))
          ) : (
            <div className="impact-empty">
              Year-wise impact will appear here once verified figures are
              entered by an administrator.
            </div>
          )}
        </section>

        <section className="impact-cumulative">
          <div className="impact-cumulative-orb" />
          <div className="shell">
            <div className="impact-cumulative-heading">
              <div>
                <span className="impact-section-label">CUMULATIVE IMPACT</span>
                <h2>
                  What we have built
                  <br />
                  <span>together.</span>
                </h2>
              </div>

              <div className="impact-period">
                <span>PROJECT PERIOD</span>
                <strong>{migratedCumulative.period}</strong>
              </div>
            </div>

            <div className="impact-cumulative-grid">
              <div className="impact-big-stat">
                <strong>{migratedCumulative.bodies}</strong>
                <span>Number Of Bodies</span>
                <small>Water bodies covered</small>
              </div>

              <div className="impact-big-stat">
                <strong>{migratedCumulative.silt}</strong>
                <span>m³ Silt Excavated</span>
                <small>Total silt excavation</small>
              </div>

              <div className="impact-big-stat">
                <strong>{migratedCumulative.land}</strong>
                <span>Acres Covered</span>
                <small>Total land covered</small>
              </div>

              <div className="impact-big-stat">
                <strong>{migratedCumulative.district}</strong>
                <span>Districts Covered</span>
                <small>Across the project period</small>
              </div>

              <div className="impact-big-stat">
                <strong>{migratedCumulative.talukas}</strong>
                <span>Talukas Covered</span>
                <small>Across the project period</small>
              </div>

              <div className="impact-big-stat">
                <strong>{migratedCumulative.storage}</strong>
                <span>Crore Liters</span>
                <small>Total water storage capacity</small>
              </div>
            </div>

            <div className="impact-cumulative-footer">
              <span />
              <p>
                Numbers are presented as project-level cumulative figures
                for the stated period.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .impact-page {
          --impact-ink: #17382f;
          --impact-deep: #0c2922;
          --impact-green: #2d7b5f;
          --impact-soft: #eaf3ed;
          --impact-line: rgba(23, 56, 47, 0.14);
          --impact-muted: #71827b;
          background: #f7f8f4;
          color: var(--impact-ink);
          overflow: hidden;
        }

        .impact-hero {
          position: relative;
          min-height: 590px;
          display: flex;
          align-items: center;
          background:
            radial-gradient(circle at 78% 45%, rgba(94, 154, 118, 0.18), transparent 30%),
            linear-gradient(120deg, #f4f7f1 0%, #eef4ec 55%, #e4eee6 100%);
          border-bottom: 1px solid var(--impact-line);
        }

        .impact-hero::after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 1px;
          background: rgba(255,255,255,.8);
        }

        .impact-hero-glow {
          position: absolute;
          width: 520px;
          height: 520px;
          right: -120px;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 50%;
          border: 1px solid rgba(45,123,95,.12);
          box-shadow:
            0 0 0 65px rgba(45,123,95,.025),
            0 0 0 130px rgba(45,123,95,.018);
        }

        .impact-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          min-height: 590px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 420px;
          align-items: center;
          gap: 50px;
        }

        .impact-hero-copy {
          max-width: 720px;
          padding: 70px 0;
        }

        .impact-kicker,
        .impact-section-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--impact-green);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .18em;
          text-transform: uppercase;
        }

        .impact-kicker-dot,
        .impact-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--impact-green);
          box-shadow: 0 0 0 5px rgba(45,123,95,.10);
        }

        .impact-hero h1 {
          margin: 22px 0 20px;
          font-size: clamp(58px, 7vw, 108px);
          line-height: .88;
          letter-spacing: -.065em;
          font-weight: 700;
          color: var(--impact-deep);
        }

        .impact-hero h1 span {
          color: var(--impact-green);
        }

        .impact-hero-copy > p {
          max-width: 560px;
          margin: 0;
          color: #64756e;
          font-size: 17px;
          line-height: 1.75;
        }

        .impact-hero-line {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 36px;
        }

        .impact-hero-line span {
          width: 72px;
          height: 1px;
          background: var(--impact-green);
        }

        .impact-hero-line small {
          color: #6b7b74;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .16em;
        }

        .impact-hero-mark {
          position: relative;
          width: 380px;
          height: 380px;
          justify-self: center;
          display: grid;
          place-items: center;
        }

        .impact-mark-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(45,123,95,.18);
        }

        .impact-mark-ring-one {
          width: 310px;
          height: 310px;
        }

        .impact-mark-ring-two {
          width: 220px;
          height: 220px;
          border-color: rgba(45,123,95,.27);
        }

        .impact-mark-center {
          width: 145px;
          height: 145px;
          border-radius: 50%;
          background: var(--impact-deep);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 25px 55px rgba(12,41,34,.18);
        }

        .impact-mark-center strong {
          font-size: 66px;
          line-height: .8;
          font-weight: 500;
          letter-spacing: -.08em;
        }

        .impact-mark-center span {
          margin-top: 14px;
          font-size: 8px;
          letter-spacing: .2em;
          font-weight: 800;
        }

        .impact-intro {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          padding-top: 100px;
          padding-bottom: 58px;
        }

        .impact-intro h2 {
          margin: 13px 0 0;
          font-size: clamp(38px, 4.4vw, 62px);
          line-height: .98;
          letter-spacing: -.045em;
          color: var(--impact-deep);
        }

        .impact-intro > p {
          max-width: 570px;
          margin: 35px 0 0 auto;
          color: #6c7c75;
          font-size: 16px;
          line-height: 1.85;
        }

        .impact-analytics {
          padding-bottom: 70px;
        }

        .impact-analytics-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 25px;
        }

        .impact-analytics-heading h2 {
          margin: 12px 0 8px;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1;
          letter-spacing: -.045em;
          color: var(--impact-deep);
        }

        .impact-analytics-heading p {
          margin: 0;
          color: var(--impact-muted);
          font-size: 14px;
        }

        .impact-chart-legend {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          color: #71827b;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .07em;
        }

        .impact-chart-legend span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .impact-chart-legend i {
          width: 9px;
          height: 9px;
          border-radius: 2px;
          background: var(--impact-green);
        }

        .impact-chart-legend span:last-child i {
          background: #b5c9bf;
        }

        .impact-chart-card {
          position: relative;
          min-height: 410px;
          padding: 28px 30px 24px;
          border: 1px solid var(--impact-line);
          border-radius: 28px;
          background: #fff;
          box-shadow: 0 18px 50px rgba(28,58,48,.05);
          overflow: hidden;
        }

        .impact-chart-card::before {
          content: "";
          position: absolute;
          inset: 70px 30px 60px;
          background-image: linear-gradient(to bottom, rgba(23,56,47,.08) 1px, transparent 1px);
          background-size: 100% 25%;
          pointer-events: none;
        }

        .impact-chart-title {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          color: #77857f;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .impact-chart-title strong {
          color: var(--impact-green);
          font-size: 11px;
        }

        .impact-bar-chart {
          position: relative;
          z-index: 2;
          height: 290px;
          margin: 35px 15px 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          align-items: end;
          gap: 25px;
        }

        .impact-bar-group {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          gap: 13px;
        }

        .impact-bars {
          height: 100%;
          width: min(125px, 75%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 7px;
        }

        .impact-bar {
          position: relative;
          width: 42%;
          min-height: 8px;
          border-radius: 8px 8px 2px 2px;
          transition: transform .2s ease;
        }

        .impact-bar:hover {
          transform: translateY(-5px);
        }

        .impact-bar-bodies {
          background: var(--impact-green);
        }

        .impact-bar-beneficiaries {
          background: #b5c9bf;
        }

        .impact-bar b {
          position: absolute;
          left: 50%;
          top: -21px;
          transform: translateX(-50%);
          color: #65756e;
          font-size: 9px;
          white-space: nowrap;
        }

        .impact-bar-group > span {
          color: var(--impact-deep);
          font-size: 12px;
          font-weight: 800;
        }

        .impact-chart-scale {
          position: absolute;
          left: 30px;
          right: 30px;
          bottom: 25px;
          display: flex;
          justify-content: space-between;
          color: #a0aaa5;
          font-size: 9px;
        }

        .impact-trend {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 90px;
          align-items: center;
          padding-bottom: 110px;
        }

        .impact-trend-copy h2 {
          margin: 14px 0 18px;
          font-size: clamp(42px, 5vw, 66px);
          line-height: .92;
          letter-spacing: -.055em;
          color: var(--impact-deep);
        }

        .impact-trend-copy h2 span {
          color: var(--impact-green);
        }

        .impact-trend-copy p {
          max-width: 450px;
          margin: 0;
          color: var(--impact-muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .impact-mini-bars {
          padding: 30px;
          border: 1px solid var(--impact-line);
          border-radius: 24px;
          background: white;
        }

        .impact-mini-row {
          display: grid;
          grid-template-columns: 45px 1fr 130px;
          align-items: center;
          gap: 15px;
          padding: 18px 0;
          border-bottom: 1px solid var(--impact-line);
        }

        .impact-mini-row:last-child {
          border-bottom: 0;
        }

        .impact-mini-row > strong {
          color: var(--impact-deep);
          font-size: 13px;
        }

        .impact-mini-row > b {
          color: #75857e;
          font-size: 10px;
          text-align: right;
          white-space: nowrap;
        }

        .impact-mini-track {
          height: 10px;
          border-radius: 99px;
          background: #edf1ee;
          overflow: hidden;
        }

        .impact-mini-track span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #8bb7a0, var(--impact-green));
        }

        .impact-years {
          padding-bottom: 110px;
        }

        .impact-year-card {
          position: relative;
          margin-top: 22px;
          overflow: hidden;
          border: 1px solid var(--impact-line);
          border-radius: 28px;
          background: rgba(255,255,255,.78);
          box-shadow: 0 16px 45px rgba(28,58,48,.045);
        }

        .impact-year-card.is-current {
          border-color: rgba(45,123,95,.24);
          box-shadow: 0 20px 60px rgba(45,123,95,.08);
        }

        .impact-year-heading {
          min-height: 108px;
          padding: 25px 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid var(--impact-line);
        }

        .impact-year-number {
          display: flex;
          align-items: baseline;
          gap: 15px;
        }

        .impact-year-number span {
          color: #8a9892;
          font-size: 10px;
          letter-spacing: .18em;
          font-weight: 800;
        }

        .impact-year-number strong {
          color: var(--impact-deep);
          font-size: 48px;
          line-height: 1;
          letter-spacing: -.055em;
        }

        .impact-year-meta {
          display: flex;
          align-items: center;
          gap: 11px;
          color: #75857e;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .impact-metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .impact-metric {
          min-height: 185px;
          padding: 22px 25px 25px;
          border-right: 1px solid var(--impact-line);
          border-bottom: 1px solid var(--impact-line);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .impact-metric:nth-child(4n) {
          border-right: 0;
        }

        .impact-metric:nth-last-child(-n+4) {
          border-bottom: 0;
        }

        .impact-metric-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: auto;
        }

        .impact-metric-index {
          width: 28px;
          height: 28px;
          display: grid;
          place-items: center;
          border: 1px solid var(--impact-line);
          border-radius: 50%;
          color: #87958f;
          font-size: 9px;
          font-weight: 800;
        }

        .impact-metric-arrow {
          color: #a3afa9;
          font-size: 17px;
        }

        .impact-metric strong {
          display: block;
          color: var(--impact-deep);
          font-size: clamp(25px, 2.5vw, 37px);
          line-height: 1;
          letter-spacing: -.045em;
          overflow-wrap: anywhere;
        }

        .impact-metric span:last-child {
          margin-top: 9px;
          color: #77857f;
          font-size: 11px;
          line-height: 1.35;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .075em;
        }

        .impact-cumulative {
          position: relative;
          padding: 105px 0 90px;
          background: var(--impact-deep);
          color: white;
          overflow: hidden;
        }

        .impact-cumulative::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: .08;
          background-image:
            linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: linear-gradient(to bottom, black, transparent);
        }

        .impact-cumulative-orb {
          position: absolute;
          width: 600px;
          height: 600px;
          right: -260px;
          top: -220px;
          border-radius: 50%;
          border: 1px solid rgba(168,212,187,.18);
          box-shadow:
            0 0 0 70px rgba(168,212,187,.025),
            0 0 0 140px rgba(168,212,187,.018);
        }

        .impact-cumulative .shell {
          position: relative;
          z-index: 2;
        }

        .impact-cumulative .impact-section-label {
          color: #9fc9b2;
        }

        .impact-cumulative-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 55px;
        }

        .impact-cumulative-heading h2 {
          margin: 14px 0 0;
          color: white;
          font-size: clamp(42px, 5vw, 72px);
          line-height: .94;
          letter-spacing: -.055em;
        }

        .impact-cumulative-heading h2 span {
          color: #8ec4a5;
        }

        .impact-period {
          min-width: 180px;
          padding: 18px 0 2px 28px;
          border-left: 1px solid rgba(255,255,255,.2);
        }

        .impact-period span {
          display: block;
          color: rgba(255,255,255,.48);
          font-size: 9px;
          letter-spacing: .17em;
          font-weight: 800;
        }

        .impact-period strong {
          display: block;
          margin-top: 8px;
          color: #d8e9df;
          font-size: 23px;
          letter-spacing: -.03em;
        }

        .impact-cumulative-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(255,255,255,.14);
          border-left: 1px solid rgba(255,255,255,.14);
        }

        .impact-big-stat {
          min-height: 205px;
          padding: 28px;
          border-right: 1px solid rgba(255,255,255,.14);
          border-bottom: 1px solid rgba(255,255,255,.14);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .impact-big-stat strong {
          color: white;
          font-size: clamp(38px, 4.4vw, 62px);
          line-height: .9;
          letter-spacing: -.06em;
          overflow-wrap: anywhere;
        }

        .impact-big-stat span {
          margin-top: 14px;
          color: #b8d7c6;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .impact-big-stat small {
          margin-top: 5px;
          color: rgba(255,255,255,.42);
          font-size: 11px;
        }

        .impact-cumulative-footer {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 28px;
        }

        .impact-cumulative-footer > span {
          width: 45px;
          height: 1px;
          background: #7fb497;
        }

        .impact-cumulative-footer p {
          margin: 0;
          color: rgba(255,255,255,.43);
          font-size: 11px;
        }

        .impact-empty {
          padding: 45px;
          border: 1px dashed var(--impact-line);
          border-radius: 24px;
          color: var(--impact-muted);
          background: white;
        }

        @media (max-width: 900px) {
          .impact-analytics-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .impact-chart-card {
            padding-left: 20px;
            padding-right: 20px;
          }

          .impact-bar-chart {
            gap: 10px;
            margin-left: 5px;
            margin-right: 5px;
          }

          .impact-bars {
            width: 90%;
          }

          .impact-trend {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .impact-hero-inner {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .impact-hero-copy {
            padding: 85px 0 35px;
          }

          .impact-hero-mark {
            width: 260px;
            height: 260px;
            margin: 0 auto 65px;
          }

          .impact-mark-ring-one {
            width: 225px;
            height: 225px;
          }

          .impact-mark-ring-two {
            width: 160px;
            height: 160px;
          }

          .impact-mark-center {
            width: 110px;
            height: 110px;
          }

          .impact-mark-center strong {
            font-size: 50px;
          }

          .impact-intro {
            grid-template-columns: 1fr;
            gap: 5px;
            padding-top: 70px;
          }

          .impact-intro > p {
            margin: 25px 0 0;
          }

          .impact-metrics {
            grid-template-columns: repeat(2, 1fr);
          }

          .impact-metric:nth-child(4n) {
            border-right: 1px solid var(--impact-line);
          }

          .impact-metric:nth-child(2n) {
            border-right: 0;
          }

          .impact-metric:nth-last-child(-n+4) {
            border-bottom: 1px solid var(--impact-line);
          }

          .impact-metric:nth-last-child(-n+2) {
            border-bottom: 0;
          }

          .impact-cumulative-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .impact-cumulative-heading {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 600px) {
          .impact-analytics {
            padding-bottom: 55px;
          }

          .impact-chart-card {
            min-height: 340px;
            padding: 22px 15px 20px;
            border-radius: 20px;
          }

          .impact-chart-card::before {
            inset: 65px 15px 55px;
          }

          .impact-bar-chart {
            height: 235px;
            margin-top: 28px;
            gap: 5px;
          }

          .impact-bar {
            width: 45%;
          }

          .impact-bar b {
            font-size: 8px;
          }

          .impact-chart-scale {
            left: 15px;
            right: 15px;
            bottom: 20px;
          }

          .impact-trend {
            padding-bottom: 70px;
          }

          .impact-mini-bars {
            padding: 18px;
            border-radius: 20px;
          }

          .impact-mini-row {
            grid-template-columns: 35px 1fr;
            gap: 10px;
          }

          .impact-mini-row > b {
            grid-column: 2;
            text-align: left;
            margin-top: -5px;
          }

          .impact-hero {
            min-height: auto;
          }

          .impact-hero h1 {
            font-size: 58px;
          }

          .impact-hero-copy {
            padding-top: 65px;
          }

          .impact-hero-copy > p {
            font-size: 15px;
          }

          .impact-intro {
            padding-top: 55px;
            padding-bottom: 38px;
          }

          .impact-intro h2 {
            font-size: 42px;
          }

          .impact-year-card {
            border-radius: 20px;
          }

          .impact-year-heading {
            min-height: 90px;
            padding: 20px;
          }

          .impact-year-number strong {
            font-size: 38px;
          }

          .impact-year-number span {
            font-size: 8px;
          }

          .impact-year-meta {
            font-size: 9px;
          }

          .impact-metrics {
            grid-template-columns: 1fr 1fr;
          }

          .impact-metric {
            min-height: 155px;
            padding: 17px;
          }

          .impact-metric strong {
            font-size: 24px;
          }

          .impact-metric span:last-child {
            font-size: 9px;
          }

          .impact-cumulative {
            padding: 75px 0 65px;
          }

          .impact-cumulative-heading {
            margin-bottom: 35px;
          }

          .impact-cumulative-heading h2 {
            font-size: 45px;
          }

          .impact-cumulative-grid {
            grid-template-columns: 1fr 1fr;
          }

          .impact-big-stat {
            min-height: 155px;
            padding: 19px;
          }

          .impact-big-stat strong {
            font-size: 35px;
          }

          .impact-big-stat span {
            font-size: 9px;
            line-height: 1.3;
          }

          .impact-big-stat small {
            font-size: 9px;
          }

          .impact-cumulative-footer p {
            font-size: 9px;
            line-height: 1.5;
          }
        }

        @media (max-width: 390px) {
          .impact-hero h1 {
            font-size: 50px;
          }

          .impact-metric {
            min-height: 145px;
            padding: 14px;
          }

          .impact-metric strong {
            font-size: 21px;
          }

          .impact-big-stat {
            min-height: 145px;
            padding: 15px;
          }

          .impact-big-stat strong {
            font-size: 30px;
          }
        }
      `}</style>
    </>
  );
}
