import { Header, Footer } from "@/components/SiteChrome";

export default function HealthPage() {
  const focusAreas = [
    {
      number: "01",
      title: "Health Awareness",
      text: "आरोग्य, स्वच्छता, पोषण आणि निरोगी जीवनशैली याबाबत लोकांमध्ये जागरूकता निर्माण करण्यासाठी विविध उपक्रम.",
    },
    {
      number: "02",
      title: "Health Check-up",
      text: "गरजू नागरिकांपर्यंत प्राथमिक आरोग्य तपासणी आणि आवश्यक आरोग्य मार्गदर्शन पोहोचवण्यासाठी आरोग्य शिबिरे.",
    },
    {
      number: "03",
      title: "Women & Child Health",
      text: "महिला आणि मुलांच्या आरोग्याशी संबंधित मूलभूत माहिती, काळजी आणि योग्य आरोग्यविषयक मार्गदर्शन.",
    },
    {
      number: "04",
      title: "Nutrition Awareness",
      text: "संतुलित आहार, पोषणाचे महत्त्व आणि आरोग्यदायी सवयींबाबत जनजागृती.",
    },
    {
      number: "05",
      title: "Hygiene & Sanitation",
      text: "वैयक्तिक स्वच्छता, परिसराची स्वच्छता आणि संसर्गजन्य आजारांपासून बचावासाठी आवश्यक सवयींबाबत मार्गदर्शन.",
    },
    {
      number: "06",
      title: "Health Camps",
      text: "समुदायाच्या गरजेनुसार आरोग्य तपासणी, awareness sessions आणि मार्गदर्शनाचे उपक्रम आयोजित करण्यावर भर.",
    },
  ];

  const gallery = [
    "/images/health-1.jpg",
    "/images/health-2.jpg",
    "/images/health-3.jpg",
    "/images/health-4.jpg",
    "/images/health-5.jpg",
    "/images/health-6.jpg",
  ];

  const videos = [
    {
      src: "/images/health-video-1.mp4",
      title: "Health Awareness",
      text: "आरोग्य जनजागृती आणि community awareness activity.",
    },
    {
      src: "/images/health-video-2.mp4",
      title: "Health Camp",
      text: "आरोग्य तपासणी आणि मार्गदर्शन उपक्रमातील क्षण.",
    },
    {
      src: "/images/health-video-3.mp4",
      title: "Healthy Community",
      text: "स्वच्छता, पोषण आणि निरोगी जीवनशैलीशी संबंधित उपक्रम.",
    },
  ];

  return (
    <>
      <Header />

      <main className="health-page">
        <style>{`
          :root {
            --health-ink: #173238;
            --health-muted: #687b80;
            --health-green: #16806d;
            --health-soft: #eaf6f2;
            --health-red: #c95b55;
            --health-gold: #d5a447;
            --health-line: #dce9e6;
          }

          .health-page {
            background: #f8fbfa;
            color: var(--health-ink);
            overflow: hidden;
          }

          .health-shell {
            width: min(1180px, calc(100% - 40px));
            margin: 0 auto;
          }

          .health-hero {
            min-height: 650px;
            position: relative;
            display: flex;
            align-items: center;
            isolation: isolate;
            background: #173238;
            color: white;
          }

          .health-hero video {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -3;
          }

          .health-hero::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: -2;
            background:
              linear-gradient(90deg, rgba(11, 43, 47, .94) 0%, rgba(11, 43, 47, .75) 48%, rgba(11, 43, 47, .25) 100%),
              linear-gradient(180deg, rgba(10, 42, 45, .12), rgba(10, 42, 45, .58));
          }

          .health-hero::after {
            content: "";
            position: absolute;
            width: 430px;
            height: 430px;
            right: -160px;
            bottom: -210px;
            border: 1px solid rgba(255,255,255,.18);
            border-radius: 50%;
            box-shadow:
              0 0 0 85px rgba(255,255,255,.035),
              0 0 0 170px rgba(255,255,255,.018);
            z-index: -1;
          }

          .health-hero-content {
            max-width: 780px;
            padding: 110px 0 100px;
          }

          .health-eyebrow {
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

          .health-eyebrow span {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #f18a7f;
          }

          .health-hero h1 {
            margin: 24px 0 18px;
            max-width: 820px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(48px, 7vw, 88px);
            line-height: .98;
            letter-spacing: -.045em;
            font-weight: 500;
          }

          .health-hero h1 em {
            color: #d9eee8;
            font-style: normal;
          }

          .health-hero p {
            max-width: 650px;
            margin: 0;
            color: rgba(255,255,255,.82);
            font-size: 18px;
            line-height: 1.75;
          }

          .health-intro {
            padding: 105px 0 80px;
          }

          .health-intro-grid {
            display: grid;
            grid-template-columns: .85fr 1.15fr;
            gap: 70px;
            align-items: end;
          }

          .health-kicker {
            color: var(--health-green);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: .16em;
            text-transform: uppercase;
          }

          .health-intro h2,
          .health-section-heading h2 {
            margin: 12px 0 0;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(36px, 5vw, 60px);
            line-height: 1.05;
            letter-spacing: -.035em;
            font-weight: 500;
          }

          .health-intro-copy {
            color: var(--health-muted);
            font-size: 17px;
            line-height: 1.85;
          }

          .health-intro-copy strong {
            color: var(--health-ink);
          }

          .health-focus {
            padding: 35px 0 105px;
          }

          .health-section-heading {
            display: flex;
            justify-content: space-between;
            align-items: end;
            gap: 30px;
            margin-bottom: 42px;
          }

          .health-section-heading p {
            max-width: 430px;
            margin: 0;
            color: var(--health-muted);
            line-height: 1.7;
          }

          .health-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
          }

          .health-card {
            min-height: 285px;
            padding: 30px;
            border: 1px solid var(--health-line);
            border-radius: 24px;
            background: white;
            transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
          }

          .health-card:hover {
            transform: translateY(-6px);
            border-color: rgba(22,128,109,.35);
            box-shadow: 0 18px 50px rgba(23,50,56,.09);
          }

          .health-number {
            display: inline-flex;
            width: 40px;
            height: 40px;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            background: var(--health-soft);
            color: var(--health-green);
            font-size: 12px;
            font-weight: 800;
            margin-bottom: 55px;
          }

          .health-card h3 {
            margin: 0 0 12px;
            font-size: 21px;
            letter-spacing: -.02em;
          }

          .health-card p {
            margin: 0;
            color: var(--health-muted);
            line-height: 1.7;
            font-size: 14px;
          }

          .health-feature {
            margin: 0 0 105px;
            padding: 70px 0;
            background: var(--health-ink);
            color: white;
          }

          .health-feature-grid {
            display: grid;
            grid-template-columns: 1.05fr .95fr;
            gap: 70px;
            align-items: center;
          }

          .health-feature h2 {
            max-width: 620px;
            margin: 14px 0 20px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(36px, 5vw, 58px);
            line-height: 1.05;
            font-weight: 500;
          }

          .health-feature p {
            max-width: 600px;
            color: rgba(255,255,255,.7);
            line-height: 1.8;
          }

          .health-feature-list {
            display: grid;
            gap: 12px;
          }

          .health-feature-item {
            padding: 19px 20px;
            border: 1px solid rgba(255,255,255,.13);
            border-radius: 16px;
            background: rgba(255,255,255,.045);
            font-size: 15px;
          }

          .health-feature-item b {
            display: block;
            margin-bottom: 5px;
          }

          .health-feature-item span {
            color: rgba(255,255,255,.6);
            font-size: 13px;
          }

          .health-gallery {
            padding: 0 0 110px;
          }

          .health-gallery-grid {
            display: grid;
            grid-template-columns: 1.2fr .8fr .8fr;
            grid-auto-rows: 250px;
            gap: 14px;
          }

          .health-photo {
            position: relative;
            overflow: hidden;
            border-radius: 22px;
            background: #dfeae8;
          }

          .health-photo:first-child {
            grid-row: span 2;
          }

          .health-photo img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform .5s ease;
          }

          .health-photo:hover img {
            transform: scale(1.045);
          }

          .health-photo::after {
            content: "";
            position: absolute;
            inset: auto 0 0;
            height: 45%;
            background: linear-gradient(transparent, rgba(0,0,0,.4));
            pointer-events: none;
          }

          .health-videos {
            padding: 90px 0 110px;
            background: #eef6f4;
          }

          .health-video-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .health-video-card {
            overflow: hidden;
            border-radius: 22px;
            background: white;
            border: 1px solid var(--health-line);
          }

          .health-video-card video {
            display: block;
            width: 100%;
            aspect-ratio: 16 / 10;
            object-fit: cover;
            background: #183b40;
          }

          .health-video-copy {
            padding: 22px;
          }

          .health-video-copy h3 {
            margin: 0 0 8px;
            font-size: 19px;
          }

          .health-video-copy p {
            margin: 0;
            color: var(--health-muted);
            font-size: 14px;
            line-height: 1.65;
          }

          .health-quote {
            padding: 105px 0;
            text-align: center;
          }

          .health-quote-mark {
            color: var(--health-red);
            font-family: Georgia, serif;
            font-size: 70px;
            line-height: .5;
          }

          .health-quote blockquote {
            max-width: 900px;
            margin: 25px auto 0;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(28px, 4vw, 48px);
            line-height: 1.25;
            letter-spacing: -.025em;
          }

          .health-quote p {
            margin: 22px 0 0;
            color: var(--health-muted);
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: .14em;
            font-weight: 700;
          }

          .health-cta {
            margin-bottom: 100px;
            padding: 65px;
            border-radius: 30px;
            background: linear-gradient(135deg, #16806d, #24535b);
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 35px;
          }

          .health-cta h2 {
            margin: 0 0 10px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(34px, 4vw, 52px);
            font-weight: 500;
          }

          .health-cta p {
            max-width: 650px;
            margin: 0;
            color: rgba(255,255,255,.75);
            line-height: 1.7;
          }

          .health-cta a {
            flex: 0 0 auto;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 15px 23px;
            border-radius: 999px;
            background: white;
            color: var(--health-ink);
            text-decoration: none;
            font-size: 14px;
            font-weight: 800;
          }

          @media (max-width: 900px) {
            .health-intro-grid,
            .health-feature-grid {
              grid-template-columns: 1fr;
              gap: 35px;
            }

            .health-grid,
            .health-video-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .health-gallery-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .health-photo:first-child {
              grid-row: span 1;
            }

            .health-cta {
              padding: 42px 30px;
              align-items: flex-start;
              flex-direction: column;
            }
          }

          @media (max-width: 620px) {
            .health-shell {
              width: min(100% - 28px, 1180px);
            }

            .health-hero {
              min-height: 600px;
            }

            .health-hero-content {
              padding: 90px 0 80px;
            }

            .health-grid,
            .health-video-grid,
            .health-gallery-grid {
              grid-template-columns: 1fr;
            }

            .health-gallery-grid {
              grid-auto-rows: 280px;
            }

            .health-section-heading {
              display: block;
            }

            .health-section-heading p {
              margin-top: 18px;
            }

            .health-card {
              min-height: auto;
            }

            .health-number {
              margin-bottom: 35px;
            }
          }
        `}</style>

        <section className="health-hero">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/images/health-hero.mp4" type="video/mp4" />
          </video>

          <div className="health-shell">
            <div className="health-hero-content">
              <div className="health-eyebrow">
                <span />
                Health &amp; Well-being
              </div>

              <h1>
                Healthier people,
                <br />
                <em>stronger communities.</em>
              </h1>

              <p>
                निरोगी समाजासाठी आरोग्य जनजागृती, प्राथमिक आरोग्य मार्गदर्शन,
                स्वच्छता, पोषण आणि community-based health activities यांना
                प्रोत्साहन देणे हा या उपक्रमांचा केंद्रबिंदू आहे.
              </p>
            </div>
          </div>
        </section>

        <section className="health-intro">
          <div className="health-shell health-intro-grid">
            <div>
              <div className="health-kicker">Our Health Focus</div>
              <h2>आरोग्य म्हणजे केवळ उपचार नाही.</h2>
            </div>

            <div className="health-intro-copy">
              <p>
                <strong>Prerna Foundation</strong> च्या Health &amp; Well-being
                उपक्रमांचा भर आरोग्याबाबत योग्य माहिती, प्रतिबंधात्मक काळजी
                आणि निरोगी सवयी यांच्याबद्दल जागरूकता वाढवण्यावर आहे.
              </p>
              <p>
                आरोग्य शिबिरे, awareness sessions, स्वच्छता व पोषणविषयक
                मार्गदर्शन आणि community activities यांच्या माध्यमातून
                नागरिकांना आरोग्याची काळजी घेण्यासाठी सक्षम करण्याचा प्रयत्न
                केला जातो.
              </p>
            </div>
          </div>
        </section>

        <section className="health-focus">
          <div className="health-shell">
            <div className="health-section-heading">
              <div>
                <div className="health-kicker">What We Work On</div>
                <h2>Health &amp; Well-being</h2>
              </div>
              <p>
                प्रतिबंधात्मक आरोग्य, जनजागृती आणि community well-being
                याभोवती केंद्रित विविध उपक्रम.
              </p>
            </div>

            <div className="health-grid">
              {focusAreas.map((item) => (
                <article className="health-card" key={item.title}>
                  <div className="health-number">{item.number}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="health-feature">
          <div className="health-shell health-feature-grid">
            <div>
              <div className="health-kicker" style={{ color: "#d5a447" }}>
                Prevention &amp; Awareness
              </div>
              <h2>आरोग्याची माहिती योग्य वेळी मिळणेही तितकेच महत्त्वाचे.</h2>
              <p>
                आरोग्यविषयक योग्य माहिती आणि चांगल्या सवयी लोकांपर्यंत
                पोहोचवणे हे निरोगी समुदायासाठी महत्त्वाचे पाऊल आहे.
                Awareness activities मध्ये आरोग्य, स्वच्छता, पोषण आणि
                preventive care यांचा समावेश केला जातो.
              </p>
            </div>

            <div className="health-feature-list">
              <div className="health-feature-item">
                <b>Healthy Habits</b>
                <span>दररोजच्या आरोग्यदायी सवयींबाबत जागरूकता.</span>
              </div>
              <div className="health-feature-item">
                <b>Clean &amp; Safe Living</b>
                <span>स्वच्छता आणि सुरक्षित परिसरासाठी मार्गदर्शन.</span>
              </div>
              <div className="health-feature-item">
                <b>Nutrition Awareness</b>
                <span>संतुलित आहार आणि पोषणाचे महत्त्व.</span>
              </div>
              <div className="health-feature-item">
                <b>Community Care</b>
                <span>समुदायाच्या गरजांनुसार आरोग्यविषयक उपक्रम.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="health-gallery">
          <div className="health-shell">
            <div className="health-section-heading">
              <div>
                <div className="health-kicker">Health Activities</div>
                <h2>Our Health Moments</h2>
              </div>
              <p>
                आरोग्य शिबिरे, awareness activities आणि community health
                initiatives मधील काही क्षण.
              </p>
            </div>

            <div className="health-gallery-grid">
              {gallery.map((src, index) => (
                <div className="health-photo" key={src}>
                  <img
                    src={src}
                    alt={`Health and well-being activity ${index + 1}`}
                    loading={index > 1 ? "lazy" : "eager"}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="health-videos">
          <div className="health-shell">
            <div className="health-section-heading">
              <div>
                <div className="health-kicker">Videos</div>
                <h2>Health In Action</h2>
              </div>
              <p>
                Health awareness, camps आणि community activities चे video
                highlights.
              </p>
            </div>

            <div className="health-video-grid">
              {videos.map((video) => (
                <article className="health-video-card" key={video.src}>
                  <video controls preload="metadata" playsInline>
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <div className="health-video-copy">
                    <h3>{video.title}</h3>
                    <p>{video.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="health-quote">
          <div className="health-shell">
            <div className="health-quote-mark">“</div>
            <blockquote>
              निरोगी व्यक्ती, जागरूक कुटुंब आणि सक्षम समुदाय — हीच
              आरोग्यदायी समाजाची पायाभरणी.
            </blockquote>
            <p>Prerna Foundation • Health &amp; Well-being</p>
          </div>
        </section>

        <section className="health-shell">
          <div className="health-cta">
            <div>
              <h2>निरोगी समाजासाठी सहभागी व्हा.</h2>
              <p>
                आरोग्य जनजागृती, health camps आणि community well-being
                initiatives अधिक प्रभावी करण्यासाठी तुमचा सहभाग महत्त्वाचा आहे.
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
