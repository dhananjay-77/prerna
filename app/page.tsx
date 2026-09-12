import Link from "next/link";
import { Header, Footer } from "@/components/SiteChrome";
import { publicContent } from "@/lib/content";

const areas = [
  {
    number: "01",
    icon: "◒",
    title: "Education",
    text: "Creating access and opportunity through learning and knowledge.",
    image: "/images/education.jpg",
    href: "/education",
  },
  {
    number: "02",
    icon: "✚",
    title: "Health",
    text: "Supporting healthier lives and informed choices for communities.",
    image: "/images/health.jpg",
    href: "/health",
  },
  {
    number: "03",
    icon: "↗",
    title: "Skill Development",
    text: "Building skills for employability, entrepreneurship and self-reliance.",
    image: "/images/skill-development.jpg",
    href: "/skill-development",
  },
  {
    number: "04",
    icon: "✦",
    title: "Women Empowerment",
    text: "Creating tools, opportunities and platforms for independent lives.",
    image: "/images/women-empowerment.jpg",
    href: "/women-empowerment",
  },
  {
    number: "05",
    icon: "♧",
    title: "Natural Farming",
    text: "Promoting sustainable and environment-friendly agricultural practices.",
    image: "/images/natural-farming.jpg",
    href: "/natural-farming",
  },
  {
    number: "06",
    icon: "≈",
    title: "Water Conservation",
    text: "Restoring water bodies and building resilient rural communities.",
    image: "/images/water-conservation.jpeg",
    href: "/water-conservation",
  },
  {
    number: "07",
    icon: "◇",
    title: "Environment",
    text: "Encouraging environmental responsibility and sustainable development.",
    image: "/images/environment.jpeg",
    href: "/environment",
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

const programStories = [
  {
    slug: "preranawari-jalsandharan-yashachi-itihasik-gatha",
    title: "प्रेरणावारी: जलसंधारणाच्या यशाची एक ऐतिहासिक गाथा",
    category: "Completed",
    date: "2025-08-06",
    image: "/images/program-1.jpg",
    story:
      "प्रेरणा फाउंडेशनच्या जलसंधारण कार्यातून ‘गाळमुक्त धरण, गाळयुक्त शिवार’ अभियानाच्या यशाची ही प्रेरणादायी कहाणी आहे. जलसाठ्यांचे पुनरुज्जीवन, गाळ उपसा आणि शेतकऱ्यांच्या सहभागातून पाणी उपलब्धता व ग्रामीण जीवन अधिक सक्षम करण्याचा प्रयत्न या उपक्रमाच्या केंद्रस्थानी आहे.",
    href: "/programs",
  },
  {
    slug: "manthan-multidisciplinary-approach",
    title: "MANTHAN : Multidisciplinary Approach Nurturing Traditional Heritage and Ancient Narratives",
    category: "Completed",
    date: "2024-10-01",
    image: "/images/program-2.jpg",
    story:
      "MANTHAN हा Indian Knowledge System, पारंपरिक वारसा आणि contemporary education यांच्यातील संवादाला चालना देणारा विचारमंच आहे. विविध विषयांतील विचारांना एकत्र आणून भारतीय ज्ञानपरंपरेचा आधुनिक शिक्षणाशी संबंध समजून घेण्याचा प्रयत्न या उपक्रमातून करण्यात आला.",
    href: "/programs",
  },
  {
    slug: "swami-govind-dev-giri-ji-maharaj",
    title: "परम पूज्य स्वामी गोविंद देव गिरीजी महाराज",
    category: "Program",
    date: "2024-10-01",
    image: "/images/program-3.jpg",
    story:
      "प्रेरणा फाउंडेशनच्या कार्यक्रम व विचारपरंपरेशी संबंधित हा विशेष उल्लेख आहे. समाज, संस्कार, ज्ञान आणि सकारात्मक परिवर्तन या मूल्यांना केंद्रस्थानी ठेवून प्रेरणादायी विचारांना समाजापर्यंत पोहोचविण्याचा प्रयत्न या विभागातून अधोरेखित होतो.",
    href: "/programs",
  },
  {
    slug: "jal-dhara",
    title: "JAL-DHARA",
    category: "Water Conservation",
    image: "/images/water-conservation.jpg",
    story:
      "JAL-DHARA हा जलस्रोतांचे गाळमुक्तीकरण, पुनरुज्जीवन आणि पाणी साठवण क्षमता वाढविण्यावर केंद्रित उपक्रम आहे. जलस्रोतांमधील गाळ उपसणे, शेतांमध्ये गाळाचा उपयोग करणे आणि स्थानिक समुदायाच्या सहभागातून जलसुरक्षेला बळ देणे हा या कामाचा मुख्य उद्देश आहे.",
    href: "/projects",
  },
  {
    slug: "sies",
    title: "SIES",
    category: "Education",
    image: "/images/education.jpg",
    story:
      "SIES अंतर्गत शिक्षण, ज्ञान आणि संधी यांचा अधिक व्यापक समुदायापर्यंत विस्तार करण्याच्या दिशेने काम केले जाते. शिक्षणाच्या माध्यमातून व्यक्तींची क्षमता वाढवणे आणि त्यांना अर्थपूर्ण संधी उपलब्ध करून देणे हा या प्रयत्नाचा केंद्रबिंदू आहे.",
    href: "/projects",
  },
  {
    slug: "shakti",
    title: "SHAKTI",
    category: "Women Empowerment",
    image: "/images/women-empowerment.jpg",
    story:
      "SHAKTI हा महिला सक्षमीकरण, कौशल्य, आत्मनिर्भरता आणि स्वतंत्र संधी निर्माण करण्याच्या दिशेने काम करणारा उपक्रम आहे. महिलांना निर्णयक्षमता, कौशल्य आणि उपजीविकेच्या संधींशी जोडणे हा या प्रयत्नाचा उद्देश आहे.",
    href: "/projects",
  },
  {
    slug: "hard",
    title: "HARD",
    category: "Rural Development",
    image: "/images/natural-farming.jpg",
    story:
      "HARD अंतर्गत ग्रामीण भागातील सर्वांगीण विकास, स्थानिक क्षमता आणि शाश्वत उपजीविकेच्या संधी यांना चालना देण्याच्या दिशेने काम केले जाते. समुदायाच्या सहभागातून स्थानिक गरजा समजून घेऊन दीर्घकालीन परिणाम साधण्यावर भर आहे.",
    href: "/projects",
  },
  {
    slug: "tep",
    title: "TEP",
    category: "Entrepreneurship",
    image: "/images/skill-development.jpg",
    story:
      "TEP हा कौशल्य, उद्योजकता आणि स्वावलंबनाशी संबंधित प्रयत्नांना पुढे नेणारा उपक्रम आहे. व्यक्ती आणि समुदायांना कौशल्याधारित संधी, उद्योजकीय दृष्टी आणि आर्थिक स्वावलंबनाकडे नेण्याचा प्रयत्न यामध्ये केंद्रस्थानी आहे.",
    href: "/projects",
  },
  {
    slug: "tefa",
    title: "TEFA",
    category: "Skill Development",
    image: "/images/skill-development.jpg",
    story:
      "TEFA अंतर्गत कौशल्यविकास आणि क्षमता वृद्धीवर भर दिला जातो. रोजगारक्षमता, व्यावसायिक कौशल्ये आणि आत्मनिर्भरतेसाठी आवश्यक क्षमता विकसित करण्याच्या दिशेने हा प्रयत्न आहे.",
    href: "/projects",
  },
  {
    slug: "heal",
    title: "HEAL",
    category: "Health",
    image: "/images/health.jpg",
    story:
      "HEAL हा आरोग्यविषयक जागरूकता, निरोगी जीवनशैली आणि समुदायाच्या आरोग्याशी संबंधित उपक्रमांना आधार देणारा कार्यक्रम आहे. आरोग्याविषयी माहिती, योग्य निवडी आणि समुदाय-केंद्रित कृती यांना प्रोत्साहन देणे हा यामागील उद्देश आहे.",
    href: "/projects",
  },
  {
    slug: "sos",
    title: "SOS",
    category: "Community Support",
    image: "/images/environment.jpg",
    story:
      "SOS हा गरजूंना आणि समुदायांना आवश्यक त्या वेळी सहाय्य व आधार उपलब्ध करून देण्याच्या सामाजिक भावनेशी जोडलेला उपक्रम आहे. सहकार्य, संवेदनशीलता आणि तातडीच्या गरजांना प्रतिसाद देणे या मूल्यांवर या प्रयत्नाचा भर आहे.",
    href: "/projects",
  },
];


export default async function Home() {
  const { stats, programs, projects, partners, goals } =
    await publicContent();

  const metrics =
  Array.isArray(stats?.metrics)
    ? stats.metrics.filter((m: any) => m?.enabled)
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

              <div className="hero-actions" aria-hidden="true" style={{ display: "none" }}>
                <Link className="btn light" href="/projects">
                  Explore our work
                  <span>→</span>
                </Link>

                <Link className="btn orange" href="/donate-now">
                  Donate now
                  <span>↗</span>
                </Link>
              </div>

              <div className="hero-bottom-meta">
                <span>EST. 2014</span>
                <span>•</span>
                <span>MAHARASHTRA</span>
                <span>•</span>
                <span>COMMUNITY DEVELOPMENT</span>
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

                    <Link href={area.href}>
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
            FROM IDEAS TO IMPACT / STORIES
        ========================================================= */}

        {/* <section className="section stories-section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <span className="eyebrow">From ideas to impact</span>
                <h2>
                  Stories that
                  <br />
                  <em>create change.</em>
                </h2>
              </div>

              <span className="heading-number">06 / 09</span>
            </div>

            <div className="stories-grid">
              {programStories
                .filter((program) =>
                  ["jal-dhara", "sies", "shakti"].includes(program.slug)
                )
                .map((program, index) => (
                  <article className="story-card" key={program.slug}>
                    <div className="story-image">
                      <img src={program.image} alt={program.title} />
                      <span>{program.category}</span>
                    </div>

                    <div className="story-content">
                      <small>Prerna Foundation</small>
                      <h3>{program.title}</h3>
                      <p>{program.story}</p>
                      <Link href={program.href || "/projects"}>
                        Read full story <span>→</span>
                      </Link>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section> */}

        {/* =========================================================
            PROJECTS — SEPARATE SECTION
        ========================================================= */}

        <section className="section projects-home-section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Our Projects</span>
                <h2>
                  Work on
                  <br />
                  the <em>ground.</em>
                </h2>
              </div>

              <Link className="view-all" href="/projects">
                View all projects →
              </Link>
            </div>

            <div className="home-projects-grid">
              {Array.isArray(projects) && projects.length > 0 ? (
                projects.slice(0, 6).map((project: any, index: number) => (
                  <article className="home-project-card" key={project.slug || project._id || index}>
                    <div className="home-project-image">
                      <img
                        src={
                          project.image ||
                          ["/images/water-conservation.jpg",
                           "/images/natural-farming.jpg",
                           "/images/environment.jpg",
                           "/images/skill-development.jpg",
                           "/images/women-empowerment.jpg",
                           "/images/education.jpg"][index % 6]
                        }
                        alt={project.name || project.title || "Prerna Foundation project"}
                        loading={index > 2 ? "lazy" : "eager"}
                      />
                      {project.status && <span>{project.status}</span>}
                    </div>

                    <div className="home-project-content">
                      <small>{project.category || "Project"}</small>
                      <h3>{project.name || project.title}</h3>
                      <p>
                        {project.shortDescription ||
                          project.description ||
                          "A Prerna Foundation initiative focused on meaningful and sustainable community impact."}
                      </p>
                      <Link href={`/${project.slug}`}>
                        Explore project <span>↗</span>
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <div className="projects-empty">
                  <strong>Projects are being updated.</strong>
                  <p>Explore our complete work and initiatives.</p>
                  <Link href="/projects">Explore projects →</Link>
                </div>
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

        {Array.isArray(partners) && partners.length > 0 && (

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
.home-hero {
          min-height: min(900px, 92vh);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          color: #fff;
          background: #12352f;
        }

        .home-hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .home-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(90deg, rgba(5,22,19,.82) 0%, rgba(5,22,19,.62) 46%, rgba(5,22,19,.25) 100%);
        }

        .home-hero-left {
          display: none;
        }

        .hero-shell {
          display: block;
          grid-template-columns: 1fr;
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

        .hero-copy {
          width: min(760px, 100%);
          max-width: 100%;
          margin: 0;
          padding-left: 0;
          padding-right: 0;
          text-align: left;
          justify-self: start;
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

        /* FROM IDEAS TO IMPACT */

        .stories-section {
          padding-top: 110px;
          padding-bottom: 120px;
          background: #fff;
        }

        .stories-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .story-card,
        .home-project-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,.08);
          overflow: hidden;
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .story-card:hover,
        .home-project-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 25px 50px rgba(0,0,0,.08);
        }

        .story-image,
        .home-project-image {
          height: 270px;
          position: relative;
          overflow: hidden;
        }

        .story-image img,
        .home-project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .6s ease;
        }

        .story-card:hover .story-image img,
        .home-project-card:hover .home-project-image img {
          transform: scale(1.06);
        }

        .story-image > span,
        .home-project-image > span {
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

        .story-content,
        .home-project-content {
          padding: 28px;
        }

        .story-content small,
        .home-project-content small {
          font-size: .62rem;
          letter-spacing: .1em;
          opacity: .45;
          text-transform: uppercase;
        }

        .story-content h3,
        .home-project-content h3 {
          margin: 14px 0;
          font-size: 1.45rem;
          line-height: 1.08;
          letter-spacing: -.04em;
        }

        .story-content p,
        .home-project-content p {
          line-height: 1.7;
          font-size: .88rem;
          opacity: .62;
          min-height: 105px;
          margin-bottom: 18px;
        }

        .story-content a,
        .home-project-content a {
          display: inline-flex;
          gap: 8px;
          text-decoration: none;
          font-size: .75rem;
          font-weight: 600;
        }

        .story-content a span,
        .home-project-content a span {
          transition: transform .2s ease;
        }

        .story-content a:hover span,
        .home-project-content a:hover span {
          transform: translateX(4px);
        }

        /* PROJECTS */

        .projects-home-section {
          padding-top: 110px;
          padding-bottom: 120px;
          background: #e9efe5;
        }

        .home-projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .home-project-card {
          background: #fff;
        }

        .home-project-image > span {
          left: auto;
          right: 17px;
          background: #d7e85f;
          color: #12352f;
        }

        .projects-empty {
          grid-column: 1 / -1;
          padding: 60px 30px;
          background: #fff;
          text-align: center;
          border: 1px solid rgba(0,0,0,.08);
        }

        .projects-empty strong {
          display: block;
          font-size: 1.4rem;
        }

        .projects-empty p {
          opacity: .6;
          margin: 10px 0 20px;
        }

        .projects-empty a {
          text-decoration: none;
          font-weight: 600;
          font-size: .8rem;
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

          .intro-layout,
          .feature-layout,
          .future-layout {
            grid-template-columns: 1fr;
          }

          .intro-layout {
            gap: 50px;
          }

          .areas-grid,
          .stories-grid,
          .home-projects-grid {
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
          .hero-copy {
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding-left: 0;
            padding-right: 0;
            text-align: left;
          }


          .home-hero {
            min-height: auto;
            padding: 80px 0 65px;
          }

        .home-hero .hero-shell {
    position: relative;
    z-index: 2;
  }

  .home-hero .hero-copy {
  width: 100%;
  max-width: none;
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  text-align: left;
    position: relative;
    z-index: 3;
  }

  .home-hero .hero-copy h1,
  .home-hero .hero-copy p,
  .home-hero .hero-copy a,
  .home-hero .hero-copy span {
    position: relative;
    z-index: 3;
  }

          .hero-copy h1 {
            font-size: clamp(3.4rem, 16vw, 5.5rem);
          }

          .hero-copy > p {
            font-size: .95rem;
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
          .stories-grid,
          .home-projects-grid,
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