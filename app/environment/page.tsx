import Link from "next/link";
import { Header, Footer } from "@/components/SiteChrome";

const initiatives = [
  ["01", "Tree Plantation", "स्थानिक परिस्थितीनुसार वृक्षारोपण आणि हरित क्षेत्र वाढवण्यासाठी समुदायासोबत काम."],
  ["02", "Environmental Awareness", "पर्यावरण संरक्षण, जैवविविधता आणि निसर्गाच्या संवर्धनाबाबत जनजागृती."],
  ["03", "Clean & Green Communities", "स्वच्छ, हिरवे आणि आरोग्यदायी परिसर घडवण्यासाठी स्थानिक सहभागाला प्रोत्साहन."],
  ["04", "Biodiversity Protection", "स्थानिक वनस्पती, प्राणी आणि नैसर्गिक परिसंस्थेचे महत्त्व समजावून सांगणे."],
  ["05", "Waste Awareness", "कचरा कमी करणे, योग्य व्यवस्थापन आणि जबाबदार जीवनशैलीबाबत मार्गदर्शन."],
  ["06", "Youth Participation", "युवक आणि विद्यार्थ्यांना पर्यावरणपूरक उपक्रमांमध्ये सक्रिय सहभागी करून घेणे."],
];

const gallery = Array.from({ length: 6 }, (_, i) => `/images/environment-${i + 1}.jpg`);
const videos = Array.from({ length: 3 }, (_, i) => `/images/environment-video-${i + 1}.mp4`);

