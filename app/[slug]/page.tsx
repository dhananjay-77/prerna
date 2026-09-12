import { notFound } from "next/navigation";
import Link from "next/link";
import { Header, Footer } from "@/components/SiteChrome";
import { connectDB } from "@/lib/db";
import { Project } from "@/models";
import { fallbackProjects } from "@/lib/content";

const details: Record<string, any> = {
  "jal-dhara": {
    fullForm: "जल-धरा",
    kicker: "Water Conservation Initiative",
    description:
      "This project is dedicated to conserving water resources and restoring the capacity of dams through desilting operations. The focus is on improving water storage, reducing sedimentation, and ensuring sustainable water supply for agriculture, drinking, and other essential uses.",
    objectives: [
      "Desilting of dams and reservoirs",
      "Water conservation through recharge and efficient use",
      "Community involvement, training and long-term maintenance",
    ],
    metrics: [
      ["Water bodies", "41"],
      ["Silt excavated", "415,888 m³"],
      ["Nearby farms", "527"],
      ["Direct beneficiaries", "527"],
      ["Indirect beneficiaries", "4,505"],
      ["Regained storage", "415,888,000 litres"],
    ],
    image: "/images/water-conservation-1.jpg",
  },
  sies: {
    kicker: "Education Initiative",
    description:
      "Dedicated to strengthening the Indian education system by addressing key challenges and creating opportunities for students across the country.",
    objectives: [
      "Access to education",
      "Teacher training and development",
      "Curriculum enhancement",
      "Digital learning",
      "Inclusive education",
    ],
    image: "/images/education-1.jpg",
  },
  shakti: {
    kicker: "Women Empowerment Initiative",
    description:
      "Project Shakti is our flagship initiative aimed at empowering women by providing tools, resources and opportunities to lead independent, fulfilling lives.",
    objectives: [
      "Skill development and vocational training",
      "Entrepreneurship support",
      "Health and well-being",
      "Legal awareness and advocacy",
      "Leadership and community involvement",
    ],
    image: "/images/women-empowerment-1.jpg",
  },
  hard: {
    kicker: "Rural Development Initiative",
    description:
      "Project HARD is dedicated to transforming rural areas into vibrant, self-sustaining communities through sustainable development.",
    objectives: [
      "Infrastructure development",
      "Agriculture and livelihood support",
      "Education and skill development",
      "Water and sanitation",
      "Community empowerment",
    ],
    image: "/images/natural-farming-1.jpg",
  },
  tep: {
    kicker: "Tribal Upliftment Initiative",
    description:
      "Our Tribal Upliftment project empowers indigenous communities by addressing unique challenges while preserving cultural heritage.",
    objectives: [
      "Education",
      "Healthcare",
      "Livelihood support",
      "Cultural preservation",
      "Infrastructure development",
    ],
    image: "/images/education-2.jpg",
  },
  tefa: {
    kicker: "Sustainable Agriculture Initiative",
    description:
      "This project promotes sustainable agricultural practices by reviving traditional farming methods that are in harmony with nature.",
    objectives: [
      "Reviving traditional techniques",
      "Soil health",
      "Water conservation",
      "Biodiversity",
      "Farmer education",
    ],
    image: "/images/natural-farming-2.jpg",
  },
  heal: {
    kicker: "Health & Well-being Initiative",
    description:
      "Project HEAL empowers individuals from diverse backgrounds to embrace healthier lifestyles, with focus on women, youth and marginalised communities.",
    objectives: [
      "Improve physical health",
      "Enhance mental health",
      "Prevent chronic diseases",
      "Empower individuals",
    ],
    image: "/images/health-1.jpg",
  },
  sos: {
    kicker: "Skill Development Initiative",
    description:
      "Skill for Success aims to equip participants with essential skills to thrive in their professional and personal lives.",
    objectives: [
      "Technical skills",
      "Soft skills",
      "Entrepreneurship training",
      "Partnerships",
      "Monitoring and impact assessment",
    ],
    image: "/images/skill-development-1.jpg",
  },
};

