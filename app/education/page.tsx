import Link from "next/link";

const educationPhotos = [
  {
    src: "/images/education-1.jpg",
    alt: "Students learning together",
    title: "Learning Together",
  },
  {
    src: "/images/education-2.jpg",
    alt: "Students in a classroom",
    title: "Classroom Learning",
  },
  {
    src: "/images/education-3.jpg",
    alt: "Children participating in an activity",
    title: "Learning by Doing",
  },
  {
    src: "/images/education-4.jpg",
    alt: "Students using computers",
    title: "Digital Education",
  },
  {
    src: "/images/education-5.jpg",
    alt: "Educational workshop",
    title: "Workshops & Activities",
  },
  {
    src: "/images/education-6.jpg",
    alt: "Students and mentors",
    title: "Mentorship",
  },
];

const educationVideos = [
  {
    src: "/images/education-video-1.mp4",
    title: "A Day of Learning",
    text: "A glimpse into the learning environment, activities and experiences created for children.",
  },
  {
    src: "/images/education-video-2.mp4",
    title: "Learning Beyond the Classroom",
    text: "Education becomes meaningful when children explore, participate and learn from the world around them.",
  },
  {
    src: "/images/education-video-3.mp4",
    title: "Digital Learning",
    text: "Technology, computers and digital resources help students build confidence for the future.",
  },
];

