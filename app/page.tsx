import Link from "next/link";
import { Header, Footer } from "@/components/SiteChrome";
import { publicContent } from "@/lib/content";

const areas = [
  {
    number: "01",
    icon: "◒",
    title: "Education",
    text: "Creating access and opportunity through learning and knowledge.",
    image: "/images/image.png",
  },
  {
    number: "02",
    icon: "✚",
    title: "Health",
    text: "Supporting healthier lives and informed choices for communities.",
    image: "/images/health.jpg",
  },
  {
    number: "03",
    icon: "↗",
    title: "Skill Development",
    text: "Building skills for employability, entrepreneurship and self-reliance.",
    image: "/images/skill-development.jpg",
  },
  {
    number: "04",
    icon: "✦",
    title: "Women Empowerment",
    text: "Creating tools, opportunities and platforms for independent lives.",
    image: "/images/women-empowerment.jpg",
  },
  {
    number: "05",
    icon: "♧",
    title: "Natural Farming",
    text: "Promoting sustainable and environment-friendly agricultural practices.",
    image: "/images/natural-farming.jpg",
  },
  {
    number: "06",
    icon: "≈",
    title: "Water Conservation",
    text: "Restoring water bodies and building resilient rural communities.",
    image: "/images/water-conservation.jpeg",
  },
  {
    number: "07",
    icon: "◇",
    title: "Environment",
    text: "Encouraging environmental responsibility and sustainable development.",
    image: "/images/environment.jpeg",
  },
];

const testimonials = [
  {
    quote:
      "पाणी म्हणजे जीवन – आणि या अमूल्य नैसर्गिक संपत्तीच्या संवर्धनासाठी प्रेरणा फाउंडेशनने घेतलेला पुढाकार स्तुत्य आहे. आपले कार्य पर्यावरणाचे संतुलन राखण्यास, शेती व ग्रामीण जीवन सशक्त करण्यास आणि पुढच्या पिढ्यांचे भविष्य सुरक्षित करण्यास मोलाचे ठरत आहे.",
    name: "सूरज शिंदे",
    role:
      "अधीक्षक अभियंता तथा प्रादेशिक जलसंधारण अधिकारी, मृद व जलसंधारण विभाग, ठाणे",
  },
  {
    quote:
      "जलसंधारण क्षेत्रात महाराष्ट्र शासनाची सहयोगी संस्था म्हणून प्रेरणा फाउंडेशन ने दिलेले योगदान उल्लेखनीय आहे. संस्थेच्या वतीने अनेक जलसाठ्यांमधून गाळाचा उपसा केल्याचे समजले, अनेक शेतकऱ्यांना याचा लाभ झाला आहे.",
    name: "उमाकांत मिटकर",
    role: "राज्य पोलीस तक्रार प्राधिकरण, मुंबई",
  },
];

const futurePlanning = [
  "Science on Wheels – Mobile Planetarium",
  "Afforestation",
  "Deepening and widening of rivers and canals",
  "GDGS in 25 districts of Maharashtra",
  "Holistic Upliftment program for Katkari, Madiya and Kolam Tribes",
];

