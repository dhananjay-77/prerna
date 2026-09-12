import Link from "next/link";
import { Header, Footer } from "@/components/SiteChrome";

const initiatives = [
  ["01", "Natural Farming Training", "शेतकऱ्यांना नैसर्गिक शेतीच्या पद्धती, नियोजन आणि प्रत्यक्ष वापराबाबत मार्गदर्शन."],
  ["02", "Soil Health Awareness", "जमिनीचे आरोग्य, सेंद्रिय घटक आणि दीर्घकालीन सुपीकता याबाबत जनजागृती."],
  ["03", "Natural Inputs", "शेतीमध्ये नैसर्गिक व स्थानिक साधनसामग्रीचा योग्य वापर करण्यासाठी प्रशिक्षण."],
  ["04", "Farmer Workshops", "शेतकरी, युवक आणि ग्रामीण समुदायासाठी प्रशिक्षण व संवादात्मक कार्यशाळा."],
  ["05", "Sustainable Agriculture", "पर्यावरणपूरक, कमी खर्चाची आणि दीर्घकाळ टिकणारी शेती पद्धतींना प्रोत्साहन."],
  ["06", "Field Demonstration", "प्रत्यक्ष शेतावर पद्धती समजावून सांगणे आणि अनुभवातून शिकण्याची संधी."],
];

const gallery = Array.from({ length: 6 }, (_, i) => `/images/natural-farming-${i + 1}.jpg`);
const videos = Array.from({ length: 3 }, (_, i) => `/images/natural-farming-video-${i + 1}.mp4`);

