import { Header, Footer } from '@/components/SiteChrome';
import { connectDB } from '@/lib/db';
import { Program } from '@/models';
import Link from 'next/link';

export default async function Programs() {
  let items: any[] = [];

  try {
    await connectDB();

    items = await Program.find({ published: true })
      .sort('-date')
      .lean();
  } catch {}

  return (
    <>
      <Header />

      <main>
        {/* Page Hero */}
        <section className="page-hero">
          <div className="shell">
            <span className="eyebrow">News &amp; activity</span>
            <h1>Programs</h1>
          </div>
        </section>

        {/* Programs */}
        <section className="shell section">
          {items.length ? (
            <div className="grid">
              {items.map((p: any) => {
                const date = p.date
                  ? new Date(p.date).toLocaleDateString('en-IN', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })
                  : '';

                const description =
                  p.content?.length > 180
                    ? `${p.content.slice(0, 180)}...`
                    : p.content || 'Program details will be available soon.';

                return (
                  <article className="card program-card" key={p.slug}>
                    <div className="program-meta">
                      {p.category && (
                        <span className="tag">{p.category}</span>
                      )}

                      {date && (
                        <span className="program-date">
                          {date}
                        </span>
                      )}
                    </div>

                    <h2 className="program-title">
                      {p.title}
                    </h2>

                    <p className="program-description">
                      {description}
                    </p>

                    <Link
                      href={`/programs/${p.slug}`}
                      className="program-link"
                    >
                      Read more <span aria-hidden="true">→</span>
                    </Link>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="card">
              <p>
                Programs will appear here as they are published through the
                CMS.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />

      {/* Additive styling only — existing theme/colours remain unchanged */}
      <style>{`
        .program-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .program-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }

        .program-date {
          font-size: 0.82rem;
          line-height: 1.4;
          opacity: 0.72;
          font-weight: 500;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }

        .program-title {
          margin: 0 0 12px;
          font-size: clamp(1.25rem, 2vw, 1.55rem);
          line-height: 1.25;
          font-weight: 700;
          letter-spacing: -0.015em;
        }

        .program-description {
          margin: 0 0 20px;
          line-height: 1.7;
          opacity: 0.82;
          font-size: 0.96rem;
        }

        .program-link {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          width: fit-content;
          font-weight: 600;
          text-decoration: none;
          transition:
            gap 0.2s ease,
            transform 0.2s ease;
        }

        .program-link:hover {
          gap: 11px;
        }

        .program-link span {
          transition: transform 0.2s ease;
        }

        .program-link:hover span {
          transform: translateX(2px);
        }

        @media (max-width: 640px) {
          .program-meta {
            align-items: flex-start;
            flex-direction: column;
            gap: 8px;
          }

          .program-date {
            font-size: 0.78rem;
          }

          .program-title {
            font-size: 1.25rem;
          }

          .program-description {
            font-size: 0.92rem;
            line-height: 1.65;
          }
        }
      `}</style>
    </>
  );
}