function getProjectImage(slug: string, project: any, detail: any) {
  return (
    project?.image ||
    detail?.image ||
    ({
      "water-conservation": "/images/water-conservation-1.jpg",
      "natural-farming": "/images/natural-farming-1.jpg",
      environment: "/images/environment-1.jpg",
      education: "/images/education-1.jpg",
      "skill-development": "/images/skill-development-1.jpg",
      "women-empowerment": "/images/women-empowerment-1.jpg",
    } as Record<string, string>)[slug] ||
    "/images/education-1.jpg"
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let project: any = null;

  try {
    await connectDB();
    project = await Project.findOne({
      slug,
      published: true,
    }).lean();
  } catch {
    project = null;
  }

  project = project || fallbackProjects.find((item) => item.slug === slug);

  if (!project) notFound();

  const detail = details[slug] || {};
  const data = { ...detail, ...project };
  const image = getProjectImage(slug, project, detail);

  const objectives = Array.isArray(data.objectives) ? data.objectives : [];
  const metrics = Array.isArray(data.metrics) ? data.metrics : [];

  return (
    <>
      <Header />

      <main className="project-detail-page">
        <section className="project-hero">
          <div className="project-hero-media">
            <img src={image} alt={data.name || "Prerna Foundation project"} />
          </div>

          <div className="project-hero-overlay" />

          <div className="shell project-hero-content">
            <Link href="/projects" className="project-back">
              ← All Projects
            </Link>

            <div className="project-kicker">
              {data.kicker || "Prerna Foundation Initiative"}
            </div>

            <h1>{data.name}</h1>

            {data.fullForm && (
              <p className="project-full-form">{data.fullForm}</p>
            )}

            {data.shortDescription && (
              <p className="project-hero-description">
                {data.shortDescription}
              </p>
            )}

            <div className="project-hero-meta">
              <span>{data.status || "Active"} Project</span>
              <span>Prerna Foundation</span>
            </div>
          </div>
        </section>

        <section className="project-intro shell section">
          <div className="project-intro-label">01 — About the project</div>
          <div className="project-intro-grid">
            <div>
              <h2>{data.name}</h2>
            </div>
            <div>
              <p className="project-lead">
                {data.description ||
                  data.shortDescription ||
                  "A community-focused initiative by Prerna Foundation."}
              </p>
            </div>
          </div>
        </section>

        {metrics.length > 0 && (
          <section className="project-impact">
            <div className="shell section">
              <div className="project-section-heading">
                <div>
                  <span className="project-section-number">02</span>
                  <span className="project-section-label">Measured impact</span>
                </div>
                <h2>From action to impact</h2>
              </div>

              <div className="project-metrics-grid">
                {metrics.map((metric: any, index: number) => {
                  const label = metric?.label || metric?.[0];
                  const value = metric?.value || metric?.[1];

                  return (
                    <div className="project-metric" key={label || index}>
                      <span className="project-metric-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {objectives.length > 0 && (
          <section className="project-objectives shell section">
            <div className="project-section-heading">
              <div>
                <span className="project-section-number">03</span>
                <span className="project-section-label">What we focus on</span>
              </div>
              <h2>Key objectives</h2>
            </div>

            <div className="project-objectives-grid">
              {objectives.map((objective: string, index: number) => (
                <article className="project-objective" key={objective}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{objective}</h3>
                </article>
              ))}
            </div>
          </section>
        )}

        {slug === "jal-dhara" && (
          <section className="project-story">
            <div className="shell section">
              <div className="project-section-heading">
                <div>
                  <span className="project-section-number">04</span>
                  <span className="project-section-label">
                    Field outcomes
                  </span>
                </div>
                <h2>Site excavation & utilisation</h2>
              </div>

              <div className="project-story-grid">
                <div>
                  <p>
                    The District Administration issued work orders of 9,09,632
                    Cu M from 61 water bodies. A total of 415,888 cubic metres
                    of silt was excavated from 41 lakes in 12 tehsils, and
                    spread across 527 nearby farms.
                  </p>
                </div>
                <div>
                  <p>
                    The work developed an additional storage capacity of
                    415,888,000 litres. Approximately 831,978,000 litres will
                    also percolate into the ground, improving water tables; the
                    water table of 100+ nearby villages witnessed significant
                    growth.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="project-cta shell">
          <div>
            <span className="project-section-label">Continue exploring</span>
            <h2>See more of Prerna Foundation&apos;s work.</h2>
          </div>
          <Link href="/projects" className="project-cta-link">
            View all projects →
          </Link>
        </section>
      </main>

      <Footer />

      <style>{`
        .project-detail-page {
          --project-ink: #10251c;
          --project-muted: #607168;
          --project-line: rgba(16, 37, 28, .12);
          --project-soft: #f3f7f3;
          background: #fff;
          color: var(--project-ink);
        }

        .project-hero {
          min-height: min(760px, 88vh);
          position: relative;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          isolation: isolate;
          background: #10251c;
        }

        .project-hero-media,
        .project-hero-overlay {
          position: absolute;
          inset: 0;
        }

        .project-hero-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .project-hero-overlay {
          background:
            linear-gradient(90deg, rgba(5, 18, 12, .88) 0%, rgba(5, 18, 12, .62) 48%, rgba(5, 18, 12, .12) 100%),
            linear-gradient(0deg, rgba(5, 18, 12, .72), transparent 65%);
          z-index: 1;
        }

        .project-hero-content {
          position: relative;
          z-index: 2;
          padding-top: 120px;
          padding-bottom: 76px;
          color: #fff;
          max-width: 1180px;
        }

        .project-back {
          display: inline-flex;
          color: rgba(255,255,255,.88);
          text-decoration: none;
          margin-bottom: 54px;
          font-size: 14px;
          font-weight: 700;
        }

        .project-kicker,
        .project-section-label,
        .project-intro-label {
          text-transform: uppercase;
          letter-spacing: .16em;
          font-size: 11px;
          font-weight: 800;
        }

        .project-kicker {
          color: rgba(255,255,255,.72);
          margin-bottom: 16px;
        }

        .project-hero h1 {
          font-size: clamp(46px, 7vw, 92px);
          line-height: .95;
          letter-spacing: -.055em;
          max-width: 900px;
          margin: 0;
        }

        .project-full-form {
          margin: 18px 0 0;
          font-size: clamp(18px, 2vw, 25px);
          opacity: .88;
        }

        .project-hero-description {
          max-width: 690px;
          margin: 26px 0 0;
          font-size: 17px;
          line-height: 1.75;
          color: rgba(255,255,255,.82);
        }

        .project-hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 32px;
        }

        .project-hero-meta span {
          padding: 9px 14px;
          border: 1px solid rgba(255,255,255,.28);
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          background: rgba(255,255,255,.08);
          backdrop-filter: blur(8px);
        }

        .project-intro {
          padding-top: 100px;
          padding-bottom: 100px;
        }

        .project-intro-label {
          color: #6d7b73;
          margin-bottom: 34px;
        }

        .project-intro-grid {
          display: grid;
          grid-template-columns: minmax(220px, .8fr) minmax(320px, 1.2fr);
          gap: 80px;
          align-items: start;
        }

        .project-intro h2,
        .project-section-heading h2 {
          font-size: clamp(34px, 4vw, 58px);
          line-height: 1;
          letter-spacing: -.045em;
          margin: 0;
        }

        .project-lead {
          font-size: clamp(19px, 2vw, 26px);
          line-height: 1.6;
          color: #44554c;
          margin: 0;
        }

        .project-impact {
          background: var(--project-soft);
        }

        .project-section-heading {
          display: flex;
          justify-content: space-between;
          gap: 40px;
          align-items: end;
          margin-bottom: 48px;
        }

        .project-section-number {
          display: block;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .project-section-label {
          color: #708077;
        }

        .project-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid var(--project-line);
          border-left: 1px solid var(--project-line);
        }

        .project-metric {
          min-height: 190px;
          padding: 30px;
          border-right: 1px solid var(--project-line);
          border-bottom: 1px solid var(--project-line);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .project-metric-index {
          font-size: 11px;
          font-weight: 800;
          color: #75837b;
        }

        .project-metric strong {
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1;
          letter-spacing: -.045em;
        }

        .project-metric > span:last-child {
          font-size: 13px;
          font-weight: 700;
          color: #637168;
        }

        .project-objectives {
          padding-top: 105px;
          padding-bottom: 105px;
        }

        .project-objectives-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-top: 1px solid var(--project-line);
        }

        .project-objective {
          min-height: 180px;
          padding: 32px 35px;
          border-bottom: 1px solid var(--project-line);
          border-right: 1px solid var(--project-line);
        }

        .project-objective:nth-child(even) {
          border-right: 0;
        }

        .project-objective > span {
          color: #77857d;
          font-size: 12px;
          font-weight: 800;
        }

        .project-objective h3 {
          font-size: clamp(21px, 2.2vw, 30px);
          line-height: 1.15;
          margin: 45px 0 0;
          letter-spacing: -.025em;
        }

        .project-story {
          background: #10251c;
          color: #fff;
        }

        .project-story .project-section-label,
        .project-story .project-section-number {
          color: rgba(255,255,255,.62);
        }

        .project-story-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 70px;
          max-width: 1000px;
        }

        .project-story-grid p {
          color: rgba(255,255,255,.78);
          font-size: 18px;
          line-height: 1.8;
          margin: 0;
        }

        .project-cta {
          margin-top: 70px;
          margin-bottom: 70px;
          padding: 52px 58px;
          background: #edf4ef;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 35px;
          border-radius: 24px;
        }

        .project-cta h2 {
          font-size: clamp(28px, 4vw, 46px);
          line-height: 1;
          letter-spacing: -.04em;
          margin: 12px 0 0;
          max-width: 650px;
        }

        .project-cta-link {
          flex: 0 0 auto;
          text-decoration: none;
          color: #fff;
          background: #10251c;
          padding: 15px 21px;
          border-radius: 999px;
          font-weight: 800;
          font-size: 14px;
        }

        @media (max-width: 800px) {
          .project-hero {
            min-height: 700px;
          }

          .project-hero-content {
            padding-bottom: 48px;
          }

          .project-back {
            margin-bottom: 38px;
          }

          .project-intro-grid,
          .project-story-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .project-section-heading {
            display: block;
          }

          .project-section-heading h2 {
            margin-top: 18px;
          }

          .project-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .project-objectives-grid {
            grid-template-columns: 1fr;
          }

          .project-objective,
          .project-objective:nth-child(even) {
            border-right: 0;
          }

          .project-cta {
            margin-left: 18px;
            margin-right: 18px;
            padding: 38px 28px;
            display: block;
          }

          .project-cta-link {
            display: inline-flex;
            margin-top: 28px;
          }
        }

        @media (max-width: 520px) {
          .project-hero h1 {
            font-size: 48px;
          }

          .project-hero-description {
            font-size: 15px;
          }

          .project-intro,
          .project-objectives {
            padding-top: 70px;
            padding-bottom: 70px;
          }

          .project-metrics-grid {
            grid-template-columns: 1fr;
          }

          .project-metric {
            min-height: 150px;
          }

          .project-objective {
            min-height: 150px;
          }

          .project-objective h3 {
            margin-top: 35px;
          }
        }
      `}</style>
    </>
  );
}