export default function EnvironmentPage() {
  return (
    <>
      <Header />

      <main className="env-page">
        <section className="env-hero">
          <video className="env-hero-video" autoPlay muted loop playsInline preload="metadata"
            src="/images/environment-hero.mp4" />
          <div className="env-hero-overlay" />
          <div className="env-shell env-hero-inner">
            <div className="env-hero-copy">
              <span className="env-eyebrow">PRERNA FOUNDATION · ENVIRONMENT</span>
              <h1>Protecting<br /><em>what matters.</em></h1>
              <p>
                निसर्ग, जैवविविधता आणि आपल्या परिसराचे संरक्षण करण्यासाठी
                समुदायासोबत आज कृती आणि उद्यासाठी शाश्वत विचार.
              </p>
              <div className="env-actions">
                <Link href="#initiatives" className="env-btn env-btn-primary">Explore our work</Link>
                <Link href="#contact" className="env-btn env-btn-ghost">Get involved</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="env-intro">
          <div className="env-shell env-two">
            <div>
              <span className="env-label">01 / ABOUT THE INITIATIVE</span>
              <h2>निसर्गाचे संरक्षण<br /><em>आपली सामूहिक जबाबदारी.</em></h2>
            </div>
            <div className="env-copy">
              <p>
                प्रेरणा फाउंडेशनच्या Environment उपक्रमाचा उद्देश पर्यावरणाविषयी
                जागरूकता वाढवणे आणि स्थानिक समुदायाला निसर्ग संवर्धनाच्या
                कृतीमध्ये सहभागी करून घेणे हा आहे.
              </p>
              <p>
                वृक्षारोपण, स्वच्छता, जैवविविधता, कचरा व्यवस्थापन आणि
                पर्यावरण शिक्षण अशा विविध माध्यमातून अधिक हिरवा,
                स्वच्छ आणि शाश्वत परिसर घडवण्यासाठी प्रयत्न केले जातात.
              </p>
            </div>
          </div>
        </section>

        <section className="env-stats">
          <div className="env-shell env-stat-grid">
            <div><strong>06</strong><span>Key initiatives</span></div>
            <div><strong>100%</strong><span>Community focus</span></div>
            <div><strong>∞</strong><span>Green vision</span></div>
          </div>
        </section>

        <section className="env-section" id="initiatives">
          <div className="env-shell">
            <div className="env-head">
              <div>
                <span className="env-label">02 / WHAT WE DO</span>
                <h2>Small actions.<br /><em>Lasting impact.</em></h2>
              </div>
              <p>
                पर्यावरण संरक्षणाला दैनंदिन कृतीशी जोडणाऱ्या उपक्रमांची
                एक समग्र मालिका.
              </p>
            </div>

            <div className="env-initiative-grid">
              {initiatives.map(([number, title, text]) => (
                <article className="env-card" key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="env-visual">
          <div className="env-shell">
            <div className="env-visual-card">
              <img src="/images/environment-1.jpg" alt="Environment activity" />
              <div className="env-caption">
                <span>NATURE · COMMUNITY · FUTURE</span>
                <strong>आज हिरवाई वाढवूया,<br />उद्या भविष्य जपूया.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="env-gallery">
          <div className="env-shell">
            <div className="env-head">
              <div>
                <span className="env-label">03 / IN ACTION</span>
                <h2>Closer to<br /><em>nature.</em></h2>
              </div>
              <p>वृक्षारोपण, पर्यावरण जनजागृती आणि समुदायाच्या सहभागातील विविध उपक्रमांची काही क्षणचित्रे.</p>
            </div>
            <div className="env-gallery-grid">
              {gallery.map((src, i) => (
                <figure className={`env-gallery-item item-${i + 1}`} key={src}>
                  <img src={src} alt={`Environment activity ${i + 1}`} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="env-videos">
          <div className="env-shell">
            <div className="env-head">
              <div>
                <span className="env-label">04 / FIELD STORIES</span>
                <h2>See the work<br /><em>in motion.</em></h2>
              </div>
            </div>
            <div className="env-video-grid">
              {videos.map((src, i) => (
                <article className="env-video-card" key={src}>
                  <video controls muted playsInline preload="metadata" src={src} />
                  <h3>{["Tree Plantation", "Environment Activity", "Awareness Program"][i]}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="env-quote">
          <div className="env-shell">
            <div className="env-quote-mark">“</div>
            <blockquote>
              निसर्ग आपल्याला<br />
              वारसा म्हणून मिळाला आहे,<br />
              <em>मालकी म्हणून नाही.</em>
            </blockquote>
          </div>
        </section>

        <section className="env-vision">
          <div className="env-shell env-two">
            <div>
              <span className="env-label">05 / OUR VISION</span>
              <h2>Greener spaces.<br />Stronger communities.<br /><em>Better future.</em></h2>
            </div>
            <div className="env-list">
              <div><span>01</span><p>पर्यावरण संरक्षणाबाबत जनजागृती वाढवणे.</p></div>
              <div><span>02</span><p>वृक्षारोपण आणि हरित क्षेत्र वाढवण्याला प्रोत्साहन देणे.</p></div>
              <div><span>03</span><p>युवक आणि समुदायाला पर्यावरणपूरक कृतींसाठी सक्षम करणे.</p></div>
              <div><span>04</span><p>निसर्ग आणि स्थानिक परिसंस्थेच्या शाश्वत संवर्धनासाठी प्रयत्न करणे.</p></div>
            </div>
          </div>
        </section>

        <section className="env-cta" id="contact">
          <div className="env-shell">
            <span className="env-label">06 / GET INVOLVED</span>
            <h2>Let&apos;s make room<br /><em>for nature.</em></h2>
            <p>वृक्षारोपण, जनजागृती आणि पर्यावरण संवर्धनाच्या या प्रवासात स्वयंसेवक, संस्था किंवा सामाजिक भागीदार म्हणून सहभागी व्हा.</p>
            <Link href="/contact" className="env-btn env-btn-primary">Connect with us</Link>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .env-page{--ink:#172117;--muted:#667164;--line:rgba(23,33,23,.13);--paper:#f3f5ef;--deep:#18271c;background:var(--paper);color:var(--ink);overflow:hidden}
        .env-shell{width:min(1240px,calc(100% - 48px));margin:auto}
        .env-hero{min-height:min(790px,88vh);position:relative;display:flex;align-items:center;isolation:isolate;background:#18271c;color:#fff}
        .env-hero-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2}
        .env-hero-overlay{position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(6,20,8,.93),rgba(6,20,8,.62) 43%,rgba(6,20,8,.12)),linear-gradient(0deg,rgba(6,20,8,.4),transparent 55%)}
        .env-hero-inner{padding:100px 0 90px}.env-hero-copy{width:min(760px,100%)}
        .env-eyebrow,.env-label{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}
        .env-eyebrow{opacity:.78;margin-bottom:25px}.env-hero h1{margin:0;font-size:clamp(58px,8vw,112px);line-height:.88;letter-spacing:-.065em;font-weight:600}
        .env-hero h1 em,.env-head h2 em,.env-two h2 em,.env-quote em,.env-cta h2 em{font-family:Georgia,"Times New Roman",serif;font-weight:400}
        .env-hero p{max-width:590px;margin:32px 0 0;font-size:18px;line-height:1.75;color:rgba(255,255,255,.82)}
        .env-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:38px}.env-btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 23px;border-radius:999px;text-decoration:none;font-size:13px;font-weight:700}
        .env-btn-primary{background:#fff;color:var(--deep)}.env-btn-ghost{color:#fff;border:1px solid rgba(255,255,255,.38)}
        .env-intro,.env-vision{padding:125px 0}.env-two{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
        .env-label{color:#788274;margin-bottom:22px}.env-two h2,.env-head h2{margin:0;font-size:clamp(44px,5.4vw,78px);line-height:.95;letter-spacing:-.055em;font-weight:600}
        .env-copy{padding-top:35px;max-width:600px}.env-copy p,.env-head>p,.env-cta p{margin:0 0 22px;color:var(--muted);font-size:17px;line-height:1.8}
        .env-stats{background:var(--deep);color:#fff}.env-stat-grid{display:grid;grid-template-columns:repeat(3,1fr)}
        .env-stat-grid>div{padding:52px 35px;border-right:1px solid rgba(255,255,255,.14)}.env-stat-grid>div:last-child{border:0}
        .env-stat-grid strong{display:block;font-size:clamp(42px,5vw,66px);line-height:1;letter-spacing:-.05em}.env-stat-grid span{display:block;margin-top:10px;color:rgba(255,255,255,.58);font-size:12px;text-transform:uppercase;letter-spacing:.14em}
        .env-section,.env-gallery,.env-videos{padding:125px 0}.env-head{display:grid;grid-template-columns:1fr 360px;gap:80px;align-items:end;margin-bottom:60px}.env-head>p{margin-bottom:5px}
        .env-initiative-grid{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--line)}.env-card{display:grid;grid-template-columns:55px 1fr;gap:18px;padding:38px 22px 42px 0;border-bottom:1px solid var(--line)}
        .env-card:nth-child(odd){border-right:1px solid var(--line);padding-right:50px}.env-card:nth-child(even){padding-left:50px}.env-card>span{font-size:12px;color:#879080;padding-top:5px}.env-card h3{margin:0 0 10px;font-size:23px}.env-card p{margin:0;color:var(--muted);line-height:1.7}
        .env-visual{padding-bottom:125px}.env-visual-card{height:min(680px,62vw);min-height:450px;position:relative;overflow:hidden}.env-visual-card img{width:100%;height:100%;object-fit:cover;display:block}
        .env-visual-card:after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(8,20,10,.72),transparent 55%)}.env-caption{position:absolute;left:48px;bottom:42px;z-index:1;color:#fff}
        .env-caption span{display:block;font-size:10px;letter-spacing:.2em;margin-bottom:13px;opacity:.72}.env-caption strong{font-size:clamp(30px,4vw,52px);line-height:1;letter-spacing:-.045em}
        .env-gallery{background:#e7ebe2}.env-gallery-grid{display:grid;grid-template-columns:repeat(12,1fr);gap:14px}.env-gallery-item{margin:0;overflow:hidden}.env-gallery-item img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .5s ease}.env-gallery-item:hover img{transform:scale(1.04)}
        .item-1{grid-column:span 7;height:500px}.item-2{grid-column:span 5;height:500px}.item-3,.item-4,.item-5{grid-column:span 4;height:390px}.item-6{grid-column:6/span 7;height:440px}
        .env-videos{background:var(--deep);color:#fff}.env-videos .env-label{color:rgba(255,255,255,.55)}.env-video-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.env-video-card video{width:100%;aspect-ratio:16/10;display:block;object-fit:cover;background:#0b130d}.env-video-card h3{margin:17px 0 0;font-size:18px}
        .env-quote{padding:150px 0;background:#edf1e9}.env-quote-mark{font-family:Georgia,serif;font-size:100px;line-height:.5;color:#899484}.env-quote blockquote{margin:30px 0 0;max-width:950px;font-size:clamp(45px,6vw,82px);line-height:.98;letter-spacing:-.055em;font-weight:500}
        .env-list{padding-top:22px}.env-list>div{display:grid;grid-template-columns:45px 1fr;gap:15px;padding:22px 0;border-top:1px solid var(--line)}.env-list span{color:#8a9385;font-size:12px}.env-list p{margin:0;font-size:17px;line-height:1.6}
        .env-cta{padding:125px 0 140px;background:#dce5d7}.env-cta h2{margin:0 0 30px;font-size:clamp(58px,8vw,112px);line-height:.88;letter-spacing:-.065em;font-weight:600}.env-cta p{max-width:610px}
        @media(max-width:800px){
          .env-shell{width:min(100% - 30px,1240px)}.env-hero{min-height:720px}.env-hero-inner{padding:80px 0 60px}.env-hero h1{font-size:clamp(54px,16vw,82px)}.env-hero p{font-size:16px}
          .env-intro,.env-vision,.env-section,.env-gallery,.env-videos,.env-quote,.env-cta{padding:85px 0}.env-two,.env-head{grid-template-columns:1fr;gap:35px}.env-copy{padding-top:0}
          .env-stat-grid{grid-template-columns:1fr}.env-stat-grid>div{padding:34px 0;border-right:0;border-bottom:1px solid rgba(255,255,255,.14)}.env-stat-grid>div:last-child{border:0}
          .env-initiative-grid{grid-template-columns:1fr}.env-card,.env-card:nth-child(odd),.env-card:nth-child(even){padding:28px 0;border-right:0}
          .env-visual{padding-bottom:85px}.env-visual-card{min-height:430px;height:125vw}.env-caption{left:24px;bottom:27px}
          .env-gallery-grid{grid-template-columns:1fr 1fr}.env-gallery-item,.item-1,.item-2,.item-3,.item-4,.item-5,.item-6{grid-column:span 1;height:260px}.item-1{grid-column:span 2;height:360px}
          .env-video-grid{grid-template-columns:1fr}.env-quote blockquote{font-size:clamp(42px,12vw,68px)}
        }
      `}</style>
    </>
  );
}