export default function NaturalFarmingPage() {
  return (
    <>
      <Header />

      <main className="nf-page">
        <section className="nf-hero">
          <video
            className="nf-hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            src="/images/natural-farming-hero.mp4"
          />
          <div className="nf-hero-overlay" />
          <div className="nf-shell nf-hero-inner">
            <div className="nf-hero-copy">
              <span className="nf-eyebrow">PRERNA FOUNDATION · NATURAL FARMING</span>
              <h1>
                Growing a
                <br />
                <em>healthier future.</em>
              </h1>
              <p>
                नैसर्गिक शेती, शाश्वत शेती आणि शेतकऱ्यांच्या सक्षमतेसाठी
                ज्ञान, प्रशिक्षण आणि प्रत्यक्ष कृती.
              </p>
              <div className="nf-actions">
                <Link href="#initiatives" className="nf-btn nf-btn-primary">Explore our work</Link>
                <Link href="#contact" className="nf-btn nf-btn-ghost">Get involved</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="nf-intro">
          <div className="nf-shell nf-two">
            <div>
              <span className="nf-label">01 / ABOUT THE INITIATIVE</span>
              <h2>शेतीकडे पाहण्याचा<br /><em>नवा आणि शाश्वत दृष्टिकोन.</em></h2>
            </div>
            <div className="nf-copy">
              <p>
                प्रेरणा फाउंडेशनच्या Natural Farming उपक्रमाचा केंद्रबिंदू
                शेतकरी, माती आणि पर्यावरण यांच्यातील शाश्वत नाते मजबूत करणे हा आहे.
              </p>
              <p>
                नैसर्गिक शेतीविषयक प्रशिक्षण, जनजागृती, कार्यशाळा आणि प्रत्यक्ष
                अनुभवाच्या माध्यमातून ग्रामीण समुदायाला शाश्वत शेतीच्या संधी
                समजून घेण्यासाठी व्यासपीठ उपलब्ध करून देणे हा या उपक्रमाचा उद्देश आहे.
              </p>
            </div>
          </div>
        </section>

        <section className="nf-stats">
          <div className="nf-shell nf-stat-grid">
            <div><strong>06</strong><span>Key initiatives</span></div>
            <div><strong>100+</strong><span>Community focus</span></div>
            <div><strong>∞</strong><span>Sustainable vision</span></div>
          </div>
        </section>

        <section className="nf-section" id="initiatives">
          <div className="nf-shell">
            <div className="nf-head">
              <div>
                <span className="nf-label">02 / WHAT WE DO</span>
                <h2>From knowledge<br /><em>to the field.</em></h2>
              </div>
              <p>शेतकऱ्यांना माहितीपासून प्रत्यक्ष कृतीपर्यंत घेऊन जाणाऱ्या उपक्रमांची एक समग्र मालिका.</p>
            </div>

            <div className="nf-initiative-grid">
              {initiatives.map(([number, title, text]) => (
                <article className="nf-card" key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="nf-visual">
          <div className="nf-shell">
            <div className="nf-visual-card">
              <img src="/images/natural-farming-1.jpg" alt="Natural farming activity" />
              <div className="nf-caption">
                <span>FIELD · FARM · FUTURE</span>
                <strong>शाश्वत शेतीची सुरुवात<br />प्रत्यक्ष अनुभवातून.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="nf-gallery">
          <div className="nf-shell">
            <div className="nf-head">
              <div>
                <span className="nf-label">03 / IN ACTION</span>
                <h2>Work that<br /><em>takes root.</em></h2>
              </div>
              <p>प्रशिक्षण, शेतकरी संवाद आणि ग्रामीण भागातील विविध उपक्रमांची काही क्षणचित्रे.</p>
            </div>
            <div className="nf-gallery-grid">
              {gallery.map((src, i) => (
                <figure className={`nf-gallery-item item-${i + 1}`} key={src}>
                  <img src={src} alt={`Natural farming activity ${i + 1}`} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="nf-videos">
          <div className="nf-shell">
            <div className="nf-head">
              <div>
                <span className="nf-label">04 / FIELD STORIES</span>
                <h2>See the work<br /><em>in motion.</em></h2>
              </div>
            </div>
            <div className="nf-video-grid">
              {videos.map((src, i) => (
                <article className="nf-video-card" key={src}>
                  <video controls muted playsInline preload="metadata" src={src} />
                  <h3>{["Natural Farming Training", "Field Activity", "Farmer Awareness"][i]}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="nf-quote">
          <div className="nf-shell">
            <div className="nf-quote-mark">“</div>
            <blockquote>
              माती निरोगी असेल,<br />
              तर शेतीचे भविष्यही<br />
              <em>निरोगी राहील.</em>
            </blockquote>
          </div>
        </section>

        <section className="nf-vision">
          <div className="nf-shell nf-two">
            <div>
              <span className="nf-label">05 / OUR VISION</span>
              <h2>Better soil.<br />Better farms.<br /><em>Better future.</em></h2>
            </div>
            <div className="nf-list">
              <div><span>01</span><p>पर्यावरणपूरक शेतीविषयी जागरूकता वाढवणे.</p></div>
              <div><span>02</span><p>शेतकऱ्यांना ज्ञान, कौशल्य आणि अनुभव उपलब्ध करून देणे.</p></div>
              <div><span>03</span><p>शाश्वत आणि दीर्घकालीन शेती पद्धतींना प्रोत्साहन देणे.</p></div>
              <div><span>04</span><p>ग्रामीण समुदायाच्या सहभागातून सकारात्मक बदल घडवणे.</p></div>
            </div>
          </div>
        </section>

        <section className="nf-cta" id="contact">
          <div className="nf-shell">
            <span className="nf-label">06 / GET INVOLVED</span>
            <h2>Let&apos;s grow<br /><em>something better.</em></h2>
            <p>शेतकरी, स्वयंसेवक, संस्था किंवा सामाजिक भागीदार म्हणून शाश्वत शेतीच्या या प्रवासात सहभागी व्हा.</p>
            <Link href="/contact" className="nf-btn nf-btn-primary">Connect with us</Link>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .nf-page{--ink:#162016;--muted:#667064;--line:rgba(22,32,22,.13);--paper:#f5f6ef;--deep:#172319;background:var(--paper);color:var(--ink);overflow:hidden}
        .nf-shell{width:min(1240px,calc(100% - 48px));margin:auto}
        .nf-hero{min-height:min(790px,88vh);position:relative;display:flex;align-items:center;isolation:isolate;background:#172319;color:#fff}
        .nf-hero-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2}
        .nf-hero-overlay{position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(7,17,10,.92),rgba(7,17,10,.62) 42%,rgba(7,17,10,.12)),linear-gradient(0deg,rgba(7,17,10,.4),transparent 55%)}
        .nf-hero-inner{padding:100px 0 90px}
        .nf-hero-copy{width:min(760px,100%)}
        .nf-eyebrow,.nf-label{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}
        .nf-eyebrow{opacity:.78;margin-bottom:25px}
        .nf-hero h1{margin:0;font-size:clamp(58px,8vw,112px);line-height:.88;letter-spacing:-.065em;font-weight:600}
        .nf-hero h1 em,.nf-head h2 em,.nf-two h2 em,.nf-quote em,.nf-cta h2 em{font-family:Georgia,"Times New Roman",serif;font-weight:400}
        .nf-hero p{max-width:590px;margin:32px 0 0;font-size:18px;line-height:1.75;color:rgba(255,255,255,.82)}
        .nf-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:38px}
        .nf-btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 23px;border-radius:999px;text-decoration:none;font-size:13px;font-weight:700}
        .nf-btn-primary{background:#fff;color:var(--deep)} .nf-btn-ghost{color:#fff;border:1px solid rgba(255,255,255,.38)}
        .nf-intro,.nf-vision{padding:125px 0}
        .nf-two{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
        .nf-label{color:#788174;margin-bottom:22px}
        .nf-two h2,.nf-head h2{margin:0;font-size:clamp(44px,5.4vw,78px);line-height:.95;letter-spacing:-.055em;font-weight:600}
        .nf-copy{padding-top:35px;max-width:600px}.nf-copy p,.nf-head>p,.nf-cta p{margin:0 0 22px;color:var(--muted);font-size:17px;line-height:1.8}
        .nf-stats{background:var(--deep);color:#fff}.nf-stat-grid{display:grid;grid-template-columns:repeat(3,1fr)}
        .nf-stat-grid>div{padding:52px 35px;border-right:1px solid rgba(255,255,255,.14)}.nf-stat-grid>div:last-child{border:0}
        .nf-stat-grid strong{display:block;font-size:clamp(42px,5vw,66px);line-height:1;letter-spacing:-.05em}.nf-stat-grid span{display:block;margin-top:10px;color:rgba(255,255,255,.58);font-size:12px;text-transform:uppercase;letter-spacing:.14em}
        .nf-section,.nf-gallery,.nf-videos{padding:125px 0}.nf-head{display:grid;grid-template-columns:1fr 360px;gap:80px;align-items:end;margin-bottom:60px}
        .nf-head>p{margin-bottom:5px}.nf-initiative-grid{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--line)}
        .nf-card{display:grid;grid-template-columns:55px 1fr;gap:18px;padding:38px 22px 42px 0;border-bottom:1px solid var(--line)}
        .nf-card:nth-child(odd){border-right:1px solid var(--line);padding-right:50px}.nf-card:nth-child(even){padding-left:50px}
        .nf-card>span{font-size:12px;color:#879080;padding-top:5px}.nf-card h3{margin:0 0 10px;font-size:23px}.nf-card p{margin:0;color:var(--muted);line-height:1.7}
        .nf-visual{padding-bottom:125px}.nf-visual-card{height:min(680px,62vw);min-height:450px;position:relative;overflow:hidden}
        .nf-visual-card img{width:100%;height:100%;object-fit:cover;display:block}.nf-visual-card:after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(8,18,10,.72),transparent 55%)}
        .nf-caption{position:absolute;left:48px;bottom:42px;z-index:1;color:#fff}.nf-caption span{display:block;font-size:10px;letter-spacing:.2em;margin-bottom:13px;opacity:.72}.nf-caption strong{font-size:clamp(30px,4vw,52px);line-height:1;letter-spacing:-.045em}
        .nf-gallery{background:#ebece4}.nf-gallery-grid{display:grid;grid-template-columns:repeat(12,1fr);gap:14px}.nf-gallery-item{margin:0;overflow:hidden}.nf-gallery-item img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .5s ease}.nf-gallery-item:hover img{transform:scale(1.04)}
        .item-1{grid-column:span 7;height:500px}.item-2{grid-column:span 5;height:500px}.item-3,.item-4,.item-5{grid-column:span 4;height:390px}.item-6{grid-column:6/span 7;height:440px}
        .nf-videos{background:var(--deep);color:#fff}.nf-videos .nf-label{color:rgba(255,255,255,.55)}.nf-video-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.nf-video-card video{width:100%;aspect-ratio:16/10;display:block;object-fit:cover;background:#0c130d}.nf-video-card h3{margin:17px 0 0;font-size:18px}
        .nf-quote{padding:150px 0;background:#f0f1e9}.nf-quote-mark{font-family:Georgia,serif;font-size:100px;line-height:.5;color:#8d9688}.nf-quote blockquote{margin:30px 0 0;max-width:900px;font-size:clamp(45px,6vw,82px);line-height:.98;letter-spacing:-.055em;font-weight:500}
        .nf-list{padding-top:22px}.nf-list>div{display:grid;grid-template-columns:45px 1fr;gap:15px;padding:22px 0;border-top:1px solid var(--line)}.nf-list span{color:#8a9385;font-size:12px}.nf-list p{margin:0;font-size:17px;line-height:1.6}
        .nf-cta{padding:125px 0 140px;background:#dfe5d8}.nf-cta h2{margin:0 0 30px;font-size:clamp(58px,8vw,112px);line-height:.88;letter-spacing:-.065em;font-weight:600}.nf-cta p{max-width:610px}
        @media(max-width:800px){
          .nf-shell{width:min(100% - 30px,1240px)}.nf-hero{min-height:720px}.nf-hero-inner{padding:80px 0 60px}.nf-hero h1{font-size:clamp(54px,16vw,82px)}.nf-hero p{font-size:16px}
          .nf-intro,.nf-vision,.nf-section,.nf-gallery,.nf-videos,.nf-quote,.nf-cta{padding:85px 0}.nf-two,.nf-head{grid-template-columns:1fr;gap:35px}.nf-copy{padding-top:0}
          .nf-stat-grid{grid-template-columns:1fr}.nf-stat-grid>div{padding:34px 0;border-right:0;border-bottom:1px solid rgba(255,255,255,.14)}.nf-stat-grid>div:last-child{border:0}
          .nf-initiative-grid{grid-template-columns:1fr}.nf-card,.nf-card:nth-child(odd),.nf-card:nth-child(even){padding:28px 0;border-right:0}
          .nf-visual{padding-bottom:85px}.nf-visual-card{min-height:430px;height:125vw}.nf-caption{left:24px;bottom:27px}
          .nf-gallery-grid{grid-template-columns:1fr 1fr}.nf-gallery-item,.item-1,.item-2,.item-3,.item-4,.item-5,.item-6{grid-column:span 1;height:260px}.item-1{grid-column:span 2;height:360px}
          .nf-video-grid{grid-template-columns:1fr}.nf-quote blockquote{font-size:clamp(42px,12vw,68px)}
        }
      `}</style>
    </>
  );
}
