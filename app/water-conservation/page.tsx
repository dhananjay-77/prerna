import Link from "next/link";
import { Header, Footer } from "@/components/SiteChrome";

const initiatives = [
  ["01", "Water Conservation", "पाण्याचे संवर्धन, साठवण आणि योग्य वापराबाबत समुदायामध्ये जागरूकता निर्माण करणे."],
  ["02", "Water Harvesting", "पावसाचे पाणी अडवणे, साठवणे आणि भूजल पुनर्भरणासाठी स्थानिक उपायांना प्रोत्साहन."],
  ["03", "Watershed Development", "जलस्रोत आणि परिसराचा एकत्रित विचार करून शाश्वत जलव्यवस्थापनासाठी काम."],
  ["04", "Farm Water Management", "शेतकऱ्यांना उपलब्ध पाण्याचा कार्यक्षम आणि नियोजनबद्ध वापर करण्यासाठी मार्गदर्शन."],
  ["05", "Community Participation", "गावातील नागरिक, शेतकरी आणि युवकांच्या सहभागातून जलसंवर्धनाची चळवळ मजबूत करणे."],
  ["06", "Awareness & Training", "जलसंवर्धनाच्या पद्धती, पाणी बचत आणि भविष्यातील जलसुरक्षेबाबत प्रशिक्षण व जनजागृती."],
];

const gallery = Array.from({ length: 6 }, (_, i) => `/images/water-conservation-${i + 1}.jpg`);
const videos = Array.from({ length: 3 }, (_, i) => `/images/water-conservation-video-${i + 1}.mp4`);

