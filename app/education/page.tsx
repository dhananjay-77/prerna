import { Header, Footer } from "@/components/SiteChrome";

export default function EducationPage() {
  const programs = [
    {
      icon: "01",
      title: "Digital Education",
      text: "विद्यार्थ्यांना आधुनिक तंत्रज्ञानाशी जोडण्यासाठी संगणक, डिजिटल साधने आणि ऑनलाइन learning चा परिचय करून दिला जातो.",
    },
    {
      icon: "02",
      title: "Computer & Technical Skills",
      text: "Basic computer knowledge, internet usage, office tools आणि आवश्यक technical skills यांचे practical training दिले जाते.",
    },
    {
      icon: "03",
      title: "Skill Development",
      text: "विद्यार्थ्यांच्या आवडी आणि क्षमतेनुसार रोजगाराभिमुख कौशल्ये विकसित करण्यासाठी विविध प्रशिक्षण उपक्रम राबवले जातात.",
    },
    {
      icon: "04",
      title: "Career Guidance",
      text: "शिक्षणानंतरच्या संधी, career options आणि पुढील शिक्षणाबाबत विद्यार्थ्यांना मार्गदर्शन व योग्य दिशा देण्याचा प्रयत्न केला जातो.",
    },
    {
      icon: "05",
      title: "Communication Skills",
      text: "English communication, presentation, confidence building आणि व्यक्तिमत्त्व विकासासाठी learning activities घेतल्या जातात.",
    },
    {
      icon: "06",
      title: "Workshops & Training",
      text: "नियमित workshops, practical sessions आणि interactive learning activities द्वारे विद्यार्थ्यांना प्रत्यक्ष अनुभव दिला जातो.",
    },
  ];

  const gallery = [
    "/images/education-1.jpg",
    "/images/education-2.jpg",
    "/images/education-3.jpg",
    "/images/education-4.jpg",
    "/images/education-5.jpg",
    "/images/education-6.jpg",
  ];

  const videos = [
    {
      src: "/images/education-video-1.mp4",
      title: "Digital Learning",
      text: "विद्यार्थ्यांसाठी digital learning आणि computer training session.",
    },
    {
      src: "/images/education-video-2.mp4",
      title: "Skill Training",
      text: "Practical skill development आणि training activity.",
    },
    {
      src: "/images/education-video-3.mp4",
      title: "Learning Workshop",
      text: "Interactive workshop मधील learning moments.",
    },
  ];

  return (
    <>
      <Header />

      <main className="education-page">
        <style>{`
          :root {
            --edu-ink: #102c35;
            --edu-muted: #61747a;
            --edu-teal: #0c6b68;
            --edu-soft: #eaf5f3;
            --edu-gold: #d5a447;
            --edu-line: #dce8e7;
            --edu-white: #ffffff;
          }

          .education-page {
            background: #f8fbfa;
            color: var(--edu-ink);
            overflow: hidden;
          }

          .edu-shell {
            width: min(1180px, calc(100% - 40px));
            margin: 0 auto;
          }

          .edu-hero {
            min-height: 650px;
            position: relative;
            display: flex;
            align-items: center;
            isolation: isolate;
            background: #0b2f35;
            color: white;
          }

          .edu-hero video {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -3;
          }

          .edu-hero::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: -2;
            background:
              linear-gradient(90deg, rgba(7, 35, 40, .94) 0%, rgba(7, 35, 40, .76) 45%, rgba(7, 35, 40, .28) 100%),
              linear-gradient(180deg, rgba(7, 35, 40, .12), rgba(7, 35, 40, .55));
          }

          .edu-hero::after {
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

          .edu-hero-content {
            max-width: 760px;
            padding: 110px 0 100px;
          }

          .edu-eyebrow {
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

          .edu-eyebrow span {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: var(--edu-gold);
          }

          .edu-hero h1 {
            margin: 24px 0 18px;
            max-width: 820px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(48px, 7vw, 88px);
            line-height: .98;
            letter-spacing: -.045em;
            font-weight: 500;
          }

          .edu-hero h1 em {
            color: #d9eee9;
            font-style: normal;
          }

          .edu-hero p {
            max-width: 650px;
            margin: 0;
            color: rgba(255,255,255,.82);
            font-size: 18px;
            line-height: 1.75;
          }

          .edu-intro {
            padding: 105px 0 80px;
          }

          .edu-intro-grid {
            display: grid;
            grid-template-columns: .85fr 1.15fr;
            gap: 70px;
            align-items: end;
          }

          .edu-kicker {
            color: var(--edu-teal);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: .16em;
            text-transform: uppercase;
          }

          .edu-intro h2,
          .edu-section-heading h2 {
            margin: 12px 0 0;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(36px, 5vw, 60px);
            line-height: 1.05;
            letter-spacing: -.035em;
            font-weight: 500;
          }

          .edu-intro-copy {
            color: var(--edu-muted);
            font-size: 17px;
            line-height: 1.85;
          }

          .edu-intro-copy strong {
            color: var(--edu-ink);
          }

          .edu-programs {
            padding: 35px 0 105px;
          }

          .edu-section-heading {
            display: flex;
            justify-content: space-between;
            align-items: end;
            gap: 30px;
            margin-bottom: 42px;
          }

          .edu-section-heading p {
            max-width: 430px;
            margin: 0;
            color: var(--edu-muted);
            line-height: 1.7;
          }

          .edu-program-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
          }

          .edu-card {
            min-height: 285px;
            padding: 30px;
            border: 1px solid var(--edu-line);
            border-radius: 24px;
            background: white;
            transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
          }

          .edu-card:hover {
            transform: translateY(-6px);
            border-color: rgba(12,107,104,.35);
            box-shadow: 0 18px 50px rgba(16,44,53,.09);
          }

          .edu-number {
            display: inline-flex;
            width: 40px;
            height: 40px;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            background: var(--edu-soft);
            color: var(--edu-teal);
            font-size: 12px;
            font-weight: 800;
            margin-bottom: 55px;
          }

          .edu-card h3 {
            margin: 0 0 12px;
            font-size: 21px;
            letter-spacing: -.02em;
          }

          .edu-card p {
            margin: 0;
            color: var(--edu-muted);
            line-height: 1.7;
            font-size: 14px;
          }

          .edu-feature {
            margin: 0 0 105px;
            padding: 70px 0;
            background: var(--edu-ink);
            color: white;
          }

          .edu-feature-grid {
            display: grid;
            grid-template-columns: 1.05fr .95fr;
            gap: 70px;
            align-items: center;
          }

          .edu-feature h2 {
            max-width: 620px;
            margin: 14px 0 20px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(36px, 5vw, 58px);
            line-height: 1.05;
            font-weight: 500;
          }

          .edu-feature p {
            max-width: 600px;
            color: rgba(255,255,255,.7);
            line-height: 1.8;
          }

          .edu-feature-list {
            display: grid;
            gap: 12px;
          }

          .edu-feature-item {
            padding: 19px 20px;
            border: 1px solid rgba(255,255,255,.13);
            border-radius: 16px;
            background: rgba(255,255,255,.045);
            font-size: 15px;
          }

          .edu-feature-item b {
            display: block;
            margin-bottom: 5px;
          }

          .edu-feature-item span {
            color: rgba(255,255,255,.6);
            font-size: 13px;
          }

          .edu-gallery {
            padding: 0 0 110px;
          }

          .edu-gallery-grid {
            display: grid;
            grid-template-columns: 1.2fr .8fr .8fr;
            grid-auto-rows: 250px;
            gap: 14px;
          }

          .edu-photo {
            position: relative;
            overflow: hidden;
            border-radius: 22px;
            background: #dfeae8;
          }

          .edu-photo:first-child {
            grid-row: span 2;
          }

          .edu-photo img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform .5s ease;
          }

          .edu-photo:hover img {
            transform: scale(1.045);
          }

          .edu-photo::after {
            content: "";
            position: absolute;
            inset: auto 0 0;
            height: 45%;
            background: linear-gradient(transparent, rgba(0,0,0,.45));
            pointer-events: none;
          }

          .edu-videos {
            padding: 90px 0 110px;
            background: #eef6f4;
          }

          .edu-video-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .edu-video-card {
            overflow: hidden;
            border-radius: 22px;
            background: white;
            border: 1px solid var(--edu-line);
          }

          .edu-video-card video {
            display: block;
            width: 100%;
            aspect-ratio: 16 / 10;
            object-fit: cover;
            background: #183b40;
          }

          .edu-video-copy {
            padding: 22px;
          }

          .edu-video-copy h3 {
            margin: 0 0 8px;
            font-size: 19px;
          }

          .edu-video-copy p {
            margin: 0;
            color: var(--edu-muted);
            font-size: 14px;
            line-height: 1.65;
          }

          .edu-quote {
            padding: 105px 0;
            text-align: center;
          }

          .edu-quote-mark {
            color: var(--edu-gold);
            font-family: Georgia, serif;
            font-size: 70px;
            line-height: .5;
          }

          .edu-quote blockquote {
            max-width: 880px;
            margin: 25px auto 0;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(28px, 4vw, 48px);
            line-height: 1.25;
            letter-spacing: -.025em;
          }

          .edu-quote p {
            margin: 22px 0 0;
            color: var(--edu-muted);
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: .14em;
            font-weight: 700;
          }

          .edu-cta {
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

          .edu-cta h2 {
            margin: 0 0 10px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(34px, 4vw, 52px);
            font-weight: 500;
          }

          .edu-cta p {
            max-width: 650px;
            margin: 0;
            color: rgba(255,255,255,.75);
            line-height: 1.7;
          }

          .edu-cta a {
            flex: 0 0 auto;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 15px 23px;
            border-radius: 999px;
            background: white;
            color: var(--edu-ink);
            text-decoration: none;
            font-size: 14px;
            font-weight: 800;
          }

          @media (max-width: 900px) {
            .edu-intro-grid,
            .edu-feature-grid {
              grid-template-columns: 1fr;
              gap: 35px;
            }

            .edu-program-grid,
            .edu-video-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .edu-gallery-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .edu-photo:first-child {
              grid-row: span 1;
            }

            .edu-cta {
              padding: 42px 30px;
              align-items: flex-start;
              flex-direction: column;
            }
          }

          @media (max-width: 620px) {
            .edu-shell {
              width: min(100% - 28px, 1180px);
            }

            .edu-hero {
              min-height: 600px;
            }

            .edu-hero-content {
              padding: 90px 0 80px;
            }

            .edu-program-grid,
            .edu-video-grid,
            .edu-gallery-grid {
              grid-template-columns: 1fr;
            }

            .edu-gallery-grid {
              grid-auto-rows: 280px;
            }

            .edu-section-heading {
              display: block;
            }

            .edu-section-heading p {
              margin-top: 18px;
            }

            .edu-card {
              min-height: auto;
            }

            .edu-number {
              margin-bottom: 35px;
            }
          }
        `}</style>

        <section className="edu-hero">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/images/education-hero.mp4" type="video/mp4" />
          </video>

          <div className="edu-shell">
            <div className="edu-hero-content">
              <div className="edu-eyebrow">
                <span />
                Education &amp; Skill Development
              </div>

              <h1>
                Learning that creates
                <br />
                <em>new possibilities.</em>
              </h1>

              <p>
                शिक्षण म्हणजे केवळ ज्ञान मिळवणे नाही; ते विद्यार्थ्यांना
                आत्मविश्वास, कौशल्ये आणि स्वतःचे भविष्य घडवण्याची संधी देणे आहे.
                Prerna Foundation च्या Education &amp; Skill Development उपक्रमांतून
                learning ला practical skills आणि career readiness ची जोड दिली जाते.
              </p>
            </div>
          </div>
        </section>

        <section className="edu-intro">
          <div className="edu-shell edu-intro-grid">
            <div>
              <div className="edu-kicker">Our Education Focus</div>
              <h2>शिक्षणातून कौशल्य, कौशल्यातून संधी.</h2>
            </div>

            <div className="edu-intro-copy">
              <p>
                <strong>Prerna Foundation</strong> चा शिक्षणविषयक प्रयत्न
                विद्यार्थ्यांना quality learning environment, digital exposure
                आणि practical skill development मिळवून देण्यावर केंद्रित आहे.
              </p>
              <p>
                विद्यार्थ्यांना शिकताना technology वापरणे, नवीन कौशल्ये आत्मसात
                करणे, communication सुधारणे आणि त्यांच्या career साठी आवश्यक
                confidence विकसित करणे यासाठी विविध learning activities घेतल्या
                जातात.
              </p>
            </div>
          </div>
        </section>

        <section className="edu-programs">
          <div className="edu-shell">
            <div className="edu-section-heading">
              <div>
                <div className="edu-kicker">What We Work On</div>
                <h2>Education &amp; Skills</h2>
              </div>
              <p>
                विद्यार्थ्यांच्या शैक्षणिक आणि कौशल्यविकासाच्या प्रवासाला
                practical आणि आधुनिक learning opportunities ची जोड.
              </p>
            </div>

            <div className="edu-program-grid">
              {programs.map((item) => (
                <article className="edu-card" key={item.title}>
                  <div className="edu-number">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="edu-feature">
          <div className="edu-shell edu-feature-grid">
            <div>
              <div className="edu-kicker" style={{ color: "#d5a447" }}>
                Learning Beyond The Classroom
              </div>
              <h2>शिकणे, करून पाहणे आणि पुढे जाणे.</h2>
              <p>
                आधुनिक शिक्षणामध्ये theoretical knowledge सोबत practical
                experience देखील महत्त्वाचा आहे. म्हणून digital learning,
                hands-on activities, workshops आणि skill sessions यांचा वापर
                विद्यार्थ्यांच्या learning journey मध्ये केला जातो.
              </p>
            </div>

            <div className="edu-feature-list">
              <div className="edu-feature-item">
                <b>Digital Learning</b>
                <span>Technology च्या माध्यमातून learning opportunities.</span>
              </div>
              <div className="edu-feature-item">
                <b>Practical Training</b>
                <span>प्रत्यक्ष करून शिकण्यावर भर.</span>
              </div>
              <div className="edu-feature-item">
                <b>Career Readiness</b>
                <span>भविष्यातील शिक्षण आणि career साठी आवश्यक skills.</span>
              </div>
              <div className="edu-feature-item">
                <b>Confidence Building</b>
                <span>Communication, presentation आणि personality development.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="edu-gallery">
          <div className="edu-shell">
            <div className="edu-section-heading">
              <div>
                <div className="edu-kicker">Learning In Action</div>
                <h2>Our Learning Moments</h2>
              </div>
              <p>
                विद्यार्थ्यांच्या learning, training आणि skill development
                activities मधील काही क्षण.
              </p>
            </div>

            <div className="edu-gallery-grid">
              {gallery.map((src, index) => (
                <div className="edu-photo" key={src}>
                  <img
                    src={src}
                    alt={`Education and skill development activity ${index + 1}`}
                    loading={index > 1 ? "lazy" : "eager"}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="edu-videos">
          <div className="edu-shell">
            <div className="edu-section-heading">
              <div>
                <div className="edu-kicker">Videos</div>
                <h2>Learning In Motion</h2>
              </div>
              <p>
                Training sessions, workshops आणि digital learning activities
                प्रत्यक्ष पाहण्यासाठी video highlights.
              </p>
            </div>

            <div className="edu-video-grid">
              {videos.map((video) => (
                <article className="edu-video-card" key={video.src}>
                  <video controls preload="metadata" playsInline>
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <div className="edu-video-copy">
                    <h3>{video.title}</h3>
                    <p>{video.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="edu-quote">
          <div className="edu-shell">
            <div className="edu-quote-mark">“</div>
            <blockquote>
              प्रत्येक विद्यार्थ्याला शिकण्याची संधी, कौशल्य विकसित करण्याची
              जागा आणि स्वतःचे भविष्य घडवण्याचा आत्मविश्वास मिळावा.
            </blockquote>
            <p>Prerna Foundation • Education &amp; Skill Development</p>
          </div>
        </section>

        <section className="edu-shell">
          <div className="edu-cta">
            <div>
              <h2>शिक्षणाच्या प्रवासात सहभागी व्हा.</h2>
              <p>
                विद्यार्थ्यांसाठी education, digital learning आणि skill
                development च्या संधी अधिक सक्षम करण्यासाठी तुमचा सहभाग
                महत्त्वाचा आहे.
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
