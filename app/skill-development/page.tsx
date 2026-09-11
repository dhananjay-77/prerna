import { Header, Footer } from "@/components/SiteChrome";

export default function SkillDevelopmentPage() {
  const courses = [
    {
      number: "01",
      title: "Typing",
      text: "मराठी आणि इंग्रजी typing चा नियमित सराव करून विद्यार्थ्यांची typing speed, accuracy आणि computer confidence वाढवण्यावर भर.",
    },
    {
      number: "02",
      title: "Soft Skills",
      text: "Personality development, confidence building, teamwork, time management आणि workplace behaviour यांसारख्या soft skills चे प्रशिक्षण.",
    },
    {
      number: "03",
      title: "MS-Office",
      text: "MS Word, Excel, PowerPoint आणि office productivity tools चा practical वापर शिकवून विद्यार्थ्यांना office-ready skills विकसित करण्याची संधी.",
    },
    {
      number: "04",
      title: "Refrigeration",
      text: "Refrigeration field मधील मूलभूत technical knowledge, उपकरणांची ओळख आणि practical skill development वर आधारित प्रशिक्षण.",
    },
    {
      number: "05",
      title: "AC Repairing",
      text: "Air Conditioner servicing, basic troubleshooting आणि repairing skills शिकण्यासाठी practical technical training.",
    },
    {
      number: "06",
      title: "Communication",
      text: "English communication, speaking practice, presentation आणि effective communication skills विकसित करण्यासाठी interactive sessions.",
    },
    {
      number: "07",
      title: "Web Development",
      text: "Web development ची मूलभूत तत्त्वे, coding concepts आणि website तयार करण्यासाठी आवश्यक digital skills शिकण्याची संधी.",
    },
    {
      number: "08",
      title: "CCC & CIT Courses",
      text: "CCC आणि CIT सारख्या computer courses द्वारे विद्यार्थ्यांना structured computer education आणि digital skills मिळवून देण्याचा प्रयत्न.",
    },
    {
      number: "09",
      title: "Skill India",
      text: "Skill India शी संबंधित skill-oriented learning आणि employability-focused training opportunities शी विद्यार्थ्यांना जोडण्यावर भर.",
    },
  ];

  const gallery = [
    "/images/skill-development-1.jpg",
    "/images/skill-development-2.jpg",
    "/images/skill-development-3.jpg",
    "/images/skill-development-4.jpg",
    "/images/skill-development-5.jpg",
    "/images/skill-development-6.jpg",
  ];

  const videos = [
    {
      src: "/images/skill-development-video-1.mp4",
      title: "Computer Training",
      text: "Typing, MS-Office आणि digital skills training मधील learning moments.",
    },
    {
      src: "/images/skill-development-video-2.mp4",
      title: "Technical Training",
      text: "Refrigeration आणि AC repairing सारख्या practical technical skills चे training.",
    },
    {
      src: "/images/skill-development-video-3.mp4",
      title: "Communication & Soft Skills",
      text: "Communication, personality development आणि soft skills sessions.",
    },
  ];

  return (
    <>
      <Header />

      <main className="skill-page">
        <style>{`
          :root {
            --skill-ink: #102f38;
            --skill-muted: #65777c;
            --skill-teal: #0c6b68;
            --skill-soft: #eaf5f3;
            --skill-gold: #d5a447;
            --skill-red: #c96958;
            --skill-line: #dce8e7;
          }

          .skill-page {
            background: #f8fbfa;
            color: var(--skill-ink);
            overflow: hidden;
          }

          .skill-shell {
            width: min(1180px, calc(100% - 40px));
            margin: 0 auto;
          }

          .skill-hero {
            min-height: 650px;
            position: relative;
            display: flex;
            align-items: center;
            isolation: isolate;
            background: #0b3038;
            color: white;
          }

          .skill-hero video {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -3;
          }

          .skill-hero::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: -2;
            background:
              linear-gradient(90deg, rgba(7, 35, 40, .95) 0%, rgba(7, 35, 40, .76) 47%, rgba(7, 35, 40, .25) 100%),
              linear-gradient(180deg, rgba(7, 35, 40, .12), rgba(7, 35, 40, .56));
          }

          .skill-hero::after {
            content: "";
            position: absolute;
            width: 440px;
            height: 440px;
            right: -170px;
            bottom: -220px;
            border: 1px solid rgba(255,255,255,.18);
            border-radius: 50%;
            box-shadow: 0 0 0 90px rgba(255,255,255,.035), 0 0 0 180px rgba(255,255,255,.02);
            z-index: -1;
          }

          .skill-hero-content {
            max-width: 800px;
            padding: 110px 0 100px;
          }

          .skill-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 8px 14px;
            border: 1px solid rgba(255,255,255,.28);
            border-radius: 999px;
            background: rgba(255,255,255,.08);
            backdrop-filter: blur(8px);
            font-size: 12px;
            letter-spacing: .14em;
            text-transform: uppercase;
            font-weight: 700;
          }

          .skill-eyebrow span {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: var(--skill-gold);
          }

          .skill-hero h1 {
            margin: 24px 0 18px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(48px, 7vw, 88px);
            line-height: .98;
            letter-spacing: -.045em;
            font-weight: 500;
          }

          .skill-hero h1 em {
            color: #d9eee9;
            font-style: normal;
          }

          .skill-hero p {
            max-width: 680px;
            margin: 0;
            color: rgba(255,255,255,.82);
            font-size: 18px;
            line-height: 1.75;
          }

          .skill-intro {
            padding: 105px 0 80px;
          }

          .skill-intro-grid {
            display: grid;
            grid-template-columns: .85fr 1.15fr;
            gap: 70px;
            align-items: end;
          }

          .skill-kicker {
            color: var(--skill-teal);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: .16em;
            text-transform: uppercase;
          }

          .skill-intro h2,
          .skill-section-heading h2 {
            margin: 12px 0 0;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(36px, 5vw, 60px);
            line-height: 1.05;
            letter-spacing: -.035em;
            font-weight: 500;
          }

          .skill-intro-copy {
            color: var(--skill-muted);
            font-size: 17px;
            line-height: 1.85;
          }

          .skill-intro-copy strong {
            color: var(--skill-ink);
          }

          .skill-courses {
            padding: 35px 0 105px;
          }

          .skill-section-heading {
            display: flex;
            justify-content: space-between;
            align-items: end;
            gap: 30px;
            margin-bottom: 42px;
          }

          .skill-section-heading p {
            max-width: 450px;
            margin: 0;
            color: var(--skill-muted);
            line-height: 1.7;
          }

          .skill-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
          }

          .skill-card {
            min-height: 285px;
            padding: 30px;
            border: 1px solid var(--skill-line);
            border-radius: 24px;
            background: white;
            transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
          }

          .skill-card:hover {
            transform: translateY(-6px);
            border-color: rgba(12,107,104,.35);
            box-shadow: 0 18px 50px rgba(16,47,56,.09);
          }

          .skill-number {
            display: inline-flex;
            width: 40px;
            height: 40px;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            background: var(--skill-soft);
            color: var(--skill-teal);
            font-size: 12px;
            font-weight: 800;
            margin-bottom: 55px;
          }

          .skill-card h3 {
            margin: 0 0 12px;
            font-size: 21px;
            letter-spacing: -.02em;
          }

          .skill-card p {
            margin: 0;
            color: var(--skill-muted);
            line-height: 1.7;
            font-size: 14px;
          }

          .skill-feature {
            margin: 0 0 105px;
            padding: 70px 0;
            background: var(--skill-ink);
            color: white;
          }

          .skill-feature-grid {
            display: grid;
            grid-template-columns: 1.05fr .95fr;
            gap: 70px;
            align-items: center;
          }

          .skill-feature h2 {
            max-width: 650px;
            margin: 14px 0 20px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(36px, 5vw, 58px);
            line-height: 1.05;
            font-weight: 500;
          }

          .skill-feature p {
            max-width: 610px;
            color: rgba(255,255,255,.7);
            line-height: 1.8;
          }

          .skill-feature-list {
            display: grid;
            gap: 12px;
          }

          .skill-feature-item {
            padding: 19px 20px;
            border: 1px solid rgba(255,255,255,.13);
            border-radius: 16px;
            background: rgba(255,255,255,.045);
            font-size: 15px;
          }

          .skill-feature-item b {
            display: block;
            margin-bottom: 5px;
          }

          .skill-feature-item span {
            color: rgba(255,255,255,.6);
            font-size: 13px;
          }

          .skill-gallery {
            padding: 0 0 110px;
          }

          .skill-gallery-grid {
            display: grid;
            grid-template-columns: 1.2fr .8fr .8fr;
            grid-auto-rows: 250px;
            gap: 14px;
          }

          .skill-photo {
            position: relative;
            overflow: hidden;
            border-radius: 22px;
            background: #dfeae8;
          }

          .skill-photo:first-child {
            grid-row: span 2;
          }

          .skill-photo img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform .5s ease;
          }

          .skill-photo:hover img {
            transform: scale(1.045);
          }

          .skill-photo::after {
            content: "";
            position: absolute;
            inset: auto 0 0;
            height: 45%;
            background: linear-gradient(transparent, rgba(0,0,0,.42));
            pointer-events: none;
          }

          .skill-videos {
            padding: 90px 0 110px;
            background: #eef6f4;
          }

          .skill-video-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .skill-video-card {
            overflow: hidden;
            border-radius: 22px;
            background: white;
            border: 1px solid var(--skill-line);
          }

          .skill-video-card video {
            display: block;
            width: 100%;
            aspect-ratio: 16 / 10;
            object-fit: cover;
            background: #183b40;
          }

          .skill-video-copy {
            padding: 22px;
          }

          .skill-video-copy h3 {
            margin: 0 0 8px;
            font-size: 19px;
          }

          .skill-video-copy p {
            margin: 0;
            color: var(--skill-muted);
            font-size: 14px;
            line-height: 1.65;
          }

          .skill-quote {
            padding: 105px 0;
            text-align: center;
          }

          .skill-quote-mark {
            color: var(--skill-red);
            font-family: Georgia, serif;
            font-size: 70px;
            line-height: .5;
          }

          .skill-quote blockquote {
            max-width: 900px;
            margin: 25px auto 0;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(28px, 4vw, 48px);
            line-height: 1.25;
            letter-spacing: -.025em;
          }

          .skill-quote p {
            margin: 22px 0 0;
            color: var(--skill-muted);
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: .14em;
            font-weight: 700;
          }

          .skill-cta {
            margin-bottom: 100px;
            padding: 65px;
            border-radius: 30px;
            background: linear-gradient(135deg, #0c6b68, #164a54);
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 35px;
          }

          .skill-cta h2 {
            margin: 0 0 10px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(34px, 4vw, 52px);
            font-weight: 500;
          }

          .skill-cta p {
            max-width: 650px;
            margin: 0;
            color: rgba(255,255,255,.75);
            line-height: 1.7;
          }

          .skill-cta a {
            flex: 0 0 auto;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 15px 23px;
            border-radius: 999px;
            background: white;
            color: var(--skill-ink);
            text-decoration: none;
            font-size: 14px;
            font-weight: 800;
          }

          @media (max-width: 900px) {
            .skill-intro-grid,
            .skill-feature-grid {
              grid-template-columns: 1fr;
              gap: 35px;
            }

            .skill-grid,
            .skill-video-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .skill-gallery-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .skill-photo:first-child {
              grid-row: span 1;
            }

            .skill-cta {
              padding: 42px 30px;
              align-items: flex-start;
              flex-direction: column;
            }
          }

          @media (max-width: 620px) {
            .skill-shell {
              width: min(100% - 28px, 1180px);
            }

            .skill-hero {
              min-height: 600px;
            }

            .skill-hero-content {
              padding: 90px 0 80px;
            }

            .skill-grid,
            .skill-video-grid,
            .skill-gallery-grid {
              grid-template-columns: 1fr;
            }

            .skill-gallery-grid {
              grid-auto-rows: 280px;
            }

            .skill-section-heading {
              display: block;
            }

            .skill-section-heading p {
              margin-top: 18px;
            }

            .skill-card {
              min-height: auto;
            }

            .skill-number {
              margin-bottom: 35px;
            }
          }
        `}</style>

        <section className="skill-hero">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/images/skill-development-hero.mp4" type="video/mp4" />
          </video>

          <div className="skill-shell">
            <div className="skill-hero-content">
              <div className="skill-eyebrow">
                <span />
                Skill Development
              </div>

              <h1>
                Learn a skill.
                <br />
                <em>Build your future.</em>
              </h1>

              <p>
                Prerna Foundation मार्फत विद्यार्थ्यांना आणि युवकांना
                रोजगाराभिमुख, practical आणि digital skills शिकण्याच्या संधी
                उपलब्ध करून देण्यावर भर दिला जातो. Typing पासून Web Development,
                Soft Skills पासून Technical Training पर्यंत विविध courses
                learning आणि employability साठी तयार केले आहेत.
              </p>
            </div>
          </div>
        </section>

        <section className="skill-intro">
          <div className="skill-shell skill-intro-grid">
            <div>
              <div className="skill-kicker">Our Skill Development Focus</div>
              <h2>कौशल्यातून आत्मविश्वास, संधी आणि स्वावलंबन.</h2>
            </div>

            <div className="skill-intro-copy">
              <p>
                <strong>Prerna Foundation</strong> च्या Skill Development
                उपक्रमांत computer education, communication, soft skills आणि
                technical training यांचा समावेश आहे.
              </p>
              <p>
                विद्यार्थ्यांना केवळ course पूर्ण करण्याऐवजी practical
                knowledge, नियमित सराव आणि workplace साठी आवश्यक confidence
                मिळावा यासाठी training sessions आयोजित केले जातात. CCC, CIT
                आणि Skill India शी संबंधित learning opportunities देखील या
                प्रयत्नांचा भाग आहेत.
              </p>
            </div>
          </div>
        </section>

        <section className="skill-courses">
          <div className="skill-shell">
            <div className="skill-section-heading">
              <div>
                <div className="skill-kicker">Courses &amp; Training</div>
                <h2>Skills We Teach</h2>
              </div>
              <p>
                Digital, communication, office आणि technical fields मधील
                practical skill development courses.
              </p>
            </div>

            <div className="skill-grid">
              {courses.map((course) => (
                <article className="skill-card" key={course.title}>
                  <div className="skill-number">{course.number}</div>
                  <h3>{course.title}</h3>
                  <p>{course.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skill-feature">
          <div className="skill-shell skill-feature-grid">
            <div>
              <div className="skill-kicker" style={{ color: "#d5a447" }}>
                Practical Learning
              </div>
              <h2>शिकणे फक्त classroom मध्ये नाही — hands-on training मध्येही.</h2>
              <p>
                Skill development चा उद्देश विद्यार्थ्यांना प्रत्यक्ष कामासाठी
                तयार करणे हा आहे. त्यामुळे computer-based learning सोबत
                communication practice आणि technical fields मध्ये practical
                training वर भर दिला जातो.
              </p>
            </div>

            <div className="skill-feature-list">
              <div className="skill-feature-item">
                <b>Computer Skills</b>
                <span>Typing, MS-Office, CCC, CIT आणि digital learning.</span>
              </div>
              <div className="skill-feature-item">
                <b>Technical Skills</b>
                <span>Refrigeration आणि AC repairing चे practical training.</span>
              </div>
              <div className="skill-feature-item">
                <b>Communication</b>
                <span>Speaking, presentation आणि confidence building.</span>
              </div>
              <div className="skill-feature-item">
                <b>Web Development</b>
                <span>Coding आणि website development च्या digital skills.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="skill-gallery">
          <div className="skill-shell">
            <div className="skill-section-heading">
              <div>
                <div className="skill-kicker">Training Activities</div>
                <h2>Skills In Action</h2>
              </div>
              <p>
                Computer classes, technical training, communication sessions
                आणि practical learning मधील काही क्षण.
              </p>
            </div>

            <div className="skill-gallery-grid">
              {gallery.map((src, index) => (
                <div className="skill-photo" key={src}>
                  <img
                    src={src}
                    alt={`Skill development training activity ${index + 1}`}
                    loading={index > 1 ? "lazy" : "eager"}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="skill-videos">
          <div className="skill-shell">
            <div className="skill-section-heading">
              <div>
                <div className="skill-kicker">Videos</div>
                <h2>Training In Motion</h2>
              </div>
              <p>
                Skill development classes आणि practical training चे video
                highlights.
              </p>
            </div>

            <div className="skill-video-grid">
              {videos.map((video) => (
                <article className="skill-video-card" key={video.src}>
                  <video controls preload="metadata" playsInline>
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <div className="skill-video-copy">
                    <h3>{video.title}</h3>
                    <p>{video.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skill-quote">
          <div className="skill-shell">
            <div className="skill-quote-mark">“</div>
            <blockquote>
              योग्य कौशल्य, योग्य मार्गदर्शन आणि सातत्यपूर्ण सराव —
              स्वावलंबी भविष्याची मजबूत सुरुवात.
            </blockquote>
            <p>Prerna Foundation • Skill Development</p>
          </div>
        </section>

        <section className="skill-shell">
          <div className="skill-cta">
            <div>
              <h2>कौशल्य शिका. संधी निर्माण करा.</h2>
              <p>
                Computer, communication आणि technical skills च्या माध्यमातून
                स्वतःला अधिक सक्षम बनवण्याच्या प्रवासात सहभागी व्हा.
              </p>
            </div>
            <a href="/contact">Get Involved →</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