export default async function Home() {
  const { projects, stats, programs, partners, goals } =
    await publicContent();

  const metrics =
    stats?.metrics?.filter((m: any) => m.enabled) !== undefined
      ? stats.metrics.filter((m: any) => m.enabled)
      : [
        {
          label: "Water bodies",
          value: "41",
        },
        {
          label: "Silt excavated",
          value: "4,15,888",
          unit: "m³",
        },
        {
          label: "Nearby farms",
          value: "527",
        },
        {
          label: "Villages",
          value: "100+",
        },
      ];

  return (
    <>
      <Header />

      <main className="home-page">

        {/* =========================================================
            HERO
        ========================================================= */}

        <section className="hero home-hero">
          <div className="shell hero-shell">

            <div className="hero-copy">

              <div className="hero-kicker">
                <span className="hero-kicker-line" />
                <span>कृतसंकल्पा सदास्मरन्त:</span>
              </div>

              <h1>
                Growing stronger
                <br />
                communities,
                <br />
                <em>together.</em>
              </h1>

              <p>
                Prerna Foundation creates meaningful change through
                education, agriculture, rural development,
                entrepreneurship and sustainable action.
              </p>

              {/* <div className="hero-actions">
                <Link className="btn light" href="/projects">
                  Explore our work
                  <span>→</span>
                </Link>

                <Link className="btn orange" href="/donate-now">
                  Donate now
                  <span>↗</span>
                </Link>
              </div> */}

              <div className="hero-bottom-meta">
                <span>EST. 2014</span>
                <span>•</span>
                <span>MAHARASHTRA</span>
                <span>•</span>
                <span>COMMUNITY DEVELOPMENT</span>
              </div>

            </div>

            <div className="hero-visual">

              <div className="hero-image-main">
                <img
                  src="/images/prerna-hero.jpg"
                  alt="Prerna Foundation community work"
                />
              </div>
        
            </div>

          </div>
        </section>


        {/* =========================================================
            INTRO / ABOUT
        ========================================================= */}

        <section className="section intro-section">
          <div className="shell">

            <div className="section-heading">
              <span className="eyebrow">About Prerna</span>

              <span className="heading-number">
                01 / 08
              </span>
            </div>

            <div className="intro-layout">

              <div className="intro-title">
                <h2>
                  Change that
                  <br />
                  begins with
                  <br />
                  <em>people.</em>
                </h2>
              </div>

              <div className="intro-content">

                <p className="large-text">
                  Prerna Foundation is a non-profit organisation
                  committed to creating suitable change and making
                  a meaningful difference in the lives of those we
                  serve.
                </p>

                <p>
                  We facilitate opportunities in education,
                  agriculture, the cooperative sector, rural
                  development and entrepreneurship. Founded in 2014,
                  the Foundation works towards creating a society
                  where individuals have an opportunity to thrive
                  and contribute meaningfully to their communities.
                </p>

                <div className="intro-actions">
                  <Link className="btn" href="/about-us">
                    Read our story
                    <span>→</span>
                  </Link>

                  <span className="intro-note">
                    Empowerment · Sustainability · Collaboration
                  </span>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =========================================================
            WORKING AREA
        ========================================================= */}

        <section className="section areas-section">
          <div className="shell">

            <div className="section-heading">
              <div>
                <span className="eyebrow">Our Working Area</span>
                <h2>
                  Where we
                  <br />
                  <em>create impact.</em>
                </h2>
              </div>

              <span className="heading-number">
                02 / 08
              </span>
            </div>


            <div className="areas-grid">

              {areas.map((area, index) => (
                <article
                  className="area-card"
                  key={area.title}
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >

                  <div className="area-image">

                    <img
                      src={area.image}
                      alt={area.title}
                    />

                    <span className="area-number">
                      {area.number}
                    </span>

                    <span className="area-icon">
                      {area.icon}
                    </span>

                  </div>

                  <div className="area-content">

                    <h3>{area.title}</h3>

                    <p>{area.text}</p>

                    <Link href="/about-us">
                      Read more
                      <span>→</span>
                    </Link>

                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>


        {/* =========================================================
            IMPACT
        ========================================================= */}

        <section className="section impact-section">

          <div className="shell">

            <div className="impact-top">

              <div>
                <span className="eyebrow light-eyebrow">
                  Impact at a glance
                  {stats?.year ? ` · ${stats.year}` : ""}
                </span>

                <h2>
                  Measured
                  <br />
                  <em>with care.</em>
                </h2>
              </div>

              <Link className="impact-link" href="/impact">
                View complete impact
                <span>↗</span>
              </Link>

            </div>


            <div className="impact-grid">

              {metrics.slice(0, 8).map((metric: any, index: number) => (

                <div
                  className="impact-stat"
                  key={metric.label}
                >

                  <span className="impact-stat-number">
                    0{index + 1}
                  </span>

                  <strong>
                    {metric.value}
                    {metric.unit ? (
                      <small> {metric.unit}</small>
                    ) : null}
                  </strong>

                  <span className="impact-stat-label">
                    {metric.label}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =========================================================
            WATER / FEATURE STORY
        ========================================================= */}

        <section className="section feature-section">

          <div className="shell feature-layout">

            <div className="feature-image">

              <img
                src="/images/water-conservation-feature.jpg"
                alt="Water conservation work by Prerna Foundation"
              />

              <div className="feature-image-label">
                <span>JAL-DHARA</span>
                <small>Water conservation initiative</small>
              </div>

            </div>

            <div className="feature-content">

              <span className="eyebrow">
                From the ground
              </span>

              <h2>
                Restoring water.
                <br />
                <em>Strengthening lives.</em>
              </h2>

              <p>
                Water conservation is one of the important areas
                of Prerna Foundation's work. Through community
                participation and restoration of water bodies,
                the initiative aims to support agriculture,
                farmers and resilient rural communities.
              </p>

              <div className="feature-points">

                <div>
                  <strong>01</strong>
                  <span>Water conservation</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Community participation</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Sustainable agriculture</span>
                </div>

              </div>

              <Link className="btn" href="/projects">
                Explore our work
                <span>→</span>
              </Link>

            </div>

          </div>

        </section>


        {/* =========================================================
            TESTIMONIALS
        ========================================================= */}

        <section className="section testimonials-section">

          <div className="shell">

            <div className="section-heading">

              <div>
                <span className="eyebrow">
                  Testimonials
                </span>

                <h2>
                  Words from
                  <br />
                  those who
                  <br />
                  <em>see the impact.</em>
                </h2>
              </div>

              <span className="heading-number">
                03 / 08
              </span>

            </div>


            <div className="testimonials-grid">

              {testimonials.map((testimonial, index) => (

                <article
                  className="testimonial-card"
                  key={testimonial.name}
                >

                  <div className="quote-mark">
                    “
                  </div>

                  <p>
                    {testimonial.quote}
                  </p>

                  <div className="testimonial-person">

                    <span className="person-line" />

                    <div>
                      <strong>
                        {testimonial.name}
                      </strong>

                      <small>
                        {testimonial.role}
                      </small>
                    </div>

                  </div>

                  <span className="testimonial-index">
                    0{index + 1}
                  </span>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =========================================================
            PROGRAMS
        ========================================================= */}

        <section className="section programs-section">

          <div className="shell">

            <div className="section-heading">

              <div>
                <span className="eyebrow">
                  Programs & News
                </span>

                <h2>
                  Ideas into
                  <br />
                  <em>action.</em>
                </h2>
              </div>

              <Link className="view-all" href="/programs">
                View all programs →
              </Link>

            </div>


            <div className="programs-grid">

              {programs.length ? (

                programs.slice(0, 3).map((program: any, index: number) => (

                  <article
                    className="program-card"
                    key={program.slug}
                  >

                    <div className="program-image">

                      <img
                        src={
                          program.image ||
                          `/images/program-${index + 1}.jpg`
                        }
                        alt={program.title}
                      />

                      <span>
                        {program.category}
                      </span>

                    </div>

                    <div className="program-content">

                      <small>
                        {program.date
                          ? new Date(
                            program.date
                          ).toLocaleDateString(
                            "en-IN",
                            {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            }
                          )
                          : "Prerna Foundation"}
                      </small>

                      <h3>
                        {program.title}
                      </h3>

                      <p>
                        {program.content
                          ?.replace(/<[^>]*>/g, "")
                          .slice(0, 170)}
                        ...
                      </p>

                      <Link href={`/programs/${program.slug}`}>
                        Read story
                        <span>→</span>
                      </Link>

                    </div>

                  </article>

                ))

              ) : (

                <>
                  <article className="program-card">

                    <div className="program-image">
                      <img
                        src="/images/program-1.jpg"
                        alt="Prerna Foundation program"
                      />

                      <span>Completed</span>
                    </div>

                    <div className="program-content">

                      <small>06 August 2025</small>

                      <h3>
                        प्रेरणावारी: जलसंधारणाच्या यशाची
                        एक ऐतिहासिक गाथा
                      </h3>

                      <p>
                        जलसंधारण आणि ‘गाळमुक्त धरण,
                        गाळयुक्त शिवार’ अभियानाच्या
                        यशस्वी कार्याची प्रेरणादायी कहाणी.
                      </p>

                      <Link href="/programs">
                        Read story →
                      </Link>

                    </div>

                  </article>


                  <article className="program-card">

                    <div className="program-image">
                      <img
                        src="/images/program-2.jpg"
                        alt="MANTHAN seminar"
                      />

                      <span>Completed</span>
                    </div>

                    <div className="program-content">

                      <small>01 October 2024</small>

                      <h3>
                        MANTHAN :
                        Multidisciplinary Approach
                      </h3>

                      <p>
                        Indian Knowledge System आणि
                        contemporary education यावर
                        राष्ट्रीय स्तरावरील विचारमंथन.
                      </p>

                      <Link href="/programs">
                        Read story →
                      </Link>

                    </div>

                  </article>


                  <article className="program-card">

                    <div className="program-image">
                      <img
                        src="/images/program-3.jpg"
                        alt="Prerna Foundation event"
                      />

                      <span>Completed</span>
                    </div>

                    <div className="program-content">

                      <small>Prerna Foundation</small>

                      <h3>
                        Community, Knowledge &
                        Sustainable Development
                      </h3>

                      <p>
                        समुदायाच्या सहभागातून विकासाच्या
                        विविध क्षेत्रांमध्ये meaningful
                        initiatives.
                      </p>

                      <Link href="/programs">
                        Read story →
                      </Link>

                    </div>

                  </article>
                </>

              )}

            </div>

          </div>

        </section>


        {/* =========================================================
            FUTURE PLANNING
        ========================================================= */}

        <section className="section future-section">

          <div className="shell">

            <div className="future-layout">

              <div className="future-title">

                <span className="eyebrow">
                  Looking Ahead
                </span>

                <h2>
                  Building for
                  <br />
                  <em>tomorrow.</em>
                </h2>

                <p>
                  Prerna Foundation's future planning focuses
                  on sustainable development, education,
                  environment, water resources and holistic
                  community upliftment.
                </p>

              </div>


              <div className="future-list">

                {(goals.length
                  ? goals.map((goal: any) => goal.title)
                  : futurePlanning
                ).map((item: string, index: number) => (

                  <div
                    className="future-item"
                    key={`${item}-${index}`}
                  >

                    <span>
                      0{index + 1}
                    </span>

                    <strong>
                      {item}
                    </strong>

                    <span className="future-arrow">
                      ↗
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            PARTNERS
        ========================================================= */}

        {partners.length > 0 && (

          <section className="section partners-section">

            <div className="shell">

              <div className="section-heading">

                <div>
                  <span className="eyebrow">
                    In Partnership
                  </span>

                  <h2>
                    This noble cause
                    <br />
                    <em>supported by.</em>
                  </h2>
                </div>

                <span className="heading-number">
                  07 / 08
                </span>

              </div>


              <div className="partners-grid">

                {partners.map((partner: any) => (

                  <article
                    className="partner-card"
                    key={partner._id}
                  >

                    {partner.image && (
                      <img
                        src={partner.image}
                        alt={partner.title}
                      />
                    )}

                    <div>
                      <h3>{partner.title}</h3>

                      <p>
                        {partner.description}
                      </p>
                    </div>

                  </article>

                ))}

              </div>

            </div>

          </section>

        )}


        {/* =========================================================
            DONATION
        ========================================================= */}

        <section className="section donation-section">

          <div className="shell">

            <div className="donation-card">

              <div className="donation-left">

                <span className="eyebrow donation-eyebrow">
                  Appeal for Donation
                </span>

                <h2>
                  Support work
                  <br />
                  that <em>lasts.</em>
                </h2>

                <p>
                  Your support can help advance education,
                  health, skills, women's empowerment,
                  water conservation and sustainable rural
                  development.
                </p>

                <Link
                  className="btn orange"
                  href="/donate-now"
                >
                  Make a donation
                  <span>↗</span>
                </Link>

              </div>


              <div className="donation-right">

                <div className="donation-circle">
                  <span>YOUR</span>
                  <strong>SUPPORT</strong>
                  <span>MATTERS</span>
                </div>

                <div className="donation-lines">

                  <span />
                  <span />
                  <span />

                </div>

              </div>

            </div>

          </div>

        </section>


      </main>

      <Footer />


      {/* =========================================================
          PAGE STYLES
      ========================================================= */}

      <style>{`

        .home-page {
          overflow: hidden;
        }

        .home-page img {
          display: block;
          width: 100%;
        }

        .home-page em {
          font-style: normal;
          opacity: .65;
        }

        .section {
          position: relative;
        }

        .section-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 55px;
        }

        .section-heading h2 {
          margin: 14px 0 0;
          font-size: clamp(2.7rem, 6vw, 5.8rem);
          line-height: .91;
          letter-spacing: -.055em;
          max-width: 800px;
        }

        .heading-number {
          font-size: .7rem;
          letter-spacing: .16em;
          opacity: .5;
          white-space: nowrap;
        }

        /* HERO */

        <section className="hero home-hero">
          <video
            className="home-hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
      <source src="/images/bg.mp4" type="video/mp4" />
          </video>

          <div className="home-hero-left" aria-hidden="true" />

          <div className="shell hero-shell">

        
        .hero-shell {
          display: grid;
          grid-template-columns: 1fr .88fr;
          align-items: center;
          gap: 70px;
          position: relative;
          z-index: 2;
        }

        .hero-kicker {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #d7e85f;
          font-size: .72rem;
          letter-spacing: .12em;
          text-transform: uppercase;
          margin-bottom: 30px;
        }

        .hero-kicker-line {
          width: 35px;
          height: 1px;
          background: #d7e85f;
        }

        .hero-copy h1 {
          margin: 0;
          font-size: clamp(4rem, 7vw, 7.7rem);
          line-height: .87;
          letter-spacing: -.065em;
          font-weight: 700;
        }

        .hero-copy h1 em {
          color: #d7e85f;
        }

        .hero-copy > p {
          max-width: 590px;
          margin: 35px 0 0;
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(255,255,255,.72);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .hero-actions .btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .hero-actions .btn span {
          transition: transform .25s ease;
        }

        .hero-actions .btn:hover span {
          transform: translateX(4px);
        }

        .hero-bottom-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 55px;
          font-size: .62rem;
          letter-spacing: .13em;
          opacity: .48;
        }

        .hero-visual {
          min-height: 590px;
          position: relative;
        }

        .hero-image-main {
          position: absolute;
          width: 76%;
          height: 78%;
          right: 0;
          top: 6%;
          overflow: hidden;
          border-radius: 2px;
          transform: rotate(2deg);
          box-shadow: 0 35px 80px rgba(0,0,0,.25);
        }

        .hero-image-main img {
          height: 100%;
          object-fit: cover;
          transition: transform .8s ease;
        }

        .hero-visual:hover .hero-image-main img {
          transform: scale(1.05);
        }

        .hero-floating-card {
          position: absolute;
          z-index: 3;
          left: 0;
          bottom: 4%;
          width: 245px;
          padding: 27px;
          background: #fff;
          color: #12352f;
          box-shadow: 0 25px 60px rgba(0,0,0,.2);
        }

        .hero-floating-card span {
          display: block;
          margin-bottom: 14px;
          font-size: .63rem;
          letter-spacing: .15em;
          text-transform: uppercase;
          opacity: .5;
        }

        .hero-floating-card strong {
          display: block;
          font-size: 2rem;
          line-height: .92;
          letter-spacing: -.05em;
        }

        .hero-floating-card small {
          display: block;
          margin-top: 18px;
          line-height: 1.55;
          opacity: .62;
        }

        .hero-circle {
          position: absolute;
          right: -25px;
          bottom: 10%;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.35);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: .55rem;
          letter-spacing: .14em;
          transform: rotate(-10deg);
        }

        .hero-circle {
          display: none !important;
        }

        /* INTRO */

        .intro-section {
          padding-top: 115px;
          padding-bottom: 125px;
        }

        .intro-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: start;
        }

        .intro-title h2 {
          margin: 0;
          font-size: clamp(3rem, 6vw, 6.2rem);
          line-height: .9;
          letter-spacing: -.06em;
        }

        .intro-content {
          max-width: 650px;
          padding-top: 10px;
        }

        .intro-content p {
          line-height: 1.8;
          opacity: .68;
        }

        .intro-content .large-text {
          font-size: 1.35rem;
          line-height: 1.55;
          opacity: .9;
          margin-top: 0;
        }

        .intro-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 25px;
          margin-top: 30px;
        }

        .intro-note {
          font-size: .65rem;
          letter-spacing: .1em;
          opacity: .48;
          text-transform: uppercase;
        }

        /* AREAS */

        .areas-section {
          background: #e9efe5;
          padding-top: 110px;
          padding-bottom: 120px;
        }

        .areas-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .area-card {
          background: #fff;
          overflow: hidden;
          transition: transform .35s ease, box-shadow .35s ease;
        }

        .area-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(18,53,47,.12);
        }

        .area-image {
          height: 250px;
          position: relative;
          overflow: hidden;
        }

        .area-image img {
          height: 100%;
          object-fit: cover;
          transition: transform .6s ease;
        }

        .area-card:hover .area-image img {
          transform: scale(1.07);
        }

        .area-number {
          position: absolute;
          top: 17px;
          left: 17px;
          color: #fff;
          font-size: .65rem;
          letter-spacing: .1em;
          z-index: 2;
        }

        .area-icon {
          position: absolute;
          right: 18px;
          bottom: 13px;
          color: #fff;
          font-size: 2.3rem;
          text-shadow: 0 3px 15px rgba(0,0,0,.25);
        }

        .area-content {
          padding: 27px;
        }

        .area-content h3 {
          margin: 0;
          font-size: 1.5rem;
          letter-spacing: -.035em;
        }

        .area-content p {
          margin: 12px 0 22px;
          line-height: 1.65;
          font-size: .9rem;
          opacity: .62;
        }

        .area-content a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          font-size: .76rem;
          font-weight: 600;
        }

        .area-content a span {
          transition: transform .2s ease;
        }

        .area-content a:hover span {
          transform: translateX(4px);
        }

        /* IMPACT */

        .impact-section {
          padding-top: 105px;
          padding-bottom: 105px;
          background: #12352f;
          color: #fff;
        }

        .impact-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
        }

        .impact-top h2 {
          margin: 13px 0 0;
          font-size: clamp(3.2rem, 6vw, 6rem);
          line-height: .88;
          letter-spacing: -.06em;
        }

        .light-eyebrow {
          color: #d7e85f;
        }

        .impact-link {
          color: #fff;
          text-decoration: none;
          font-size: .75rem;
          display: flex;
          gap: 10px;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,.25);
          padding-bottom: 9px;
        }

        .impact-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(255,255,255,.15);
          border-bottom: 1px solid rgba(255,255,255,.15);
          margin-top: 70px;
        }

        .impact-stat {
          min-height: 205px;
          padding: 27px 25px;
          border-right: 1px solid rgba(255,255,255,.15);
          position: relative;
        }

        .impact-stat:nth-child(4n) {
          border-right: 0;
        }

        .impact-stat-number {
          display: block;
          font-size: .6rem;
          opacity: .45;
          letter-spacing: .1em;
        }

        .impact-stat strong {
          display: block;
          margin-top: 40px;
          font-size: clamp(2.4rem, 4vw, 4.3rem);
          line-height: 1;
          letter-spacing: -.055em;
        }

        .impact-stat strong small {
          font-size: .9rem;
          opacity: .65;
          letter-spacing: 0;
        }

        .impact-stat-label {
          display: block;
          margin-top: 13px;
          font-size: .72rem;
          opacity: .55;
          text-transform: uppercase;
          letter-spacing: .09em;
        }

        /* FEATURE */

        .feature-section {
          padding-top: 120px;
          padding-bottom: 120px;
        }

        .feature-layout {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 100px;
          align-items: center;
        }

        .feature-image {
          position: relative;
          height: 650px;
          overflow: hidden;
        }

        .feature-image img {
          height: 100%;
          object-fit: cover;
          transition: transform .8s ease;
        }

        .feature-image:hover img {
          transform: scale(1.04);
        }

        .feature-image-label {
          position: absolute;
          bottom: 25px;
          left: 25px;
          right: 25px;
          padding: 17px 20px;
          background: rgba(18,53,47,.88);
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
        }

        .feature-image-label span {
          color: #d7e85f;
          font-size: .75rem;
          letter-spacing: .12em;
        }

        .feature-image-label small {
          opacity: .65;
        }

        .feature-content h2 {
          margin: 15px 0 25px;
          font-size: clamp(3rem, 5vw, 5.2rem);
          line-height: .9;
          letter-spacing: -.06em;
        }

        .feature-content > p {
          max-width: 560px;
          line-height: 1.8;
          opacity: .65;
        }

        .feature-points {
          margin: 35px 0;
          border-top: 1px solid rgba(0,0,0,.1);
        }

        .feature-points div {
          display: flex;
          align-items: center;
          gap: 25px;
          padding: 15px 0;
          border-bottom: 1px solid rgba(0,0,0,.1);
        }

        .feature-points strong {
          font-size: .65rem;
          opacity: .4;
        }

        .feature-points span {
          font-size: .82rem;
          font-weight: 600;
        }

        /* TESTIMONIALS */

        .testimonials-section {
          background: #e9efe5;
          padding-top: 110px;
          padding-bottom: 120px;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .testimonial-card {
          position: relative;
          padding: 45px;
          background: #fff;
          min-height: 410px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        .quote-mark {
          position: absolute;
          right: 30px;
          top: 5px;
          font-size: 8rem;
          line-height: 1;
          opacity: .06;
        }

        .testimonial-card > p {
          margin: 0;
          max-width: 680px;
          font-size: 1.03rem;
          line-height: 1.85;
          opacity: .75;
        }

        .testimonial-person {
          display: flex;
          gap: 15px;
          align-items: flex-start;
          margin-top: 35px;
        }

        .person-line {
          width: 30px;
          height: 1px;
          background: #12352f;
          margin-top: 8px;
        }

        .testimonial-person strong {
          display: block;
          font-size: .9rem;
        }

        .testimonial-person small {
          display: block;
          max-width: 450px;
          margin-top: 5px;
          line-height: 1.5;
          opacity: .5;
        }

        .testimonial-index {
          position: absolute;
          bottom: 25px;
          right: 30px;
          font-size: .65rem;
          opacity: .35;
        }

        /* PROGRAMS */

        .programs-section {
          padding-top: 110px;
          padding-bottom: 120px;
        }

        .view-all {
          font-size: .75rem;
          text-decoration: none;
          border-bottom: 1px solid rgba(0,0,0,.2);
          padding-bottom: 8px;
        }

        .programs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .program-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,.07);
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .program-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 25px 50px rgba(0,0,0,.08);
        }

        .program-image {
          height: 270px;
          position: relative;
          overflow: hidden;
        }

        .program-image img {
          height: 100%;
          object-fit: cover;
          transition: transform .6s ease;
        }

        .program-card:hover .program-image img {
          transform: scale(1.06);
        }

        .program-image > span {
          position: absolute;
          top: 17px;
          left: 17px;
          background: #12352f;
          color: #fff;
          padding: 7px 11px;
          font-size: .58rem;
          text-transform: uppercase;
          letter-spacing: .1em;
        }

        .program-content {
          padding: 28px;
        }

        .program-content small {
          font-size: .62rem;
          letter-spacing: .1em;
          opacity: .45;
        }

        .program-content h3 {
          margin: 14px 0;
          font-size: 1.45rem;
          line-height: 1.08;
          letter-spacing: -.04em;
        }

        .program-content p {
          line-height: 1.65;
          font-size: .86rem;
          opacity: .6;
          min-height: 80px;
        }

        .program-content a {
          display: inline-flex;
          gap: 8px;
          margin-top: 12px;
          text-decoration: none;
          font-size: .75rem;
          font-weight: 600;
        }

        /* FUTURE */

        .future-section {
          background: #e9efe5;
          padding-top: 110px;
          padding-bottom: 120px;
        }

        .future-layout {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 100px;
        }

        .future-title h2 {
          margin: 15px 0;
          font-size: clamp(3.2rem, 6vw, 6rem);
          line-height: .88;
          letter-spacing: -.06em;
        }

        .future-title p {
          max-width: 470px;
          line-height: 1.8;
          opacity: .6;
        }

        .future-list {
          border-top: 1px solid rgba(0,0,0,.13);
        }

        .future-item {
          display: grid;
          grid-template-columns: 50px 1fr 30px;
          gap: 15px;
          align-items: center;
          padding: 25px 0;
          border-bottom: 1px solid rgba(0,0,0,.13);
          transition: padding .25s ease;
        }

        .future-item:hover {
          padding-left: 10px;
        }

        .future-item > span:first-child {
          font-size: .65rem;
          opacity: .4;
        }

        .future-item strong {
          font-size: 1.05rem;
        }

        .future-arrow {
          opacity: .4;
        }

        /* PARTNERS */

        .partners-section {
          padding-top: 110px;
          padding-bottom: 120px;
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .partner-card {
          min-height: 230px;
          padding: 30px;
          border: 1px solid rgba(0,0,0,.09);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .partner-card img {
          width: auto;
          max-width: 170px;
          max-height: 60px;
          object-fit: contain;
        }

        .partner-card h3 {
          margin: 20px 0 8px;
          font-size: 1.2rem;
        }

        .partner-card p {
          margin: 0;
          font-size: .8rem;
          line-height: 1.6;
          opacity: .55;
        }

        /* DONATION */

        .donation-section {
          padding-top: 30px;
          padding-bottom: 110px;
        }

        .donation-card {
          min-height: 500px;
          padding: 70px;
          background: #12352f;
          color: #fff;
          display: grid;
          grid-template-columns: 1fr .55fr;
          gap: 50px;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .donation-card:before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.08);
          right: -130px;
          top: -50px;
        }

        .donation-eyebrow {
          color: #d7e85f;
        }

        .donation-left h2 {
          margin: 15px 0 25px;
          font-size: clamp(3.2rem, 6vw, 6.3rem);
          line-height: .86;
          letter-spacing: -.065em;
        }

        .donation-left p {
          max-width: 600px;
          line-height: 1.75;
          opacity: .65;
          margin-bottom: 30px;
        }

        .donation-right {
          min-height: 320px;
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .donation-circle {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.3);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: rotate(-8deg);
        }

        .donation-circle span {
          font-size: .6rem;
          letter-spacing: .2em;
          opacity: .55;
        }

        .donation-circle strong {
          margin: 8px 0;
          font-size: 2rem;
          letter-spacing: -.04em;
        }

        .donation-lines {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 8px;
        }

        .donation-lines span {
          width: 50px;
          height: 1px;
          background: rgba(255,255,255,.25);
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {

          .hero-shell,
          .intro-layout,
          .feature-layout,
          .future-layout {
            grid-template-columns: 1fr;
          }

          .hero-shell {
            gap: 40px;
          }

          .hero-visual {
            min-height: 500px;
          }

          .intro-layout {
            gap: 50px;
          }

          .areas-grid,
          .programs-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .impact-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .impact-stat:nth-child(2n) {
            border-right: 0;
          }

          .impact-stat:nth-child(n+3) {
            border-top: 1px solid rgba(255,255,255,.15);
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .partners-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .donation-card {
            grid-template-columns: 1fr;
            padding: 55px;
          }

          .donation-right {
            display: none;
          }
        }

        @media (max-width: 700px) {

          .home-hero {
            min-height: auto;
            padding: 80px 0 65px;
          }

        .home-hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          z-index: 0;
          display: block;
        }

        .home-hero-left {
          position: absolute;
          inset: 0 auto 0 0;
          width: 42%;
          background: #123a66;
          z-index: 1;
          pointer-events: none;
        }

        .home-hero-left::after {
          content: "";
          position: absolute;
          inset: 0;
          width: 55%;
          left: 100%;
          background: linear-gradient(
            90deg,
            #123a66 0%,
            rgba(18,58,102,.65) 35%,
            rgba(18,58,102,0) 100%
          );
        }

        .home-hero .hero-shell {
          position: relative;
          z-index: 2;
        }

          .hero-copy h1 {
            font-size: clamp(3.4rem, 16vw, 5.5rem);
          }

          .hero-copy > p {
            font-size: .95rem;
          }

          .hero-visual {
            min-height: 430px;
          }

          .hero-image-main {
            width: 84%;
            height: 78%;
          }

          .hero-floating-card {
            width: 210px;
            padding: 21px;
          }

          .hero-circle {
            width: 90px;
            height: 90px;
            right: 0;
          }

          .section {
            padding-top: 75px !important;
            padding-bottom: 80px !important;
          }

          .section-heading {
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 35px;
          }

          .section-heading h2 {
            font-size: clamp(2.8rem, 14vw, 4.5rem);
          }

          .areas-grid,
          .programs-grid,
          .partners-grid {
            grid-template-columns: 1fr;
          }

          .area-image,
          .program-image {
            height: 240px;
          }

          .impact-top {
            align-items: flex-start;
            flex-direction: column;
          }

          .impact-grid {
            grid-template-columns: 1fr 1fr;
            margin-top: 45px;
          }

          .impact-stat {
            min-height: 160px;
            padding: 20px 15px;
          }

          .impact-stat strong {
            margin-top: 25px;
            font-size: 2rem;
          }

          .feature-image {
            height: 420px;
          }

          .feature-layout {
            gap: 45px;
          }

          .testimonial-card {
            padding: 30px;
            min-height: 400px;
          }

          .future-layout {
            gap: 45px;
          }

          .future-item {
            grid-template-columns: 35px 1fr 20px;
          }

          .donation-card {
            padding: 40px 27px;
          }

          .donation-left h2 {
            font-size: clamp(3rem, 14vw, 4.5rem);
          }

          .hero-bottom-meta {
            font-size: .53rem;
            gap: 7px;
          }

        }

      `}</style>
    </>
  );
}