export default function WaterConservationPage() {
  return (
    <>
      <Header />

      <main className="wc-page">
        <section className="wc-hero">
          <video className="wc-hero-video" autoPlay muted loop playsInline preload="metadata"
            src="/images/water-conservation-hero.mp4" />
          <div className="wc-hero-overlay" />
          <div className="wc-shell wc-hero-inner">
            <div className="wc-hero-copy">
              <span className="wc-eyebrow">PRERNA FOUNDATION · WATER CONSERVATION</span>
              <h1>Every drop<br /><em>creates a future.</em></h1>
              <p>
                जलसंवर्धन, पाणी बचत आणि शाश्वत जलव्यवस्थापनासाठी
                समुदायासोबत प्रत्यक्ष कृती.
              </p>
              <div className="wc-actions">
                <Link href="#initiatives" className="wc-btn wc-btn-primary">Explore our work</Link>
                <Link href="#contact" className="wc-btn wc-btn-ghost">Get involved</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="wc-intro">
          <div className="wc-shell wc-two">
            <div>
              <span className="wc-label">01 / ABOUT THE INITIATIVE</span>
              <h2>पाण्याचा प्रत्येक थेंब<br /><em>भविष्यासाठी.</em></h2>
            </div>
            <div className="wc-copy">
              <p>
                प्रेरणा फाउंडेशनच्या Water Conservation उपक्रमाचा उद्देश
                पाण्याचे महत्त्व, संवर्धन आणि शाश्वत वापराबाबत समुदायामध्ये
                जागरूकता निर्माण करणे हा आहे.
              </p>
              <p>
                स्थानिक परिस्थिती, उपलब्ध जलस्रोत आणि समुदायाचा सहभाग यांचा
                विचार करून जलसंधारणाच्या उपायांना प्रोत्साहन देणे आणि
                भविष्यातील जलसुरक्षेसाठी सामूहिक कृती उभी करणे हा या उपक्रमाचा
                केंद्रबिंदू आहे.
              </p>
            </div>
          </div>
        </section>

        <section className="wc-stats">
          <div className="wc-shell wc-stat-grid">
            <div><strong>01</strong><span>Drop at a time</span></div>
            <div><strong>100%</strong><span>Community focus</span></div>
            <div><strong>∞</strong><span>Future vision</span></div>
          </div>
        </section>

        <section className="wc-section" id="initiatives">
          <div className="wc-shell">
            <div className="wc-head">
              <div>
                <span className="wc-label">02 / WHAT WE DO</span>
                <h2>From water<br /><em>to resilience.</em></h2>
              </div>
              <p>
                पाण्याचे संवर्धन केवळ एका उपक्रमापुरते मर्यादित न ठेवता
                समुदायाच्या सहभागातून दीर्घकालीन जलसुरक्षेकडे वाटचाल.
              </p>
            </div>

            <div className="wc-initiative-grid">
              {initiatives.map(([number, title, text]) => (
                <article className="wc-card" key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wc-visual">
          <div className="wc-shell">
            <div className="wc-visual-card">
              <img src="/images/water-conservation-1.jpg" alt="Water conservation activity" />
              <div className="wc-caption">
                <span>WATER · COMMUNITY · FUTURE</span>
                <strong>आजचे जलसंवर्धन<br />उद्याची जलसुरक्षा.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="wc-gallery">
          <div className="wc-shell">
            <div className="wc-head">
              <div>
                <span className="wc-label">03 / IN ACTION</span>
                <h2>Every drop<br /><em>matters.</em></h2>
              </div>
              <p>जलसंवर्धन, जनजागृती आणि समुदायाच्या सहभागातील विविध उपक्रमांची काही क्षणचित्रे.</p>
            </div>
            <div className="wc-gallery-grid">
              {gallery.map((src, i) => (
                <figure className={`wc-gallery-item item-${i + 1}`} key={src}>
                  <img src={src} alt={`Water conservation activity ${i + 1}`} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="wc-videos">
          <div className="wc-shell">
            <div className="wc-head">
              <div>
                <span className="wc-label">04 / FIELD STORIES</span>
                <h2>See the work<br /><em>in motion.</em></h2>
              </div>
            </div>
            <div className="wc-video-grid">
              {videos.map((src, i) => (
                <article className="wc-video-card" key={src}>
                  <video controls muted playsInline preload="metadata" src={src} />
                  <h3>{["Water Conservation", "Field Activity", "Community Awareness"][i]}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wc-quote">
          <div className="wc-shell">
            <div className="wc-quote-mark">“</div>
            <blockquote>
              पाणी वाचवणे म्हणजे<br />
              केवळ आजची गरज नाही,<br />
              <em>उद्याचे भविष्य घडवणे.</em>
            </blockquote>
          </div>
        </section>

        <section className="wc-vision">
          <div className="wc-shell wc-two">
            <div>
              <span className="wc-label">05 / OUR VISION</span>
              <h2>Save water.<br />Strengthen communities.<br /><em>Secure tomorrow.</em></h2>
            </div>
            <div className="wc-list">
              <div><span>01</span><p>पाणी बचत आणि जलसंवर्धनाबाबत जनजागृती वाढवणे.</p></div>
              <div><span>02</span><p>स्थानिक जलस्रोतांच्या शाश्वत व्यवस्थापनाला प्रोत्साहन देणे.</p></div>
              <div><span>03</span><p>शेतकरी आणि ग्रामीण समुदायाला जलव्यवस्थापनासाठी सक्षम करणे.</p></div>
              <div><span>04</span><p>समुदायाच्या सहभागातून दीर्घकालीन जलसुरक्षा निर्माण करणे.</p></div>
            </div>
          </div>
        </section>

        <section className="wc-cta" id="contact">
          <div className="wc-shell">
            <span className="wc-label">06 / GET INVOLVED</span>
            <h2>Let&apos;s protect<br /><em>every drop.</em></h2>
            <p>जलसंवर्धनाच्या या प्रवासात स्वयंसेवक, संस्था, शेतकरी किंवा सामाजिक भागीदार म्हणून सहभागी व्हा.</p>
            <Link href="/contact" className="wc-btn wc-btn-primary">Connect with us</Link>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .wc-page{--ink:#12201f;--muted:#657270;--line:rgba(18,32,31,.13);--paper:#f3f6f4;--deep:#102524;background:var(--paper);color:var(--ink);overflow:hidden}
        .wc-shell{width:min(1240px,calc(100% - 48px));margin:auto}
        .wc-hero{min-height:min(790px,88vh);position:relative;display:flex;align-items:center;isolation:isolate;background:#102524;color:#fff}
        .wc-hero-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2}
        .wc-hero-overlay{position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(5,22,21,.93),rgba(5,22,21,.63) 43%,rgba(5,22,21,.12)),linear-gradient(0deg,rgba(5,22,21,.4),transparent 55%)}
        .wc-hero-inner{padding:100px 0 90px}.wc-hero-copy{width:min(760px,100%)}
        .wc-eyebrow,.wc-label{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}
        .wc-eyebrow{opacity:.78;margin-bottom:25px}.wc-hero h1{margin:0;font-size:clamp(58px,8vw,112px);line-height:.88;letter-spacing:-.065em;font-weight:600}
        .wc-hero h1 em,.wc-head h2 em,.wc-two h2 em,.wc-quote em,.wc-cta h2 em{font-family:Georgia,"Times New Roman",serif;font-weight:400}
        .wc-hero p{max-width:590px;margin:32px 0 0;font-size:18px;line-height:1.75;color:rgba(255,255,255,.82)}
        .wc-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:38px}.wc-btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 23px;border-radius:999px;text-decoration:none;font-size:13px;font-weight:700}
        .wc-btn-primary{background:#fff;color:var(--deep)}.wc-btn-ghost{color:#fff;border:1px solid rgba(255,255,255,.38)}
        .wc-intro,.wc-vision{padding:125px 0}.wc-two{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
        .wc-label{color:#778481;margin-bottom:22px}.wc-two h2,.wc-head h2{margin:0;font-size:clamp(44px,5.4vw,78px);line-height:.95;letter-spacing:-.055em;font-weight:600}
        .wc-copy{padding-top:35px;max-width:600px}.wc-copy p,.wc-head>p,.wc-cta p{margin:0 0 22px;color:var(--muted);font-size:17px;line-height:1.8}
        .wc-stats{background:var(--deep);color:#fff}.wc-stat-grid{display:grid;grid-template-columns:repeat(3,1fr)}
        .wc-stat-grid>div{padding:52px 35px;border-right:1px solid rgba(255,255,255,.14)}.wc-stat-grid>div:last-child{border:0}
        .wc-stat-grid strong{display:block;font-size:clamp(42px,5vw,66px);line-height:1;letter-spacing:-.05em}.wc-stat-grid span{display:block;margin-top:10px;color:rgba(255,255,255,.58);font-size:12px;text-transform:uppercase;letter-spacing:.14em}
        .wc-section,.wc-gallery,.wc-videos{padding:125px 0}.wc-head{display:grid;grid-template-columns:1fr 360px;gap:80px;align-items:end;margin-bottom:60px}.wc-head>p{margin-bottom:5px}
        .wc-initiative-grid{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--line)}.wc-card{display:grid;grid-template-columns:55px 1fr;gap:18px;padding:38px 22px 42px 0;border-bottom:1px solid var(--line)}
        .wc-card:nth-child(odd){border-right:1px solid var(--line);padding-right:50px}.wc-card:nth-child(even){padding-left:50px}.wc-card>span{font-size:12px;color:#87918f;padding-top:5px}.wc-card h3{margin:0 0 10px;font-size:23px}.wc-card p{margin:0;color:var(--muted);line-height:1.7}
        .wc-visual{padding-bottom:125px}.wc-visual-card{height:min(680px,62vw);min-height:450px;position:relative;overflow:hidden}.wc-visual-card img{width:100%;height:100%;object-fit:cover;display:block}
        .wc-visual-card:after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(5,22,21,.72),transparent 55%)}.wc-caption{position:absolute;left:48px;bottom:42px;z-index:1;color:#fff}
        .wc-caption span{display:block;font-size:10px;letter-spacing:.2em;margin-bottom:13px;opacity:.72}.wc-caption strong{font-size:clamp(30px,4vw,52px);line-height:1;letter-spacing:-.045em}
        .wc-gallery{background:#e6ecea}.wc-gallery-grid{display:grid;grid-template-columns:repeat(12,1fr);gap:14px}.wc-gallery-item{margin:0;overflow:hidden}.wc-gallery-item img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .5s ease}.wc-gallery-item:hover img{transform:scale(1.04)}
        .item-1{grid-column:span 7;height:500px}.item-2{grid-column:span 5;height:500px}.item-3,.item-4,.item-5{grid-column:span 4;height:390px}.item-6{grid-column:6/span 7;height:440px}
        .wc-videos{background:var(--deep);color:#fff}.wc-videos .wc-label{color:rgba(255,255,255,.55)}.wc-video-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.wc-video-card video{width:100%;aspect-ratio:16/10;display:block;object-fit:cover;background:#081716}.wc-video-card h3{margin:17px 0 0;font-size:18px}
        .wc-quote{padding:150px 0;background:#edf2f0}.wc-quote-mark{font-family:Georgia,serif;font-size:100px;line-height:.5;color:#82918d}.wc-quote blockquote{margin:30px 0 0;max-width:950px;font-size:clamp(45px,6vw,82px);line-height:.98;letter-spacing:-.055em;font-weight:500}
        .wc-list{padding-top:22px}.wc-list>div{display:grid;grid-template-columns:45px 1fr;gap:15px;padding:22px 0;border-top:1px solid var(--line)}.wc-list span{color:#8a9692;font-size:12px}.wc-list p{margin:0;font-size:17px;line-height:1.6}
        .wc-cta{padding:125px 0 140px;background:#d9e5e1}.wc-cta h2{margin:0 0 30px;font-size:clamp(58px,8vw,112px);line-height:.88;letter-spacing:-.065em;font-weight:600}.wc-cta p{max-width:610px}
        @media(max-width:800px){
          .wc-shell{width:min(100% - 30px,1240px)}.wc-hero{min-height:720px}.wc-hero-inner{padding:80px 0 60px}.wc-hero h1{font-size:clamp(54px,16vw,82px)}.wc-hero p{font-size:16px}
          .wc-intro,.wc-vision,.wc-section,.wc-gallery,.wc-videos,.wc-quote,.wc-cta{padding:85px 0}.wc-two,.wc-head{grid-template-columns:1fr;gap:35px}.wc-copy{padding-top:0}
          .wc-stat-grid{grid-template-columns:1fr}.wc-stat-grid>div{padding:34px 0;border-right:0;border-bottom:1px solid rgba(255,255,255,.14)}.wc-stat-grid>div:last-child{border:0}
          .wc-initiative-grid{grid-template-columns:1fr}.wc-card,.wc-card:nth-child(odd),.wc-card:nth-child(even){padding:28px 0;border-right:0}
          .wc-visual{padding-bottom:85px}.wc-visual-card{min-height:430px;height:125vw}.wc-caption{left:24px;bottom:27px}
          .wc-gallery-grid{grid-template-columns:1fr 1fr}.wc-gallery-item,.item-1,.item-2,.item-3,.item-4,.item-5,.item-6{grid-column:span 1;height:260px}.item-1{grid-column:span 2;height:360px}
          .wc-video-grid{grid-template-columns:1fr}.wc-quote blockquote{font-size:clamp(42px,12vw,68px)}
        }
      `}</style>
    </>
  );
}
