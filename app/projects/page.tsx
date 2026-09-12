import { Header, Footer } from '@/components/SiteChrome';
import { publicContent } from '@/lib/content';
import Link from 'next/link';

type Project = {
  slug: string;
  name: string;
  status?: string;
  shortDescription?: string;
  image?: string;
  category?: string;
};

const fallbackImages = [
  '/images/water-conservation-1.jpg',
  '/images/natural-farming-1.jpg',
  '/images/environment-1.jpg',
  '/images/skill-development-1.jpg',
  '/images/women-empowerment-1.jpg',
  '/images/education-1.jpg',
];

export default async function Projects() {
  const { projects } = await publicContent();
  const items: Project[] = Array.isArray(projects) ? projects : [];

  return (
    <>
      <Header />

      <main className="projects-page">
        <section className="projects-hero">
          <div className="projects-hero-shape" />
          <div className="shell projects-hero-inner">
            <div className="projects-hero-copy">
              <span className="projects-kicker">
                <i />
                Our work
              </span>

              <h1>
                Projects
                <br />
                <span>with purpose.</span>
              </h1>

              <p>
                Meaningful initiatives designed around people, communities
                and long-term change.
              </p>

              <div className="projects-hero-meta">
                <strong>{items.length}</strong>
                <span>active &amp; documented projects</span>
              </div>
            </div>

            <div className="projects-hero-orbit" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="orbit-center">
                <span>PRERNA</span>
                <strong>01</strong>
                <small>COMMUNITY</small>
              </div>
            </div>
          </div>
        </section>

        <section className="shell projects-intro">
          <div>
            <span className="projects-label">OUR INITIATIVES</span>
            <h2>Work that moves<br />communities forward.</h2>
          </div>

          <p>
            Explore the projects and programmes through which Prerna Foundation
            works with communities to create practical, sustainable and
            measurable impact.
          </p>
        </section>

        <section className="shell projects-grid-section">
          {items.length ? (
            <div className="projects-grid">
              {items.map((p, index) => (
                <article className="project-feature-card" key={p.slug}>
                  <div className="project-image-wrap">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt=""
                        className="project-image"
                      />
                    ) : (
                      <img
                        src={fallbackImages[index % fallbackImages.length]}
                        alt=""
                        className="project-image"
                      />
                    )}

                    <div className="project-image-overlay" />

                    <span className="project-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {p.status && (
                      <span className="project-status">
                        <i />
                        {p.status}
                      </span>
                    )}
                  </div>

                  <div className="project-content">
                    <div className="project-topline">
                      <span>{p.category || 'Prerna Initiative'}</span>
                      <span>Explore ↗</span>
                    </div>

                    <h2>{p.name}</h2>

                    <p>
                      {p.shortDescription ||
                        'A community-focused initiative creating meaningful and sustainable change.'}
                    </p>

                    <Link href={`/${p.slug}`} className="project-link">
                      View project
                      <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="projects-empty">
              <span className="projects-label">PROJECTS</span>
              <h2>Projects are being updated.</h2>
              <p>
                Verified project information will appear here once it is
                published by the administrator.
              </p>
            </div>
          )}
        </section>

        <section className="projects-values">
          <div className="shell">
            <div className="projects-values-heading">
              <span className="projects-label">HOW WE WORK</span>
              <h2>Purpose behind<br /><span>every project.</span></h2>
            </div>

            <div className="projects-values-grid">
              <div className="projects-value">
                <strong>01</strong>
                <h3>Community first</h3>
                <p>
                  Projects are shaped around real community needs and local
                  participation.
                </p>
              </div>

              <div className="projects-value">
                <strong>02</strong>
                <h3>Practical action</h3>
                <p>
                  We focus on initiatives that translate ideas into visible
                  work on the ground.
                </p>
              </div>

              <div className="projects-value">
                <strong>03</strong>
                <h3>Long-term impact</h3>
                <p>
                  The goal is sustainable progress that continues beyond a
                  single activity or campaign.
                </p>
              </div>

              <div className="projects-value">
                <strong>04</strong>
                <h3>Measurable change</h3>
                <p>
                  Clear outcomes and documented progress help make the work
                  accountable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="shell projects-cta">
          <div className="projects-cta-inner">
            <div>
              <span className="projects-label">GET INVOLVED</span>
              <h2>Good work grows<br />when people join in.</h2>
            </div>

            <Link href="/contact" className="projects-cta-button">
              Connect with us
              <span>↗</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .projects-page {
          --projects-deep: #102f27;
          --projects-green: #2f7d61;
          --projects-soft: #edf4ee;
          --projects-line: rgba(16,47,39,.13);
          --projects-muted: #718079;
          background: #f7f8f5;
          color: var(--projects-deep);
          overflow: hidden;
        }

        .projects-hero {
          position: relative;
          min-height: 570px;
          display: flex;
          align-items: center;
          background:
            radial-gradient(circle at 78% 50%, rgba(111,160,132,.20), transparent 28%),
            linear-gradient(125deg, #f4f7f2 0%, #edf4ed 58%, #e3eee6 100%);
          border-bottom: 1px solid var(--projects-line);
        }

        .projects-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          min-height: 570px;
          display: grid;
          grid-template-columns: 1fr 420px;
          align-items: center;
          gap: 60px;
        }

        .projects-hero-copy {
          padding: 80px 0;
          max-width: 720px;
        }

        .projects-kicker,
        .projects-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--projects-green);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .19em;
          text-transform: uppercase;
        }

        .projects-kicker i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--projects-green);
          box-shadow: 0 0 0 5px rgba(47,125,97,.10);
        }

        .projects-hero h1 {
          margin: 22px 0;
          color: var(--projects-deep);
          font-size: clamp(60px, 7vw, 106px);
          line-height: .87;
          letter-spacing: -.065em;
          font-weight: 700;
        }

        .projects-hero h1 span {
          color: var(--projects-green);
        }

        .projects-hero-copy > p {
          max-width: 540px;
          margin: 0;
          color: #687971;
          font-size: 17px;
          line-height: 1.75;
        }

        .projects-hero-meta {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 35px;
        }

        .projects-hero-meta strong {
          color: var(--projects-deep);
          font-size: 27px;
          letter-spacing: -.04em;
        }

        .projects-hero-meta span {
          max-width: 150px;
          color: #819088;
          font-size: 10px;
          line-height: 1.4;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .1em;
        }

        .projects-hero-orbit {
          position: relative;
          width: 390px;
          height: 390px;
          display: grid;
          place-items: center;
          justify-self: center;
        }

        .orbit {
          position: absolute;
          border: 1px solid rgba(47,125,97,.20);
          border-radius: 50%;
        }

        .orbit-one { width: 370px; height: 370px; }
        .orbit-two { width: 275px; height: 275px; border-color: rgba(47,125,97,.28); }
        .orbit-three { width: 180px; height: 180px; border-color: rgba(47,125,97,.38); }

        .orbit::after {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--projects-green);
          top: 12%;
          right: 12%;
        }

        .orbit-two::after {
          top: auto;
          right: auto;
          bottom: 15%;
          left: 10%;
          width: 6px;
          height: 6px;
        }

        .orbit-center {
          width: 125px;
          height: 125px;
          border-radius: 50%;
          background: var(--projects-deep);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-shadow: 0 25px 55px rgba(16,47,39,.18);
        }

        .orbit-center span,
        .orbit-center small {
          font-size: 8px;
          font-weight: 800;
          letter-spacing: .19em;
        }

        .orbit-center strong {
          margin: 7px 0;
          font-size: 45px;
          line-height: .8;
          letter-spacing: -.07em;
        }

        .projects-intro {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          padding-top: 100px;
          padding-bottom: 60px;
        }

        .projects-intro h2 {
          margin: 13px 0 0;
          font-size: clamp(39px, 4.5vw, 63px);
          line-height: .96;
          letter-spacing: -.05em;
        }

        .projects-intro > p {
          max-width: 570px;
          margin: 30px 0 0 auto;
          color: var(--projects-muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .projects-grid-section {
          padding-bottom: 110px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }

        .project-feature-card {
          overflow: hidden;
          border: 1px solid var(--projects-line);
          border-radius: 27px;
          background: white;
          box-shadow: 0 18px 50px rgba(16,47,39,.045);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .project-feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 65px rgba(16,47,39,.09);
        }

        .project-image-wrap {
          position: relative;
          height: 285px;
          overflow: hidden;
          background: #dfe9e1;
        }

        .project-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform .5s ease;
        }

        .project-feature-card:hover .project-image {
          transform: scale(1.045);
        }

        .project-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(10,32,26,.08), rgba(10,32,26,.48));
        }

        .project-number {
          position: absolute;
          left: 23px;
          top: 20px;
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255,255,255,.45);
          border-radius: 50%;
          color: white;
          font-size: 10px;
          font-weight: 800;
          backdrop-filter: blur(8px);
        }

        .project-status {
          position: absolute;
          right: 18px;
          bottom: 18px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          border: 1px solid rgba(255,255,255,.35);
          border-radius: 99px;
          background: rgba(0,0,0,.22);
          color: white;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .1em;
          text-transform: uppercase;
          backdrop-filter: blur(8px);
        }

        .project-status i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #c9ead6;
        }

        .project-content {
          padding: 27px 28px 29px;
        }

        .project-topline {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          color: #8a9791;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .project-content h2 {
          margin: 15px 0 11px;
          font-size: 30px;
          line-height: 1;
          letter-spacing: -.04em;
        }

        .project-content > p {
          min-height: 55px;
          margin: 0;
          color: var(--projects-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-top: 23px;
          color: var(--projects-deep);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .08em;
          text-transform: uppercase;
          text-decoration: none;
        }

        .project-link span {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border: 1px solid var(--projects-line);
          border-radius: 50%;
          transition: transform .2s ease, background .2s ease;
        }

        .project-feature-card:hover .project-link span {
          transform: translateX(4px);
          background: var(--projects-soft);
        }

        .projects-values {
          position: relative;
          padding: 105px 0 100px;
          background: var(--projects-deep);
          color: white;
          overflow: hidden;
        }

        .projects-values::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: .07;
          background-image:
            linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: linear-gradient(to bottom, black, transparent);
        }

        .projects-values .shell {
          position: relative;
          z-index: 2;
        }

        .projects-values .projects-label {
          color: #9bc8ae;
        }

        .projects-values-heading h2 {
          margin: 14px 0 55px;
          color: white;
          font-size: clamp(43px, 5vw, 70px);
          line-height: .93;
          letter-spacing: -.055em;
        }

        .projects-values-heading h2 span {
          color: #8bc19f;
        }

        .projects-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(255,255,255,.15);
          border-left: 1px solid rgba(255,255,255,.15);
        }

        .projects-value {
          min-height: 240px;
          padding: 27px;
          border-right: 1px solid rgba(255,255,255,.15);
          border-bottom: 1px solid rgba(255,255,255,.15);
        }

        .projects-value strong {
          color: #7eb496;
          font-size: 10px;
          letter-spacing: .15em;
        }

        .projects-value h3 {
          margin: 62px 0 10px;
          color: white;
          font-size: 21px;
          letter-spacing: -.02em;
        }

        .projects-value p {
          margin: 0;
          color: rgba(255,255,255,.47);
          font-size: 12px;
          line-height: 1.7;
        }

        .projects-cta {
          padding-top: 100px;
          padding-bottom: 100px;
        }

        .projects-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
          padding: 55px 60px;
          border: 1px solid var(--projects-line);
          border-radius: 28px;
          background: var(--projects-soft);
        }

        .projects-cta h2 {
          margin: 13px 0 0;
          font-size: clamp(35px, 4vw, 55px);
          line-height: .98;
          letter-spacing: -.045em;
        }

        .projects-cta-button {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          gap: 17px;
          padding: 15px 18px 15px 21px;
          border-radius: 99px;
          background: var(--projects-deep);
          color: white;
          font-size: 11px;
          font-weight: 800;
          text-decoration: none;
          letter-spacing: .07em;
          text-transform: uppercase;
        }

        .projects-cta-button span {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(255,255,255,.12);
        }

        .projects-empty {
          padding: 70px 45px;
          border: 1px dashed var(--projects-line);
          border-radius: 25px;
          background: white;
          text-align: center;
        }

        .projects-empty h2 {
          margin: 14px 0 10px;
          font-size: 36px;
          letter-spacing: -.04em;
        }

        .projects-empty p {
          margin: 0;
          color: var(--projects-muted);
        }

        @media (max-width: 900px) {
          .projects-hero-inner {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .projects-hero-copy {
            padding: 75px 0 25px;
          }

          .projects-hero-orbit {
            width: 280px;
            height: 280px;
            margin: 0 auto 70px;
          }

          .orbit-one { width: 270px; height: 270px; }
          .orbit-two { width: 200px; height: 200px; }
          .orbit-three { width: 135px; height: 135px; }

          .orbit-center {
            width: 100px;
            height: 100px;
          }

          .orbit-center strong {
            font-size: 36px;
          }

          .projects-intro {
            grid-template-columns: 1fr;
            gap: 5px;
            padding-top: 70px;
          }

          .projects-intro > p {
            margin: 25px 0 0;
          }

          .projects-values-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .projects-cta-inner {
            padding: 40px;
          }
        }

        @media (max-width: 650px) {
          .projects-hero h1 {
            font-size: 58px;
          }

          .projects-hero-copy > p {
            font-size: 15px;
          }

          .projects-intro {
            padding-top: 55px;
            padding-bottom: 40px;
          }

          .projects-intro h2 {
            font-size: 42px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .project-image-wrap {
            height: 235px;
          }

          .project-content {
            padding: 23px 21px 25px;
          }

          .project-content h2 {
            font-size: 27px;
          }

          .projects-grid-section {
            padding-bottom: 75px;
          }

          .projects-values {
            padding: 75px 0 70px;
          }

          .projects-values-heading h2 {
            font-size: 46px;
            margin-bottom: 35px;
          }

          .projects-values-grid {
            grid-template-columns: 1fr 1fr;
          }

          .projects-value {
            min-height: 190px;
            padding: 18px;
          }

          .projects-value h3 {
            margin-top: 42px;
            font-size: 17px;
          }

          .projects-value p {
            font-size: 10px;
          }

          .projects-cta {
            padding: 65px 0;
          }

          .projects-cta-inner {
            align-items: flex-start;
            flex-direction: column;
            padding: 30px 24px;
            border-radius: 22px;
          }

          .projects-cta h2 {
            font-size: 40px;
          }
        }

        @media (max-width: 390px) {
          .projects-hero h1 {
            font-size: 51px;
          }

          .projects-values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