export default function EducationPage() {
  return (
    <main className="education-page">
      <style>{`
        .education-page {
          --edu-ink: #12352f;
          --edu-blue: #0b4b70;
          --edu-sky: #dfeef1;
          --edu-muted: #6e8793;
          --edu-paper: #f5f7ef;
          --edu-white: #ffffff;
          background: var(--edu-paper);
          color: var(--edu-ink);
          min-height: 100vh;
          overflow: hidden;
        }

        .education-page * { box-sizing: border-box; }

        .education-shell {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .education-hero {
          position: relative;
          min-height: 720px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          background: #12352f;
          isolation: isolate;
        }

        .education-hero::after {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          right: -150px;
          top: 90px;
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 50%;
          box-shadow: 0 0 0 45px rgba(255,255,255,.035),
                      0 0 0 90px rgba(255,255,255,.025);
          pointer-events: none;
        }

        .education-hero-media {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .education-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(7, 31, 29, .88) 0%, rgba(7, 31, 29, .60) 48%, rgba(7, 31, 29, .18) 100%),
            linear-gradient(0deg, rgba(7, 31, 29, .78) 0%, transparent 55%);
        }

        .education-hero-content {
          position: relative;
          z-index: 1;
          padding: 145px 0 92px;
          max-width: 800px;
        }

        .education-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 15px;
          border: 1px solid rgba(255,255,255,.4);
          border-radius: 999px;
          color: #fff;
          background: rgba(255,255,255,.08);
          backdrop-filter: blur(8px);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .18em;
          text-transform: uppercase;
          margin-bottom: 27px;
        }

        .education-eyebrow::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 0 5px rgba(255,255,255,.1);
        }

        .education-hero h1 {
          margin: 0;
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(64px, 10vw, 138px);
          line-height: .84;
          font-weight: 500;
          letter-spacing: -.065em;
          text-wrap: balance;
        }

        .education-hero h1 span {
          display: block;
          font-size: .48em;
          line-height: 1;
          letter-spacing: -.02em;
          margin-top: 18px;
        }

        .education-hero p {
          max-width: 670px;
          margin: 34px 0 0;
          padding-left: 19px;
          border-left: 2px solid rgba(255,255,255,.65);
          color: rgba(255,255,255,.88);
          font-size: 18px;
          line-height: 1.78;
        }

        .education-intro {
          position: relative;
          padding: 125px 0 105px;
        }

        .education-intro::before {
          content: "EDUCATION";
          position: absolute;
          right: -45px;
          top: 65px;
          color: rgba(11,75,112,.045);
          font-size: clamp(80px, 13vw, 190px);
          font-weight: 800;
          letter-spacing: -.08em;
          transform: rotate(-8deg);
          pointer-events: none;
        }

        .education-intro-grid {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 80px;
          align-items: start;
        }

        .education-kicker {
          color: var(--edu-muted);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .18em;
          text-transform: uppercase;
        }

        .education-intro h2 {
          margin: 15px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(38px, 5vw, 66px);
          line-height: .98;
          font-weight: 500;
          letter-spacing: -.04em;
        }

        .education-intro-copy p {
          margin: 0 0 20px;
          color: #5e7885;
          font-size: 17px;
          line-height: 1.85;
        }

        .education-highlight {
          position: relative;
          margin-top: 34px;
          padding: 27px 30px;
          border-left: 4px solid var(--edu-blue);
          background: #fff;
          box-shadow: 0 18px 45px rgba(18,53,47,.07);
        }

        .education-highlight::after {
          content: "✦";
          position: absolute;
          right: 24px;
          top: 20px;
          color: var(--edu-blue);
          opacity: .35;
          font-size: 22px;
        }

        .education-highlight strong {
          display: block;
          color: var(--edu-blue);
          font-size: 17px;
          margin-bottom: 7px;
        }

        .education-stats {
          padding: 0 0 105px;
        }

        .education-stat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: #fff;
          border: 1px solid rgba(18,53,47,.10);
          box-shadow: 0 18px 55px rgba(18,53,47,.06);
        }

        .education-stat {
          position: relative;
          padding: 36px 25px;
          border-right: 1px solid rgba(18,53,47,.12);
          transition: transform .25s ease, background .25s ease;
        }

        .education-stat:hover {
          transform: translateY(-5px);
          background: var(--edu-sky);
        }

        .education-stat:last-child { border-right: 0; }

        .education-stat strong {
          display: block;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 45px;
          line-height: 1;
          color: var(--edu-blue);
          margin-bottom: 10px;
        }

        .education-stat span {
          color: var(--edu-muted);
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: .1em;
        }

        .education-gallery {
          padding: 125px 0;
          background: #fff;
          position: relative;
        }

        .education-section-head {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          align-items: end;
          margin-bottom: 42px;
        }

        .education-section-head h2 {
          margin: 12px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(42px, 6vw, 74px);
          line-height: .95;
          font-weight: 500;
          letter-spacing: -.045em;
        }

        .education-section-head p {
          max-width: 390px;
          margin: 0;
          color: var(--edu-muted);
          line-height: 1.7;
        }

        .education-photo-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 18px;
        }

        .education-photo-card {
          position: relative;
          min-height: 310px;
          overflow: hidden;
          background: #e8ece7;
          border-radius: 2px;
          box-shadow: 0 18px 45px rgba(18,53,47,.10);
        }

        .education-photo-card:nth-child(1),
        .education-photo-card:nth-child(4) {
          grid-column: span 7;
        }

        .education-photo-card:nth-child(2),
        .education-photo-card:nth-child(3),
        .education-photo-card:nth-child(5),
        .education-photo-card:nth-child(6) {
          grid-column: span 5;
        }

        .education-photo-card img {
          width: 100%;
          height: 100%;
          min-height: 310px;
          object-fit: cover;
          display: block;
          filter: saturate(.92);
          transition: transform .7s cubic-bezier(.2,.7,.2,1), filter .5s ease;
        }

        .education-photo-card:hover img {
          transform: scale(1.07);
          filter: saturate(1.08);
        }

        .education-photo-caption {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          padding: 15px 17px;
          background: rgba(255,255,255,.92);
          backdrop-filter: blur(10px);
          color: var(--edu-ink);
          font-weight: 700;
          transform: translateY(4px);
          transition: transform .3s ease;
        }

        .education-photo-card:hover .education-photo-caption {
          transform: translateY(0);
        }

        .education-videos {
          padding: 110px 0;
          background: var(--edu-paper);
        }

        .education-video-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .education-video-card {
          background: #fff;
          overflow: hidden;
          border: 1px solid rgba(18,53,47,.08);
          box-shadow: 0 18px 50px rgba(18,53,47,.08);
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .education-video-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 26px 60px rgba(18,53,47,.13);
        }

        .education-video-card video {
          width: 100%;
          aspect-ratio: 16 / 10;
          display: block;
          object-fit: cover;
          background: #183d48;
        }

        .education-video-card video::cue {
          background: rgba(0,0,0,.7);
        }

        .education-video-body {
          padding: 25px 24px 28px;
        }

        .education-video-body h3 {
          margin: 0 0 10px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 27px;
          line-height: 1.05;
          color: var(--edu-blue);
        }

        .education-video-body p {
          margin: 0;
          color: var(--edu-muted);
          line-height: 1.7;
          font-size: 15px;
        }

        .education-quote {
          position: relative;
          padding: 145px 0;
          background:
            radial-gradient(circle at 12% 30%, rgba(255,255,255,.10), transparent 25%),
            radial-gradient(circle at 90% 75%, rgba(255,255,255,.08), transparent 28%),
            var(--edu-blue);
          color: #fff;
          overflow: hidden;
        }

        .education-quote::before,
        .education-quote::after {
          position: absolute;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 260px;
          line-height: 1;
          opacity: .08;
        }

        .education-quote::before {
          content: "“";
          left: 3%;
          top: 20px;
        }

        .education-quote::after {
          content: "”";
          right: 3%;
          bottom: -95px;
        }

        .education-quote blockquote {
          max-width: 930px;
          margin: 0 auto;
          text-align: center;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 5vw, 66px);
          line-height: 1.08;
          letter-spacing: -.035em;
        }

        .education-quote cite {
          display: block;
          margin-top: 28px;
          font-family: Arial, sans-serif;
          font-size: 12px;
          font-style: normal;
          letter-spacing: .16em;
          text-transform: uppercase;
          opacity: .75;
        }

        .education-cta {
          padding: 110px 0 125px;
        }

        .education-cta-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 52px 58px;
          background: #fff;
          border: 1px solid rgba(18,53,47,.1);
          box-shadow: 0 24px 65px rgba(18,53,47,.08);
          position: relative;
          overflow: hidden;
        }

        .education-cta-box::after {
          content: "";
          position: absolute;
          width: 230px;
          height: 230px;
          border: 1px solid rgba(11,75,112,.12);
          border-radius: 50%;
          right: -80px;
          bottom: -110px;
        }

        .education-cta-box h2 {
          margin: 0 0 9px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 40px;
          font-weight: 500;
        }

        .education-cta-box p {
          margin: 0;
          color: var(--edu-muted);
        }

        .education-cta-link {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          padding: 16px 25px;
          background: var(--edu-ink);
          color: #fff;
          text-decoration: none;
          font-weight: 700;
          position: relative;
          z-index: 1;
          transition: transform .25s ease, background .25s ease;
        }

        .education-cta-link:hover {
          transform: translateY(-3px);
          background: var(--edu-blue);
        }

        @media (max-width: 850px) {
          .education-shell { width: min(100% - 30px, 680px); }
          .education-hero { min-height: 620px; }
          .education-hero-content { padding: 115px 0 65px; }
          .education-hero h1 { font-size: clamp(60px, 14vw, 95px); }
          .education-intro-grid { grid-template-columns: 1fr; gap: 35px; }
          .education-stat-grid { grid-template-columns: repeat(2, 1fr); }
          .education-stat:nth-child(2) { border-right: 0; }
          .education-photo-grid { display: grid; grid-template-columns: 1fr 1fr; }
          .education-photo-card:nth-child(n) { grid-column: span 1; }
          .education-video-grid { grid-template-columns: 1fr; }
          .education-section-head { display: block; }
          .education-section-head p { margin-top: 20px; }
          .education-cta-box { display: block; padding: 34px; }
          .education-cta-link { margin-top: 25px; }
        }

        @media (max-width: 560px) {
          .education-hero-content { padding: 100px 0 55px; }
          .education-hero h1 { font-size: 66px; }
          .education-hero h1 span { font-size: .43em; line-height: 1.15; }
          .education-hero p { font-size: 15px; padding-left: 14px; }
          .education-intro::before { display: none; }
          .education-intro, .education-gallery, .education-videos { padding: 75px 0; }
          .education-stats { padding-bottom: 75px; }
          .education-stat-grid { grid-template-columns: 1fr 1fr; }
          .education-stat { padding: 25px 15px; }
          .education-stat strong { font-size: 34px; }
          .education-photo-grid { grid-template-columns: 1fr; }
          .education-photo-card:nth-child(n) { grid-column: span 1; }
          .education-quote { padding: 85px 0; }
        }
      `}</style>

      <section className="education-hero">
        <video
          className="education-hero-media"
          src="/images/education-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="education-hero-overlay" />
        <div className="education-shell">
          <div className="education-hero-content">
            <div className="education-eyebrow">Prerna Foundation</div>
            <h1>
              Education
              <span>शिक्षणातून संधी, संधीमधून परिवर्तन.</span>
            </h1>
            <p>
              Every child deserves the opportunity to learn, explore and build
              a confident future. Our education initiatives create spaces where
              knowledge is practical, inclusive and connected to real life.
            </p>
          </div>
        </div>
      </section>

      <section className="education-intro">
        <div className="education-shell education-intro-grid">
          <div>
            <div className="education-kicker">Our Education Work</div>
            <h2>Learning is the beginning of change.</h2>
          </div>
          <div className="education-intro-copy">
            <p>
              Prerna Foundation works to make education more meaningful and
              accessible for children and young people. The focus is not only
              on textbooks, but also on curiosity, confidence, creativity,
              technology and learning through experience.
            </p>
            <p>
              From classroom activities and digital learning to workshops,
              mentorship and community-based learning, every effort is designed
              to help learners discover their strengths and participate in
              shaping their own future.
            </p>
            <div className="education-highlight">
              <strong>Our approach</strong>
              Education + Experience + Technology + Mentorship = Opportunity
            </div>
          </div>
        </div>
      </section>

      <section className="education-stats">
        <div className="education-shell">
          <div className="education-stat-grid">
            <div className="education-stat"><strong>01</strong><span>Learning Spaces</span></div>
            <div className="education-stat"><strong>02</strong><span>Digital Learning</span></div>
            <div className="education-stat"><strong>03</strong><span>Skill Activities</span></div>
            <div className="education-stat"><strong>04</strong><span>Mentorship</span></div>
          </div>
        </div>
      </section>

      <section className="education-gallery">
        <div className="education-shell">
          <div className="education-section-head">
            <div>
              <div className="education-kicker">Photo Stories</div>
              <h2>Moments that<br />make learning real.</h2>
            </div>
            <p>
              Explore moments from classrooms, workshops, digital learning,
              activities and interactions that make education engaging.
            </p>
          </div>

          <div className="education-photo-grid">
            {educationPhotos.map((photo) => (
              <figure className="education-photo-card" key={photo.src}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <figcaption className="education-photo-caption">
                  {photo.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="education-videos">
        <div className="education-shell">
          <div className="education-section-head">
            <div>
              <div className="education-kicker">Video Stories</div>
              <h2>See learning<br />in action.</h2>
            </div>
            <p>
              Short visual stories can show the energy, participation and
              experiences behind our education work.
            </p>
          </div>

          <div className="education-video-grid">
            {educationVideos.map((video) => (
              <article className="education-video-card" key={video.src}>
                <video controls preload="metadata" poster="/images/education-video-poster.jpg">
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="education-video-body">
                  <h3>{video.title}</h3>
                  <p>{video.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="education-quote">
        <div className="education-shell">
          <blockquote>
            “Education is not only about what a child learns. It is about what
            a child begins to believe is possible.”
            <cite>Prerna Foundation</cite>
          </blockquote>
        </div>
      </section>

      <section className="education-cta">
        <div className="education-shell">
          <div className="education-cta-box">
            <div>
              <h2>Be part of the learning journey.</h2>
              <p>Explore our work and see how you can contribute.</p>
            </div>
            <Link className="education-cta-link" href="/contact">
              Get Involved →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
